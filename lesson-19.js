const user = {
  name: 'Mango',
  age: 20,
};

const copyUser = JSON.stringify(user);
console.log(copyUser);

const user2 = ['Alla', 'Sergey'];

const copyUser2 = JSON.stringify(user2);
console.log(copyUser2);

try {
  const userObject = JSON.parse(copyUser);
  console.log(userObject);
} catch (error) {
  console.log(error.message);
}

try {
  const userArray = JSON.parse(copyUser2);
  console.log(userArray);
} catch (error) {
  console.log(error.message);
}

const STORAGE_KEY = 'userMessage';
const formData = {};

const formRef = document.querySelector('.js-form-3');
const inputRef = document.querySelector('.js-form-3 input');
const textareaRef = document.querySelector('.js-form-3 textarea');

formRef.addEventListener('submit', hahdleFormSubmit);
formRef.addEventListener('input', onFormInput);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextarea();

function hahdleFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  if (saveMessage) {
    try {
      const userParse = JSON.parse(saveMessage);
      inputRef.value = userParse.name;
      textareaRef.value = userParse.message;
    } catch (error) {
      console.log(error.message);
    }
  }
}
