'use client'
import SubmitMailButton from '@/components/buttons/SubmitMailButton'
import EmailFieldInput from '@/components/inputs/EmailFieldInput'
import TextFieldInput from '@/components/inputs/TextFieldInput'
import TextAreaInput from '@/components/inputs/TextAreaInput'

import { sendMail } from '@/actions/contact-actions'
import { useFormState } from 'react-dom'

import styles from './index.module.css'
import { useEffect } from 'react'

const initialState = {
  message: ''
}

export default function ContactForm () {
  const [state, formAction] = useFormState(sendMail, initialState)
  useEffect(() => {
    console.log({ state })
  }, [state])
  return (
    <form action={formAction} className={styles.form}>
      <div>
        <h2>Contácteme</h2>
        <p>Si está interesado en mi perfil, lo invito a mandarme un correo.</p>
      </div>
      <EmailFieldInput required label='Correo' name='email' />
      <TextFieldInput required label='Nombre Completo' name='full_name' />
      <TextAreaInput required label='Mensaje' name='message' />
      <SubmitMailButton />
      {state.message}
    </form>
  )
}
