'use server'

import { cookies } from 'next/headers'

export async function clearCookieSession(){
  const cookie = await cookies()
  cookie.delete('session')
}