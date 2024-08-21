'use client';
import InfoEstablishment from './components/inforEstablishment';
import ImageEstablishment from './components/imageEstablishment';
import ButtomsEstablishment from './components/buttomsEstablishment';

const Establishment = () => {
  return (
    <div className="flex px-2 py-4 w-full max-w-full justify-center">
      <div className="flex flex-wrap gap-32 p-5 rounded-3xl justify-center">
        <div className="flex flex-wrap gap-20">
          <ImageEstablishment />
          <InfoEstablishment />
        </div>
        <div>
          <ButtomsEstablishment />
        </div>
      </div>
    </div>
  );
};

export default Establishment;
