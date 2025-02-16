'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineBug } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
   const router = useRouter();
  
    const handleBack = () => {
      router.back()
    }
  
    return (
      <div className='text-primary_yellow h-[90vh] flex flex-col justify-center items-center'>
        <div className=''>
          <AiOutlineBug className='text-8xl text-red-500'/>
          <h2 className='text-4xl my-3'>Oops!</h2>
          <h2 className='font-bold'>This Page has Left the Building</h2>
  
          <button 
            onClick={handleBack}
            className='my-3 py-1 px-4 bg-gray-700 rounded-lg flex items-center text-2xl justify-start animate-bounce'
          >
            <span><IoIosArrowRoundBack /></span>
            <span className='text-sm'>Go Back</span>
          </button>
        </div>
      </div>
    )
}

export default ErrorPage