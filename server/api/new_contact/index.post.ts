import { z } from 'zod';
import prisma from '~/lib/prisma';
import { sendAskMeetingMail } from '~/server/utils/sendAskMeetingMail';
import { sendContactMail } from '~/server/utils/sendContactMail';

const requestLogs = new Map();
const RATE_LIMIT = 5;
const timeWindow = 24 * 60 * 60 * 1000;

const bodySchema = z.object({
    firstname: z.string().min(1).max(50),
    lastname: z.string().min(1).max(50),
    email: z.string().email().max(100),
    company: z.string().max(100),
    message: z.string().max(500),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let validatedBody: { firstname: string; lastname: string; email: string; company: string; message: string; };

    console.log(body);

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


    sendContactMail(validatedBody.email, validatedBody.firstname, validatedBody.lastname, validatedBody.company, validatedBody.message);

    return { status: 200, body: { error: false } };
});
