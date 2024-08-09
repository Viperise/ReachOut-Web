
import { Announcement } from "@app/base/mock";
import React from "react";

const useAnnouncement = () => {
  const [page, setPage] = React.useState(1);
    const rowsPerPage = 9;
  
    const pages = Math.ceil(Announcement.length / rowsPerPage);
  
    const Items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return Announcement.slice(start, end);
    }, [page, Announcement]);

    return {
      Items,
      page,
      pages,
      setPage,
    }
}

export default useAnnouncement