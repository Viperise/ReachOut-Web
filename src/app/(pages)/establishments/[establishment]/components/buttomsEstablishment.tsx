import { ICONS } from '@/base/constants/icons';

const ButtomsEstablishment = () => {
  return (
    <div className="flex gap-8">
      <button className="flex gap-2 text-lg border border-info-500 text-info-500 px-12 py-2 rounded-lg justify-center">
        <p>Editar</p>
        <div className="mt-1">
          <ICONS.editButton />
        </div>
      </button>
      <button className="flex gap-2 text-lg bg-info-500 text-primary-foreground px-12 py-2 rounded-lg justify-center">
        <p>Ver Catálogo</p>
      </button>
    </div>
  );
};

export default ButtomsEstablishment;
