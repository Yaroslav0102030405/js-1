const formRef = document.querySelector('.js-form');
const inputRef = document.querySelector('.js-input');
const buttonRef = document.querySelector('.js-button');

formRef.addEventListener('submit', handleFormSubmit);
inputRef.addEventListener('change', handleInputChange);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log(name, value);
  });

  formRef.reset();
}

function handleInputChange(event) {
  //   console.log('вавав');
  buttonRef.disabled = !event.currentTarget.checked;
  //   console.log(event.currentTarget.checked);
}

const refs = {
  buttonOpenModal: document.querySelector('.js-open-modal'),
  buttonCloseModal: document.querySelector('.js-close-modal'),
  backdrop: document.querySelector('.js-backdrop'),
  modal: document.querySelector('.js-modal'),
};

refs.buttonOpenModal.addEventListener('click', handleOpenModal);
refs.buttonCloseModal.addEventListener('click', handleCloseModal);
refs.backdrop.addEventListener('click', handleBackdropClick);

function handleEscKeyPress(event) {
  if (event.code === 'Escape') {
    handleCloseModal();
  }
}

function handleOpenModal() {
  window.addEventListener('keydown', handleEscKeyPress);
  refs.backdrop.classList.add('active');
}

function handleCloseModal() {
  window.removeEventListener('keydown', handleEscKeyPress);
  refs.backdrop.classList.remove('active');
}

function handleBackdropClick(event) {
  if (event.currentTarget === event.target) {
    handleCloseModal();
  }
}
