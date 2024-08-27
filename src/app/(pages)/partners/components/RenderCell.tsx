import { ICONS } from '@/base/constants/icons';
import { Chip, Tooltip, User } from '@nextui-org/react';
import React from 'react';
import { Business, TableEntity, statusColorMap } from '../types';

const isBusiness = (entity: TableEntity): entity is Business => {
  return (entity as Business).employees?.length !== undefined;
};

const renderCell = (
  entity: TableEntity,
  columnKey: React.Key,
  removeRow: (id: number) => void,
  viewDetails: (id: number) => void,
  editDetails: (id: number) => void,
): React.ReactNode => {
  switch (columnKey) {
    case 'name':
      return (
        <User avatarProps={{ radius: 'lg', src: 'https://picsum.photos/200' }} name={entity.name}>
          {entity.name}
        </User>
      );
    case 'category':
      return isBusiness(entity) ? (
        <div className="flex flex-col">
          <p className="text-sm capitalize font-bold">{entity.description}</p>
          <p className="text-sm capitalize font-bold text-default-400">{entity.name}</p>
        </div>
      ) : null;
    case 'status':
      return entity.status ? (
        <Chip className="capitalize" color={statusColorMap[entity.status.name]} size="sm" variant="flat">
          {entity.status.name}
        </Chip>
      ) : null;
    case 'establishments':
      return isBusiness(entity) ? (
        <div className="flex flex-col">
          <p className="text-sm capitalize font-bold text-default-400">{`${entity.establishments?.length} estabelecimentos`}</p>
        </div>
      ) : null;
    case 'employees':
      return isBusiness(entity) ? (
        <div className="flex flex-col">
          <p className="text-sm capitalize font-bold text-default-400">{`${entity.employees?.length} funcionários`}</p>
        </div>
      ) : null;
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
      return <span>{entity.name}</span>;
  }
};

export default renderCell;
