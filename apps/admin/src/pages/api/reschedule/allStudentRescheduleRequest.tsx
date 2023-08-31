import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {

  let tutorId = parseInt(req.query.tutorId)
  let tutor: any = null
  let requests: any[] = []

  try {

    tutor = await prisma.informationTutor.findUniqueOrThrow({
      where: {
        id: tutorId
      }
    })

    if (!tutor) throw new Error("Tutor not found")

    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)
      requests = await prisma.rescheduleRequestsP2P.findMany({
        skip: limit * (page - 1),
        take: limit,
        where: {
          schedule: {
            tutorId: tutorId
          }
        }
      });
      return
    }
    requests = await prisma.rescheduleRequestsP2P.findMany({
      where: {
        schedule: {
          tutorId: tutorId
        }
      },
      include: {
        schedule: true
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }

  res.status(200).json(requests)
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}