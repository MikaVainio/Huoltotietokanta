// Ludoaan javascipt-olio
const jsObject = { id:12345, tech:'Jakke Jäynä' }; // huom. puolilainausmerkit
// Luodaan javascipt-oliosta JSON-olio
const asJson = JSON.stringify(jsObject);
console.log('JSON näyttää tältä: ' + asJson); // JSON-käyttää lainausmerkkejä
// Javascipt-olion luonti JSON-oliosta
const asJsObject = JSON.parse(asJson);
// Tutkitaan olion ominaisuuksia
console.log('Takaisin js-objektiksi; id-ominaisuus on ' + asJsObject.id +
' ja tech-ominaisuus on ' + asJsObject.tech);
