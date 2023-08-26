import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let studentId = parseInt(req.query.studentId)
  let tutorId = parseInt(req.query.tutorId)
  let scheduleId = parseInt(req.query.scheduleId)
  let isGroup = req.query.isGroup

  let tutor: any = null
  let student: any = null
  let schedule: any = null
  let upcomingSchedules: any[] = []

  try {

    student = await prisma.informationStudent.findUniqueOrThrow({
      where: {
        id: studentId
      }
    })

    tutor = await prisma.informationTutor.findUniqueOrThrow({
      where: {
        id: tutorId
      }
    })

    if (isGroup == "true") {
      upcomingSchedules = await prisma.schedulesGroup.findMany({
        where: {
          studentId,
        }
      })
      schedule = await prisma.schedulesGroup.findUniqueOrThrow({
        where: {
          id: scheduleId
        }
      })
    } else {
      upcomingSchedules = await prisma.schedulesP2P.findMany({
        where: {
          studentId,
          tutorId,
          attendanceState: null
        }
      })
      schedule = await prisma.schedulesP2P.findUniqueOrThrow({
        where: {
          id: scheduleId
        }
      })
    }

  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }

  //TODO handle rating and view count
  tutor["ratingScore"] = 4.9
  tutor["viewCount"] = 350
  tutor["isUserLiked"] = true

  // TODO handle comments
  const comments = [{
    id: 1,
    lastname: "Jefferson",
    firstname: "Lilly",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Teacher"
  }, {
    id: 2,
    lastname: "Baasan",
    firstname: "Dulamsuren",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Student"
  }, {
    id: 3,
    lastname: "Bold",
    firstname: "Niciton",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Student"
  }, {
    id: 4,
    lastname: "Jefferson",
    firstname: "Lilly",
    createdAt: new Date(),
    comment: "Хичээл сайхан болж байна",
    likesCount: 125,
    commentorRole: "Teacher"
  }]

  // TODO handle files
  const materials = [{
    id: 1,
    lastname: "Jefferson",
    link: "",
    createdDate: ""
  },]

  let formattedSchedules = upcomingSchedules.map(sch => {
    return { id: sch.id, datetime: sch.meetingDate }
  })

  res.status(200).json({
    student,
    tutor,
    comments,
    materials,
    data: {
      lessonStarted: "",
      lessonEndsIn: "",
    },
    schedule,
    upcomingSchedules: formattedSchedules
  });
}