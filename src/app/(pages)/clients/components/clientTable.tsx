'use client';

import { statusOptions } from '@app/utils/mocks/clients';
import {
  SharedSelection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import React, { useCallback, useMemo, useState } from 'react';
import { Client, Column } from '../types';
import BottomContent from './bottomContent';
import renderCell from './renderCell';
import TopContent from './topContent';

interface ClientTableProps {
  columns: Column[];
  initialRows: Client[];
  removeRow: (id: string) => void;
  viewRow: (id: string) => void;
  editRow: (id: string) => void;
}

const ClientTable = ({ columns, initialRows, removeRow, viewRow, editRow }: ClientTableProps): React.JSX.Element => {
  const [rows, setRows] = useState<Client[]>(initialRows);
  const [filterValue, setFilterValue] = useState<string>('');
  const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(new Set());
  const [statusFilter, setStatusFilter] = useState<SharedSelection>('all');
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  });

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) => Array.from(statusFilter).includes(user.status));
    }

    return filteredUsers;
  }, [rows, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Client, b: Client) => {
      const first = a[sortDescriptor.column as keyof Client] as number;
      const second = b[sortDescriptor.column as keyof Client] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const handleRemoveRow = useCallback(
    (id: string) => {
      removeRow(id);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    },
    [removeRow],
  );

  const handleViewDetails = (id: string) => {
    viewRow(id);
  };

  const handleEditDetails = (id: string) => {
    editRow(id);
  };

  return (
    <div className="flex flex-col w-full">
      <Table
        topContent={
          <TopContent
            filterValue={filterValue}
            statusFilter={statusFilter}
            onSearchChange={onSearchChange}
            onClear={onClear}
            statusOptions={statusOptions}
            setStatusFilter={setStatusFilter}
            onRowsPerPageChange={onRowsPerPageChange}
            users={rows}
          />
        }
        topContentPlacement="outside"
        bottomContent={
          <BottomContent
            selectedKeys={selectedKeys}
            filteredItems={filteredItems}
            page={page}
            pages={pages}
            setPage={setPage}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        }
        bottomContentPlacement="outside"
        selectionMode="multiple"
        color="default"
        aria-label="Clients table"
        className="w-full"
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'Sem clientes'} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey, handleRemoveRow, handleViewDetails, handleEditDetails)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientTable;
