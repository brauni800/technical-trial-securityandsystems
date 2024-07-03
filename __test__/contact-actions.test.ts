import { sendMail } from '@/actions/contact-actions'

describe('send mails', () => {
  it('send a successful mail', async () => {
    const initialState = { success: false, error: null }
    const formData = new FormData()
    formData.set('email', 'abc@abc.com')
    formData.set('full_name', 'abc def')
    formData.set('message', 'test message')
    const data = await sendMail(initialState, formData)
    expect(data).toStrictEqual({ success: true, error: null })
  })

  it('send a mail with bad email format', async () => {
    const initialState = { success: false, error: null }
    const formData = new FormData()
    formData.set('email', 'abc@abc')
    formData.set('full_name', 'abc def')
    formData.set('message', 'test message')
    const data = await sendMail(initialState, formData)
    expect(data).toStrictEqual({ success: false, error: { email: ['Correo inválido'] } })
  })
})
