import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, password, birthDate } = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, birthDate }),
    });

    if (response.status === 201) {
      // User successfully created
      return NextResponse.json({ message: 'Usuário administrador criado com sucesso' }, { status: 201 });
    } else if (response.status === 400) {
      // Validation or business rule failure
      return NextResponse.json({ message: 'Falha na validação das regras de negócio e/ou do DTO' }, { status: 400 });
    } else if (response.status === 409) {
      // User already exists
      return NextResponse.json({ message: 'Usuário administrador já existe' }, { status: 409 });
    } else {
      // Some other unexpected response
      return NextResponse.json({ message: 'Erro desconhecido' }, { status: response.status });
    }
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
