import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { endDate, durationByMinutes, tutorId } = req.body

  const [datePart, timePart] = endDate.split('T');
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');

  // Format the date and time for Prisma's dateTime format
  const prismaDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000+00:00`;

  
  try {
    await prisma.lessonGroup.create({
      data: {
        endDate: new Date(prismaDateTime),
        durationByMinutes: parseInt(durationByMinutes),
        tutorId: parseInt(tutorId)
      },
    })

    res.status(200).json({req: req.body});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
