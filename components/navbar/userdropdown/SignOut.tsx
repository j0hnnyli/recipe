'use client'

import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { CiLogout } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try{
      await signOut(auth)
      router.refresh();
    }catch(err){
      if(err instanceof Error){
        throw new Error(err.message)
      }
    }
  }

  return (
    <DropdownMenuItem 
      onClick={handleSignOut}
      className="flex items-center justify-between cursor-pointer"
    >
      <CiLogout className="text-3xl"/>
      <p>Sign Out</p>
    </DropdownMenuItem>
  )
}

export default SignOut