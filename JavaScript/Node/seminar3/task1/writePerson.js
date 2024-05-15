// Создайте файл writePerson.js Напишите код, который создаст файл person.json в директории запускаемого скрипта и запишет в файл следующий объект:

const user = {
  'name': 'Ivan',
  'surname': 'Ivanov',
  'age': 30,
  'city': 'Moscow'
};

const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(user, null, 2));
