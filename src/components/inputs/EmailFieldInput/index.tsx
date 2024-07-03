import { InputProps } from '@/utils/types/input'

import styles from './index.module.css'

export default function EmailFieldInput ({ label, name, required }: InputProps) {
  return (
    <label className={styles.label}>
      <input type='email' placeholder=' ' name={name} required={required} />
      <span>{label}</span>
    </label>
  )
}
