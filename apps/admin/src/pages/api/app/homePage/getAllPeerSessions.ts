import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {

  let tutors: any[] = []
  let languages: any[] = []
  let featuredTutor: any = null

  try {
    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)
      tutors = await prisma.informationTutor.findMany({
        skip: limit * (page - 1),
        take: limit,
        // where: {
        //   isApproved: true
        // }
      });
    } else {
      tutors = await prisma.informationTutor.findMany({
        // where: {
        //   isApproved: true
        // }
      });
    }
    languages = await prisma.configLanguages.findMany();
    featuredTutor = await prisma.informationTutor.findFirst()
  } catch (e) {
    res.status(500);
  }

  tutors.forEach(tutor => {
    let nativeLanguage = languages.find(lang => lang.id == tutor.nativeLanguage)
    let teachingLanguage = languages.find(lang => lang.id == tutor.teachingLanguages)

    tutor.nativeLanguage = nativeLanguage
    tutor.teachingLanguages = [teachingLanguage]
    tutor["rating"] = 4.9
  })
  
  res.status(200).json({tutors, featuredTutor: tutors[0]});
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}