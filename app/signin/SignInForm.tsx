'use client'

import { FormEvent, MouseEvent, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { RiLoader5Line } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';


const SignInForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const handleShowPassword = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handleSignIn = async (e : FormEvent) => {
    e.preventDefault();

    setIsLoading(true)

    try{
      await signInWithEmailAndPassword(email, pass);
      setEmail("")
      setPass("")
      router.back();
    }catch(err){
      setError(true)
      if(err instanceof Error){
        throw new Error(err.message)
      }
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <form onSubmit={(e) => handleSignIn(e)} className='px-1'>
      <div className='mb-5 border-b border-primary_yellow'>
        <label htmlFor="email" className='block my-2'>Email :</label>
        <input 
          id="email"  
          type="email" 
          placeholder='Example@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full py-2 text-white bg-black outline-none'
        />
      </div>

      <div className='mb-5 border-b border-primary_yellow'>
        <label htmlFor="password" className='block my-2'>Password :</label>
        <div className='flex'>
          <input 
            type={showPassword ? "text" : "password"}
            id="password"  
            placeholder='Password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className='w-full py-2 text-white bg-black  outline-none'
          />
          <button onClick={(e) => handleShowPassword(e)}>
            <FaRegEye className='text-xl text-white hover:text-primary_yellow'/>
          </button>
        </div>
      </div>

      <div className='flex items-center'>
        <button 
          disabled={
            isLoading ||
            email === "" || 
            pass === ""
          }
          className='py-2 px-4 bg-primary_yellow text-black font-kaushanScript hover:bg-yellow-700 hover:text-white'
        > 
          {isLoading ? <RiLoader5Line className='text-xl animate-spin'/> : "Sign In"}
        </button>
        {error && <p className='text-red-500 font-bold ml-3'>Error, Try Again</p>}
      </div>
    </form>
  )
}

export default SignInForm