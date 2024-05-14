import ConnectDB from '@/config/database'
import User from '@/models/User'

import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        //Invoked on successful sign in
        async signIn({ profile }) {
            await ConnectDB()
            const userExists = await User.findOne({ email: profile.email })

            if (!userExists) {
                const username = profile.name.slice(0, 20)

                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture,
                    isAdmin: false
                })
            }
            return true
        },
        //Modify Session obj
        async session({ session }) {
            const user = await User.findOne({ email: session.user.email })
            session.user.id = user._id.toString()
            session.user.isAdmin = user.isAdmin
            return session
        }
    }
}