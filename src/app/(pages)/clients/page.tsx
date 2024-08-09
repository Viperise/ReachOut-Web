'use client';

import { useClientStore } from '@app/app/store/clientStore';
import { useRouter } from 'next/navigation';
import ClientTable from './components/clientTable';
import { Column } from './types';

const columns: Column[] = [
  { name: 'Nome', uid: 'name', sortable: true },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'Função', uid: 'team' },
  { name: 'Estabelecimento', uid: 'establishment' },
  { name: 'Ações', uid: 'actions' },
];

const ClientsPage = () => {
  const router = useRouter();

  const rows = useClientStore((state) => state.rows);
  const removeRow = useClientStore((state) => state.removeRow);
  const viewRow = (id: string) => {
    router.push(`/clients/${id}`);
  };
  const editRow = (id: string) => {
    router.push(`/clients/${id}/edit`);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <ClientTable columns={columns} initialRows={rows} removeRow={removeRow} viewRow={viewRow} editRow={editRow} />
    </div>
  );
};

export default ClientsPage;
