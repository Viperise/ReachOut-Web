import { EstablishmentTable } from '../types/establishmentTable';
import { PostingGrid } from '../types/postingGrid';

export const Establishment: EstablishmentTable[] = [
  {
    id: '1',
    img: 'https://picsum.photos/200/300',
    imgOwner: 'AAAAAAAAAA',
    firstName: 'Restaurante Faustino',
    lastName: 'Restaurante Italiano',
    cnpj: '23.534.954-43/002',
    firstAddress: 'Rua dos Garanhões',
    lastAddress: 'Batista Campos, PA - 66050-552',
    timeStart: '20:00',
    timeEnd: '00:00',
    owner: 'Fernando Costa',
    contact: '(91) 99999-9999',
    social: '@fulana',
    employee: 12,
  },
];

export const Posting: PostingGrid[] = [
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
    place: 'Maldives',
    name: 'South Beach',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
    place: 'Maldives',
    name: 'South Beach',
  },
];
