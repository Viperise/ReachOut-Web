export const routes = {
  dashboard: () => '/',
  login: () => `/login`,
  establishments: () => '/establishments',
  partners: () => '/partners',
  viewBusiness: (id: number) => `/partners/business/${id}`,
  editBusiness: (id: number) => `/partners/business/${id}/edit`,
  addBusiness: () => '/partners/business/add',
  businessClients: (id: number) => `/partners/business/clients/${id}`,
  editClient: (id: number) => `/partners/business/clients/${id}/edit`,
  addClient: () => '/partners/business/clients/add',
  postings: () => '/postings',
  ratings: () => '/ratings',
};
