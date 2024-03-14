import { z } from 'zod'

export const createOccupationAreaSchemaValidation = z.object({
  name: z
    .string()
    .min(1, 'campo nome é obrigatório')
    .max(50, 'campo nome deve conter no maximo 50 caracteres'),
})
