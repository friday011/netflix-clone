import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      name: "credentials",
      credentials: {
        username: {
          label: "Email address",
          type: "email",
          placeholder: "Email address"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password"
        }
      },
      authorize(credentials, req) {}
    })
  ]
});
