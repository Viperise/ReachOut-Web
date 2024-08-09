import { ChipProps } from '@nextui-org/react';

type Column = {
  name: string;
  uid: keyof Client | 'actions';
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
  employeesCount: number;
};

export const statusColorMap: Record<string, ChipProps['color']> = {
  ativo: 'success',
  pausa: 'danger',
  ferias: 'warning',
};

export type { Client, ClientFormData, Column };
