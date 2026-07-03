import type { Experience as ExperienceType } from '../../types/resume'
import styles from './Experience.module.css'

interface ExperienceProps {
  items: ExperienceType[]
}

export function Experience({ items }: ExperienceProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>experience</h2>
      <div className={styles.timeline}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.position}>
                  {item.position} <span className={styles.company}>@ {item.company}</span>
                </div>
              </div>
              <span className={styles.period}>
                {item.startDate} — {item.endDate ?? 'present'}
              </span>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
