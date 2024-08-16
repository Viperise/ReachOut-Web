import { ICONS } from '@app/base/constants/icons';
import { Avatar, Button, Card, CardBody, CardHeader, Chip } from '@nextui-org/react';
import ClientTable from '../../components/ClientsTable';
import { Business, Client, statusColorMap } from '../../types';

interface BusinessDetailsProps {
  params: { id: string };
}

async function fetchData(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function fetchBusiness(id: string): Promise<Business | null> {
  try {
    const response = await fetch(`http://localhost:3002/businesses/${id}`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      console.error('Failed to fetch business data:', response.statusText);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching business data:', error);
    return null;
  }
}

const BusinessDetails = async ({ params }: BusinessDetailsProps) => {
  const business = await fetchBusiness(params.id);

  const clients: Client[] = await fetchData('http://localhost:3002/clients');

  if (!business) {
    return <p>Business not found</p>;
  }

  return (
    <div className="flex flex-col px-12 py-4 gap-10">
      <Card className="max-w-[100vw]">
        <CardHeader className="justify-between bg-gray-100 p-4 rounded-t-lg">
          <div className="flex gap-5">
            <Avatar src={business.image} radius="full" size="lg" />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">{business.name}</h4>
              <h5 className="text-small tracking-tight text-default-400">{`@${business.socialMedia}`}</h5>
            </div>
          </div>

          <Button color="primary" radius="lg" size="lg" startContent={<ICONS.edit />} className="hover:bg-primary-700">
            Editar
          </Button>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">
            <strong>Função:</strong> {business.category}
          </p>
          <p className="text-default-600">
            <strong>Status: </strong>
            <Chip color={statusColorMap[business.status]} className="capitalize">
              {business.status}
            </Chip>
          </p>
          <p className="text-default-600">
            <strong>Estabelecimento:</strong> {business.establishment}
          </p>
          <p className="text-default-600">
            <strong>Número de funcionários:</strong> {business.employeesCount}
          </p>
        </CardBody>
      </Card>

      <ClientTable initialData={clients} />
    </div>
  );
};

export default BusinessDetails;
