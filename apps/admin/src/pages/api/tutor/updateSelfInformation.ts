import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let body = req.body

  if (!body) res.status(501).json({})


  try {
    // TODO make transaction
    await prisma.informationTutor.update({
      where: {
        id: body.tutorId,
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        nativeLanguage: body.nativeLanguage,
        profileImageLink: body.profileImageLink,
        shortInfo: body.shortInfo,
        videoLink: body.videoLink,
        teachingLanguages: body.teachingLanguages,
      }
    });

    await prisma.user.update({
      where: {
        id: body.rootUserId,
      },
      data: {
        email: body.email,
      }
    });
    res.status(200).json({});
  } catch (e) {
    console.log(e)
    res.status(500).json({});
  }
}
