import Image from 'next/image'

import styles from './index.module.css'

interface Interest {
  imgSrc: string
  label: string
  key: string
}

const list: Interest[] = [
  { imgSrc: '/graphic_design.webp', key: 'graphic_design', label: 'Diseño gráfico' },
  { imgSrc: '/photography.webp', key: 'photography', label: 'Fotografía' },
  { imgSrc: '/travel.webp', key: 'travel', label: 'Viajes' },
  { imgSrc: '/books.webp', key: 'books', label: 'Lectura' },
  { imgSrc: '/cinema.webp', key: 'cinema', label: 'Cine' },
  { imgSrc: '/animation.webp', key: 'animation', label: 'Animación' }
]

export default function InterestListSection () {
  return (
    <section className={styles.interest}>
      <h2>Mis intereses</h2>
      <div className={styles.gallery}>
        {list.map(({ imgSrc, key, label }) => (
          <article key={key}>
            <Image
              src={imgSrc}
              height={250}
              width={350}
              alt={key}
            />
            <div className={styles.caption}>
              <p>{label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
