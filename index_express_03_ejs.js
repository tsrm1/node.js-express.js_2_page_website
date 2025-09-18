// Подключаем библиотеку express
const { name } = require('ejs');
const express = require('express');

// привязываем приложение к express
const app = express();

// устанавливаем движок для шаблонов
app.set('view engine', 'ejs');

// указываем папку для шаблонов
app.set('views', './templates');

// определяем порт для сервера
const port = 3000;

// определяем маршрут для главной страницы
app.get('/', (req, res) => {
  // прописываем ответ (response) сервера
  res.render('index', { title: 'Главная страница' });
});

// определяем маршрут для страницы about
app.get('/about', (req, res) => {
  // прописываем ответ (response) сервера
  res.render('about', { title: 'О нас',  name: 'Alex' , surname: 'Smith' , age: 25});
});

// запускаем сервер и выводим сообщение в консоль
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
