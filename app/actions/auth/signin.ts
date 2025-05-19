'use server'

import { admin } from '@/lib/firebase/firestoreAdmin'
import { cookies } from 'next/headers'

export async function createSessionCookie(token : string){
  const cookie = await cookies();
  const expiresIn = 60 * 60 * 24 * 1000;
  const sessionCookie = await admin.auth().createSessionCookie(token, { expiresIn })
  
  cookie.set('session', sessionCookie, {
    httpOnly: true,
    path: '/',
    maxAge: expiresIn / 1000,
  });
}