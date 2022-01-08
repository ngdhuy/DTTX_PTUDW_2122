// require framework express
const express = require('express');

const app = express();

const host_name = 'localhost';
const port = 3000;

// CRUD -> API
// Get data -> SELECT/READ
app.get('/', (req, res) => {
  res.end("GET: OK Hello");
});

// Post data -> INSERT/CREATE
app.post('/', (req, res) => {
  res.end('POST: object is created');
});

// Put data -> UPDATE
app.put('/', (req, res) => {
  res.end('PUT: Data is updated');
});

// Delete data -> DELETE
app.delete('/', (req, res) => {
  res.end('DELETE: data is deleted');
});

app.listen(port, host_name, () => {
  console.log(`Server is running at http://${host_name}:${port}`);
})