import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('session');

  if(!cookie){
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  return NextResponse.next();
}
 
export const config = {
  matcher: ['/myrecipes'],
}