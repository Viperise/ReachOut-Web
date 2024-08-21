'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';

// const schema = Yup.object().shape({
//   name: Yup.string().required('Nome é obrigatório'),
//   description: Yup.string().required('Descrição é obrigatório'),
// });

// const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const EditBusiness = ({ params }: { params: { id: number } }) => {
  // const router = useRouter();
  // const [business, setBusiness] = useState<Business | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchBusiness = async () => {
  //     try {
  //       const res = await fetch(`${apiUrl}/company/${params.id}`);
  //       if (!res.ok) throw new Error('Failed to fetch business data');
  //       const data: Business = await res.json();
  //       setBusiness(data);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };

  //   fetchBusiness();
  //   setLoading(false);
  // }, [params.id]);

  // const { register, handleSubmit, setValue } = useForm<BusinessFormData>({
  //   resolver: yupResolver(schema),
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
  // if (!business) return <p>Business not found</p>;

  // setValue('name', business.name);
  // setValue('description', business.description);

  // const onSubmit = (data: BusinessFormData) => {
  //   if (business) {
  //     editRow({ ...business, ...data });
  //   }
  //   router.push(routes.partners());
  // };

  // if (!business) {
  //   return <p>Empresa não encontrada</p>;
  // }

  // const breadcrumbItems = [
  //   { name: 'Empresas', href: routes.partners() },
  //   { name: 'Editar', href: routes.editClient(params.id) },
  // ];

  // return (
  //   <div className="flex flex-col items-center p-4">
  //     <Breadcrumbs navItem={breadcrumbItems} />

  //     <p>Editar Empresa</p>
  //     <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-4">
  //       <Input {...register('name')} label="Nome" fullWidth />
  //       <Input {...register('description')} label="Descrição" fullWidth />
  //       <Button type="submit">Salvar</Button>
  //     </form>
  //   </div>
  // );

  return (
    <Card>
      <CardHeader>
        <p>EDITAR EMPRESA EM DESENVOLVIMENTO</p>
      </CardHeader>
      <CardBody>
        <p>ID DA EMPRESA:</p>
        <p>{params.id}</p>
      </CardBody>
    </Card>
  );
};

export default EditBusiness;
