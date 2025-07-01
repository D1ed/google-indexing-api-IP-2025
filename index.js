const fs = require('fs');
const axios = require('axios');
const { google } = require('googleapis');

async function main() {
  // 1. Инициализация аутентификации
  const auth = new google.auth.GoogleAuth({
    keyFile: './service_account.json',
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  // 2. Загрузка URL
  const urls = fs.readFileSync('./urls.txt', 'utf-8')
    .split('\n')
    .map(url => url.trim())
    .filter(url => url.length > 0);

  try {
    // 3. Получение клиента и токена
    const client = await auth.getClient();
    const token = (await client.getAccessToken()).token;

    console.log('✅ Авторизация успешна. Начинаю отправку запросов...');

    // 4. Отправка запросов
    for (const url of urls) {
      try {
        await axios.post(
          'https://indexing.googleapis.com/v3/urlNotifications:publish',
          {
            url: url,
            type: 'URL_UPDATED'
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }
        );
        console.log(`✅ Успешно: ${url}`);
      } catch (error) {
        console.error(`❌ Ошибка для ${url}:`, error.response?.data || error.message);
      }
    }

    console.log('✅ Готово. Все запросы отправлены.');
  } catch (err) {
    console.error('🚫 Критическая ошибка авторизации:', err);
  }
}

main();
