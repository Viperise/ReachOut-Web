"use client";
import { Box } from "@app/app/components";
import { useState } from "react";
import SearchBar from "./components/searchbar";
import TableEstablishment from "./components/tableEstablishment";
import { ICONS } from "@app/utils/constants/icons";

const EstablishmentsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full max-w-full">
      <div className="flex flex-col justify-center px-10 gap-3">
        <Box className="flex flex-col rounded-3xl">
          <div className="flex justify-between p-5 shadow-medium border-b border-primary-300 rounded-t-3xl">
            <div className="flex gap-4">
              <button className="flex gap-1 rounded-lg py-2 px-3">
                <ICONS.filter style={{fontSize: '24px'}} className="text-primary-500"/>
                <p>Filtrar</p>
              </button>
              <div className="flex items-center w-full">
                <SearchBar
                  placeholder="Procure pelo Estabelecimento desejado..."
                  onChange={handleSearchChange}
                  value={searchTerm}
                />
              </div>
            </div>
            <button className="px-3 py-2 text-info-foreground rounded-lg bg-info-500 te">Adicionar</button>
          </div>
          <TableEstablishment/>
        </Box>
      </div>
    </div>
  );
};

export default EstablishmentsPage;
