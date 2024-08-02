import React from 'react';
import { Table } from 'react-bootstrap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Link from 'next/link';

interface SubColumn {
  key: string;
  className?: string;
  isEmployee?: boolean;
}

interface Column {
  header: string | JSX.Element;
  accessor: string | SubColumn[];
  isImage?: boolean;
  isLink?: boolean;
  tooltip?: string;
  isButton?: boolean;
}

interface TableGlobalProps {
  columns: Column[];
  data: any[];
  children: React.ReactNode;
}

const TableGlobal = ({ columns, data, children }: TableGlobalProps) => {
  return (
    <div>
      <Table striped bordered hover variant="light" className="text-left w-full">
        <thead>
          <tr className="bg-purple-50">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`bg-purple-50 text-sm text-center text-purple-100 py-5 ${
                  typeof column.header === 'object' ? 'icon-header' : ''
                }`}
              >
                {column.isButton ? (
                  <button
                    className="header-icon-button"
                    aria-label={typeof column.header === 'string' ? column.header : 'Icon Button'}
                  >
                    {column.header}
                  </button>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xs">
          {data.map((item, rowIndex) => (
            <tr className="border-b" key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.isImage ? (
                    <div className="py-2 px-10">
                      <img src={item[column.accessor as string]} alt={item[column.accessor as string]} />
                    </div>
                  ) : column.isLink ? (
                    <div className="p-10 flex justify-center">
                      <Link href={`/establishments/${item.id}`}>
                        <button
                          className="rounded-full border border-purple-100 text-purple-100 px-6 py-2"
                          data-tooltip-id="details-tooltip"
                          data-tooltip-content={column.tooltip}
                        >
                          Mais Detalhes
                        </button>
                      </Link>
                    </div>
                  ) : Array.isArray(column.accessor) ? (
                    <div className="flex flex-col gap-2 pl-10 pr-14">
                      {(column.accessor as SubColumn[]).map((sub, subIndex) => (
                        <div key={subIndex} className="flex items-center gap-2">
                          <p className={sub.className || ''}>{item[sub.key]}</p>
                          {sub.isEmployee && <p className="text-blue-250">Funcionários</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 pl-10 pr-14">
                      <p className="font-semibold">{item[column.accessor as string]}</p>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {children}
      <ReactTooltip id="details-tooltip" />
    </div>
  );
};

export default TableGlobal;
