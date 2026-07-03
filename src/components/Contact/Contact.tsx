import type { Contacts as ContactsType } from '../../types/resume'
import styles from './Contact.module.css'

interface ContactProps {
  data: ContactsType
}

export function Contact({ data }: ContactProps) {
  const links: Array<{ label: string; href: string; text: string }> = []

  if (data.email) links.push({ label: 'email', href: `mailto:${data.email}`, text: data.email })
  if (data.telegram) links.push({ label: 'telegram', href: `https://t.me/${data.telegram}`, text: `@${data.telegram}` })
  if (data.github) links.push({ label: 'github', href: `https://github.com/${data.github}`, text: data.github })
  if (data.hh) links.push({ label: 'hh', href: data.hh, text: 'HeadHunter' })

  if (links.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>contacts</h2>
      <div className={styles.links}>
        {links.map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.label}>{link.label}:</span>
            {link.text}
          </a>
        ))}
      </div>
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} — built with React + Vite
      </div>
    </section>
  )
}
