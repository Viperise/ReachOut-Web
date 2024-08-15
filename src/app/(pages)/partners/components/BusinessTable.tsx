'use client';

import { partnersRoute } from '@app/utils/constants/navigationItems';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Business, Column } from '../types';
import GenericTable from './GenericTable';

const businessColumns: Column[] = [
  { name: 'Nome', uid: 'name', sortable: true },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'Categoria', uid: 'category' },
  { name: 'Estabelecimento', uid: 'establishment' },
  { name: 'Ações', uid: 'actions' },
];

const BusinessTable = ({ initialData }: { initialData: Business[] }) => {
  const router = useRouter();
  const [businesses, setBusinesses] = useState<Business[]>(initialData);

  const handleRemoveBusiness = async (id: string) => {
    setBusinesses(businesses.filter((business) => business.id !== id));
    try {
      await fetch(`http://localhost:3001/businesses/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Failed to remove business:', error);
      // Optionally handle rollback
    }
  };

  const viewBusiness = (id: string) => {
    return router.push(`${partnersRoute}/business/${id}`);
  };

  return (
    <GenericTable<Business>
      columns={businessColumns}
      initialRows={businesses}
      removeRow={handleRemoveBusiness}
      viewRow={viewBusiness}
      editRow={() => {}} // Implement edit logic
    />
  );
};

export default BusinessTable;
