'use client';
import { AuthService } from '@app/base/services/authentication/loginMocked.service';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import ReachOutLogo from './../../../../public/assets/imgs/Component 1.svg';
import ViperiseLogo from './../../../base/assets/static/viperise-login-static.svg';
import Leftside from './components/leftside';

const authService = new AuthService();

const LoginPage = () => {
  const [isLoginError, setLoginError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Initialize router

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setLoginError(false);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await authService.login(email, password);
      setLoading(false);
      router.push('/');
    } catch (error) {
      console.error(error);
      setLoginError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-0 p-4 sm:p-6 md:p-8 lg:p-12 gradient-animation">
      <div className="flex justify-center items-center w-full">
        <div className="hidden lg:flex w-full justify-center items-center p-2">
          <Leftside />
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col items-center gap-16">
            <Image src={ReachOutLogo} alt="Viperise Logo" width={250} height={250} className="object-cover rounded" />
            <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-300 pt-6">ENTRAR</h2>
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 px-2 py-3 rounded-md mb-4 focus:outline-blue-300"
                placeholder="Insira seu Email..."
                required
              />
              <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Senha:
              </label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 px-2 py-3 rounded-md mb-4 focus:outline-blue-300"
                placeholder="Insira sua Senha..."
                autoComplete="current-password"
                required
              />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Lembre-me
                  </label>
                </div>
              </div>

              {isLoading && (
                <div role="status" className="flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Autenticando...</span>
                </div>
              )}

              {isLoginError && (
                <div className="text-red-700 text-center bg-red-200 p-2 rounded">Email ou Senha incorretos!</div>
              )}

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-info-500 hover:text-gray-0 text-primary-foreground font-bold py-2 px-4 mt-6 rounded transition duration-300 ease-in-out"
              >
                Entrar
              </button>
            </form>
            <div className="">
              <Image src={ViperiseLogo} alt="Viperise Logo" width={200} height={200} className="object-cover rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
