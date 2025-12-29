'use client'
import { postUser } from '@/action/server/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

import React from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

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
  const handelGoogle = async () => {
      const result = await signIn('google', {
        callbackUrl:"/"
      })

    }
  return (
    <div className="md:flex justify-between items-center">
      <div className="flex-1">
        <Image
          src="https://i.ibb.co.com/spCdnY8H/muhammad-noor-ridho-PSu-Fzu-Bs-KMU-unsplash.jpg"
          alt="banner image"
          width={500}
          height={400}
        ></Image>
      </div>
      <div className="flex-1 ">
        <h1 className=" font-bold md:mb-2 md:text-2xl">
          Please Create An Account{' '}
        </h1>
        <form onSubmit={handleSubmit(handelRegister)} className="space-y-3">
          <div className="">
            <label className="font-semibold md:font-bold">
              National Id Number:
            </label>
            <br></br>
            <input
              {...register('number', { required: true })}
              type="number"
              placeholder="Type your nid no.."
              className="input border-blue-600 "
            />
          </div>
          <div className="">
            <label className="font-semibold md:font-bold">Name:</label>
            <br></br>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Type your name"
              className="input border-blue-600 w-full md:w-1/2"
            />
          </div>
          <div className="">
            <label className="font-semibold md:font-bold">Contact:</label>
            <br></br>
            <input
              {...register('contact', { required: true })}
              type="number"
              placeholder="Type your contact number"
              className="input border-blue-600 w-full md:w-1/2"
            />
          </div>
          <div className="">
            <label className="font-semibold md:font-bold">email:</label>
            <br></br>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Type your email"
              className="input border-blue-600 w-full md:w-1/2"
            />
          </div>
          <div>
            <label className="font-semibold md:font-bold">password:</label>
            <br></br>
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Type your password"
              className="input border-blue-600 w-full md:w-1/2"
            />
          </div>
          <div className="space-y-2">
            <button
              type="submit"
              className="btn btn-outline bg-blue-600 text-white w-full md:w-1/2"
            >
              register
            </button>
            <br></br>
            <button
              onClick={handelGoogle}
              className="btn btn-outline bg-black text-white w-full md:w-1/2"
            >
              <FcGoogle></FcGoogle>
              Continue with google
            </button>
          </div>
          <div className="">
            <Link href={'/login'}>
              Already have an account ?
              <span className="text-red-500 font-semibold underline underline-offset-4 ">
                {' '}
                Log In{' '}
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
