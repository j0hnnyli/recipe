'use server'

import { admin } from "@/lib/firebase/firestoreAdmin";

export async function verifyEmailBeforeReset(email : string){

  try{
    const user = await admin.auth().getUserByEmail(email)
    console.log(user)
    return { exist : true }
  }catch{
    throw new Error('No User Found!')
  }
}