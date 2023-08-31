import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {

  let student: any = null
  let scheduledDemos: any[] = [], scheduledLessons: any[] = [], scheduledGroupLessons: any[] = []
  let languages: any[] = []

  try {
    let studentId = parseInt(req.query.studentId)

    student = await prisma.informationStudent.findUniqueOrThrow({
      where: {
        id: studentId
      }
    })

    languages = await prisma.configLanguages.findMany()

    scheduledDemos = await prisma.schedulesP2P.findMany({
      where: {
        studentId: studentId,
        isDemo: true
      },
      include: {
        tutor: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            nativeLanguage: true
          }
        }
      }
    })

    scheduledLessons = await prisma.schedulesP2P.findMany({
      where: {
        studentId: studentId,
        isPeer: true,
      },
      include: {
        tutor: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            nativeLanguage: true
          }
        }
      }
    })

    scheduledGroupLessons = await prisma.schedulesGroup.findMany({
      where: {
        studentId: studentId,
      },
      include: {
        lesson: {
          select: {
            tutor: {
              select: {
                id: true, 
                firstName: true,
                lastName: true,
                teachingLanguages: true
              }
            },
            durationByMinutes: true,
            tutorId: true
          },
        }
      }
    })

    if (!student) throw new Error("Student not found")

  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }

  res.status(200).json({student, scheduledDemos, scheduledLessons, scheduledGroupLessons, languages});
}