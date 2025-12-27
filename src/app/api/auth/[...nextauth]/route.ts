import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Resend from "next-auth/providers/resend"

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
        // You can use process.env.RESEND_API_KEY
        // but we'll use a hardcoded value for the demo.
        apiKey: process.env.RESEND_API_KEY,
        from: "onboarding@resend.dev", // Needs to be a verified domain
    })
  ],
  callbacks: {
    async session({ session, user }) {
        // Add the user ID to the session
        session.user.id = user.id;
        return session;
    },
  }
})
