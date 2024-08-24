import { EstablishmentTable } from '../types/establishmentTable';
import { PostingGrid } from '../types/postingGrid';

export const Establishment: EstablishmentTable[] = [
  {
    id: '1',
    img: 'https://picsum.photos/200/300',
    imgOwner:
      'https://media.discordapp.net/attachments/1126326046279606353/1268638522500452432/Image.png?ex=66cad0f1&is=66c97f71&hm=7730542ade9f3307d07ad725bc476d31748ddec83e7b187b624d8faf6a0e433b&=&format=webp&quality=lossless',
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
    id: '1',
    image: 'https://picsum.photos/200/300',
    place: 'Maldives',
    name: 'South Beach',
    tags: ['Beto Sushi', 'Kevin Souza'],
  },
  {
    id: '2',
    image: 'https://picsum.photos/200/300',
    place: 'Maldives',
    name: 'South Beach',
    tags: ['Beto Sushi', 'Kevin Souza'],
  },
];
