// Varsinainen palvelimen pääohjelma

// Tarivittavien kirjastojen käyttöönotto
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Luodaan palvelin
const server = express();

server.get('/',(request, response) => response.send('Hippopotamus'))
server.get('/About',(request, response) => response.send('about'))
server.listen(4000, () => console.log('Palvelin kuuntelee porttia 4000'))
