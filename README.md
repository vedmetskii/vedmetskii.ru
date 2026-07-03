# vedmetskii — сайт-визитка

Сайт-визитка DevOps Engineer. Стек: React + Vite + TypeScript + CSS Modules.

## Разработка

```bash
npm install
npm run dev
```

## Данные

Заполни `src/data/resume.json` — это единственный источник данных для сайта.

## Интеграция с hh.ru (опыт работы)

Скрипт вытягивает секцию `experience` из твоего резюме на hh.ru.

1. Зарегистрируй OAuth-приложение на https://dev.hh.ru
2. Получи Access Token (авторизация соискателя)
3. Узнай ID резюме (из URL: `hh.ru/resume/<ID>`)
4. Запусти:

```bash
HH_TOKEN=токен HH_RESUME_ID=id_резюме npm run fetch-hh
```

Скрипт обновит `experience` в `src/data/resume.json`, остальные поля не тронет.

## CI/CD (GitHub Actions)

| Триггер | Workflow | Действие |
|---------|----------|----------|
| Push в `main` (включая merge PR) | `deploy.yml` | Сборка → публикация на GitHub Pages |
| PR в `main` / Push в любую другую ветку | `ci.yml` | Проверка: `npm run lint` + `npm run build` |

### GitHub Secrets

Для автоматического обновления опыта с hh.ru при деплое, добавь в **Settings → Secrets and variables → Actions**:

| Secret | Значение |
|--------|---------|
| `HH_TOKEN` | Access Token от OAuth-приложения на dev.hh.ru |
| `HH_RESUME_ID` | ID твоего резюме (из URL: `hh.ru/resume/<ID>`) |

Если Secrets не заданы — опыт не будет подтягиваться, но деплой всё равно выполнится. Данные будут из `src/data/resume.json`.

### Локальный деплой

```bash
npm run build     # сборка в dist/
npm run deploy    # публикация на GitHub Pages
```

### Кастомный домен

Для своего домена:
- Настрой CNAME/A-запись на GitHub Pages
- В конфиг Vite `base: '/'` (уже стоит по умолчанию)
