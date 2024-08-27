import { Client } from '@/app/(pages)/partners/types';
import { create } from 'zustand';

type ClientStore = {
  rows: Client[];
  setRows: (rows: Client[]) => void;
  addRow: (row: Client) => void;
  removeRow: (id: number) => void;
  editRow: (updatedRow: Client) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  rows: [],
  setRows: (rows) => set({ rows }),
  addRow: (row) => set((state) => ({ rows: [...state.rows, row] })),
  removeRow: (id) => set((state) => ({ rows: state.rows.filter((row) => row.id !== id) })),
  editRow: (updatedRow) =>
    set((state) => ({
      rows: state.rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)),
    })),
}));
