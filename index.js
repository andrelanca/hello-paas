const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>v2-auto-redeploy-010320</h1>\n');
}).listen(port, () => console.log('listening on ' + port));
