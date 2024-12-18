import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
  const cookie = await cookies();
  const token = cookie.get('desafio.tech-token');

  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') ;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/auth/signIn', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};