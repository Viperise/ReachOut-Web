'use client';

import { ICONS } from '@/base/constants/icons';
import { routes } from '@/base/constants/routes';
import { Button, Card, CardBody, CardHeader, Chip, Link, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClientTable from '../../components/ClientsTable';
import { Business, Client, statusColorMap } from '../../types';

interface BusinessDetailsProps {
  params: { id: number };
}

const BusinessDetails = ({ params }: BusinessDetailsProps) => {
  const router = useRouter();
  const [business, setBusiness] = useState<Business | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await fetch(`${apiUrl}/company/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch business data');
        const data: Business = await res.json();
        setBusiness(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };

    const fetchClients = async () => {
      try {
        const res = await fetch(`${apiUrl}/company/${params.id}/employee`);
        if (!res.ok) throw new Error('Failed to fetch clients data');
        const data: Client[] = await res.json();
        setClients(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };

    fetchBusiness();
    fetchClients();
    setLoading(false);
  }, [params.id]);

  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner>Carregando...</Spinner>
      </div>
    );
  if (error) return <p>{error}</p>;
  if (!business)
    return (
      <div className="flex h-full items-center justify-center">
        <p>Empresa não encontrada</p>
        <Button>
          <Link href={'/partners'}>Voltar para empresas</Link>
        </Button>
      </div>
    );

  return (
    <div className="flex flex-col px-12 py-4 gap-10">
      <Card className="max-w-[100vw]">
        <CardHeader className="justify-between bg-gray-100 p-4 rounded-t-lg">
          <div className="flex gap-5">
            {/* <Avatar src={business.image} radius="full" size="lg" /> */}
            <div className="flex flex-col gap-1 items-start justify-center">
              <h1 className="text-large font-semibold leading-none text-default-600">{business.name}</h1>
              <h5 className="text-medium tracking-tight text-default-400">{`${business.description}`}</h5>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              color="primary"
              radius="md"
              size="md"
              endContent={<ICONS.edit />}
              className="hover:bg-primary-700"
              onClick={() => router.push(routes.editBusiness(params.id))}
            >
              Editar
            </Button>

            <Button
              color="primary"
              radius="md"
              size="md"
              endContent={<ICONS.plus />}
              className="hover:bg-primary-700"
              onClick={() => router.push(routes.editBusiness(params.id))}
            >
              Adicionar Estabelecimento
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">
            <strong>Status: </strong>
            <Chip color={statusColorMap[business.status.name]} className="capitalize">
              {business.status.name}
            </Chip>
          </p>
          {business.establishments && business.establishments.length > 0
            ? business.establishments.map((establishment, index) => (
                <div key={index}>
                  <h3>{establishment.name}</h3>
                  <p>Localização de estabelecimento: {establishment.location}</p>
                </div>
              ))
            : null}
          {business.employees && business.employees.length > 0
            ? business.employees.map((employee, index) => (
                <div key={index}>
                  <h3>{employee.name}</h3>
                </div>
              ))
            : null}
        </CardBody>
      </Card>

      <ClientTable initialData={clients} />
    </div>
  );
};

export default BusinessDetails;
