import { z } from 'zod'

export const MailSchema = z.object({
  email: z.string().email('Correo inválido').min(5),
  full_name: z.string(),
  message: z.string()
})
