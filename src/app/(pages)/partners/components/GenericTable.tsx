'use client';

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
import { Column, TableEntity } from '../types';
import BottomContent from './BottomContent';
import renderCell from './RenderCell';
import TopContent from './TopContent';

interface GenericTableProps<T extends TableEntity> {
  columns: Column[];
  initialRows: T[];
  removeRow: (id: number) => void;
  viewRow: (id: number) => void;
  editRow: (id: number) => void;
  addNew: () => void;
  fetchPage: (page: number) => void;
}

const GenericTable = <T extends TableEntity>({
  columns,
  initialRows,
  removeRow,
  viewRow,
  editRow,
  addNew,
  fetchPage,
}: GenericTableProps<T>): React.JSX.Element => {
  const [rows, setRows] = useState<T[]>(initialRows);
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
      filteredUsers = filteredUsers.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    if (statusFilter !== 'all') {
      filteredUsers = filteredUsers.filter(
        (item) => item.status && Array.from(statusFilter).includes(item.status.name),
      );
    }

    return filteredUsers;
  }, [rows, filterValue, statusFilter]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a: T, b: T) => {
      const first = a[sortDescriptor.column as keyof T] as string | number;
      const second = b[sortDescriptor.column as keyof T] as string | number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, filteredItems]);

  const onNextPage = useCallback(() => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      fetchPage(nextPage);
      return nextPage;
    });
  }, [fetchPage]);

  const onPreviousPage = useCallback(() => {
    setPage((prevPage) => {
      const previousPage = prevPage - 1;
      if (previousPage > 0) {
        fetchPage(previousPage);
      }
      return previousPage;
    });
  }, [fetchPage]);

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
    (id: number) => {
      removeRow(id);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    },
    [removeRow],
  );

  const handleViewDetails = (id: number) => {
    viewRow(id);
  };

  const handleEditDetails = (id: number) => {
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
            statusOptions={[]}
            setStatusFilter={setStatusFilter}
            onRowsPerPageChange={onRowsPerPageChange}
            partners={rows}
            onAddNew={addNew}
          />
        }
        topContentPlacement="outside"
        bottomContent={
          <BottomContent
            selectedKeys={selectedKeys}
            filteredItems={filteredItems}
            page={page}
            pages={Math.ceil(rows.length / rowsPerPage)}
            setPage={setPage}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        }
        bottomContentPlacement="outside"
        selectionMode="none"
        color="default"
        aria-label="Tabela de empresas"
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
        <TableBody emptyContent={'Sem dados disponíveis'} items={sortedItems}>
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

export default GenericTable;
