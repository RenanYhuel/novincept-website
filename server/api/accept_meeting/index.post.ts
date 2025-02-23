import prisma from "~/lib/prisma";
import dotenv from 'dotenv';
dotenv.config();

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const id = query.id as string;

    if (!id) {
        return { status: 400, body: { error: "Invalid request" } };
    }

    try {
        const meeting: any = await prisma.meeting.findUnique({ where: { id } });

        if (!meeting) {
            return { status: 404, body: { error: "Meeting not found" } };
        }

        const { firstname, lastname, email, scheduledAt, message } = meeting;
        const password = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
        console.log("Password: " + password);
        const formatDate = (date: Date) => {
            return date.toISOString().replace("T", " ").split(".")[0];
        };
        const startingAtFormatted = formatDate(new Date(new Date(scheduledAt).getTime() + 60 * 60 * 1000));
        const endingAtFormatted = formatDate(new Date(new Date(scheduledAt).getTime() + 2*(60 * 60 * 1000)));

        console.log("Starting at: " + startingAtFormatted);
        console.log("Ending at: " + endingAtFormatted);

        const requestBody = {
            calendar_id: 1493163,
            starting_at: startingAtFormatted,
            ending_at: endingAtFormatted,
            timezone: "Europe/Paris",
            hostname: "kmeet.novincept.com",
            title: `Réunion Client - Novincept - ${firstname} ${lastname}`,
            description: `Réunion Client - Novincept - ${firstname} ${lastname} - ${email} - ${scheduledAt} - ${message}`,
            attendees: [
                { address: "no-reply@novincept.com", organizer: true, name: "Bot - Novincept", state: "DECLINED" },
                { address: email, organizer: false, name: `${firstname} ${lastname}`, state: "ACCEPTED" },
            ],
            options: {
                subject: `Réunion Client - Novincept - ${firstname} ${lastname}`,
                start_audio_muted: false,
                enable_recording: false,
                enable_moderator_video: false,
                start_audio_only: false,
                lobby_enabled: true,
                password_enabled: true,
                password,
                e2ee_enabled: true
            },
        };

        console.log("API KEY : " + process.env.INFOMANIAK_API_KEY);

        const response = await fetch("https://api.infomaniak.com/1/kmeet/rooms", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.INFOMANIAK_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error("API request error:", errorBody);
            return { status: 500, body: { error: "Meeting creation failed" } };
        }

        const responseBody = await response.json();
        const { hostname, name, code } = responseBody.data;

        await prisma.meeting.update({
            where: { id },
            data: {
                status: "accepted",
                link: `${hostname}/${name}`,
                uuid: name,
                code,
                password: password,
            },
        },
        );

        sendAcceptMeetingMail(email, firstname, lastname, meeting.scheduledAt, id, `${hostname}/${name}`, code, password);

        return { status: 200, body: { error: false } };
    } catch (error) {
        console.error("Database error:", error);
        return { status: 500, body: { error: "Database error" } };
    }
});
