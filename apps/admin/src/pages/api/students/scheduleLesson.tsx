import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let requiredKeys = ['studentId', 'isDemo', 'isPeer', 'scheduleP2PId']
  // let { studentId, isDemo, isPeer, scheduleP2PId } = req.body
  let body = req.body

  if (!requiredKeys.every((i) => body.hasOwnProperty(i))) res.status(501).json({ message: "Request not valid" })
  if (body.isDemo == body.isPeer) res.status(501).json({ message: "Request not valid" })

  let student = await prisma.informationStudent.findUnique({
    where: {
      id: body.studentId
    }
  })

  let schedule = await prisma.schedulesP2P.findUnique({
    where: {
      id: body.scheduleP2PId
    }
  })

  console.log(student, schedule)

  if (student == null) res.status(501).json({ message: "Request not valid" })
  if (schedule == null) res.status(501).json({ message: "Request not valid" })
  if (schedule?.isAvailable == false) res.status(501).json({ message: "Schedule already settled" })

  await prisma.schedulesP2P.update({
    where: {
      id: body.scheduleP2PId
    },
    data: {
      studentId: body.studentId,
      isAvailable: false,
      isDemo: body.isDemo,
      isPeer: body.isPeer
    }
  })


  res.status(200).json({schedule, student});
}
