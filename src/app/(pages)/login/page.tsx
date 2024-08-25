'use client';

import { useAuth } from '@app/app/contexts/AuthContext';
import { Button, Card, CardBody, Input, Link, Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
};

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  birthDate: string;
};

const LoginPage = () => {
  const [selected, setSelected] = useState<string | number | null>('login');
  const { login, signUp, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
  } = useForm<SignUpFormData>();

  const onLogin = async (data: LoginFormData) => {
    await login(data.email, data.password);
  };

  const onSignUp = async (data: SignUpFormData) => {
    await signUp(data.name, data.email, data.password, data.birthDate);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-24">
      <Card className="max-w-full w-[70vh]">
        <CardBody>
          <Tabs fullWidth size="md" selectedKey={selected} onSelectionChange={setSelected}>
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit(onLogin)}>
                <Input
                  isRequired
                  label="Email"
                  placeholder="Insira seu email"
                  type="email"
                  {...register('email', { required: 'Email é obrigatório' })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                <Input
                  isRequired
                  label="Senha"
                  placeholder="Insira sua senha"
                  type="password"
                  {...register('password', { required: 'Senha é obrigatória' })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                <p className="text-center text-small">
                  Precisa criar uma conta?{' '}
                  <Link size="sm" onPress={() => setSelected('sign-up')}>
                    Cadastrar
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary" isLoading={loading}>
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Cadastro">
              <form className="flex flex-col gap-4" onSubmit={handleSignUpSubmit(onSignUp)}>
                <Input
                  isRequired
                  label="Nome"
                  placeholder="Insira seu nome"
                  {...registerSignUp('name', { required: 'Nome é obrigatório' })}
                />
                {signUpErrors.name && <span className="text-red-500">{signUpErrors.name.message}</span>}

                <Input
                  isRequired
                  label="Email"
                  placeholder="Insira seu email"
                  type="email"
                  {...registerSignUp('email', { required: 'Email é obrigatório' })}
                />
                {signUpErrors.email && <span className="text-red-500">{signUpErrors.email.message}</span>}

                <Input
                  isRequired
                  label="Senha"
                  placeholder="Insira sua senha"
                  type="password"
                  {...registerSignUp('password', { required: 'Senha é obrigatória' })}
                />
                {signUpErrors.password && <span className="text-red-500">{signUpErrors.password.message}</span>}

                <Input
                  isRequired
                  label="Data de Nascimento"
                  placeholder="Insira sua data de nascimento"
                  type="date"
                  {...registerSignUp('birthDate', { required: 'Data de nascimento é obrigatória' })}
                />
                {signUpErrors.birthDate && <span className="text-red-500">{signUpErrors.birthDate.message}</span>}

                <p className="text-center text-small">
                  Já tem uma conta?{' '}
                  <Link size="sm" onPress={() => setSelected('login')}>
                    Login
                  </Link>
                </p>
                <Button type="submit" fullWidth color="primary" isLoading={loading}>
                  Cadastrar
                </Button>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
