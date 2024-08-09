import { Client } from '@app/app/(pages)/clients/types';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

type ClientStore = {
  rows: Client[];
  addRow: (row: Client) => void;
  removeRow: (id: string) => void;
  editRow: (updatedRow: Client) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  rows: [
    {
      id: uuidv4(),
      name: 'John Doe',
      image: 'https://picsum.photos/200',
      status: 'ativo',
      establishment: '5 ativos',
      employeesCount: 10,
      team: 'Dono',
    },
    {
      id: uuidv4(),
      name: 'Jane Doe',
      image: 'https://picsum.photos/200',
      status: 'ativo',
      establishment: '10 ativos',
      employeesCount: 10,
      team: 'Atendente',
    },
    {
      id: uuidv4(),
      name: 'Alice Doe',
      image: 'https://picsum.photos/200',
      status: 'pausa',
      establishment: '15 ativos',
      employeesCount: 10,
      team: 'Socio',
    },
    {
      id: uuidv4(),
      name: 'Alice Doe',
      image: 'https://picsum.photos/200',
      status: 'pausa',
      establishment: '15 ativos',
      employeesCount: 10,
      team: 'Socio',
    },
    {
      id: uuidv4(),
      name: 'Alice Doe',
      image: 'https://picsum.photos/200',
      status: 'pausa',
      establishment: '15 ativos',
      employeesCount: 10,
      team: 'Socio',
    },
  ],
  addRow: (row) => set((state) => ({ rows: [...state.rows, row] })),
  removeRow: (id) => set((state) => ({ rows: state.rows.filter((row) => row.id !== id) })),
  editRow: (updatedRow) =>
    set((state) => ({
      rows: state.rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)),
    })),
}));
