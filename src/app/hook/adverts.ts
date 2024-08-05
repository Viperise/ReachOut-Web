
import { Adverts } from "@app/base/mock";
import React from "react";

const useAdverts = () => {
  const [page, setPage] = React.useState(1);
    const rowsPerPage = 9;
  
    const pages = Math.ceil(Adverts.length / rowsPerPage);
  
    const Items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return Adverts.slice(start, end);
    }, [page, Adverts]);

    return {
      Items,
      page,
      pages,
      setPage,
    }
}

export default useAdverts