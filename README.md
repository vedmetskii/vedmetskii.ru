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

## Сборка и деплой

```bash
npm run build     # сборка в dist/
npm run deploy    # сборка + публикация на GitHub Pages
```

### Кастомный домен

Для своего домена:
- Настрой CNAME/A-запись на GitHub Pages
- В конфиг Vite `base: '/'` (уже стоит)
