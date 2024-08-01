import { redirect } from 'next/navigation';

export class AuthService {
  async login(email: string, password: string) {
    const mockEmail = 'admin@admin.com';
    const mockPassword = '12345';

    if (email === mockEmail && password === mockPassword) {
      return; // Sucesso, não faz nada
    } else {
      throw new Error('Falha ao logar');
    }
  }
}
