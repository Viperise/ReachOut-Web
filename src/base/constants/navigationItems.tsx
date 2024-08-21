import { ICONS } from './icons';
import { routes } from './routes';

export const routeTitles = [
  { title: 'Dashboard', path: routes.dashboard(), icon: ICONS.home },
  { title: 'Estabelecimentos', path: routes.establishments(), icon: ICONS.office },
  { title: 'Empresas', path: routes.partners(), icon: ICONS.users },
  { title: 'Empresa', path: (id: number) => routes.viewBusiness(id), icon: ICONS.office },
  { title: 'Adicionar Empresa', path: routes.addBusiness(), icon: ICONS.office },
  { title: 'Funcionários', path: (id: number) => routes.businessClients(id), icon: ICONS.users },
  { title: 'Adicionar Funcionário', path: routes.addClient(), icon: ICONS.users },
  { title: 'Anúncios', path: routes.postings(), icon: ICONS.ads },
  { title: 'Avaliações', path: routes.ratings(), icon: ICONS.star },
];
export const sideBarItems = [
  { title: 'Dashboard', path: '/', icon: ICONS.home },
  { title: 'Clientes Parceiros', path: '/partners', icon: ICONS.users },
  { title: 'Estabelecimentos', path: '/establishments', icon: ICONS.office },
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
