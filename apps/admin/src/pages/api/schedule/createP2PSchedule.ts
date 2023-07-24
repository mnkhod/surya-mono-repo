import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { meetingDate, durationByMinutes, isPeer, isDemo, isAvailable, lessonId } = req.body

  const [datePart, timePart] = meetingDate.split('T');
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');

  // Format the date and time for Prisma's dateTime format
  const prismaDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000+00:00`;

  if (!lessonId) res.status(501).json({})

  const lesson = await prisma.lessonP2P.findUnique({
    where: {
      id: parseInt(lessonId)
    }
  })

  if (!lesson) {
    res.status(204).json({});
    return
  }

  try {
    await prisma.schedulesP2P.create({
      data: {
        isAvailable,
        isDemo,
        isPeer,
        meetingDate: new Date(prismaDateTime),
        durationByMinutes: parseInt(durationByMinutes),
        lessonId: lesson.id
      },
    })

    res.status(200).json({});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
