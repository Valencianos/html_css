// . Создайте файл changePerson.js рядом с файлом writePerson.js. 
// Напишите в нем код, который ➜ прочитает файл person.json, ➜ уменьшит возраст на 10 ➜ изменит город на “Ekaterinburg”  ➜ перезапишет исходный файл person.json

const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'person.json');

const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
data.age -= 10;
data.city = 'Ekaterinburg'; 


fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2));