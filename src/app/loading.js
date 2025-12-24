"use client"
import React from 'react';
import { FadeLoader } from 'react-spinners';

const loading = () => {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <FadeLoader color="green" margin={2} />
      </div>
    )
};

export default loading;