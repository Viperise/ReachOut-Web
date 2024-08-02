import React from 'react';
import useEstablishment from '@app/app/hook/establishments';
import PaginationComponent from '@app/app/(pages)/establishments/components/pagination';
import { Establishment } from '@app/base/mock';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TableGlobal } from '@app/app/components';

const TableCustom = () => {
  const {
    paginatedData,
    setItemsPerPage,
    handlePageChange,
    currentPage,
    itemsPerPage
  } = useEstablishment();

  const columns = [
    { header: '', accessor: 'img', isImage: true },
    {
      header: 'NOME',
      accessor: [
        { key: 'firstName', className: 'font-semibold' },
        { key: 'lastName', className: 'text-blue-250' }
      ]
    },
    {
      header: 'ENDEREÇO',
      accessor: [
        { key: 'firstAddress', className: 'font-semibold' },
        { key: 'lastAddress', className: 'text-blue-250' }
      ]
    },
    {
      header: 'PROPRIETÁRIO',
      accessor: [
        { key: 'owner', className: 'font-semibold' },
        { key: 'employee', className: 'text-blue-250', isEmployee: true }
      ]
    },
    { 
      header: <BsThreeDotsVertical style={{ fontSize: '24px', color: '#8B83BA' }} />, 
      accessor: 'details', 
      isLink: true, 
      tooltip: 'ver mais detalhes',
      isButton: true
    }
  ];

  return (
    <TableGlobal
      columns={columns}
      data={paginatedData}
    >
      <PaginationComponent
        totalItems={Establishment.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </TableGlobal>
  );
}

export default TableCustom;
