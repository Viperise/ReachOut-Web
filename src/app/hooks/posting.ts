import { Posting } from '@/base/mock';
import React from 'react';

const usePosting = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 9;

  const pages = Math.ceil(Posting.length / rowsPerPage);

  const Items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Posting.slice(start, end);
  }, [page, Posting]);

  return {
    Items,
    page,
    pages,
    setPage,
  };
};

export default usePosting;
