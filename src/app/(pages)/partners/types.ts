import { ChipProps } from '@nextui-org/react';

type Column = {
  name: string;
  uid: keyof Client | keyof Business | 'actions';
  sortable?: boolean;
};

type ClientFormData = Omit<Client, 'id' | 'image'>;

interface Status {
  id: number;
  name: string;
}

interface Establishment {
  id: number;
  name: string;
  location: string;
}

interface Employee {
  id: number;
  name: string;
}

interface Business {
  id: number;
  name: string;
  description: string;
  establishments?: Establishment[];
  employees?: Employee[];
  status: Status;
}

type Client = {
  id: number;
  image: string;
  name: string;
  status?: Status;
};

interface PartnerResponse {
  content: Business[];
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  empty: boolean;
  first: boolean;
  last: boolean;
}

type BusinessFormData = Omit<Business, 'id' | 'status' | 'establishments' | 'employees'>;

type TableEntity = Client | Business;

export const statusColorMap: Record<string, ChipProps['color']> = {
  Ativo: 'success',
  Inativo: 'warning',
  Removido: 'danger',
};

export type { Business, BusinessFormData, Client, ClientFormData, Column, PartnerResponse, TableEntity };
