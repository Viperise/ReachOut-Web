import { Review } from '@app/base/mock';
import React from 'react';

const useRating = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 3;

  const pages = Math.ceil(Review.length / rowsPerPage);

  const Items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Review.slice(start, end);
  }, [page, Review]);

  return {
    Items,
    page,
    pages,
    setPage,
  };
};

export default useRating;
