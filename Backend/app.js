/*var http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);

*/


const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT variable or default to 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
