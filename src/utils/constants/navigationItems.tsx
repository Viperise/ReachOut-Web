import { ICONS } from './icons';

export const sideBarItems = [
  { title: 'Dashboard', path: '/', icon: ICONS.home },
  { title: 'Estabelecimentos', path: '/establishments', icon: ICONS.office },
  { title: 'Clientes Parceiros', path: '/clients', icon: ICONS.users },
  { title: 'Anúncios', path: '/postings', icon: ICONS.ads },
];

export const navItems = [
  {
    key: 'logout',
    label: 'Logout',
    path: '/login',
  },
];
