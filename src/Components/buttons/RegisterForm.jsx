'use client'
import { postUser } from '@/action/server/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const handelRegister = async (data) => {
    const { email, password, contact, number, name } = data
    const result = await postUser({email, password, contact, number, name})
    if (result.acknowledged) {
      router.push('/login')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handelRegister)}>
        <div className="">
          <label htmlFor="">Nid:</label>
          <br></br>
          <input
            {...register('number', { required: true })}
            type="number"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div className="">
          <label htmlFor="">Name:</label>
          <br></br>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div className="">
          <label htmlFor="">contact:</label>
          <br></br>
          <input
            {...register('contact', { required: true })}
            type="number"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div className="">
          <label htmlFor="">email:</label>
          <br></br>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="">password:</label>
          <br></br>
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-outline">
            register
          </button>
        </div>
        <div className="">
          <Link href={'/login'}>
            already have an account
            <span className="text-red-500 font-bold"> login </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
