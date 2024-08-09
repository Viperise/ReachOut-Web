import React from 'react';

interface SelectItemsPerPageProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

const SelectItemsPerPage: React.FC<SelectItemsPerPageProps> = ({ itemsPerPage, setItemsPerPage }) => {
  const options = [5, 10, 15, 20];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
  };

  return (
    <select value={itemsPerPage} onChange={handleChange} className="border p-2 rounded">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectItemsPerPage;
