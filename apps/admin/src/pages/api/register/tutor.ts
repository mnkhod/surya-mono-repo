import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt" 

const prisma = new PrismaClient();

export default async function handler(req : any, res : any) {
  let { email,username,password } = req.body

  if(!email || !username || !password) res.status(501)

  const saltRounds = 10;
  const hashedPassword = await hash(password,saltRounds)

  const user = await prisma.user.create({
    data: {
      email: email,
      name: username,
      password: hashedPassword,
      isTutor: true,
      isAdmin: false,
      isStudent: false,
    },
  })

  res.status(200).json(user);
}
