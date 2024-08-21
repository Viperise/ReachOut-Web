const columns = [
  { name: 'NOME', uid: 'name' },
  { name: 'FUNÇÃO', uid: 'role' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ESTABELECIMENTOS', uid: 'establishments' },
  { name: 'AÇÕES', uid: 'actions' },
];

const statusOptions = [
  { name: 'Ativo', uid: 'ativo' },
  { name: 'Pausa', uid: 'pausa' },
  { name: 'Ferias', uid: 'ferias' },
];

const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    establishments: '5 ativos',
    employees: '10 funcionários',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',
    team: 'Development',
    status: 'paused',
    establishments: '5 ativos',
    employees: '10 funcionários',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Senior Developer',
    team: 'Development',
    status: 'active',
    establishments: '5 ativos',
    employees: '10 funcionários',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'Community Manager',
    team: 'Marketing',
    status: 'vacation',
    establishments: '5 ativos',
    employees: '10 funcionários',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'Sales Manager',
    team: 'Sales',
    status: 'active',
    establishments: '5 ativos',
    employees: '10 funcionários',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
];

export { columns, statusOptions, users };
