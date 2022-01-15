const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("GET: get information of product");
})

router.get('/:id', (req, res) => {
  res.status(200).send(`GET: get information of product with ID = ${req.params['id']}`);
})

module.exports = router;