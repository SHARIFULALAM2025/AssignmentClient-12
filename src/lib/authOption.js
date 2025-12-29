import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/action/server/auth";
import CredentialsProvider from "next-auth/providers/credentials"

import { collection, dbConnect } from "./dbConnect";

export const authOptions = {

    providers: [
        CredentialsProvider({

            name: 'Credentials',

            credentials: {

            },
            async authorize(credentials, req) {
                const user = await loginUser(credentials)


                return user
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),


    ],
    callbacks: {
        async signIn({ user, account }) {
            const userCollection =  dbConnect(collection.Users)
            const isExist = await userCollection.findOne({ email: user.email, provider: account?.provider })
            const newUser = {
                provider: account?.provider,
                email: user.email,
                createAt: new Date(),
                image: user.image,
                name: user.name,
                role: "user"

            }

            if (isExist) {
                return true
            }

            if (!isExist) {
                await userCollection.insertOne(newUser)
            }
            return true
        },


    },
    secret: process.env.NEXTAUTH_SECRET
}

