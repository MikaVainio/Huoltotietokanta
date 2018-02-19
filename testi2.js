// Otetaan tiedostojenkäsittelykirjasto käyttöön
var fs = require('fs');

/* Määritellään Callback-funktio, joka palauttaa tiedoston tekstinä
tai antaa virheilmoituksen jos tiedoston luku ei onnistu
*/
fs.readFile(__dirname + '/README.md', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
// Ilmoitetaan milloin seuraava vaihe ohjelmassa käynnistyy
console.log("seuraava vaihe käynnistyi");
