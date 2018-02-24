// Muuttujat

// Vanha tapa
var tech = 'Jakke Jäynä'

// Uusi tapa
const serviceTech = 'Jakke Jäynä' // Muuttujaa ei muuteta jälkeenpäin (vakio)
let serviceTime = 0 // Muuttujan arvoa muutetaan myöhemmin
// Merkkijonomuuttujan arvo voidaan sijoittaa `-merkkien sisälle, jolloin erikoimerkkejä (',",/, ) ei tulkita
const textString = `it's a cold day and Jakke 'the lunatic' Jäynä is coding`


// Callback funktiot
// Vanha tapa
fs.readFile(__dirname + '/README.md', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

// Uusi tapa nuolifunktiota käyttäen
fs.readFile(__dirname + '/README.md', (err, data) => {
   if (err) return console.error(err);
   console.log(data.toString());
});
