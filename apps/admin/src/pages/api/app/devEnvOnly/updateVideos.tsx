import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  try {
    const tutors = await prisma.informationTutor.findMany();
    let ids = tutors.map(t => {
      return t.id
    })
    
    res.status(200).json(tutors);
  } catch (e) {
    res.status(500);
  }
}