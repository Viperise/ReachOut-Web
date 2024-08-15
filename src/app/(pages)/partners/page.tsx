'use client';

import { Tab, Tabs } from '@nextui-org/react';
import BusinessTable from './components/BusinessTable';
import ClientTable from './components/ClientsTable';
import { Business, Client } from './types';

async function fetchData(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const clients: Client[] = await fetchData('http://localhost:3001/clients');
  const businesses: Business[] = await fetchData('http://localhost:3001/businesses');

  return (
    <div className="flex flex-col gap-4 p-4">
      <Tabs aria-label="Options">
        <Tab key="business" title="Empresas">
          <BusinessTable initialData={businesses} />
        </Tab>

        <Tab key="clients" title="Clientes">
          <ClientTable initialData={clients} />
        </Tab>
      </Tabs>
    </div>
  );
}
