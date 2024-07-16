'use client';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

import { AuthService } from '@app/base/services/authentication/login.service';
import ViperiseLogo from './../../../base/assets/static/viperise-login-static.svg';

const LoginPage = () => {
  const [isLoginError, setLoginError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const AuthServiceFunction = new AuthService();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    AuthServiceFunction.login(email as string, password as string)
      .then(() => setLoading(false))
      .catch(() => {
        setLoginError(true);
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-blue-100 via-blue-200 to-blue-300 p-4 sm:p-6 md:p-8 lg:p-12 gradient-animation">
      <div className="flex flex-col items-center mb-8">
        <p className="text-md font-bold text-center text-blue-800">Sistema de Gerenciamento de Anúncios</p>
        <h3 className="text-3xl font-bold text-center text-blue-800 md:text-4xl lg:text-5xl xl:text-6xl">ReachOut</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="w-full md:w-1/2 flex justify-center items-center p-2 md:p-4">
          <Image
            src="https://media.discordapp.net/attachments/1168880710564716574/1262829942140436583/loginBG01.png?ex=66980588&is=6696b408&hm=3d30e9f53b42bf7da6e5582854e5090b3b550a0ebd508a0616e2e7faa1a537b7&=&format=webp&quality=lossless&width=676&height=676"
            alt="Logo"
            width={430}
            height={420}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-0 shadow-md rounded px-8 pt-8 pb-8 mb-4 md:rounded-r-lg h-auto md:h-[450px]">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-300 pt-6">Autenticação</h2>
            <form onSubmit={handleSubmit} className="w-full px-8">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email:
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
                placeholder="Insira seu Email..."
              />
              <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Senha:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
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
                className="w-full bg-blue-200 hover:bg-blue-500 hover:text-gray-0 text-gray-800 font-bold py-2 px-4 mt-6 rounded transition duration-300 ease-in-out"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Image src={ViperiseLogo} alt="Viperise Logo" width={200} height={200} className="object-cover rounded" />
      </div>
    </div>
  );
};

export default LoginPage;
