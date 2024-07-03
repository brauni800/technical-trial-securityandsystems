import { InputProps } from '@/utils/types/input'

import styles from './index.module.css'

export default function TextFieldInput ({ label, name, required }: InputProps) {
  return (
    <label className={styles.label}>
      <input type='text' placeholder=' ' name={name} required={required} />
      <span>{label}</span>
    </label>
  )
}
