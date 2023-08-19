import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {

  let groupLessons: any[] = []
  let languages: any[] = []

  try {
    if (isPaginationExists(req)) {
      let limit = parseInt(req.query.limit), page = parseInt(req.query.page)
      groupLessons = await prisma.lessonGroup.findMany({
        skip: limit * (page - 1),
        take: limit,
        include: { tutor: true }
      });
    } else {
      groupLessons = await prisma.lessonGroup.findMany({
        include: { tutor: true }
      });
    }
    languages = await prisma.configLanguages.findMany();
  } catch (e) {
    res.status(500);
  }

  groupLessons.forEach(lesson => {
    let nativeLanguage = languages.find(lang => lang.id == lesson.tutor.nativeLanguage)
    let teachingLanguage = languages.find(lang => lang.id == lesson.tutor.teachingLanguages)

    console.log({nativeLanguage, teachingLanguage})

    lesson.tutor.nativeLanguage = nativeLanguage
    lesson.tutor.teachingLanguages = [teachingLanguage]
    lesson.tutor["rating"] = 4.9
  })

  res.status(200).json({ groupLessons });
}

// TODO create utility functions file
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}