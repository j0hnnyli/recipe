'use client'

import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { RiLoader5Line } from "react-icons/ri";
import HoverTip from "../HoverTip";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/config";
import UserDropDown from "./userdropdown/UserDropDown";

const SignInButton = () => {
  const [ user, loading ] = useAuthState(auth);

  if(loading){
    return <RiLoader5Line className="text-2xl text-primary_yellow animate-spin ml-5"/>
  }

  return (
    <>
      { 
        user ? (
          <UserDropDown />
        ) :
        (
          <Link href='/signin'>
            <HoverTip tip='Sign In' time={100}>
              <IoPerson className="text-2xl ml-5 hover:text-primary_yellow cursor-pointer"/>
            </HoverTip>
          </Link>
       )
      }
    </>
  )
}

export default SignInButton