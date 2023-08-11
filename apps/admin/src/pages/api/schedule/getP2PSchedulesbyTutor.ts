import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  try {
    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)

      const schedules = await prisma.schedulesP2P.findMany({
        skip: limit * (page - 1),
        take: limit,
        where: {
          tutorId: req.query.tutorId
        }
      });
      res.status(200).json(schedules)
      return
    }
    const schedules = await prisma.schedulesP2P.findMany({
      where: {
        tutorId: req.query.tutorId
      },
      include: {
        tutor: true,
        student: true
      }
    });
    res.status(200).json(schedules);
  } catch (e) {
    res.status(500);
  }
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}