// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:
// - На каждой странице реализован счетчик просмотров
// - Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// - Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// - Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер
// Подсказка: Вы можете сохранять файл в формате JSON, где в объекте ключом будет являться URL страницы, а значением количество просмотров страницы

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let counterMain = JSON.parse(fs.readFileSync('./counter.json', 'utf-8'));
  counterMain.main++;
  fs.writeFileSync('./counter.json', JSON.stringify(counterMain, null, 2));
  res.send(`<h1>Root page</h1><p>Number of view: ${counterMain.main}</p><a href="/about">to About</a>`)
});

app.get('/about', (req, res) => {
  let counterAbout = JSON.parse(fs.readFileSync('./counter.json', 'utf-8'));
  counterAbout.about++;
  fs.writeFileSync('./counter.json', JSON.stringify(counterAbout, null, 2));
  res.send(`<h1>About page</h1><p>Number of view: ${counterAbout.about}</p><a href="/">to Main</a>`)
});

app.listen(3000);
