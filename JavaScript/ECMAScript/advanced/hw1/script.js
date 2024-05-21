// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции. Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

//  {
//  title: "Название альбома",
//  artist: "Исполнитель",
//  year: "Год выпуска"
//  }

// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
  { title: "Meteora", artist: "Linkin Park", year: 2003 },
  { title: "Chocolate Starfish", artist: "Limp Bizkit", year: 2002 },
  { title: "Open Your Eyes", artist: "Guano Apes", year: 2000 },
  { title: "Milk", artist: "Garbage", year: 1999 }
]

musicCollection[Symbol.iterator] = function() {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to ? {done: false, value: musicCollection[this.current++]} : {done: true};
    }
  }
}

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда. Необходимо создать систему управления этими заказами, которая позволит:
// Отслеживать, какой повар готовит какое блюдо.
// Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

const chefs = new Map();
chefs.set('Victor', 'Pizza');
chefs.set('Olga', 'Sushi');
chefs.set('Dmitry', 'Dessert');

console.log(`Victor - specialization: ${chefs.get('Victor')}`);
console.log(`Olga - specialization: ${chefs.get('Olga')}`);
console.log(`Dmitry - specialization: ${chefs.get('Dmitry')}`);

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

const dishes = new Map();
dishes.set('Margherita', 'Victor')
dishes.set('Pepperoni', 'Victor')
dishes.set('Filadelphia', 'Olga')
dishes.set('California', 'Olga')
dishes.set('Tiramisu', 'Dmitry')
dishes.set('Cheesecake', 'Dmitry')

console.log(`${chefs.get('Victor')} "Margherita" - cooked by: ${dishes.get('Margherita')}`);
console.log(`${chefs.get('Olga')} "California" - cooked by: ${dishes.get('California')}`);
console.log(`${chefs.get('Dmitry')} "Tiramisu" - cooked by: ${dishes.get('Tiramisu')}`);

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const orders = new Map();

const orderClient1 = new Set();
orderClient1.add('Pepperoni').add('Tiramisu');

const orderClient2 = new Set();
orderClient2.add('California').add('Margherita');

const orderClient3 = new Set();
orderClient3.add('Cheesecake');

orders.set('Alexey', orderClient1);
orders.set('Maria', orderClient2);
orders.set('Irina', orderClient3);

console.log(`Client Alexey ordered: ${[...orders.get("Alexey")]}`);
console.log(`Client Maria ordered: ${[...orders.get("Maria")]}`);
console.log(`Client Irina ordered: ${[...orders.get("Irina")]}`);