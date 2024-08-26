'use client';
import { Establishment } from '@app/base/mock';
import { useParams } from 'next/navigation';
import { Image } from '@nextui-org/react';

const ImageEstablishment = () => {
  const params = useParams();
  const imgEstab = Establishment.filter((e) => e.id === params.establishment);
  return (
    <Image
      src={imgEstab[0].imgOwner}
      alt="Imagem do proprietário"
      width={250}
      className="rounded-full object-cover w-[250px] h-[250px]"
    />
  );
};

export default ImageEstablishment;
