import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    const id: any = getQuery(event).id

    if (!id) {
        return { status: 400, body: {
            error: 'Invalid request'
        }}
    }

    const meeting = await prisma.meeting.findUnique({
        where: {
            id: id
        }
    })
    
    if (!meeting) {
        return { status: 404, body: {
            error: 'Meeting not found'
        }}
    }

    return { status: 200, body: {
        meeting: meeting
    }}
})