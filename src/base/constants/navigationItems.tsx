import { ICONS } from './icons';
import { routes } from './routes';

export const routeTitles = [
  { title: 'Dashboard', path: routes.dashboard(), icon: ICONS.home },
  { title: 'Estabelecimentos', path: routes.establishments(), icon: ICONS.office },
  { title: 'Clientes Parceiros', path: routes.partners(), icon: ICONS.users },
  { title: 'Empresas Parceiras', path: routes.viewBusiness(':id'), icon: ICONS.office },
  { title: 'Adicionar Empresa', path: routes.addBusiness(), icon: ICONS.office },
  { title: 'Clientes da Empresa', path: routes.businessClients(':id'), icon: ICONS.users },
  { title: 'Adicionar Cliente', path: routes.addClient(), icon: ICONS.users },
  { title: 'Anúncios', path: routes.postings(), icon: ICONS.ads },
  { title: 'Avaliações', path: routes.ratings(), icon: ICONS.star },
];

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
