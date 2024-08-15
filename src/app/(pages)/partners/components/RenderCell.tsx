import { ICONS } from '@app/utils/constants/icons';
import { Chip, Tooltip, User } from '@nextui-org/react';
import React from 'react';
import { Business, TableEntity, statusColorMap } from '../types';

const isBusiness = (entity: TableEntity): entity is Business => {
  return (entity as Business).employeesCount !== undefined;
};

const renderCell = (
  entity: TableEntity,
  columnKey: React.Key,
  removeRow: (id: string) => void,
  viewDetails: (id: string) => void,
  editDetails: (id: string) => void,
): React.ReactNode => {
  const cellValue = entity[columnKey as keyof TableEntity];

  switch (columnKey) {
    case 'name':
      return (
        <User avatarProps={{ radius: 'lg', src: entity.image }} name={cellValue as string}>
          {entity.name}
        </User>
      );
    case 'team': // For Client
    case 'category': // For Business
      return (
        <div className="flex flex-col">
          <p className="text-sm capitalize text-bold">{cellValue}</p>
          <p className="text-sm capitalize text-bold text-default-400">
            {'team' in entity ? entity.team : entity.category}
          </p>
        </div>
      );
    case 'status':
      return (
        <Chip className="capitalize" color={statusColorMap[entity.status]} size="sm" variant="flat">
          {cellValue}
        </Chip>
      );
    case 'establishment':
      return (
        <div className="flex flex-col">
          <p className="text-sm capitalize text-bold">{cellValue}</p>
          {isBusiness(entity) && (
            <p className="text-sm capitalize text-bold text-default-400">{`${entity.employeesCount} funcionários`}</p>
          )}
        </div>
      );
    case 'employeesCount':
      return isBusiness(entity) ? <span>{entity.employeesCount}</span> : null;
    case 'actions':
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Detalhes">
            <span
              className="text-lg cursor-pointer text-default-400 active:opacity-50"
              onClick={() => viewDetails(entity.id)}
            >
              <ICONS.eye />
            </span>
          </Tooltip>
          <Tooltip content="Editar">
            <span
              className="text-lg cursor-pointer text-default-400 active:opacity-50"
              onClick={() => editDetails(entity.id)}
            >
              <ICONS.edit />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Deletar">
            <span className="text-lg cursor-pointer text-danger active:opacity-50" onClick={() => removeRow(entity.id)}>
              <ICONS.delete />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return <span>{cellValue}</span>;
  }
};

export default renderCell;
