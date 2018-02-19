// Otetaan tiedostonkäsittelykirjasto käyttöön
const fs = require('fs');

// Luetaan tiedosto synkronisesti muuttujaan --Blocking code
var content = fs.readFileSync(__dirname + '/README.md', 'utf-8');
//Ilmoitetaan konsolilla prosessin eteneminen
console.log(content);
console.log('seuraava tehtävä alkoi')

/* Luetaan tiedosto asynkronisesti ja palautetaan sisältö
   käyttämällä Callback-funktiota --NonBlocking code */
   fs.readFile(__dirname + '/README.md', function (err, data) {
      if (err) return console.error(err);
      console.log(data.toString());
   });
//Ilmoitetaan konsolilla prosessin eteneminen
console.log('seuraava tehtävä alkoi')
