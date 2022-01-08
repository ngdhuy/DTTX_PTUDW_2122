// require framework express
const express = require('express');

const app = express();

const host_name = 'localhost';
const port = 3000;

const data = [
  { id: 0, name: 'iPhone 13 Pro MAX', price: 1500 },
  { id: 1, name: 'iPad 11 inch M1', price: 2000 },
  { id: 2, name: 'Macbook Pro 16.2 M1 MAX', price: 3500 },
  { id: 3, name: 'Apple Watch 7', price: 800 }
];

// GET: get all data
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/json' })
  res.end(JSON.stringify(data));
});

// GET: get product by ID
app.get('/product/:id', (req, res) => {
  let id = req.params['id'];
  res.type('json');
  res.status(200).end(JSON.stringify(data[id]));
});

// GET: filter product with price from value to value
app.get('/price/:from-:to', (req, res) => {
  let fromPrice = req.params['from'];
  let toPrice   = req.params['to'];
  
  let result_data = data.filter(item => item.price >= fromPrice && item.price <= toPrice);

  res.type('json');
  res.status(200).end(JSON.stringify(result_data));
});



app.listen(port, host_name, () => {
  console.log(`Server is running at http://${host_name}:${port}`);
})