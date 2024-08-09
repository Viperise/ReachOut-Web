'use client';

import { ClientFormData } from '@app/app/(pages)/clients/types';
import { Breadcrumbs } from '@app/app/components';
import { useClientStore } from '@app/app/store/clientStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@nextui-org/react';
import router from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  team: Yup.string().required('Função é obrigatória'),
  status: Yup.string().required('Status é obrigatório'),
  establishment: Yup.string().required('Estabelecimento é obrigatório'),
  employeesCount: Yup.number().required('Número de funcionários é obrigatório').positive().integer(),
});

const EditClient = ({ params }: { params: { id: string } }) => {
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
      setValue('team', client.team);
      setValue('status', client.status);
      setValue('establishment', client.establishment);
      setValue('employeesCount', client.employeesCount);
    }
  }, [client, setValue]);

  const onSubmit = (data: ClientFormData) => {
    editRow({ ...client!, ...data });
    router.push('/clients');
  };

  if (!client) {
    return <p>Cliente não encontrado</p>;
  }

  const breadcrumbItems = [
    { name: 'Clientes', href: '/clients' },
    { name: 'Editar', href: `/clients/${params.id}/edit` },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <Breadcrumbs navItem={breadcrumbItems} />

      <p>Editar Cliente</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-4">
        <Input {...register('name')} label="Nome" fullWidth />
        <Input {...register('team')} label="Função" fullWidth />
        <Input {...register('status')} label="Status" fullWidth />
        <Input {...register('establishment')} label="Estabelecimento" fullWidth />
        <Input {...register('employeesCount')} type="number" label="Número de Funcionários" fullWidth />
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
};

export default EditClient;
