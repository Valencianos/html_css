// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.

class BankAccount {
  // Приватное свойство для хранения баланса
  #balance = 0;
  // Геттер для получения текущего баланса
  get balance() {
    return this.#balance;
  }
  // Метод для внесения денег на счет
  deposit(amount) {
    if (amount < 0) throw new Error('Deposit cannot be negative');
    this.#balance += amount;
    return this.#balance;
  }
  // withdraw(amount) метод для снятия денег со счета
  withdraw(amount) {
    if (this.#balance < amount) throw new Error('You do not have sufficient funds');
      this.#balance -= amount;
      return this.#balance;
  }
  // constructor(initialBalance)  конструктор для инициализации начального баланса
  constructor(balance) {
    this.#balance = balance;
  }
}

// Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log(account.balance);

// account.deposit(200);
// console.log(account.balance);

// account.withdraw(100);
// console.log(account.balance);

// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет. Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class PremiumUser extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
  premiumAccount = null;
  setPremiumAccount() {
    this.setPremiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
  }
}

// Создать RegularUser
class RegularUser extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

function getAccountInfo(user) {
  // Премиум действителен до такой-то даты или информация отсутствует
  if (user instanceof PremiumUser) {
    console.log(`Premium account valid till ${new Date(user.premiumAccount).getFullYear()}` ?? `information not found`, user.firstName, user.lastName);
  } else if (user instanceof RegularUser) {
    console.log(`User without Premium account: ${user.firstName, user.lastName}`);
  } else {
    console.log(`Cannot recognize type of user`);
  }
}

// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.

const button = document.querySelector('#btn');
const push = document.querySelector('#input');
const result = document.querySelector('#out');
button.addEventListener('click', () => {
  try {
    const inputElem = push.value;
    if (isNaN(inputElem)) {
      throw new Error ('You enter not a number')
    }
    result.textContent = `You enter a number ${inputElem}`;
  } catch (error) {
    result.textContent = error.message;
  }
})
