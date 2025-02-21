import prisma from "~/lib/prisma";

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
            status: 'accepted'
        }
    })


    return { status: 200, body: { error: false } };
});
