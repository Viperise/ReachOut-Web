import { NextResponse } from 'next/server';

interface RefreshResponse {
  accessToken: string;
}

export async function POST(request: Request) {
  try {
    const { refreshToken } = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        return NextResponse.json({ message: 'Dados enviados inválidos' }, { status: 400 });
      } else if (response.status === 401) {
        return NextResponse.json({ message: 'Token expirado' }, { status: 401 });
      } else {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }
    }

    const data: RefreshResponse = await response.json();

    const headers = new Headers();
    headers.append('Set-Cookie', `token=${data.accessToken}; HttpOnly; Secure; Path=/; Max-Age=3600`);

    return NextResponse.json({ message: 'Token recarregado com sucesso' }, { headers });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
