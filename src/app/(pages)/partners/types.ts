import { ChipProps } from '@nextui-org/react';

type Column = {
  name: string;
  uid: keyof Client | keyof Business | 'actions';
  sortable?: boolean;
};

type ClientFormData = Omit<Client, 'id' | 'image'>;

type Client = {
  id: string;
  image: string;
  name: string;
  status: string;
  team: string;
  establishment: string;
};

type Business = {
  id: string;
  image: string;
  name: string;
  status: string;
  category: string;
  establishment: string;
  employeesCount?: number;
  socialMedia?: string;
};

type TableEntity = Client | Business;

export const statusColorMap: Record<string, ChipProps['color']> = {
  ativo: 'success',
  pausa: 'danger',
  ferias: 'warning',
};

export type { Business, Client, ClientFormData, Column, TableEntity };
