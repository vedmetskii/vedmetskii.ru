import type { Resume } from '../../types/resume'
import styles from './Header.module.css'

interface HeaderProps {
  data: Pick<Resume, 'name' | 'title' | 'location'>
}

export function Header({ data }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {data.name.split(' ').map((part, i) => (
          i === 0 ? <span key={i}>{part} </span> : <span key={i} className={styles.titleAccent}>{part} </span>
        ))}
      </h1>
      <p className={styles.subtitle}>{data.title}</p>
      <p className={styles.location}>
        <span>{data.location}</span>
      </p>
    </header>
  )
}
