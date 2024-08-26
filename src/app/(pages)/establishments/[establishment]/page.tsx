'use client';
import InfoEstablishment from './components/inforEstablishment';
import ImageEstablishment from './components/imageEstablishment';
import { Button } from '@nextui-org/react';
import { ICONS } from '@app/base/constants/icons';

const Establishment = () => {
  return (
    <div className="flex px-2 py-4 w-full max-w-full justify-center">
      <div className="flex flex-wrap gap-32 p-5 rounded-3xl justify-center">
        <div className="flex flex-wrap gap-20">
          <ImageEstablishment />
          <InfoEstablishment />
        </div>
        <div className="flex gap-8">
          <Button color="secondary" endContent={<ICONS.editButton />} variant="bordered" className="px-10">
            Editar
          </Button>
          <Button color="secondary" className="px-10">
            Ver catálogo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Establishment;
