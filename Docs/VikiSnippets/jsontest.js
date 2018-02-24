//JSON-testi
const jsObject = {id: 12345, tech: 'Jakke Jäynä'};
const jsonObject = JSON.stringify(jsObject);
console.log(jsonObject);
const backJs = JSON.parse(jsonObject);
console.log(backJs);
