import { Business } from '@/app/(pages)/partners/types';
import { create } from 'zustand';

type BusinessStore = {
  rows: Business[];
  setRows: (rows: Business[]) => void;
  addRow: (row: Business) => void;
  removeRow: (id: number) => void;
  editRow: (updatedRow: Business) => void;
};

export const useBusinessStore = create<BusinessStore>((set) => ({
  rows: [],
  setRows: (rows) => set({ rows }),
  addRow: (row) => set((state) => ({ rows: [...state.rows, row] })),
  removeRow: (id) => set((state) => ({ rows: state.rows.filter((row) => row.id !== id) })),
  editRow: (updatedRow) =>
    set((state) => ({
      rows: state.rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)),
    })),
}));
