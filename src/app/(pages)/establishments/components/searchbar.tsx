import { IoSearch } from "react-icons/io5";
import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar = ({ placeholder = "Procure pelo Estabelecimento desejado...", onChange, value }: SearchBarProps) => {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
        <IoSearch style={{ fontSize: '24px', color: '#8B83BA' }} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border border-gray-400 rounded-lg py-2 pl-8 pr-3 outline-none text-purple-100 w-full"
      />
    </div>
  );
};

export default SearchBar;
