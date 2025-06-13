// GET
// const BASE_URL = 'http://localhost:3000';

// function fetchBooks() {
//   fetch(`${BASE_URL}/posts`)
//     .then(r => r.json())
//     .catch(error => console.log(error));
// }

// function fetchBookId(id) {
//   fetch(`${BASE_URL}/posts/${id}`)
//     .then(r => r.json())
//     .catch(error => console.log(error));
// }

// fetchBooks();
// fetchBookId(1);

// POST;
// const BASE_URL = 'http://localhost:3000';

// const newPost = {
//   title: 'Mario',
//   views: 400,
// };

// function addPost(post) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(post),
//   };

//   return fetch(`${BASE_URL}/posts`, options).then(r => r.json());
// }

// addPost(newPost);
// PATCH
// const BASE_URL = 'http://localhost:3000';

// const newPost = {
//   title: 'Mario big',
// };

// function updatePost(update, id) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/posts/${id}`, options).then(r => r.json());
// }

// updatePost(newPost, 1);
const BASE_URL = 'http://localhost:3000';

const newPost = {
  title: 'Mario big',
};

function removePost(update, id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/posts/${id}`, options).then(r => r.json());
}

// removePost(2)
