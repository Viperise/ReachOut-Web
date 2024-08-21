'use client';

import { Input } from '@nextui-org/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  description: string;
};

export default function AddClientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setError(null);
    setSuccess(null);

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

      reset();
      setSuccess('Company added successfully!');
    } catch (err) {
      setError((err as Error).message || 'An unexpected error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Cadastro de Cliente</p>
        <Input
          type="text"
          label="Nome da empresa"
          placeholder="Adicione o nome da empresa"
          {...register('name', { required: 'Company name is required' })}
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          className={`mt-1 block w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
          aria-invalid={errors.description ? 'true' : 'false'}
        />
        {errors.description && <p className="mt-1 text-red-500 text-sm">{errors.description.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>
        {isSubmitting ? 'Adding Company...' : 'Add Company'}
      </button>
      {error && (
        <p aria-live="assertive" className="mt-4 text-red-500">
          {error}
        </p>
      )}
      {success && (
        <p aria-live="polite" className="mt-4 text-green-500">
          {success}
        </p>
      )}
    </form>
  );
}
