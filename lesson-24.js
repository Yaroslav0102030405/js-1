const formRef = document.querySelector('.js-form-5');
const containerRef = document.querySelector('.js-container-5');
const loadMoreBtn = document.querySelector('.js-btn-5');

let searchQuery = '';
let page = 1;

formRef.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', handleLoadMoreButton);

function handleSearch(e) {
  e.preventDefault();

  clearArticlesContainer();

  searchQuery = e.currentTarget.elements.query.value;
  page = 1;

  if (searchQuery === '') {
    alert('Что-то пошло не так');
  }

  //   const options = {
  //     headers: {
  //       Authorization: '2b084a585a6744c9a99186e76694f8db',
  //     },
  //   };

  //   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=${page}`;

  fetchArticles(searchQuery, page)
    .then(articles => {
      containerRef.insertAdjacentHTML(
        'beforeend',
        appendArticlesMarkup(articles),
      );
      handleButton();
      console.log(articles);
    })
    .catch(error => console.log(error));
  //   return fetch(url, options)
  //     .then(res => res.json())
  //     .then(data => {
  //       page += 1;
  //       console.log(data);
  //       return data.articles;
  //     })
  //     .then(articles => {
  //       containerRef.insertAdjacentHTML(
  //         'beforeend',
  //         appendArticlesMarkup(articles),
  //       );
  //       handleButton();
  //       console.log(articles);
  //     })
  //     .catch(error => console.log(error));
}

function handleLoadMoreButton() {
  //   const options = {
  //     headers: {
  //       Authorization: '2b084a585a6744c9a99186e76694f8db',
  //     },
  //   };

  //   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=${page}`;

  fetchArticles(searchQuery, page)
    .then(articles => {
      containerRef.insertAdjacentHTML(
        'beforeend',
        appendArticlesMarkup(articles),
      );
      console.log(articles);
    })
    .catch(error => console.log(error));

  //   return fetch(url, options)
  //     .then(res => res.json())
  //     .then(data => {
  //       page += 1;
  //       console.log(data);
  //       return data.articles;
  //     })
  //     .then(articles => {
  //       containerRef.insertAdjacentHTML(
  //         'beforeend',
  //         appendArticlesMarkup(articles),
  //       );
  //       console.log(articles);
  //     })
  //     .catch(error => console.log(error));
}

function appendArticlesMarkup(articles) {
  return articles.map(article => {
    return `<li style="width: 300px; border: 1px solid black; padding: 10px">
    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
    <img width="300" src="${article.urlToImage}" />
<h1>${article.title}</h1>
<p>${article.description}</p>
</a>
</li>`;
  });
}

function fetchArticles() {
  const options = {
    headers: {
      Authorization: '2b084a585a6744c9a99186e76694f8db',
    },
  };

  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=${page}`;

  return fetch(url, options)
    .then(res => res.json())
    .then(data => {
      page += 1;
      return data.articles;
    });
}

function clearArticlesContainer() {
  containerRef.innerHTML = '';
}

function handleButton() {
  loadMoreBtn.classList.add('hidden');
}
