import Image from 'next/image';

const Leftside = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center">
        <Image src="/assets/imgs/Group_3.png" alt="login" width={450} height={450} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl">Bem-Vindo ao ReachOut</p>
        <div className="font-semibold text-lg">
          <p>Sua plataforma completa para gerenciar anúncios, cardápios e muito mais!</p>
          <p>
            Com o ReachOut, você pode criar e divulgar seus anúncios de forma simples e eficiente, além de organizar e
            personalizar seus cardápios de maneira única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
