import { EstablishmentTable } from '../types/establishmentTable';
import { PostingGrid } from '../types/postingGrid';

export const Establishment: EstablishmentTable[] = [
  {
    id: '1',
    img: 'https://picsum.photos/200/300',
    firstName: 'Restaurante Faustino',
    lastName: 'Restaurante Italiano',
    firstAddress: 'Rua dos Garanhões',
    lastAddress: 'Batista Campos, PA - 66050-552',
    owner: 'Fernando Costa',
    employee: 12,
  },
];

export const Posting: PostingGrid[] = [
  {
    image: 'https://picsum.photos/200/300',
    place: 'Maldives',
    name: 'South Beach',
  },
];
