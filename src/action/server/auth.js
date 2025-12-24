"use server"

import { collection, dbConnect } from "@/lib/dbConnect"
import bcrypt from "bcryptjs"
export const postUser = async (payload) => {
    const { email, password, contact, number, name } = payload
    if (!email || !password) return null

    const isExist = await dbConnect(collection.Users).findOne({ email })
    if (isExist) {
        return null
    }
    const newUser = {
        provider: "credentials",
        email,
        password: await bcrypt.hash(password, 14),
        contact,
        number,
        name,
        role: "user"

    }
    const result = await dbConnect(collection.Users).insertOne(newUser)
    if (result.acknowledged) {
        return { ...result, insertedId: result.insertedId.toString() }
    }
}

export const loginUser = async (payload) => {
    const { email, password } = payload
    if (!email || !password) return null

    const user = await dbConnect(collection.Users).findOne({ email })
    if (!user) return null
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        return user
    } else {
        return null
    }
}