// require framework express
const express = require('express');

const app = express();

const host_name = 'localhost';
const port = 3000;

const data = [
  { id: 0, name: 'iPhone 13 Pro MAX', price: 1500, type: 'mobile' },
  { id: 1, name: 'iPad 11 inch M1', price: 2000, type: 'mobile' },
  { id: 2, name: 'Macbook Pro 16.2 M1 MAX', price: 3500, type: 'pc' },
  { id: 3, name: 'Apple Watch 7', price: 800, type: 'smart' }
];

// GET: filter product with price from value to value
const printResquestInfo = (req, res, next) => {
  console.log(req.method, req.path);
  next();
}

app.get('/price/:from-:to', [printResquestInfo, (req, res, next) => {
  let fromPrice = req.params['from'];
  let toPrice   = req.params['to'];
  
  let result_data = data.filter(item => item.price >= fromPrice && item.price <= toPrice);

  res.type('json');
  res.status(200).end(JSON.stringify(result_data));
}]);


app.listen(port, host_name, () => {
  console.log(`Server is running at http://${host_name}:${port}`);
})