import InterestListSection from '@/app/sections/InterestListSection'
import ContactForm from '@/components/forms/ContactForm'
import HeaderSection from '@/app/sections/HeaderSection'
import AboutSection from '@/app/sections/AboutSection'

import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <HeaderSection />
      <AboutSection />
      <InterestListSection />
      <ContactForm />
    </main>
  )
}
