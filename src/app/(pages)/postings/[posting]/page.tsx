import EditButtom from './components/editButtom';
import ImagePosting from './components/imagePosting';
import NamePosting from './components/namePosting';
import Tags from './components/tags';

const Posting = () => {
  return (
    <div className="flex flex-col gap-5 w-full px-10">
      <div className="flex justify-center">
        <ImagePosting />
      </div>
      <div className="flex justify-evenly mt-10">
        <div>
          <NamePosting />
        </div>
        <div>
          <EditButtom />
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
