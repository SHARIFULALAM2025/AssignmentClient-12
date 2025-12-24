import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href={'/'} className="flex items-center gap-1">
        <Image
          alt="Care-xyz"
          src={'/assets/images.png'}
          width={50}
          height={40}
        ></Image>
        <h1 className="font-bold">
          <span className='text-primary '>Care</span>.xyz
        </h1>
      </Link>
    </div>
  )
}

export default Logo
