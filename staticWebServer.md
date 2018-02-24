# Staattisen sivun lähettäminen

Harjoituksessa Luodaan http-palvelin, joka vastaa selaimen HTTP request -pyyntöihin
lähettämällä vastaukseksi tiedostoja omasta tiedostojärjelmästään

Esimerkissä käytetään Node.js-kirjaston lisäksi Express-kirjastoa. Se on Asennettava
ennen harjoitukseen sisältyvän koodin testaamista.

## Alkutoimet
1. Luo hakemisto palvelinta varten
2. Siirry hakemistoon
3. Luo sovelluksen `package.json`-tiedosto komennolla `npm init`
4. Määrittele pääohjelmaksi (entry point) `staticWebServer.js`.
5. Asenna Express-kirjasto `npm install express --save`


Palvelin Lähetetään HTTP response -vastauksessa tarvittavat tiedot:
* Statuskoodin
* Otsakkeen, jossa kerrotaan, että sisältö on koodaamatonta tekstiä.
* Varsinaisen vastauksen
* Katkaisee yhteyden

Lisäksi palvelin tulostaa omaan konsoli-ikkunaansa tiedon kuuntelijan luomisesta.
