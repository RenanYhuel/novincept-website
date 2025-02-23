import prisma from "~/lib/prisma";
import { sendRefuseMeetingMail } from "~/server/utils/sendDeclineMail";

export default defineEventHandler(async (event) => {
    const id: any = getQuery(event).id

    if (!id) {
        return { status: 400, body: {
            error: 'Invalid request'
        }}
    }

    await prisma.meeting.update({
        where: {
            id: id
        },
        data: {
            status: 'declined'
        }
    })

    const meeting: any = await prisma.meeting.findUnique({
        where: {
            id: id
        }
    });

    sendRefuseMeetingMail(meeting.email, meeting.firstname, meeting.lastname, Number(meeting.scheduledAt));


    return { status: 200, body: { error: false } };
});
