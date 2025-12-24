'use client'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
const LoginForm = () => {
    const router=useRouter()
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
        Swal.fire("error","email password not match","error")
      } else {
          Swal.fire('success', 'welcome user', 'success')
          router.push("/")
      }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handelLogin)}>
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
            Login
          </button>
        </div>
        <div className="">
          <Link href={'/register'}>
            do not have an account
            <span className="text-red-500 font-bold"> sign up</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
