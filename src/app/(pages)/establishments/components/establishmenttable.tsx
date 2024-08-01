"use client"
import React, { useState } from 'react';
import { Establishment } from "@app/base/mock";
import { Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginationComponent from './paginaton';
import Link from 'next/link';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const EstablishmentTable = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = Establishment.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='w-full'>
      <Table striped bordered hover variant="light" className='text-left w-full'>
        <thead className="w-full">
          <tr className="bg-purple-50">
            <th className="bg-purple-50 text-sm text-center text-purple-100 py-5"></th>
            <th className="bg-purple-50 text-sm text-left text-purple-100">NOME</th>
            <th className="bg-purple-50 text-sm text-center text-purple-100">ENDEREÇO</th>
            <th className="bg-purple-50 text-sm text-center text-purple-100">PROPRIETÁRIO</th>
            <th className="bg-purple-50 text-sm flex justify-center mt-2">
              <button>
                <BsThreeDotsVertical style={{fontSize: '24px', color: '#8B83BA'}}/>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className='text-xs'>
          {paginatedData.map((item, index) => (
            <tr className="border-b" key={index}>
              <td>
                <div className="py-2 px-10">
                  <img src={item.img} alt={item.name1} />
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2 pr-14">
                  <p className="font-semibold">{item.name1}</p>
                  <p className="text-blue-250">{item.name2}</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2 pl-10 pr-14">
                  <p className="font-semibold">{item.address1}</p>
                  <p className="text-blue-250">{item.address2}</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2 pl-10 pr-14">
                  <p className="font-semibold">{item.owner}</p>
                  <div className="flex gap-1">
                    <p className="text-blue-250">{item.employee}</p>
                    <p className="text-blue-250">Funcionários</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="p-10 flex justify-center">
                  <Link href={`/establishments/${item.id}`}>
                    <button 
                      className="rounded-full border border-purple-100 text-purple-100 px-6 py-2" 
                      data-tooltip-id="details-tooltip"
                      data-tooltip-content="ver mais detalhes"
                    >
                      Mais Detalhes
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComponent
        totalItems={Establishment.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <ReactTooltip id="details-tooltip" />
    </div>
  );
};

export default EstablishmentTable;
