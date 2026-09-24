# CAB Centrum Analizy Badań — strona internetowa

Statyczna strona spółki CAB Centrum Analizy Badań sp. z o.o. (Bydgoszcz) — https://cab-innowacje.com/.
Hosting: GitHub Pages z repozytorium `marek559/CAB` i własną domeną (plik `CNAME`). Zmiany publikuje Marek
przez GitHub Desktop.

Strona-wizytówka Marka Andryszczyka ma osobne repozytorium (`marek559/andryszczyk`) i adres
https://andryszczyk.eu/. Menu „Zespół” linkuje do niej, a folder `marek-andryszczyk/` przekierowuje
tam stare linki.

Kolorystyka i czcionki są wspólne z lumafi.pl: #FFFFFF, #2E5BFF, #9B9DA8, #0B0D12; Space Grotesk,
Manrope, JetBrains Mono (pliki w `assets/fonts`, bez Google Fonts).

## Struktura

| Plik / folder | Zawartość |
|---|---|
| `index.html` | strona główna CAB |
| `polityka-prywatnosci.html` | polityka prywatności (kontakt z klientem) |
| `styles.css`, `script.js` | style i skrypt wspólne dla stron CAB |
| `marek-andryszczyk/` | tylko `index.html` przekierowujący na https://andryszczyk.eu/ |
| `assets/` | logo (`logo-cab.png`, `logo-cab-znak.png`), ikony, obrazek podglądu linku `og-cab.png`, czcionki |
| `site.webmanifest`, `sitemap.xml`, `robots.txt` | opis strony dla przeglądarek i wyszukiwarek |
| `wizytówka i oferta/` | wizytówka firmowa i ulotka A4 CAB do druku (HTML → PDF), niewidoczne dla wyszukiwarek |
| `KONTEKST.md` | pełny kontekst projektu: dane spółki, decyzje, zasady marki, otwarte sprawy |
| `TRESC.md` | kopia zapasowa pełnych tekstów strony i materiałów do druku |
| `.claude/launch.json` | podgląd lokalny dla Claude Code |

Podgląd lokalny: `python -m http.server 8000` w tym folderze i adres http://localhost:8000/.

## Formularz kontaktowy

W `script.js` stała `FORM_ENDPOINT` jest pusta — formularz otwiera wtedy program pocztowy
z gotową wiadomością na `CONTACT_EMAIL`. Po założeniu Formspree wpisz adres formularza w `FORM_ENDPOINT`
i dopisz Formspree jako dostawcę usług w punkcie 3 polityki prywatności.

## Adres strony

Adres `https://cab-innowacje.com/` jest wpisany na stałe w:

- znacznikach `canonical`, `og:url`, `og:image`, `twitter:image` oraz danych JSON-LD w `index.html`
  i `polityka-prywatnosci.html`,
- `sitemap.xml` i `robots.txt`.

Przy kolejnej zmianie domeny podmień go we wszystkich tych miejscach. Serwisy społecznościowe przechowują
podgląd linku w pamięci — odśwież go w LinkedIn Post Inspector i w Facebook Sharing Debugger.

## Odtworzenie strony z kopii

1. **Pliki:** sklonuj `marek559/CAB` (GitHub Desktop → *Clone repository*). Gdyby repozytorium zaginęło,
   teksty są w `TRESC.md`, a decyzje w `KONTEKST.md`.
2. **GitHub Pages:** *Settings → Pages* → *Deploy from a branch*, gałąź `main`, folder `/ (root)`;
   *Custom domain* `cab-innowacje.com` (z pliku `CNAME`); zaznacz **Enforce HTTPS**.
3. **DNS w OVH** (strefa `cab-innowacje.com`):
   - 4 rekordy **A** dla domeny głównej: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`;
   - rekord **CNAME** `www` → `marek559.github.io.`;
   - poczta: rekordy **MX** `mx1.mail.ovh.net` (1), `mx2.mail.ovh.net` (5), `mx3.mail.ovh.net` (100)
     i **SPF** `v=spf1 include:mx.ovh.com -all` — nie ruszaj ich przy zmianach strony.
4. **Sprawdzenie:** https://cab-innowacje.com/ otwiera się z kłódką, a `http://` i `www` przekierowują na nią.
