const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public')); 

// middle-ware
const requestLog = (req, res, next) => {
  console.log(req.method, req.path);
  next();
}

app.use(requestLog);

// GET: http://localhost:3000
app.get('/', (req, res) => {
  res.end("Hello world");
});

app.post('/', (req, res) => {
  res.end("POST method");
});

app.get('/product', (req, res) => {
  res.end("GET: get information of Product");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});