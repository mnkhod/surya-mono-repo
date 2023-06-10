import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  try {
    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)
      const tutors = await prisma.informationTutor.findMany({
        include: {
          rootUser: true,
        },
        skip: limit * (page - 1),
        take: limit
      });
      console.log(tutors)
      res.status(200).json(tutors)
      return
    }
    const tutors = await prisma.informationStudent.findMany({
      include: {
        rootUser: true,
      },
    });
    res.status(200).json(tutors);
  } catch (e) {
    res.status(500);
  }
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}