import { Chip, User } from '@nextui-org/react';
import { Client, statusColorMap } from '../../../types';

interface ClientDetailsProps {
  params: { id: string };
}

async function fetchClient(id: string): Promise<Client | null> {
  try {
    const response = await fetch(`http://localhost:3002/clients/${id}`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      console.error('Failed to fetch client data:', response.statusText);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching client data:', error);
    return null;
  }
}

const ClientDetails = async ({ params }: ClientDetailsProps) => {
  const client = await fetchClient(params.id);

  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <User avatarProps={{ radius: 'lg', src: client.image }} name={client.name} />
      <p>Nome: {client.name}</p>
      {client.status && (
        <>
          <p>Status:</p>
          <Chip color={statusColorMap[client.status.name]} className="capitalize">
            {client.status.name}
          </Chip>
        </>
      )}
    </div>
  );
};

export default ClientDetails;
