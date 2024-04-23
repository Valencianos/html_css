const http = require('http');
let counterOne = 0;
let counterTwo = 0;

const server = http.createServer((req, res) => {
  console.log('response received');

  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    counterOne++;
    res.end(`
    <h1>Welcome to my site</h1>
    <a href="/about">Link to About page</a>
    <p>Counter of visits: ${counterOne}</p>
    `);
  } else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    counterTwo++;
    res.end(`
    <h1>About</h1>
    <a href="/">Back to main page</a>
    <p>Counter of visits: ${counterTwo}</p>
    `);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end('<h1>Page not found</h1>');
  }
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server runs at port ${port}`);
})