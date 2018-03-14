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
Luo palvelinkoodi siten, että seuraavat vaatimukset täyttyvät:
* Palvelin lähettää vakiotekstin juuriosoitteesta `/`.
* Se lähettää tämän tiedoston `/About`-osoitteesta.
* Se lähettää `info.html`-sivun osoitteesta `/Info`.

Luo uusia reittejä ja niihin liittyviä HTML-tiedostoja.

## Testaaminen
* Testaa sivujen toiminta selaimella. Käytä sovelluskehittäjän työkaluja ja
kokeile erilaisia sivukokoja ja laitteita.
* Testaa liikenne myös Postman-ohjelmalla.

## Jatkokehitys
Kun palvelimen perustoiminnot ovat kunnossa, ryhdytään luomaan suuremman
sivuston vaatimia rakenteita.

### Hakemistorakenne
Runsaasti staattisia sivuja sisältävä sivusto vaatii hakemistorakenteen, jossa
sivuilla, kuvilla ja esim. CSS-tiedostoilla on omat kansiosa. Mieti, mikä olisi
sopiva rakenne. Luo se ja muokkaa palvelinkoodia ja sivujen koodia vastaamaan
uutta hakemistorakennetta.

### Ulkoiset tyylitiedostot
Esimerkin HTML-tiedostoissa tyyliasetukset on kirjoitettu suoraan sivun omininaisuuksiin. Jos tyylejä muutetaan, muutokset on tehtävä kaikkiin sivuston HTML-dokumentteihin. Jos tyylit, määritellään erillisessä CSS-tiedostonssa, muutokset joudutaan tekemään vain kerran. Luo ulkoinen tyylitiedosto, joka määrittelee sivun taustavärin ja otsikkojen asetukset ja linkitä se HTML-tiedostoihin. Ulkoinen CSS-tiedosto merkitään HTML-dokumentin otsakkeeseen seuraavan esimerkin mukaisesti:

```html
<head>
<link rel="stylesheet" type="text/css" href="hippostyle.css">
</head>
```
Fontit saattavat olla myös ongelmallisia web-sovelluksissa. Palvelimen ja työaseman
välillä ei siirretä fonttitiedostoja. Jos työasemassa ei ole oikeaa fonttia, se korvataan
oletusfontilla. Kirjasintyyleille voidaan määritellä useita vaihtoehtoja tai
voidaan käyttää ladattavia kirjasimia. Esim. Googlen fontteja voi käyttää
sijoittamlla html-tiedoston otsakkeeseen `<head>` linkin kirjasintiedostoon:

```html
<link href='https://fonts.googleapis.com/css?family=Nanum Pen Script' rel='stylesheet'>
```
