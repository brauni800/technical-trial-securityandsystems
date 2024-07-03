'use client'
import SubmitMailButton from '@/components/buttons/SubmitMailButton'
import EmailFieldInput from '@/components/inputs/EmailFieldInput'
import TextFieldInput from '@/components/inputs/TextFieldInput'
import TextAreaInput from '@/components/inputs/TextAreaInput'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { sendMail } from '@/actions/contact-actions'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'

import styles from './index.module.css'

const initialState = {
  success: false,
  error: null
}

export default function ContactForm () {
  const [state, formAction] = useFormState(sendMail, initialState)

  useEffect(() => {
    if (state.success) {
      toast.success('El correo se envió correctamente 👍')
    }

    if (state.error) {
      const [, firstErrorList] = Object.entries(state.error).find(([, errorList]) => errorList.length)!
      toast.error(`Error 💀: ${firstErrorList[0]}`)
    }
  }, [state])

  return (
    <>
      <form action={formAction} className={styles.form}>
        <div>
          <h2>Contácteme</h2>
          <p>Si está interesado en mi perfil, lo invito a mandarme un correo.</p>
        </div>
        <EmailFieldInput required label='Correo' name='email' />
        <TextFieldInput required label='Nombre Completo' name='full_name' />
        <TextAreaInput required label='Mensaje' name='message' />
        <SubmitMailButton />
      </form>
      <ToastContainer />
    </>
  )
}
