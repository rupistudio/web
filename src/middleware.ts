import type { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const start = Date.now();
  // console.log('middleware running...', { start });

  // get token here and handle token based auth redirects

  const { pathname } = req.nextUrl;

  const end = Date.now();
  console.log('middleware ended', { elapsed: end - start });
}

export const config = {
  matcher: '/',
};
