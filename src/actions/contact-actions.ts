'use server'

import { MailSchema } from '@/utils/schemas/mail'

export async function sendMail (prevState: any, formData: FormData) {
  const validatedFields = MailSchema.safeParse({
    email: formData.get('email'),
    full_name: formData.get('full_name'),
    message: formData.get('message')
  })

  return {
    success: validatedFields.success,
    error: validatedFields.error?.flatten().fieldErrors ?? null
  }
}
