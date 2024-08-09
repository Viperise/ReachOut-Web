import { Button, Pagination, SharedSelection } from '@nextui-org/react';
import React from 'react';
import { Client } from '../types';

interface BottomContentProps {
  selectedKeys: SharedSelection;
  filteredItems: Array<Client>;
  page: number;
  pages: number;
  setPage: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const BottomContent: React.FC<BottomContentProps> = ({
  selectedKeys,
  filteredItems,
  page,
  pages,
  setPage,
  onPreviousPage,
  onNextPage,
}) => {
  const isAllSelected = selectedKeys === 'all' || selectedKeys.size === filteredItems.length;
  const selectedCount = selectedKeys === 'all' ? filteredItems.length : selectedKeys.size;

  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <span className="w-[30%] text-small text-default-400">
        {isAllSelected ? 'Todos os items selecionados' : `${selectedCount} de ${filteredItems.length} selecionados`}
      </span>
      <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={setPage} />
      <div className="hidden sm:flex w-[30%] justify-end gap-2">
        <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
          Anterior
        </Button>
        <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default BottomContent;
