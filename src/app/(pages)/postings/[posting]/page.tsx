import { ICONS } from '@app/base/constants/icons';
import NamePosting from './components/namePosting';
import Tags from './components/tags';
import { Button, Image } from '@nextui-org/react';

const Posting = () => {
  return (
    <div className="flex flex-col gap-5 w-full px-10">
      <div className="flex justify-center">
        <Image width={400} alt="Posting Image" src="https://picsum.photos/200/300" />
      </div>
      <div className="flex justify-evenly mt-10">
        <div>
          <NamePosting />
        </div>
        <div>
          <Button color="secondary" endContent={<ICONS.editButton />} className="px-10">
            Editar
          </Button>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        <div className="border-t border-info-300 w-full"></div>
        <div className="font-bold text-xl text-center">Estabelecimentos ligados a esse anúncio</div>
        <Tags />
      </div>
    </div>
  );
};

export default Posting;
