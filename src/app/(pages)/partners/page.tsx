'use client';

import BusinessTable from './components/BusinessTable';
import { Business } from './types';

async function fetchData(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const businesses: Business[] = await fetchData('http://localhost:3002/businesses');

  return (
    <div className="flex flex-col gap-4 p-4">
      <BusinessTable initialData={businesses} />
    </div>
  );
}
