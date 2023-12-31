import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  try {
    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)
      const languages = await prisma.configLanguages.findMany({
        skip: limit * (page - 1),
        take: limit
      });
      res.status(200).json(languages)
      return
    }
    const languages = await prisma.configLanguages.findMany();
    res.status(200).json(languages);
  } catch (e) {
    res.status(500);
  }
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}