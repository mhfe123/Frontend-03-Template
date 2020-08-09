const http = require('http');

http.createServer((req, res) => {
  let body = [];
  req.on('error', err => {
    console.error(err);
  }).on('data', chunck => {
    body.push(chunck);
    // body.push(chunck.toString());
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World\n');
  })
}).listen(8088);

console.log('server start');