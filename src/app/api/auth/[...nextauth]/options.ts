import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const clientId = process.env.GITHUB_ID 
const clientSecret = process.env.GITHUB_SECRET 

if (!clientId || !clientSecret) {
  throw new Error('Missing client id or client secret')
}

export const AuthOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
}