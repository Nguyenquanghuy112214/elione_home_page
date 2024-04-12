import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { JWT } from "next-auth/jwt";

type SessionProps = {
  session: any;
  token: JWT;
  user: any;
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: "641ff8a036c9f44bfaa1ac309cb3deeb",
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  trustHost: true,
  callbacks: {
    async signIn({ user, account }) {

      // Allow OAuth without email verification

      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id as any);

      // Prevent sign in without email verification
      if (!existingUser) {
        return false;
      }

      return true;
    },
    async session({ session, token, user }: SessionProps) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  ...authConfig,
});
