// src/components/PaginationComponent.tsx
import React from 'react';
import { Pagination } from 'react-bootstrap';

interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const PaginationComponent  = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}: PaginationComponentProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className='flex justify-end gap-20 pr-5 text-purple-100 py-2 font-semibold text-sm bg-purple-50'>
      <div className='flex gap-2'>
        <p>{startItem}-{endItem}</p>
        <p>de</p>
        <p>{totalItems}</p>
      </div>
      <Pagination className='flex gap-8'>
        <Pagination.Item
          className='cursor-pointer'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </Pagination.Item>
        <Pagination.Item
          className='cursor-pointer'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </Pagination.Item>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
