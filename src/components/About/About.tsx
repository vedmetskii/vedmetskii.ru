import styles from './About.module.css'

interface AboutProps {
  text: string
}

export function About({ text }: AboutProps) {
  if (!text) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>about</h2>
      <p className={styles.text}>{text}</p>
    </section>
  )
}
