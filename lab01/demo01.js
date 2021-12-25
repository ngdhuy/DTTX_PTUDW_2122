const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  let reqObj = url.parse(req.url, true).query;
  let a = reqObj.a;
  let b = reqObj.b; 
  let c = parseInt(a) + parseInt(b);

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end(`<h1>Hello world, c = ${c}</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});