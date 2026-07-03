export interface Experience {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string | null
}

export interface Skill {
  name: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
}

export interface Contacts {
  email?: string
  telegram?: string
  github?: string
  hh?: string
}

export interface Resume {
  name: string
  title: string
  location: string
  about: string
  experience: Experience[]
  skills: Skill[]
  portfolio: Project[]
  education: Education[]
  contacts: Contacts
}
