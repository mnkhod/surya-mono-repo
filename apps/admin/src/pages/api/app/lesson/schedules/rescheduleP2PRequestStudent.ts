import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { studentId, scheduleId, reasonText, explanationText } = req.body

  let student: any = null
  let schedule: any = null
  let rescheduleRequest: any = null
  
  try {
    student = await prisma.informationStudent.findUniqueOrThrow({
      where: {
        id: parseInt(studentId)
      }
    })

    schedule = await prisma.schedulesP2P.findUniqueOrThrow({
      where: {
        id: parseInt(scheduleId)
      },
      include: {
        student: true,
      }
    })

    if (!student) throw new Error("Student not found")
    if (!schedule) throw new Error("Schedule not found")
    if (schedule.studentId != studentId) throw new Error("Data mismatch")
    
    rescheduleRequest = await prisma.rescheduleRequestsP2P.create({
      data: {
        reasonText,
        explanationText,
        scheduleId: schedule.id,
        isPending: true,
        isTeacherRequest: false,
        isStudentRequest: true
      }
    })
    
  } catch (e: any) {
    res.status(400).json({message: e.message});
  }

  res.status(200).json({rescheduleRequest});
}
