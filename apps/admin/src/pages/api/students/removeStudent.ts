import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { id } = req.body

  if(!id) res.status(501).json({})

  try {
    await prisma.informationStudent.delete({
      where: {
        rootUserId: id,
      },
    });

    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
