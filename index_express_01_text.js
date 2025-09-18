// Подключаем библиотеку express
const express = require('express');

// привязываем приложение к express
const app = express();

// определяем порт для сервера
const port = 3000;

// определяем маршрут для главной страницы
app.get('/', (req, res) => {
  // прописываем ответ (response) сервера
  res.send('Hello Express!');
});

// определяем маршрут для страницы about
app.get('/about', (req, res) => {
  // прописываем ответ (response) сервера
  res.send('About Express!');
});

// запускаем сервер и выводим сообщение в консоль
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
