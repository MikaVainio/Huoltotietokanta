# Staattisia web-sivuja käyttävä palvelin

Harjoituksessa luodaan Express-kirjastoon perustuva web-palvelin. Se luodaan
omana projektinaan Nimellä Harjoitus2.

## Alkutoimet
1. Luo hakemisto `Harjoitus2` palvelinta varten
2. Luo pääohjelman tiedosto `server.js`
3. Muodosta hakemistoon riippuvuustiedosto `package.json`
4. Asenna `Express`-kirjasto siten, että se merkitään riippuvuustiedostoon.
5. Luo `public`-hakemisto kuvia ym. sivujen staattisia elementtejä varten.
6. Lisää edelliseen hakemistoon kuvia, joita käytät HTML-dokumentissasi

## Palvelimen ohjelmointi
Luo palvelinkoodi siten, että seuraavat vaatimukset täyttyvät.
* Palvelin lähettää vakiotekstin juuriosoitteesta `/`.
* Se lähettää tämän tiedoston `/About`-osoitteesta.
* Se lähettää `info.html`-sivun osoitteesta `/Info`.

Luo uusia reittejä ja niihin liittyviä HTML-tiedostoja.

## Testaaminen
* Testaa sivujen toiminta selaimella. Käytä sovelluskehittäjän työkaluja ja
kokeile erilaisia sivukokoja ja laitteita.
* Testaa liikenne myös Postman-ohjelmalla.

## Jatkokehitys
Runsaasti staattisia sivuja sisältävä sivusto vaatii hakemostorakenteen, jossa
sivuilla, kuvilla ja esim. CSS-tiedostoilla on omat kansiosa. Mieti, mikä olisi
sopiva rakenne. Luo se ja muokkaa palvelinkoodia ja sivujen koodia vastaamaan
uutta hakemistorakennetta.
