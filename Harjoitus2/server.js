// Varsinainen palvelimen pääohjelma

// Tarivittavien kirjastojen käyttöönotto
const express = require('express');
const fs = require('fs');

// Luodaan palvelin
const server = express();

/* Määritellään polku staattisiin tiedostoihin. Kuvat tms. sivuilla esiintyvät
elementit tallennetaan public-nimiseen hakemistoon tai sen alihakemistoihin */
server.use(express.static(__dirname + '/public'));

// Määritellään juuri URL:n toiminnoksi tekstin lähetys
server.get('/', (request, response) => response.send('Hippopotamus'));

// Määritellään About URL:n toiminnoksi md-tiedoston lähetys
server.get('/About', (request, response) => {
  response.sendFile(__dirname + '/README.md');
});

// Määritellään Info URL:n toiminnoksi html-tiedoston lähetys
server.get('/Info', (request, response) => {
  response.sendFile(__dirname + '/info.html');
});

// Luodaan kuuntelija ja tulostetaan sen tiedot konsoliin
server.listen(4000, () => console.log('Palvelin kuuntelee TCP-porttia 4000'));
