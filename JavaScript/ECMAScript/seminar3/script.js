// 1. Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта 
// obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом 
// Object.prototype.

function getPrototypeChain(obj) {
  let proto = obj.constructor.prototype;
  let result = '';
  while (proto) {
    result += ' -> ' + proto.constructor.name + '.prototype';
    proto = Object.getPrototypeOf(proto)
  }
  result += ' -> null';
  return result;
}
console.log(getPrototypeChain(document.body));

// 2. Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.introduce = () => {
    return `Меня зовут ${this.name} и мне ${this.age} лет.`
  }
}
// Пример: 
const person1 = new Person("John", 25);
console.log(person1.introduce()); // Вывод: Меня зовут John и мне 25 лет.

// 3. Напишите конструктор объекта BankAccount, который будет представлять банковский счет. Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число). Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму, если на счету есть достаточно средств. Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.

function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.deposit = (amount) => {
    return this.balance += amount;
  }
  this.withdraw = (amount) => {
    if (this.balance - amount < 0) {
      console.log('Недостаточно средств на счете.');
    } else {
      return this.balance -= amount;
    }
  }
  this.getBalance = () => {
    return `${this.balance}`;
  }
}
// Пример:
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

// 4. Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного. 
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч."

class Animal {
  name;
  constructor (name) {
    this.name = name;
  }
  speak () {
    console.log('Животное издает звук.');
  }
}
class Dog extends Animal {
  breed;
  constructor (name, breed) {
    super(name);
    this.breed = breed;
  }
  fetch () {
    console.log(`Собака ${this.name} принесла мяч.`)
  }
  speak () {
    console.log(`Животное ${this.name} издает звук.`);
  }
}
// Пример:
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// Создайте класс Product, который будет представлять товар в магазине. У товара должны быть следующие свойства:
// name (строка) - имя товара.
// price (число) - цена товара за одну единицу.

class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }
}

// Создайте класс ShoppingCart, представляющий корзину интернет-магазина. Конструктор класса ShoppingCart должен принимать два параметра:
// customerName (строка) - имя покупателя.
// initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста).
// У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину. Метод должен принимать два параметра:
// product (объект класса Product) - товар, который добавляется в корзину.
// quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину. Если quantity не указано, считается, что добавляется одна единица товара.
// У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.
// У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей стоимостью заказа и благодарностью за покупку. Формат вывода сообщения: "Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".

class ShoppingCart {
  constructor (customerName, initialTotalCost=0) {
    this.customerName = customerName;
    this.initialTotalCost = initialTotalCost;
    this.items = [];
  }
  addItem(product, quantity=1) {
    this.items.push({product, quantity});
    this.initialTotalCost += product.price * quantity;
  }
  getCurrentTotalCost() {
    return this.initialTotalCost;
  }
  checkout() {
    console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.initialTotalCost} рублей. Спасибо за покупку!`);
  }
}
