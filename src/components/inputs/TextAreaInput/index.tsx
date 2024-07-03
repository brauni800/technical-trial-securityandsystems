import { InputProps } from '@/utils/types/input'

import styles from './index.module.css'

export default function TextAreaInput ({ label, name, required }: InputProps) {
  return (
    <label className={styles.label}>
      <textarea name={name} placeholder=' ' required={required} />
      <span>{label}</span>
    </label>
  )
}
