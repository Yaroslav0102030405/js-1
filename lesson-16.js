const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JS' },
  { label: 'Sass' },
  { label: 'React' },
];

const refs = {
  list: document.querySelector('.js-lists'),
  input: document.querySelector('.js-filter'),
};

refs.input.addEventListener('input', handleFilterChange);

const listItemsMarkup = handleItemsMarkup(tech);

refs.list.innerHTML = listItemsMarkup;

function handleItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function handleFilterChange(event) {
  const filter = event.target.value.toLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );
  console.log(filteredItems);
  const listItemsMarkup = handleItemsMarkup(filteredItems);
  //   console.log(listItems);
  //   refs.list.innerHTML = listItemsMarkup;
  refs.list.innerHTML = listItemsMarkup;
}
