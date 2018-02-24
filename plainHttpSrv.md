# Vakiotekstin lähettävä web-palvelin

Harjoituksessa Luodaan http-palvelin, joka vastaa selaimen HTTP request -pyyntöihin
lähettämällä vastaukseksi vakiotekstin: Palvelin vastaa!

Esimerkissä käytetään ainoastaan Node.js-kirjaston perustoimintoja. Asennettavia ulkoisia
kirjastoja ei tarvita.

Palvelin lähettää HTTP response -vastauksessa tarvittavat tiedot:
* Statuskoodin
* Otsakkeen, jossa kerrotaan, että sisältö on koodaamatonta tekstiä.
* Varsinaisen vastauksen
* Katkaisee yhteyden

Lisäksi palvelin tulostaa omaan konsoli-ikkunaansa tiedon kuuntelijan luomisesta.  
