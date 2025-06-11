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
