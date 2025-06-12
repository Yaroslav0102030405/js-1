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

//
// import API from './api-service.js';

const containerRef = document.querySelector('.js-con');
const searchForm = document.querySelector('.js-form4');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(searchQuery)
    .then(pokemon => {
      containerRef.innerHTML = renderPokemonCard(pokemon);
    })
    // .catch((error) => console.log(error))
    .catch(onFetchError)
    .finally(() => {
      form.reset();
    });
}

function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

function renderPokemonCard({ sprites, front_default, name, weight, height }) {
  return `<img src="${sprites.front_default}" />
  <h1>${name}</h1>
  <p>${weight}</p>
  <p>${height}</p>`;
}

function onFetchError() {
  alert('Что-то пошло не так');
}
