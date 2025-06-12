const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Проміс виконався успішно ✔️');
    }

    reject('Проміс виконався з помилкою ❌');
  }, 1000);
});

promise
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду виконана в будь-якому випадку'));

console.log(promise);

function fetchPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resolve =>
    resolve.json(),
  );
}

fetchPokemonById(1)
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error));
