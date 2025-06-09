const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

const newNumbers = numbers.forEach((n, i) => {
  console.log(n, i);
});

const fruits = [
  { name: 'Apples', quentity: 50, online: true },
  { name: 'Bananas', quentity: 100, online: false },
  { name: 'Kiwi', quentity: 150, online: true },
  { name: 'Grapes', quentity: 200, online: true },
];

const fruitsNames = fruits.map(fruit => fruit.name);
console.log(fruitsNames);

const fruitsNameAndQuantity = fruits.map(({ name, quentity }) => ({
  name,
  quentity,
}));
console.log(fruitsNameAndQuantity);

const updateFruits = fruits.map(fruit => {
  return { ...fruit, quentity: fruit.quentity * 3 };
});
console.log(updateFruits);

const updateName = 'Kiwi';

const updateFruitsName = fruits.map(fruit =>
  updateName === fruit.name
    ? { ...fruit, quentity: fruit.quentity + 500 }
    : fruit,
);
console.log(updateFruitsName);

const filteredQuantity = fruits.filter(
  f => f.quentity < 100 || f.quentity > 150,
);
console.log(filteredQuantity);

const filteredOnline = fruits.filter(f => f.online);
console.log(filteredOnline);

const findName = 'Kiwi';

const findFruits = fruits.find(fruit => findName === fruit.name);
console.log(findFruits);

const find = (allFruits, fruitsId) => {
  return allFruits.find(fruit => fruitsId === fruit.name);
};
console.log(find(fruits, findName));

const fruitsSomeOnline = allFruits => {
  return allFruits.some(fruit => fruit.online);
};
console.log(fruitsSomeOnline(fruits));

const fruitsEveryOnline = allFruits => {
  return allFruits.every(fruit => fruit.online);
};
console.log(fruitsEveryOnline(fruits));

const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(total);

const salary = {
  a: 50,
  b: 100,
  c: 150,
};

const values = Object.values(salary).reduce((total, value) => total + value);
console.log(values);

const totalQuantity = fruits.reduce((total, fruit) => {
  return total + fruit.quentity;
}, 0);
console.log(totalQuantity);

const sortedNumbers = [...numbers].sort(
  (currentEl, nextEl) => nextEl - currentEl,
);
console.log(sortedNumbers);
console.log(numbers);

const sortedFruits = [...fruits].sort(
  (fruitPrev, fruitNext) => fruitNext.quentity - fruitPrev.quentity,
);
console.log(sortedFruits);

const sortedName = [...fruits].sort((prevFruit, nextFruit) => {
  // console.log(prevFruit);
  // console.log(nextFruit);
  return nextFruit > prevFruit;
});
console.log(sortedName);

const sortedNumber = numbers
  .filter(n => n > 5)
  .map(n => n * 2)
  .sort((a, b) => b - a);
console.log(sortedNumber);

const sortedOnline = fruits
  .filter(fruit => fruit.online)
  .map(n => {
    return { ...n, quentity: n.quentity * 2 };
  })
  .sort((a, b) => b.quentity - a.quentity);
console.log(sortedOnline);
