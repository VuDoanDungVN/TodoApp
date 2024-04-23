// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  })

  const { pathname, origin } = req.nextUrl
  const isAuthPath = pathname.startsWith('/api/auth')

  if (!session && !isAuthPath) {
    const url = req.nextUrl.clone()
    url.pathname = '/api/auth/signin'
    return NextResponse.redirect(url)
  }

  if (isAuthPath) {
    return NextResponse.next()
  }

  if (!session) {
    const url = req.nextUrl.clone()
    url.pathname = '/api/auth/signin'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard', '/settings'],
}
//Để bắt đầu, chúng ta sẽ tạo một middleware mới để kiểm tra xem người dùng đã đăng nhập chưa. 
//Nếu chưa, chúng ta sẽ chuyển hướng họ đến trang đăng nhập. 
//Nếu đã đăng nhập, chúng ta sẽ cho họ tiếp tục vào trang mà họ muốn truy cập.