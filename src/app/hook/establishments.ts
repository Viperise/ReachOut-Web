// src/hooks/useEstablishment.ts
import { Establishment } from "@app/base/mock";
import { useState } from "react";

const useEstablishment = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = Establishment.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    setItemsPerPage,
    handlePageChange,
    paginatedData,
    currentPage,
    setCurrentPage,
    itemsPerPage
  };
};

export default useEstablishment;
