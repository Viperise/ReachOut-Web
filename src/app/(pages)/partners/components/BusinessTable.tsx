'use client';

import { routes } from '@app/base/constants/routes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Business, Column, PartnerResponse } from '../types';
import GenericTable from './GenericTable';

const businessColumns: Column[] = [
  { name: 'Nome', uid: 'name', sortable: true },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'Estabelecimento', uid: 'establishments' },
  { name: 'Funcionários', uid: 'employees' },
  { name: 'Ações', uid: 'actions' },
];

const BusinessTable = ({
  initialData,
  fetchPage,
}: {
  initialData: PartnerResponse;
  fetchPage: (page: number) => void;
}) => {
  const router = useRouter();
  const [data, setData] = useState<PartnerResponse>(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleRemoveBusiness = async (id: number) => {
    console.log(`remove business: ${id}`);
  };

  const viewBusiness = (id: number) => {
    return router.push(routes.viewBusiness(id));
  };

  const handleAddNew = async () => {
    return router.push(routes.addBusiness());
  };

  return (
    <GenericTable<Business>
      columns={businessColumns}
      initialRows={data.content} // Pass the content as initialRows
      removeRow={handleRemoveBusiness}
      viewRow={viewBusiness}
      editRow={() => {}} // Implement edit logic
      addNew={handleAddNew}
      fetchPage={fetchPage} // Pass the fetchPage function to fetch new data
    />
  );
};

export default BusinessTable;
