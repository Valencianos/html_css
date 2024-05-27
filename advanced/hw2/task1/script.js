// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги. Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке. 
// Реализуйте геттер allBooks, который возвращает текущий список книг. 
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];

  get allbooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error('Book already is in library');
    } else {
      this.#books.push(title);
    }
  }

  removeBook(title) {
    if (!this.hasBook(title)) {
      throw new Error('Book could not be found');
    } else {
      const index = this.#books.indexOf(title);
      this.#books.splice(index, 1);
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }

  constructor(books) {
    this.#books = books;
  }
}

let books = new Library(['you and me']);
console.log(books);

books.addBook('Tom Sower');
console.log(books);
books.addBook('Lara Croft');
console.log(books);
books.addBook('Heracules');
console.log(books);
books.addBook('Tom Sower');
console.log(books);
books.removeBook('Lara Croft')
console.log(books);
books.removeBook('Once')
console.log(books);
