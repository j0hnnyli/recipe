'use server'

import { admin } from "@/lib/firebase/firestoreAdmin";

export async function verifyEmailBeforeReset(email : string){
  const user = await admin.auth().getUserByEmail(email)
  
  return user ? { exist : true } : { exist : false };
}