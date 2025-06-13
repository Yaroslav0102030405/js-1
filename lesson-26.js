async function getFruits(name) {
  const fruits = {
    apple: '🍎',
    kiwi: '🥝',
    cherry: '🍒',
  };

  return Promise.resolve(fruits[name]);
}

// getFruits('apple').then(apple => console.log(apple));

async function makeSmootchie() {
  try {
    const apple = getFruits('apple');
    const kiwi = getFruits('kiwi');
    const cherry = getFruits('cherry');

    const fruits = await Promise.all([apple, kiwi, cherry]);
    console.log(fruits);

    return fruits;
  } catch (error) {
    console.log(error.message);
  }
}

makeSmootchie();
console.log('end');
