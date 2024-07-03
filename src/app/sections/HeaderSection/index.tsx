import Image from 'next/image'

import styles from './index.module.css'

export default function HeaderSection () {
  return (
    <header className={styles.header}>
      <div className={styles.intro}>
        <Image
          src='/fake_profile_photo.webp'
          alt='profile'
          height={300}
          width={300}
          priority
        />
        <h1>María Perez</h1>
      </div>
    </header>
  )
}
