import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { title, information, tutorId } = req.body

  if (!tutorId) res.status(501).json({})

  try {
    await prisma.lessonP2P.create({
      data: {
        title,
        information,
        tutorId,
      },
    })

    res.status(200).json({});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
