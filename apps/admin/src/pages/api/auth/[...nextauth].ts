import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if(!credentials || !credentials.password || !credentials.email) return null

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          },
        })

        if (!user) return null as any

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )

        if(!isPasswordValid) return null as any

        return user as any
      }
    })
  ],
  pages: {
    signIn: "/auth/signIn",
    signOut: "/auth/signOut",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
};

export default NextAuth(authOptions);

