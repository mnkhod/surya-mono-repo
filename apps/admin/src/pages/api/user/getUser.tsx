import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { email } = req.body

  if(!email) res.status(501).json({})

  try {
    await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        informationTutor: true, 
        informationAdmin: true
      }
    });


    res.status(200).json({});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
