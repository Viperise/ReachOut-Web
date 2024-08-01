import { URLhttp } from '@app/base/mappings/http.mapper';
import { redirect } from 'next/navigation';

const URL = URLhttp;

export class AuthService {
  async login(email: string, password: string) {
    const response = await fetch(`${URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) redirect('/dashboard');
      else throw new Error('Falha ao logar');
    });
  }
}
