// Määritellään callback-funktio, joka annetaan toisen funktion parametriksi
// Tarkoituksena suorittaa se toisen funktion sisällä
var callbackFunction = function (data) {
  // Funktion toiminnot, esim. otsikko ja tiedot konsolille
  console.log('Huoltoilmoitus: ' + data);
};

// Määritellään varsinainen funktio, joka saa parametrikseen callback-funktion
var mainFunction = function (callback) {
  // Funktion toiminnot, esim. tietojen määritys (on callback-funktion data-parametri)
  callback('Öljynsuodatin vaihdettu 12.12.2017');
};

//Annetaan varsinaisen funktion parametriksi callback-funktio
mainFunction(callbackFunction);
