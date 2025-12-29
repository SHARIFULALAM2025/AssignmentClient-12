"use client"
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
      <div>
        <div className="text-center space-y-5">
          <h1 className="md:text-4xl font-bold"> Page Not Found</h1>
          <h1 className="md:text-4xl font-bold">Go Back </h1>

          <div className="">
            <Link href={'/'} className="px-5 py-2 bg-primary rounded">
              Home
            </Link>
          </div>
        </div>
      </div>
    )
};

export default NotFound;