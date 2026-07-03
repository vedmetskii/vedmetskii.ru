import type { Project } from '../../types/resume'
import styles from './Portfolio.module.css'

interface PortfolioProps {
  items: Project[]
}

export function Portfolio({ items }: PortfolioProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>portfolio</h2>
      <div className={styles.grid}>
        {items.map((project, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, j) => (
                <span key={j} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                view project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
