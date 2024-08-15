import { ICONS } from './icons';

export const partnersRoute = '/partners';

export const sideBarItems = [
  { title: 'Dashboard', path: '/', icon: ICONS.home },
  { title: 'Estabelecimentos', path: '/establishments', icon: ICONS.office },
  { title: 'Clientes Parceiros', path: '/partners', icon: ICONS.users },
  { title: 'Anúncios', path: '/postings', icon: ICONS.ads },
  { title: 'Avaliações', path: '/ratings', icon: ICONS.star },
];

export const navItems = [
  {
    key: 'logout',
    label: 'Logout',
    path: '/login',
  },
];
