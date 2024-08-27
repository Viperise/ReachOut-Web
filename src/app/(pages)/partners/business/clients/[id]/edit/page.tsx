'use client';

import { ClientFormData } from '@/app/(pages)/partners/types';
import { Breadcrumbs } from '@/app/components';
import { useClientStore } from '@/app/store/clientStore';
import { routes } from '@/base/constants/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@nextui-org/react';
import router from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
});

const EditClient = ({ params }: { params: { id: number } }) => {
  const editRow = useClientStore((state) => state.editRow);
  const rows = useClientStore((state) => state.rows);
  const client = rows.find((row) => row.id === params.id);

  const { register, handleSubmit, setValue } = useForm<ClientFormData>({
    defaultValues: client,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (client) {
      setValue('name', client.name);
    }
  }, [client, setValue]);

  const onSubmit = (data: ClientFormData) => {
    editRow({ ...client!, ...data });
    router.push('/partners');
  };

  if (!client) {
    return <p>Cliente não encontrado</p>;
  }

  const breadcrumbItems = [
    { name: 'Clientes', href: routes.partners() },
    { name: 'Editar', href: routes.editClient(params.id) },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <Breadcrumbs navItem={breadcrumbItems} />

      <p>Editar Cliente</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-4">
        <Input {...register('name')} label="Nome" fullWidth />
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
};

export default EditClient;
