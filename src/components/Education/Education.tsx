import type { Education as EducationType } from '../../types/resume'
import styles from './Education.module.css'

interface EducationProps {
  items: EducationType[]
}

export function Education({ items }: EducationProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>education</h2>
      {items.map((item, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.institution}>{item.institution}</div>
              <div className={styles.degree}>{item.degree} — {item.field}</div>
            </div>
            <span className={styles.period}>
              {item.startDate} — {item.endDate}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
