// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  });

  const { pathname } = req.nextUrl;
  const isAuthPath = pathname.startsWith('/api/auth');

  if (!session && !isAuthPath) {
    const url = req.nextUrl.clone();
    url.pathname = '/api/auth/signin';
    return NextResponse.redirect(url);
  }

  if (!session && isAuthPath && pathname !== '/api/auth/signin') {
    return NextResponse.next();
  }

  if (session && isAuthPath && pathname === '/api/auth/signin') {
    const url = req.nextUrl.clone();
    url.pathname = '/profile-user'; // Chuyển hướng người dùng đã đăng nhập đến trang dashboard nếu họ truy cập /api/auth/signin
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard', '/settings'],
};
