// 1. Создайте объект Person, представляющий человека, с 
// следующими свойствами: name, age и age. Добавьте 
// также методы introduce и changeName. Метод introduce 
// должен выводить информацию о человеке, включая его 
// имя, возраст и пол. Метод changeName должен изменять 
// имя человека на новое заданное значение.

const person = {
  name: 'John',
  age: 25,
  gender: 'male', 
  introduce() {
    return `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}`
  },
  changeName(newName) {
    this.name = newName
  }
}
// console.log(person.introduce()); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// person.changeName("Mike");
// console.log(person.name);

// 2. Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о 
// том, что собака лает. Используйте одалживание метода eat() из 
// объекта Animal для объекта Dog, чтобы вывести сообщение о том, 
// что собака ест.

const animal = {
  name: 'Him',
  eat() {
    return `${this.name} is eating`
  }
}

const dog = {
  name: 'Rex',
  bark() {
    return `${this.name} is barking`
  }
}
// Одалживание метода eat() из объекта Animal к объекту Dog
dog.eat = animal.eat;
// console.log(dog.eat()); // Вывод: Rex is eating.

// 3. Создайте объект calculator с методами add(), subtract() и multiply(), 
// которые выполняют соответствующие математические операции над 
// двумя числами. Используйте методы call и apply для вызова этих 
// методов с передачей аргументов.

const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  }
}
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// 4. Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением 
// имени и возраста персоны.

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce () {
    return `My name is ${this.name} and I'm ${this.age} years old.`
  }
}
const person1 = new Person1("John", 25);
// console.log(person1.introduce()); // Вывод: My name is John and I'm 25 years old.

// 5. Создайте класс BankAccount, который представляет банковский счет. 
// У него должны быть свойства accountNumber (номер счета) и balance 
// (баланс), а также методы deposit(amount) для пополнения счета и 
// withdraw(amount) для снятия денег со счета. Класс должен иметь 
// также статическое свойство bankName, которое содержит название 
// банка.

class BankAccount {
  static bankName = 'My Bank';
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  };
  deposit(amount) {
    const newBalance = this.balance + amount;
    return `Deposited ${amount} into account ${this.accountNumber}. New balance: ${newBalance}`
  };
  withdraw(amount) {
    const newBalance = this.balance - amount;
    if (newBalance < 0) {
      return `Insufficient funds in account ${this.accountNumber}`;
    } else {
      return `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${newBalance}`;
    }
  };
}
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.deposit(500)); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
console.log(account1.withdraw(200)); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
console.log(account1.withdraw(1500)); // Вывод: Insufficient funds in account 1234567890

// 6. Напишите рекурсивную функцию sumDigits, которая принимает 
// положительное целое число в качестве аргумента и возвращает 
// сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)