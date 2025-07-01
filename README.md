google-indexing-api

Обновлены правила авторизации для Google Indexing API.

В urls.txt должен быть список из URL, каждый с новой строки. Обратите внимание, что когда копируете список, чтобы нигде не было пустых строк.

В service_account.json вставляете свой API ключ из Service accounts в Google Cloud.

Порядок работы:
Запускаете Power Shell и вписываете по порядку:
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
npm init -y
npm install axios googleapis
npm install googleapis@latest google-auth-library@latest
node index.js
