import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth ({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.JWT_SECRET,

  callbacks: {
    async session(session) {
      return session;
    },
    async signIn(user: any, account: any, profile: any) {
      return true;
    }
  }
})