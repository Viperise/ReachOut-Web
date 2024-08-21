import { ICONS } from '@app/base/constants/icons';
import Image from 'next/image';

interface GridProps {
  image: string;
  place: string;
  name: string;
}

const Grid = ({ image, place, name }: GridProps) => {
  return (
    <div className="">
      <div className="w-full">
        <Image src={image} alt={'image'} width={300} height={200} className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-1 -mt-20 px-4 text-primary-foreground">
        <p className="text-4xl font-semibold">{name}</p>
        <div className="flex gap-1">
          <ICONS.place />
          <p className="-mt-1">{place}</p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
