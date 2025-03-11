import { NextAuthOptions } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
