import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  try {
    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)
      const admins = await prisma.informationAdmin.findMany({
        include: {
          rootUser: true,
        },
        skip: limit * (page - 1),
        take: limit
      });
      res.status(200).json(admins)
      return
    }
    const admins = await prisma.informationAdmin.findMany({
      include: {
        rootUser: true,
      },
    });
    res.status(200).json(admins);
  } catch (e) {
    res.status(500);
  }
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}