import styles from './index.module.css'

export default function AboutSection () {
  return (
    <section className={['pattern-zigzag-xl', styles.container].join(' ')}>
      <div className={styles.about}>
        <h2>Sobre mí</h2>
        <p>
          Soy una diseñadora gráfica apasionada por crear diseños hermosos y funcionales. Me encanta aprender nuevas técnicas y experimentar con diferentes estilos. Cuando no estoy diseñando, me gusta pasar tiempo con mi familia y amigos, viajar y explorar nuevas culturas.
        </p>
        <p>
        Soy una persona muy creativa y me encanta usar mi imaginación para crear cosas nuevas. También soy muy detallista y me aseguro de que mis diseños sean perfectos. Me encanta trabajar con clientes y ayudarles a dar vida a sus visiones.
        </p>
        <p>
        Creo que el diseño gráfico es una herramienta poderosa que se puede utilizar para comunicar, informar y persuadir. Me siento muy afortunada de poder hacer lo que amo y espero seguir creando diseños hermosos y funcionales durante muchos años más.
        </p>
      </div>
    </section>
  )
}
