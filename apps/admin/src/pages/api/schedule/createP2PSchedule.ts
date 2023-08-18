import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { meetingDate, durationByMinutes, isPeer, isDemo, isAvailable, tutorId } = req.body

  const [datePart, timePart] = meetingDate.split('T');
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');

  // Format the date and time for Prisma's dateTime format
  const prismaDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000+00:00`;

  try {
    await prisma.schedulesP2P.create({
      data: {
        isAvailable,
        isDemo,
        isPeer,
        meetingDate: new Date(prismaDateTime),
        durationByMinutes: parseInt(durationByMinutes),
        tutorId
      },
    })

    res.status(200).json({});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
