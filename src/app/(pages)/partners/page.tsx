'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import BusinessTable from './components/BusinessTable';
import { PartnerResponse } from './types';

async function fetchData(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Page() {
  const [businesses, setBusinesses] = useState<PartnerResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const loadBusinesses = async (page: number) => {
    try {
      const data: PartnerResponse = await fetchData(`${apiUrl}/company?page=${page}`);
      setBusinesses(data);
    } catch (error) {
      console.error('Failed to fetch businesses:', error);
    }
  };

  useEffect(() => {
    loadBusinesses(currentPage);
  }, [currentPage]);

  const handleFetchPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      {businesses ? (
        <BusinessTable initialData={businesses} fetchPage={handleFetchPage} />
      ) : (
        <div className="flex justify-center items-center h-full">
          <Spinner>Carregando...</Spinner>
        </div>
      )}
    </div>
  );
}
