import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {

  let tutor: any = null
  let student: any = null
  let languages: any[] = []
  let availableSchedules: any[] = []

  try {
    let { tutorId, studentId } = req.query
    tutor = await prisma.informationTutor.findFirstOrThrow({
      where: {
        id: parseInt(tutorId)
      }
    });
    student = await prisma.informationStudent.findFirstOrThrow({
      where: {
        id: parseInt(studentId)
      }
    });

    if (!tutor || !student) {
      throw new Error("No result found.");
    }

    availableSchedules = await prisma.schedulesP2P.findMany({
      where: {
        isAvailable: true,
        tutorId: parseInt(tutorId)
      },
      orderBy: {
        meetingDate: 'asc'
      }
    })

    languages = await prisma.configLanguages.findMany();
  } catch (e) {
    res.status(400).json(e);
  }

  let tutorNativeLanguage = languages.find(lang => lang.id == tutor.nativeLanguage)
  let tutorTeachingLanguage = languages.find(lang => lang.id == tutor.teachingLanguages)

  tutor.nativeLanguage = tutorNativeLanguage
  tutor.teachingLanguages = [tutorTeachingLanguage]

  // TODO handle view count
  tutor["viewCount"] = 4104

  tutor["isLovedByStudent"] = true
  
  // TODO handle rating
  tutor["rating"] = {
    totalRates: 90,
    ratingScore: 4.9,
    skillRating: 86
  }

  let studentNativeLanguage = languages.find(lang => lang.id == student.nativeLanguage)
  let studentLearningLanguage = languages.find(lang => lang.id == student.learningLanguages)

  student.nativeLanguage = studentNativeLanguage
  student.learningLanguages = [studentLearningLanguage]

  //find available weekdays in the future
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const uniqueWeekdays: string[] = [];

  availableSchedules.forEach(schedule => {
    const date = new Date(schedule.meetingDate);
    const weekday = weekdays[date.getDay()];

    // Check if the weekday is not already in the uniqueWeekdays array before adding it.
    if (!uniqueWeekdays.includes(weekday)) {
      uniqueWeekdays.push(weekday);
    }
  });

  // TODO handle comments
  const comments = [{
    id: 1,
    lastname: "Jefferson",
    firstname: "Lilly",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Teacher"
  },{
    id: 2,
    lastname: "Baasan",
    firstname: "Dulamsuren",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Student"
  },{
    id: 3,
    lastname: "Bold",
    firstname: "Niciton",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Student"
  },{
    id: 4,
    lastname: "Jefferson",
    firstname: "Lilly",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Teacher"
  }]


  res.status(200).json({ tutor, student, teacherWeekdays: uniqueWeekdays, comments });
}

// TODO create utility functions file 
function isPaginationExists(req: any): boolean {
  return req.query.limit && req.query.page ? true : false
}
