import { ICONS } from '@app/base/constants/icons';

const EditButtom = () => {
  return (
    <button className="flex gap-1 text-lg bg-info-500 text-primary-foreground px-7 py-2 rounded-lg justify-center">
      <p>Editar</p>
      <div className="mt-1">
        <ICONS.editButton />
      </div>
    </button>
  );
};

export default EditButtom;
