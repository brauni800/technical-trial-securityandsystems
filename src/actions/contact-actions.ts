'use server'

export async function sendMail (prevState: any, formData: FormData) {
  const rawData = {
    email: formData.get('email'),
    fullName: formData.get('full_name'),
    message: formData.get('message')
  }

  console.log({ rawData })
  return {
    success: true,
    error: null
  }
}
