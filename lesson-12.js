const buttonRef = document.querySelector('.button-js');
buttonRef.textContent = 'Нова назва';
console.log(buttonRef);

console.log(buttonRef.dataset.action);
buttonRef.classList.add('super', 'cool');
buttonRef.classList.remove('super');
buttonRef.classList.toggle('add');
console.log(buttonRef.classList.contains('active'));

const listRef = document.querySelector('.js-list');
console.log(listRef.firstElementChild);
console.log(listRef.children[1]);
console.log(listRef.lastElementChild);

const item = document.createElement('li');

const link = document.createElement('a');

item.appendChild(link);
console.log(item);

listRef.insertBefore(item, listRef.firstElementChild);
