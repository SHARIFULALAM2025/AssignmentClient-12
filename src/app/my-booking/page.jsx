import { myBooking } from '@/action/server/service'
import MyBooking from '@/Components/MyBooking/MyBooking'
import { authOptions } from '@/lib/authOption'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import React from 'react'

const myBook = async() => {

  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }

  const ServiceBook = await myBooking(session.user?.email)

  return (
    <div className="">
      <MyBooking ServiceBook={ServiceBook}></MyBooking>
    </div>
  )
}

export default myBook
