export const routes = {
  dashboard: () => '/',
  login: () => `/login`,
  establishments: () => '/establishments',
  partners: () => '/partners',
  viewBusiness: (id: string) => `/partners/business/${id}`,
  addBusiness: () => '/partners/business/add',
  businessClients: (id: string) => `/partners/business/clients/${id}`,
  editClient: (id: string) => `/partners/business/clients/${id}/edit`,
  addClient: () => '/partners/business/clients/add',
  postings: () => '/postings',
  ratings: () => '/ratings',
};
