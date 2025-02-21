'use client'

import { MouseEvent, useState } from 'react'
import { FaRegEye } from "react-icons/fa";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassowrd] = useState<boolean>(false);

  const handleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }
  const handleShowConfirmPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowConfirmPassowrd(!showConfirmPassword)
  }

  return (
    <form action="" className='px-1'>
      <div className='mb-5'>
        <label htmlFor="email" className='block my-2'>Email :</label>
        <input 
          id="email"  
          type="email" 
          placeholder='Example@gmail.com'
          className='w-full py-2 text-white bg-black border-b border-primary_yellow outline-none'
        />
      </div>

      <div className='mb-5 border-b border-primary_yellow'>
        <label htmlFor="password" className='block my-2'>Password :</label>
        <div className='flex'>
          <input 
            type={showPassword ? "text" : "password" }
            id="password"  
            placeholder='Password'
            className='w-full py-2 text-white bg-black  outline-none'
          />
          <button onClick={(e) => handleShowPassword(e)}>
            <FaRegEye className='text-xl text-white hover:text-primary_yellow'/>
          </button>
        </div>
      </div>

      <div className='mb-5 border-b border-primary_yellow'>
        <label htmlFor="confirm" className='block my-2'> Confirm Password :</label>
        <div className="flex">
          <input 
            type={showConfirmPassword ? "text" : "password" }
            id="confirm"  
            placeholder='Confirm Password'
            className='w-full py-2 text-white bg-black outline-none'
          />
          <button onClick={(e) => handleShowConfirmPassword(e)}>
            <FaRegEye className='text-xl text-white hover:text-primary_yellow'/>
          </button>
        </div>
      </div>

      <button className='py-2 px-4 bg-primary_yellow text-black font-kaushanScript hover:bg-yellow-700 hover:text-white'>
       Register
      </button>
    </form>
  )
}

export default RegisterForm