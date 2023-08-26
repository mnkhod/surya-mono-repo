import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { studentId, scheduleId } = req.body

  let student: any = null
  let schedule: any = null
  let updatedSchedule: any = null
  let updatedStudent: any = null
  
  try {
    student = await prisma.informationStudent.findUniqueOrThrow({
      where: {
        id: parseInt(studentId)
      }
    })

    schedule = await prisma.schedulesP2P.findUniqueOrThrow({
      where: {
        id: parseInt(scheduleId)
      }
    })

    if (!student || !schedule) throw new Error("Data not found")

    if (student.remainingDemo <= 0) throw new Error("Out of demo credits")

    if (!schedule.isAvailable) throw new Error("Schedule is not available")

    const responses = await prisma.$transaction([
      prisma.schedulesP2P.update({
        where: {
          id: parseInt(scheduleId)
        },
        data: {
          isAvailable: false,
          studentId: parseInt(studentId),
          isDemo: true,
          isPeer: false
        }
      }),
      prisma.informationStudent.update({
        where: {
          id: parseInt(studentId)
        },
        data: {
          remainingDemo: student.remainingDemo - 1
        }
      })
    ])

    updatedSchedule = responses[0]

    updatedStudent = responses[1]

  } catch (e: any) {
    res.status(400).json({message: e.message});
  }

  res.status(200).json({schedule: updatedSchedule, student: updatedStudent});
}
