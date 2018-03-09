# Staattisen sivun lähettäminen

Harjoituksessa Luodaan http-palvelin, joka vastaa selaimen HTTP request -pyyntöihin
lähettämällä vastaukseksi tiedostoja omasta tiedostojärjelmästään.

Esimerkissä käytetään Node.js-kirjaston lisäksi `Express`-kirjastoa. Se on Asennettava
ennen harjoitukseen sisältyvän koodin testaamista.

## Alkutoimet

1.  Luo hakemisto palvelinta varten
2.  Siirry hakemistoon
3.  Luo sovelluksen `package.json`-tiedosto komennolla `npm init`
4.  Määrittele pääohjelmaksi (entry point) `staticWebServer.js`.
5.  Asenna Express-kirjasto `npm install express --save`

## Valmiin koodin sisältämät toiminnot
Uusina toimintoina tässä harjoituksessa:

-   Otetaan käyttöön tiedostojärjestelmän käyttämiseen tarvittava kirjasto `fs`
-   Otetaan käyttöön `Express`-kirjasto
-   Luetaan latauspyynnön URL-osoite
-   Lähtetetään vastaukseksi tekstitiedosto, esim. README.md

## Muokkaa koodia

Lisää koodiin muita URL-osoitteita ja tee niitä varten HTML-tiedostot. Express osaa
muokata HTTP-otsakkeeseen tiedoston tyypin oikein (text/html). Tiedostojen polkujen
on oltava oikein. Huomaa muuttuja `__dirname`. Testaa tekemiesi sivujen toiminta
selaimella.
