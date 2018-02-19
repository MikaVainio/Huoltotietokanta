// Yksinkertainen perus HTTP-palvelin

// Ladataan HTTP-kirjasto
const http = require('http');

// Määritellään IP-osoite ja TCP-portti
const hostname = '127.0.0.1';
const port = 3500;
// Luodaan palvelin, joka vastaa kaikkiin pyyntöihin
const server = http.createServer((request, response) => {
  response.statusCode = 200; // Lähetetään statuskoodi OK
  response.setHeader('Content-Type', 'text/plain'); // Lähetetään sisällön tyyppi
  response.end('Palvelin vastaa!\n'); // Päätetään yhteys lähettämällä tekstiä
});

// Luodaan kuuntelija
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
