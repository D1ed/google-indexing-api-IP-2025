# 🚀 Google Indexing API

Инструмент для массовой отправки URL в Google Indexing API с поддержкой современных методов авторизации.

---

## 📋 Описание

Этот проект позволяет автоматически отправлять множество URL в Google Indexing API для ускорения индексации страниц вашего сайта. Используется авторизация через Service Account, полностью совместимая с последними требованиями Google.

---

## 🛠️ Установка и настройка

### Требования

- Node.js 18+
- Google Cloud Project с включённым Indexing API
- Service Account, добавленный как "Владелец" в Google Search Console

---

### 📁 Структура проекта

google-indexing-api/

├── index.js

├── service_account.json

├── urls.txt

└── README.md

---

### 1. Подготовьте файлы

- **urls.txt** — список URL для индексации. Каждый URL на новой строке, без пустых строк.
- **service_account.json** — ключ сервисного аккаунта из Google Cloud Console.

---

### 2. Установка зависимостей

Откройте PowerShell в папке проекта и выполните:

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # (по необходимости)

npm init -y

npm install axios googleapis

npm install googleapis@latest google-auth-library@latest


---

### 3. Запуск

node index.js

---

## ⚙️ Настройка Google Cloud и Search Console

1. **Google Cloud Console**
    - Создайте проект
    - Включите Indexing API
    - Создайте Service Account и скачайте JSON-ключ

2. **Google Search Console**
    - Добавьте сайт как ресурс (например, `https://example.com/`)
    - Добавьте Service Account (email из ключа) как "Владелец"

---

## 📊 Ограничения и квоты

- **200 запросов в день** — стандартная квота Indexing API
- Для увеличения квоты используйте [форму запроса Google](https://docs.google.com/forms/d/e/1FAIpQLSc_mpLw3WnnCt3pVbUHYZZ6ZdOS-c0GIj-WZ_k54SG-jDqCXQ/viewform)

---

## 🐞 Возможные ошибки

| Ошибка                        | Причина                                  | Решение                                      |
|-------------------------------|------------------------------------------|----------------------------------------------|
| 403 Permission denied         | Нет прав владельца у сервисного аккаунта | Добавьте аккаунт как "Владелец" в Search Console |
| 429 Quota exceeded            | Превышена дневная квота                  | Подождите сутки или подайте заявку на увеличение   |
| No key or keyFile set         | Проблема с авторизацией                  | Проверьте файл `service_account.json`        |

---

## 📝 Пример успешного вывода

✅ Авторизация успешна. Начинаю отправку запросов...

✅ Успешно: https://example.com/page1

✅ Успешно: https://example.com/page2

❌ Ошибка для https://example.com/page3: Permission denied

✅ Готово. Все запросы отправлены.


---

**⭐ Поставьте звезду, если проект был полезен!**
