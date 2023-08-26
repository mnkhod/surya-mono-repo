import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { isApprove, requestId, scheduleId, studentId } = req.body

  let schedule: any = null
  let reschedule: any = null
  let student: any = null
  let updatedSchedule: any = null
  let updatedReschedule: any = null
  let updatedStudent: any = null
  let responses: any = null
  
  try {

    schedule = await prisma.schedulesP2P.findUniqueOrThrow({
      where: {
        id: parseInt(scheduleId)
      }
    })

    reschedule = await prisma.rescheduleRequestsP2P.findUniqueOrThrow({
      where: {
        id: parseInt(requestId)
      }
    })

    student = await prisma.informationStudent.findUniqueOrThrow({
      where: {
        id: parseInt(studentId)
      }
    })

    if (!schedule || !reschedule || !student) throw new Error("Data not found")

    if (schedule.isAvailable) throw new Error(`Schedule is already available. Data mismatch id: ${schedule.id}`)

    let remainingDemo, remainingPurchase = null
    if (!isApprove) {
      remainingDemo = student.remainingDemo
      remainingPurchase = student.remainingPurchase
    } else if (schedule.isDemo) {
      remainingDemo = student.remainingDemo + 1
      remainingPurchase = student.remainingPurchase
    } else if (schedule.isPeer) {
      remainingDemo = student.remainingDemo 
      remainingPurchase = student.remainingPurchase + 1
    }
    
    responses = await prisma.$transaction([
      prisma.schedulesP2P.update({
        where: {
          id: parseInt(scheduleId)
        },
        data: {
          isAvailable: isApprove ? true : false,
        }
      }),
      prisma.informationStudent.update({
        where: {
          id: parseInt(studentId)
        },
        data: {
          remainingDemo,
          remainingPurchase
        }
      }),
      prisma.rescheduleRequestsP2P.update({
        where: {
          id: parseInt(requestId)
        },
        data: {
          isPending: false,
          isApproved: isApprove
        }
      })
    ])

    updatedSchedule = responses[0]
    updatedStudent = responses[1]
    updatedReschedule = responses[2]

  } catch (e: any) {
    res.status(400).json({message: e.message});
  }

  res.status(200).json({updatedReschedule, updatedSchedule, updatedStudent});
}
