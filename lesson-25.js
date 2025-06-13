// GET
// const BASE_URL = 'http://localhost:3000';

async function fetchBooks() {
  // fetch(`${BASE_URL}/posts`)
  //   .then(r => r.json())
  //   .catch(error => console.log(error));
  const response = await fetch(`${BASE_URL}/posts`);
  const posts = await response.json();

  return posts;
}

async function fetchBookId(id) {
  // fetch(`${BASE_URL}/posts/${id}`)
  //   .then(r => r.json())
  //   .catch(error => console.log(error));

  const response = await fetch(`${BASE_URL}/posts/${id}`);
  const postId = await response.json();

  return postId;
}

// fetchBooks();
// fetchBookId(1);

// POST;
// const BASE_URL = 'http://localhost:3000';

// const newPost = {
//   title: 'Mario',
//   views: 400,
// };

async function addPost(post) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  const response = await fetch(`${BASE_URL}/posts`, options);
  const newPost = await response.json();

  return newPost;
}

// addPost(newPost);
// PATCH
// const BASE_URL = 'http://localhost:3000';

// const newPost = {
//   title: 'Mario big',
// };

async function updatePost(update, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/posts/${id}`, options);
  const postId = await response.json();

  return postId;
}

// updatePost(newPost, 1);
// const BASE_URL = 'http://localhost:3000';

// const newPost = {
//   title: 'Mario big',
// };

async function removePost(update, id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/posts/${id}`, options);
  const update = await response.json();

  return update;
}

// removePost(2)
