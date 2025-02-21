import { z } from 'zod';
import prisma from '~/lib/prisma';
import { sendAskMeetingMail } from '~/server/utils/sendAskMeetingMail';

const requestLogs = new Map();
const RATE_LIMIT = 5;
const timeWindow = 24 * 60 * 60 * 1000;

const bodySchema = z.object({
    timestamp: z.number().int().positive().refine(val => !isNaN(new Date(val * 1000).getTime()), { message: 'Invalid timestamp' }),
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    email: z.string().email().max(100),
    message: z.string().max(500).optional(),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let validatedBody;

    try {
        validatedBody = bodySchema.parse(body);
    } catch (error) {
        return { status: 400, body: { error: 'Invalid request body' } };
    }

    const ip = event.req.headers['x-forwarded-for'] || event.req.connection.remoteAddress;
    const currentTime = Date.now();
    const ipData = requestLogs.get(ip) || { count: 0, firstRequestTime: currentTime };

    try {
        if (currentTime - ipData.firstRequestTime > timeWindow) {
            requestLogs.set(ip, { count: 1, firstRequestTime: currentTime });
        } else if (ipData.count >= RATE_LIMIT) {
            return { status: 429, body: { error: true } };
        } else {
            requestLogs.set(ip, { count: ipData.count + 1, firstRequestTime: ipData.firstRequestTime });
        }
    } catch (error) {
        return { status: 500, body: { error: 'Rate limit error' } };
    }

    let id;

    try {
        const meeting = await prisma.meeting.create({
            data: {
                scheduledAt: new Date(validatedBody.timestamp * 1000),
                firstname: validatedBody.firstName,
                lastname: validatedBody.lastName,
                email: validatedBody.email,
                isSended: true,
            },
        });

        id = meeting.id;

    } catch (error) {
        console.error('Database error:', error);
        return { status: 500, body: { error: 'Database error' } };
    }

    try {
        await sendAskMeetingMail(validatedBody.email, validatedBody.firstName, validatedBody.lastName, validatedBody.timestamp, validatedBody.message || '', id);
    } catch (error) {
        return { status: 500, body: { error: 'Email sending error' } };
    }

    

    return { status: 200, body: { error: false } };
});
