// Varsinainen palvelimen pääohjelma

// Tarivittavien kirjastojen käyttöönotto
const express = require('express');
const fs = require('fs');

// Luodaan palvelin
const server = express();

// Määritellään juuri URL:n toiminnoksi tekstin lähetys
server.get('/',(request, response) => response.send('Hippopotamus'));
// Määritellään About URL:n toiminnoksi tiedoston lähetys
server.get('/About',(request, response) => {
  response.sendFile(__dirname +'/README.md');
});

// Luodaan kuuntelija ja tulostetaan sen tiedot konsoliin
server.listen(4000, () => console.log('Palvelin kuuntelee TCP-porttia 4000'));
