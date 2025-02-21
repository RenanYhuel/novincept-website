import { z } from 'zod';

const requestLogs = new Map();
const RATE_LIMIT = 5;
const timeWindow = 24 * 60 * 60 * 1000;

const bodySchema = z.object({
    timestamp: z.number().int().positive().refine(val => !isNaN(new Date(val * 1000).getTime()), { message: 'Invalid timestamp' }),
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    email: z.string().email().max(100),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const validatedBody = bodySchema.parse(body);
        const ip = event.req.headers['x-forwarded-for'] || event.req.connection.remoteAddress;
        const currentTime = Date.now();
        const ipData = requestLogs.get(ip) || { count: 0, firstRequestTime: currentTime };

        if (currentTime - ipData.firstRequestTime > timeWindow) {
            requestLogs.set(ip, { count: 1, firstRequestTime: currentTime });
        } else if (ipData.count >= RATE_LIMIT) {
            return { status: 429, body: { error: true } };
        } else {
            requestLogs.set(ip, { count: ipData.count + 1, firstRequestTime: ipData.firstRequestTime });
        }

        

        return { status: 200, body: { error: false } };
    } catch (error) {
        return { status: 400, body: { error: true } };
    }
});
