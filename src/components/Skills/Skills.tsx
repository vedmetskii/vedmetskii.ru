import type { Skill } from '../../types/resume'
import styles from './Skills.module.css'

interface SkillsProps {
  items: Skill[]
}

export function Skills({ items }: SkillsProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>skills</h2>
      <div className={styles.grid}>
        {items.map((skill, i) => (
          <span key={i} className={styles.tag}>{skill.name}</span>
        ))}
      </div>
    </section>
  )
}
