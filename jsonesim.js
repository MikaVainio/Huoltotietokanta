// Ludoaan javascipt-olio
const jsObject = { "id":12345, "tech":"Jakke Jäynä" }; //JSON käyttää lainausmerkkejä (")
// Luodaan javascipt-oliosta JSON-olio
const asJson = JSON.stringify(jsObject);
// Javascipt-olion luonti JSON-oliosta
const asJsObject = JSON.parse(asJson);
