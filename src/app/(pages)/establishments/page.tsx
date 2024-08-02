"use client";
import { Box } from "@app/app/components";
import { HiFilter } from "react-icons/hi";
import { useState } from "react";
import SearchBar from "./components/searchBar";
import TableCustom from "./components/tableEstablishment";

const EstablishmentsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full max-w-full">
      <div className="flex flex-col justify-center px-10 gap-3">
        <h1 className="text-purple-100 font-semibold text-xl mt-5">Estabelecimentos</h1>
        <Box className="border border-gray-400 rounded-3xl">
          <div className="flex justify-between border-b p-5">
            <div className="flex gap-4">
              <button className="flex gap-1 border border-gray-400 rounded-lg py-2 px-3">
                <HiFilter style={{fontSize: '24px', color: '#8B83BA'}}/>
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
            <button className="bg-blue-300 px-3 py-2 text-gray-0 rounded-lg">Adicionar</button>
          </div>
          <TableCustom/>
        </Box>
      </div>
    </div>
  );
};

export default EstablishmentsPage;
