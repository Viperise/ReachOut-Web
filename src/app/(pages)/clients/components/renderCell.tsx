import { ICONS } from '@app/utils/constants/icons';
import { Chip, User } from '@nextui-org/react';
import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Client, statusColorMap } from '../types';

const renderCell = (
  user: Client,
  columnKey: React.Key,
  removeRow: (id: string) => void,
  viewDetails: (id: string) => void,
  editDetails: (id: string) => void,
): React.ReactNode => {
  const cellValue = user[columnKey as keyof Client];

  switch (columnKey) {
    case 'name':
      return (
        <User avatarProps={{ radius: 'lg', src: user.image }} name={cellValue}>
          {user.name}
        </User>
      );
    case 'role':
      return (
        <div className="flex flex-col">
          <p className="text-sm capitalize text-bold">{cellValue}</p>
          <p className="text-sm capitalize text-bold text-default-400">{user.team}</p>
        </div>
      );
    case 'status':
      return (
        <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
          {cellValue}
        </Chip>
      );
    case 'establishment':
      return (
        <div className="flex flex-col">
          <p className="text-sm capitalize text-bold">{cellValue}</p>
          <p className="text-sm capitalize text-bold text-default-400">{`${user.employeesCount} funcionários`}</p>
        </div>
      );
    case 'actions':
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Detalhes" onClick={() => viewDetails(user.id)}>
            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
              <ICONS.eye />
            </span>
          </Tooltip>
          <Tooltip content="Editar" onClick={() => editDetails(user.id)}>
            <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
              <ICONS.edit />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Deletar">
            <span className="text-lg cursor-pointer text-danger active:opacity-50" onClick={() => removeRow(user.id)}>
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
