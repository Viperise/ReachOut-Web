import { NextResponse } from 'next/server';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const data: LoginResponse = await response.json();

    const headers = new Headers();
    headers.append('Set-Cookie', `token=${data.accessToken}; HttpOnly; Secure; Path=/; Max-Age=3600`);
    headers.append('Set-Cookie', `refreshToken=${data.refreshToken}; HttpOnly; Secure; Path=/; Max-Age=86400`);

    return NextResponse.json({ message: 'Logged in successfully' }, { headers });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
