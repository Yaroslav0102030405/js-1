const containsButtons = document.querySelector('.js-container-buttons');

containsButtons.addEventListener('click', handleClick);

const selectedTags = [];

function handleClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActivebutton = document.querySelector('.btn-active');

  if (currentActivebutton) {
    currentActivebutton.classList.remove('btn-active');
  }

  event.target.classList.add('btn-active');

  selectedTags.push(event.target.textContent);

  console.log(selectedTags);
}

const colors = [
  { hex: ' #DFFF00', rgb: '223, 255, 0' },
  { hex: '#FFBF00', rgb: '255, 191, 0' },
  { hex: '#FF7F50', rgb: '255, 127, 80' },
  { hex: '#DE3163', rgb: '222, 49, 99' },
];

const paletteRef = document.querySelector('.js-palette');
paletteRef.addEventListener('click', handleClick2);

function createColorCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return ` 
    <li class="li">
      <div class="div" style="background-color: ${hex}">
      </div>
      <p>${hex}</p>
      <p>${rgb}</p>
    </li>`;
    })
    .join('');
}

const cardsMarkup = createColorCardMarkup(colors);
paletteRef.insertAdjacentHTML('beforeend', cardsMarkup);

function handleClick2(event) {
  if (!event.target.classList.contains('div')) {
    return;
  }

  const currentActiveCard = document.querySelector('.li.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
  const parentColorCard = event.target.closest('li');
  parentColorCard.classList.add('is-active');
  //   console.log(event.target.style.backgroundColor);

  document.body.style.backgroundColor = event.target.style.backgroundColor;
}
