import { ICONS } from '@app/base/constants/icons';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  SharedSelection,
} from '@nextui-org/react';
import React from 'react';
import { TableEntity } from '../types';

interface StatusOption {
  uid: string;
  name: string;
}

interface TopContentProps {
  filterValue: string;
  statusFilter: SharedSelection;
  onSearchChange: (value: string) => void;
  onClear: () => void;
  statusOptions: StatusOption[];
  setStatusFilter: (keys: SharedSelection) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  partners: Array<TableEntity>;
  onAddNew: () => void;
}
const TopContent: React.FC<TopContentProps> = ({
  filterValue,
  statusFilter,
  onSearchChange,
  onClear,
  statusOptions,
  setStatusFilter,
  onRowsPerPageChange,
  partners,
  onAddNew,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Procurar por nome..."
          startContent={<ICONS.search />}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ICONS.chevronDown className="text-small" />} variant="flat">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}
            >
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {status.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button color="primary" endContent={<ICONS.plus />} onClick={onAddNew}>
            Adicionar Novo
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">{partners.length} clientes totais</span>
        <label className="flex items-center text-default-400 text-small">
          Linhas por página:
          <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default TopContent;
