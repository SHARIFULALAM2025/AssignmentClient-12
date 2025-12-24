"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButton = () => {
    const session=useSession()
    return (
      <div>
        {session.status == 'authenticated' ? (
          <>
            <button
              onClick={() => signOut()}
              className="btn btn-outline bg-green-400"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link href={'/login'} className="btn btn-outline bg-green-400">
              Login
            </Link>
          </>
        )}
      </div>
    )
};

export default AuthButton;