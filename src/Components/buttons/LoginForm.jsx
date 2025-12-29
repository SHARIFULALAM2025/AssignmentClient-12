'use client'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
const LoginForm = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const handelLogin = async (data) => {
    const { email, password } = data
    console.log(data)
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    if (!result.ok) {
      Swal.fire('error', 'email password not match', 'error')
    } else {
      Swal.fire('success', 'welcome user', 'success')
      router.push('/')
    }
  }
  const handelGoogle = async () => {
    const result = await signIn('google', {


      callbackUrl:"/"
    })
    console.log(result)

  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <Image
          src="https://i.ibb.co.com/spCdnY8H/muhammad-noor-ridho-PSu-Fzu-Bs-KMU-unsplash.jpg"
          alt="banner image"
          width={500}
          height={400}
        ></Image>
      </div>
      <div className="flex-1">
        <h1 className=" font-bold md:mb-5 md:text-2xl">Please Login </h1>

        <form onSubmit={handleSubmit(handelLogin)} className="space-y-3">
          <div className="">
            <label className="font-semibold md:font-bold">Email:</label>
            <br></br>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Type your email"
              className="input border-blue-600 w-full md:w-1/2"
            />
          </div>
          <div>
            <label className="font-semibold md:font-bold">Password:</label>
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
              className="btn btn-outline text-white bg-blue-600 w-full md:w-1/2"
            >
              Login
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
            <Link href={'/register'}>
              Do not have an account ?
              <span className="text-red-500 font-bold underline-offset-4 underline">
                {' '}
                sign up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
