import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {

  let availableSchedules: any[] = []

  try {
    let { tutorId, studentId } = req.query

    availableSchedules = await prisma.schedulesP2P.findMany({
      where: {
        tutorId: parseInt(tutorId),
        isAvailable: true,
      },
      orderBy: {
        meetingDate: 'asc'
      }
    })

  } catch (e) {
    res.status(400).json(e);
  }

  const formattedSchedules = availableSchedules.map((schedule) => {
    const dateObj = new Date(schedule.meetingDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`;
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return {
      id: schedule.id,
      date,
      time,
      durationByMinutes: schedule.durationByMinutes
    }
  })

  res.status(200).json({formattedSchedules});
}

// TODO create utility functions file 
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}
