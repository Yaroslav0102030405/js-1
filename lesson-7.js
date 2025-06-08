const mathematics = function (a, b, callback) {
  return callback(a, b);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

console.log(mathematics(2, 3, add));
console.log(mathematics(5, 1, sub));
console.log(mathematics(10, 2, multiply));

const buttonRef = document.querySelector('.button-js');

const handleButtonClick = function k() {
  console.log('Клік по кнопці');
};

buttonRef.addEventListener('click', handleButtonClick);

const onRequestSuccess = function (data) {
  console.log(data);
};

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(onRequestSuccess);

const filterNumbers = function (array, callback) {
  const filtered = [];

  for (const element of array) {
    if (callback(element)) {
      filtered.push(element);
    }
  }

  return filtered;
};

const moreNumbers = function (value) {
  return value > 3;
};

const lessNumbers = function (value) {
  return value < 3;
};

console.log(filterNumbers([1, 2, 3, 4, 5], moreNumbers));
console.log(filterNumbers([1, 2, , 3, 4, 5], lessNumbers));

const fruits = [
  { name: 'Apples', quentity: 50 },
  { name: 'Bananas', quentity: 100 },
  { name: 'Kiwi', quentity: 150 },
  { name: 'Grapes', quentity: 200 },
];

const getFruitsQuantity = function (fruit) {
  return fruit.quentity > 100;
};

console.log(filterNumbers(fruits, getFruitsQuantity));

function makeGreeter(greeting) {
  // Зовнішня функція
  // 'greeting' - це змінна зовнішньої функції

  function greet(name) {
    // Внутрішня функція
    console.log(`${greeting}, ${name}!`);
  }

  return greet; // Повертаємо внутрішню функцію
}

const sayHello = makeGreeter('Привіт'); // Викликаємо makeGreeter, вона повертає функцію greet
const sayHi = makeGreeter('Hi'); // Ще один виклик, створюємо іншу функцію greet

sayHello('Світ'); // Викликаємо повернуту функцію. Вона "пам'ятає" 'greeting' як "Привіт". Виведе: "Привіт, Світ!"
sayHi('Джон'); // Викликаємо іншу повернуту функцію. Вона "пам'ятає" 'greeting' як "Hi". Виведе: "Hi, Джон!"

const createAddress = function (type) {
  const address = type.toUpperCase();

  const nameUser = function (name) {
    return `${address} ${name}`;
  };

  return nameUser;
};

const addressUkraine = createAddress('Україна');
const addressPoland = createAddress('Польща');
console.log(addressUkraine('Ярослав'));
console.log(addressPoland('Паша'));
