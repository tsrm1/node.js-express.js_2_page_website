// Подключаем библиотеку express
const express = require('express');

// привязываем приложение к express
const app = express();

// определяем порт для сервера
const port = 3000;

// определяем маршрут для главной страницы
app.get('/', (req, res) => {
  // прописываем ответ (response) сервера
  res.sendFile(__dirname + '/templates/index.html');
});

// определяем маршрут для страницы about
app.get('/about', (req, res) => {
  // прописываем ответ (response) сервера
  res.sendFile(__dirname + '/templates/about.html');
});

// запускаем сервер и выводим сообщение в консоль
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
