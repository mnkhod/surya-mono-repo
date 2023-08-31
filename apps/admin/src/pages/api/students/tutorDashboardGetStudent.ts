import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  let { studentId, tutorId } = req.query

  let student: any = null
  let tutor: any = null
  // TODO add attendance record handlers
  let studentAttendances: any[] = []
  let rescheduleRequests: any[] = []
  let languageLevels: any[] = []
  let configLanguages: any[] = []

  try {

    tutor = await prisma.informationTutor.findUniqueOrThrow({
      where: {
        id: parseInt(tutorId)
      }
    })

    if (!tutor) throw new Error("Tutor not found")

    student = await prisma.informationStudent.findUniqueOrThrow({
      where: {
        id: parseInt(studentId),
      }, 
      include: {
        p2pSchedules: {
          where: {
            tutorId: parseInt(tutorId)
          }
        },
        groupSchedules: {
          include: {
            lesson: true
          },
          where: {
            lesson: {
              tutorId: parseInt(tutorId)
            }
          }
        }
      }
    })

    if (!student) throw new Error("Student not found")
 
    rescheduleRequests = await prisma.rescheduleRequestsP2P.findMany({
      where: {
        schedule: {
          studentId: parseInt(studentId),
          tutorId: parseInt(tutorId)
        }
      }
    })

    languageLevels = await prisma.studentLanguageLevel.findMany({
      where: {
        studentId: parseInt(studentId)
      }
    })

    configLanguages = await prisma.configLanguages.findMany()

  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }

  let nestedLanguages: any[] = languageLevels.map(level => {

    const language = configLanguages.find(lang => lang.id == level.languageId)
    
    return {
      ...level,
      languageName: language.name,
      languageFlag: language.flagSVGLink,
    }
  })

  res.status(200).json({ student, rescheduleRequests, languageLevels: nestedLanguages, studentAttendances });
}
