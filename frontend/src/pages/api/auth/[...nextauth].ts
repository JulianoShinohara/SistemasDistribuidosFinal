import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth ({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID
    })
  ],
  callbacks: {
    async session(session) {
      return session;
    },
    async signIn(user: any, account: any, profile: any) {
      return true;
    }
  }
})