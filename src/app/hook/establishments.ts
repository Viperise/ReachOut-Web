import { Establishment } from '@app/base/mock';
import React from 'react';

const useEstablishment = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 3;

  const pages = Math.ceil(Establishment.length / rowsPerPage);

  const Items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Establishment.slice(start, end);
  }, [page, Establishment]);

  return {
    Items,
    page,
    pages,
    setPage,
  };
};

export default useEstablishment;
