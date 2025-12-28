
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Resend from "next-auth/providers/resend";
import MagicLinkEmail from "@/components/emails/magic-link";
import { render } from "@react-email/render";
import * as React from "react";

const prisma = new PrismaClient();

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: "onboarding@resend.dev",
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const { host } = new URL(url);
        const html = render(
          React.createElement(MagicLinkEmail, { url: url })
        );
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: provider.from,
            to: identifier,
            subject: `Log in to ${host}`,
            html: html,
          }),
        });
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
