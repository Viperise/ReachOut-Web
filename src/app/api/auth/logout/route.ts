import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out successfully' });

  // Clear the 'token' and 'refreshToken' cookies
  response.cookies.set('token', '', { path: '/', maxAge: -1 });
  response.cookies.set('refreshToken', '', { path: '/', maxAge: -1 });

  return response;
}
