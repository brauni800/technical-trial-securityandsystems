'use client'
import { useFormStatus } from 'react-dom'

import styles from './index.module.css'

export default function SubmitMailButton () {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.button} aria-disabled={pending}>
      Enviar
    </button>
  )
}
