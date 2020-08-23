const http = require('http');
const rf = require('fs');

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
    const data = rf.readFileSync('./index.html', 'utf-8');
    res.end(data);
  })
}).listen(8088);

console.log('server start');