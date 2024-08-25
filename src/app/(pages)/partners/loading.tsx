import { Spinner } from '@nextui-org/react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-50 md:m-12">
      <Spinner label="Carregando..." color="primary" />
    </div>
  );
};

export default Loading;
