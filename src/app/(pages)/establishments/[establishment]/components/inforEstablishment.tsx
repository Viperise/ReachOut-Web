import { Establishment } from '@app/base/mock';
import { useParams } from 'next/navigation';

const InfoEstablishment = () => {
  const params = useParams();
  const establishmentDetail = Establishment.filter((e) => e.id === params.establishment);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col ">
        <p className="font-bold text-3xl">{establishmentDetail[0].owner}</p>
        <p>{establishmentDetail[0].cnpj}</p>
        <p>{establishmentDetail[0].lastAddress}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg">Horário de funcionamento</p>
        <div className="flex gap-2">
          <p>{establishmentDetail[0].timeStart}</p>
          <p>às</p>
          <p>{establishmentDetail[0].timeEnd}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-2xl">Contato</div>
        <p>{establishmentDetail[0].contact}</p>
        <p>{establishmentDetail[0].social}</p>
      </div>
    </div>
  );
};

export default InfoEstablishment;
