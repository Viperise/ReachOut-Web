import { z } from 'zod';

export const companySchema = z.object({
  name: z.string().min(1, 'Um nome de empresa é necessário'),
  description: z.string().min(1, 'Uma descrição é necessária'),
});

export type CompanySchema = z.infer<typeof companySchema>;
