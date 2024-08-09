'use client';

import { useClientStore } from '@app/app/store/clientStore';
import { User } from '@nextui-org/react';

const ClientDetails = ({ params }: { params: { id: string } }) => {
  const user = useClientStore((state) => state.rows.find((row) => row.id === params.id));

  if (!user) {
    return <p>Cliente não encontrado</p>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <User avatarProps={{ radius: 'lg', src: user.image }} name={user.name} />
      <p>Nome: {user.name}</p>
      <p>Função: {user.team}</p>
      <p>Status: {user.status}</p>
      <p>Estabelecimento: {user.establishment}</p>
      <p>Número de Funcionários: {user.employeesCount}</p>
    </div>
  );
};

export default ClientDetails;
