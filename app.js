const express = require('express');
const { engine } = require('express-handlebars');
const products = require('./product.json');

const app = express();

// app.use(express.static('public'));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home', { title: 'Головна' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Про нас' });
});

app.get('/products', (req, res) => {
  res.render('products', { products });
});

app.get('/products/:productId', (req, res) => {
  const product = products.find(p => p.id === req.params.productId);
  res.render('product', { product });
});

app.listen(4444, () => {
  console.log('Aplication server ${4444}');
});
