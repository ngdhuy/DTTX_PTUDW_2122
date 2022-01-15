const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).send("GET: homepage");
});

const productRouter = require('./demo04.product');
app.use('/product', productRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});