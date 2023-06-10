import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const SEEDCOUNT = 40
const prisma = new PrismaClient()

async function main() {

  // let languageIds:number[] = await configLanguagesSeed().then((data) => data)

  tutorSeed([1,2,3]) 
  
  adminSeed()

  studentSeed([1,2,3])
  

}

async function studentSeed(languageIds: number[]) {

  for (let i = 0; i < SEEDCOUNT; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: "$2b$10$OL32ytK16ETf7H/Sixea0umdCy.VwJ2jnJXI20pxvkeoK63sWzyPW",
        isAdmin: false,
        isTutor: false,
        isStudent: true,
        name: faker.person.fullName(),
        informationStudent: {
          create: {
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            profileImageLink: faker.internet.url(),
            nativeLanguage: languageIds[0],
            learningLanguages: languageIds[1],
            remainingPurchase: 0
          }
        },
      }
    })
  }
}


async function adminSeed() {
  await prisma.user.create({
    data: {
      email: "admin@admin.com",
      password: "$2b$10$OL32ytK16ETf7H/Sixea0umdCy.VwJ2jnJXI20pxvkeoK63sWzyPW",
      isAdmin: true,
      isTutor: false,
      isStudent: false,
      name: faker.person.fullName(),
      informationAdmin: {
        create: {
          lastName: faker.person.lastName(),
          firstName: faker.person.firstName(),
        }
      },
    }
  })
}


async function configLanguagesSeed(): Promise<number[]>{

  let ids:number[] = []

  // do not decrease array limit
  for (let i = 0; i < 3; i++) {
    await prisma.configLanguages.create({
      data: {
        id: i,
        name: faker.location.country(),
        flagSVGLink: faker.internet.url()
      }
    })
    ids.push(i)
  }

  return ids
}

async function tutorSeed(languageIds: number[]) {

  for (let i = 0; i < SEEDCOUNT; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: "$2b$10$OL32ytK16ETf7H/Sixea0umdCy.VwJ2jnJXI20pxvkeoK63sWzyPW",
        isAdmin: false,
        isTutor: true,
        isStudent: false,
        name: faker.person.fullName(),
        informationTutor: {
          create: {
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            shortInfo: faker.person.bio(),
            videoLink: faker.internet.url(),
            profileImageLink: faker.internet.url(),
            nativeLanguage: languageIds[0],
            teachingLanguages: languageIds[1]
          }
        },
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
