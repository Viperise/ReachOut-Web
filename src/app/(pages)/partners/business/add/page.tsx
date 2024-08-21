'use client';

import { showToast } from '@app/base/helpers/toastHelper';
import { Button, Card, Input, Textarea } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  description: string;
};

export default function AddBusinessForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await fetch(`${apiUrl}/company`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to add company: ${errorText}`);
      }

      showToast('success', 'Empresa adicionada com sucesso!');
      reset();
    } catch (err) {
      const errorMessage = (err as Error).message || 'Erro inesperado aconteceu.';
      showToast('error', errorMessage);
    }
  };

  return (
    <Card className="px-10 py-5 m-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <p className="text-lg font-semibold mb-3">Cadastro de Empresa</p>
          <Input
            type="text"
            label="Nome da empresa"
            placeholder="Adicione o nome da empresa"
            {...register('name', { required: 'Um nome de empresa é necessário' })}
            isInvalid={errors.name !== undefined}
            errorMessage={errors.name?.message}
          />
        </div>
        <div>
          <Textarea
            label="Descrição"
            placeholder="Adicione uma descrição breve a empresa..."
            {...register('description', { required: 'Uma descrição é necessária' })}
            isInvalid={errors.description !== undefined}
            errorMessage={errors.description?.message}
          />
        </div>
        <Button
          color="primary"
          type="submit"
          className="btn btn-primary mt-4"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Adicionar Empresa
        </Button>
      </form>
    </Card>
  );
}
