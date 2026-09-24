# CAB Centrum Analizy Badań — strona internetowa

Statyczna strona spółki CAB Centrum Analizy Badań sp. z o.o. (Bydgoszcz) oraz strona-wizytówka
mgr. inż. Marka Andryszczyka. Hosting: GitHub Pages z własną domeną — https://cab-innowacje.com/ (plik `CNAME`).
Wizytówka: https://cab-innowacje.com/marek-andryszczyk/ — domena andryszczyk.eu przekierowuje na ten adres.

Kolorystyka i czcionki są wspólne z lumafi.pl: #FFFFFF, #2E5BFF, #9B9DA8, #0B0D12; Space Grotesk,
Manrope, JetBrains Mono (pliki w `assets/fonts`, bez Google Fonts).

## Struktura

| Plik / folder | Zawartość |
|---|---|
| `index.html` | strona główna CAB |
| `polityka-prywatnosci.html` | polityka prywatności (kontakt z klientem) |
| `styles.css`, `script.js` | style i skrypt wspólne dla wszystkich stron |
| `marek-andryszczyk/` | strona-wizytówka (`index.html`, `profil.css`, zdjęcie, ikony, obrazek podglądu) |
| `assets/` | logo, ikony, obrazek podglądu linku `og-cab.png`, czcionki |
| `site.webmanifest`, `sitemap.xml`, `robots.txt` | opis strony dla przeglądarek i wyszukiwarek |
| `CAB_materiały/` | materiały źródłowe (brief, teksty, grafiki, wydruki patentów) |
| `wizytówka i oferta/` | wizytówki i ulotki A4 do druku (HTML → PDF), niewidoczne dla wyszukiwarek |

## Formularz kontaktowy

W `script.js` stała `FORM_ENDPOINT` jest pusta — formularz otwiera wtedy program pocztowy
z gotową wiadomością. Po założeniu Formspree wpisz adres formularza w `FORM_ENDPOINT`
i dopisz Formspree jako dostawcę usług w punkcie 3 polityki prywatności.

## Adres strony

Adres `https://cab-innowacje.com/` jest wpisany na stałe w:

- znacznikach `canonical`, `og:url`, `og:image`, `twitter:image` oraz danych JSON-LD w `index.html`,
  `polityka-prywatnosci.html` i `marek-andryszczyk/index.html`,
- `sitemap.xml` i `robots.txt`.

Przy kolejnej zmianie domeny podmień go we wszystkich tych miejscach. Serwisy społecznościowe przechowują
podgląd linku w pamięci — odśwież go w LinkedIn Post Inspector i w Facebook Sharing Debugger.
