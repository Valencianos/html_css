// Вы разрабатываете интернет-магазин и хотите добавить функциональность динамического фильтрации товаров по категориям. У вас есть форма с выпадающим списком (select), в котором пользователь может выбрать категорию товаров. При выборе категории товаров, необходимо динамически обновлять список отображаемых товаров на странице, чтобы пользователь видел только товары из выбранной категории.
// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Выпадающий список (select) с категориями товаров.
// b. Список товаров, который будет отображать товары в соответствии с выбранной категорией.
// c. Каждый товар в списке должен содержать название и категорию.
// 2. Используйте HTML для создания элементов интерфейса.
// 3. Используйте JavaScript для обработки событий:
// ○ При выборе категории товаров в выпадающем списке, форма должна следить за изменениями.
// ○ Динамически обновите список товаров на странице, чтобы отображать только товары из выбранной категории.
// 4. Создайте объекты товаров и их категорий для имитации данных магазина.
// 5. Стилизуйте элементы интерфейса с помощью CSS для улучшения внешнего вида.

const productData = [
  {
    id: 1,
    name: 'Notebook',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smartphone',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Coffee Machine',
    category: 'Kitchenware'
  },
  {
    id: 4,
    name: 'Camera',
    category: 'Electronics'
  },
  {
    id: 5,
    name: 'Microwave Oven',
    category: 'Kitchenware'
  },
  {
    id: 6,
    name: 'Book',
    category: 'Books'
  },
  {
    id: 7,
    name: 'T-shirt',
    category: 'Clothes'
  },
  {
    id: 8,
    name: 'Hat',
    category: 'Clothes'
  },
  {
    id: 9,
    name: 'Chair',
    category: 'Furniture'
  },
  {
    id: 10,
    name: 'Table',
    category: 'Furniture'
  }
]

const category = document.getElementById('category');
const products = document.querySelector('.products');

const renderProducts = (params) => {
  return params.map(product => `
    <div class="product">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
    </div>
    `
  ).join('');
}

const productCode = renderProducts(productData);
products.innerHTML = productCode;

category.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  const filteredProducts = getProductsByCategory(selectedCategory);
  products.innerHTML = renderProducts(filteredProducts);
});

const getProductsByCategory = (category) => {
  if (category === 'ShowAll') {
    return productData;
  }
  return productData.filter(product => product.category === category);
}