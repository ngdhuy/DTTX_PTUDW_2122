const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));  

// GET: http://localhost:3000
app.get('/', (req, res) => {
  res.end("Hello world");
});

app.get('/image', (req, res) => {

});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});