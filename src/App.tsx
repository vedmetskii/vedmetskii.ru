import resume from './data/resume.json'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Education } from './components/Education/Education'
import { Contact } from './components/Contact/Contact'
import type { Resume } from './types/resume'

const data = resume as Resume

export default function App() {
  if (!data.name) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '16px',
        padding: '24px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: 'var(--accent)' }}>Сайт-визитка</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
          Заполните <code style={{ color: 'var(--accent)' }}>src/data/resume.json</code> своими данными и запустите <code style={{ color: 'var(--accent)' }}>npm run dev</code>
        </p>
      </div>
    )
  }

  return (
    <>
      <Header data={{ name: data.name, title: data.title, location: data.location }} />
      <About text={data.about} />
      <Experience items={data.experience} />
      <Skills items={data.skills} />
      <Portfolio items={data.portfolio} />
      <Education items={data.education} />
      <Contact data={data.contacts} />
    </>
  )
}
