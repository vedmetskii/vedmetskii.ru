/**
 * Build-time скрипт для выгрузки опыта работы с hh.ru API.
 *
 * Использование:
 *   HH_TOKEN=... HH_RESUME_ID=... npx tsx scripts/fetch-hh.ts
 *
 * Требования:
 *   - Зарегистрировать OAuth приложение на https://dev.hh.ru
 *   - Получить Access Token (авторизация пользователя-соискателя)
 *   - Узнать ID резюме (берётся из URL: hh.ru/resume/<ID>)
 *
 * Скрипт обновляет секцию "experience" в src/data/resume.json,
 * сохраняя остальные поля без изменений.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const resumePath = resolve(__dirname, '..', 'src', 'data', 'resume.json')

const TOKEN = process.env.HH_TOKEN
const RESUME_ID = process.env.HH_RESUME_ID

if (!TOKEN || !RESUME_ID) {
  console.error('Ошибка: HH_TOKEN и HH_RESUME_ID должны быть заданы в окружении.')
  console.error('  HH_TOKEN=%s HH_RESUME_ID=%s', TOKEN ? '***' : '<missing>', RESUME_ID ? '***' : '<missing>')
  process.exit(1)
}

interface HHExperience {
  position: string
  company?: string
  company_name?: string
  start?: string
  start_month?: number
  start_year?: number
  end?: string | null
  end_month?: number | null
  end_year?: number | null
  description?: string
}

interface HHResume {
  experience?: HHExperience[]
}

async function fetchResume(): Promise<HHResume> {
  const res = await fetch(`https://api.hh.ru/resumes/${RESUME_ID}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'User-Agent': 'vedmetskii/1.0 (site-portfolio)',
    },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`hh.ru API error: ${res.status} — ${text}`)
  }

  return res.json()
}

function formatDate(month?: number, year?: number): string {
  if (!month || !year) return String(year ?? '')
  const m = String(month).padStart(2, '0')
  return `${m}.${year}`
}

async function main() {
  console.log('Fetching resume from hh.ru...')
  const data = await fetchResume()

  if (!data.experience || data.experience.length === 0) {
    console.log('No experience data found in resume.')
    return
  }

  const experience = data.experience.map((exp: HHExperience) => ({
    company: exp.company_name ?? exp.company ?? '',
    position: exp.position,
    description: exp.description?.trim() ?? '',
    startDate: formatDate(exp.start_month, exp.start_year),
    endDate: exp.end ? formatDate(exp.end_month, exp.end_year) : null,
  }))

  const resume = JSON.parse(readFileSync(resumePath, 'utf-8'))
  resume.experience = experience
  writeFileSync(resumePath, JSON.stringify(resume, null, 2) + '\n')

  console.log(`Updated experience: ${experience.length} entries written to src/data/resume.json`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
