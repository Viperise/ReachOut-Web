'use client';

import { routes } from '@app/base/constants/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Client, Column } from '../types';
import GenericTable from './GenericTable';

const clientColumns: Column[] = [
  { name: 'Nome', uid: 'name', sortable: true },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'Função', uid: 'team' },
  { name: 'Estabelecimento', uid: 'establishment' },
  { name: 'Ações', uid: 'actions' },
];

const ClientTable = ({ initialData }: { initialData: Client[] }) => {
  const [clients, setClients] = useState<Client[]>(initialData);
  const router = useRouter();

  const handleRemoveClient = async (id: string) => {
    setClients(clients.filter((client) => client.id !== id));
    try {
      await fetch(`http://localhost:3002/clients/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Failed to remove client:', error);
      // Optionally handle rollback
    }
  };

  const viewClient = (id: string) => {
    return router.push(routes.businessClients(id));
  };

  const handleAddNew = async () => {
    return router.push(routes.addClient());
  };

  return (
    <GenericTable<Client>
      columns={clientColumns}
      initialRows={clients}
      removeRow={handleRemoveClient}
      viewRow={viewClient}
      editRow={() => {}} // Implement edit logic
      addNew={handleAddNew}
    />
  );
};

export default ClientTable;
