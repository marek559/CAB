# Kontekst projektu — strona CAB, wizytówka i materiały do druku

Dokument zbiera w jednym miejscu wszystko, co trzeba wiedzieć, żeby dalej rozwijać stronę
CAB Centrum Analizy Badań, stronę-wizytówkę mgr. inż. Marka Andryszczyka oraz wizytówki i ulotki.
Stan na **24.09.2026**. Właścicielem decyzji jest Marek Andryszczyk.

> Plik leży w publicznym repozytorium i jest dostępny także pod adresem strony
> (`cab-innowacje.com/KONTEKST.md`). Nie wpisuj tu danych poufnych: PESEL, adresu domowego,
> haseł ani notatek wewnętrznych.

---

## 1. Spółka — dane rejestrowe

Źródło: odpis KRS z 23.09.2026.

| Pole | Wartość |
|---|---|
| Firma | CAB Centrum Analizy Badań sp. z o.o. |
| Siedziba i adres | ul. Romualda Traugutta 11 lok. 1, 85-122 Bydgoszcz |
| KRS | 0001016597 |
| NIP | 9532794092 |
| REGON | 524328433 |
| Kapitał zakładowy | 5 000,00 zł |
| Sąd rejestrowy | Sąd Rejonowy w Bydgoszczy, XIII Wydział Gospodarczy KRS (potwierdzone przez Marka) |
| Marek Andryszczyk | Członek Zarządu (funkcja podawana na wizytówce firmowej) |
| Charakter | spin-off ze środowiska akademickiego (Politechnika Bydgoska / dawne UTP) |

Pełny skład zarządu i wspólników jest w odpisie KRS. Celowo nie przepisujemy go tutaj, bo ten plik jest
publiczny, a na stronie nie eksponujemy funkcji ani udziałów (uwaga z recenzji Mateusza).

**Nazwa:** poprawna jest nazwa z KRS, czyli „Centrum **Analizy** Badań”. Pierwotny plik `logo.png` miał błąd
„Analiz”; poprawione logo jest w `CAB_materiały/04_grafiki/logo-cab-poprawione.png`.

**Na stronie celowo nie podajemy** struktury udziałów ani funkcji w zarządzie. Zespół opisujemy ogólnie:
spin-off, współpraca z politechnikami, uniwersytetami i instytutami.

**Kapitał zakładowy musi zostać na stronie.** Wymaga go art. 206 § 1 pkt 4 KSH, a za brak grozi
grzywna do 5000 zł (art. 595 KSH). Marek chciał go usunąć, a sprawa czeka na jego decyzję.
Dziś jest tylko w stopce.

---

## 2. Domeny i hosting

| Adres | Stan (24.09.2026) |
|---|---|
| `https://cab-innowacje.com/` | Strona CAB. GitHub Pages z repozytorium `marek559/CAB`, plik `CNAME`. HTTPS działa, http przekierowuje na https, rekord `www` wskazuje na `marek559.github.io`. |
| `https://cab-innowacje.com/marek-andryszczyk/` | Strona-wizytówka Marka. |
| `andryszczyk.eu` (OVH) | Przekierowanie **maskowane** (ramka) na `http://cab-innowacje.com/marek-andryszczyk/`. Działa tylko przez http, bez HTTPS. Google widzi pustą stronę, a podgląd linku jest pusty. **Do poprawy** — patrz sekcja 9. |
| `marek559.github.io/CAB/` | Stary adres, przekierowuje na `cab-innowacje.com`. |
| `wirwicki.eu` | Strona Mateusza, podlinkowana w menu „Zespół”. Nie odpowiada — do sprawdzenia z Mateuszem. |

Adres `https://cab-innowacje.com/` jest wpisany na stałe w polach `canonical`, `og:url`, `og:image`,
`twitter:image` i w danych JSON-LD trzech stron oraz w `sitemap.xml` i `robots.txt`. Przy zmianie domeny
trzeba go podmienić wszędzie (lista jest też w `README.md`).

Zmiany w repozytorium Marek publikuje sam, przez **GitHub Desktop** (commit i push).

---

## 3. Struktura repozytorium

| Ścieżka | Zawartość |
|---|---|
| `index.html` | strona główna CAB |
| `polityka-prywatnosci.html` | polityka prywatności: tylko kontakt z klientem, bez cookies |
| `styles.css`, `script.js` | style i skrypt wspólne dla wszystkich stron (menu, „Zespół”, formularz, animacje) |
| `marek-andryszczyk/` | strona-wizytówka: `index.html`, `profil.css`, zdjęcie, ikony, obrazek podglądu, manifest |
| `assets/` | logo (`logo-cab.png`, `logo-cab-znak.png`), ikony, `og-cab.png`, czcionki w `fonts/` |
| `site.webmanifest`, `sitemap.xml`, `robots.txt` | opis strony dla przeglądarek i wyszukiwarek |
| `wizytówka i oferta/` | wizytówki i ulotki A4 do druku (HTML → PDF), oznaczone `noindex` |
| `CAB_materiały/` | materiały źródłowe: brief, teksty, tabele, grafiki, wydruki patentów |
| `CNAME` | domena GitHub Pages |
| `logo.png` | oryginalny plik logo od Marka, z błędem „Analiz” — niewykorzystywany |
| `README.md` | opis techniczny strony |

---

## 4. Marka i zasady projektowe

- **Rodzina marek:** kolorystyka i czcionki są wspólne z lumafi.pl, drugą firmą Marka.
- **Kolory:** biały `#FFFFFF`, tło `#F8FAFF` / `#F2F5FB`, grafit `#0B0D12`, niebieski `#2E5BFF`
  (jaśniejszy `#4C74FF`), szary `#9B9DA8`.
- **Czcionki:** Space Grotesk (nagłówki), Manrope (tekst), JetBrains Mono (etykiety). Są hostowane
  lokalnie w `assets/fonts`, bez Google Fonts.
- **Styl:** pływające menu w kształcie „pigułki”, separatory sekcji `01 —— NAZWA —— ◆`, ciemne sekcje
  z zaokrągloną górą, grafiki SVG zamiast zdjęć stockowych.
- **Logo CAB:** znak „CAB” (czarny + niebieskie „A”) i napis „Centrum Analizy Badań”. W menu jest sam znak,
  w stopce pełne logo.
- **Logo osobiste „MA.”:** grafitowy kwadrat z białym „MA” i niebieską kropką.

**Zasady z uwag Marka do materiałów LuMaFi** (obowiązują we wszystkich materiałach):
- to samo logo wszędzie, w kolorach marki, na tyle duże, żeby było wyraźne;
- żadnych przypadkowych kropek — kropka logo (albo wierzchołek niebieskiego „A”) jest środkiem półokręgów;
- półokręgi grubsze i liczniejsze, żeby były widoczne w druku;
- hasła bez kropki na końcu, w dwóch liniach;
- czcionki większe (minimum ok. 7 pt na wizytówce, 9 pt na A4), stopka pogrubiona;
- kod pocztowy w tej samej linii co miejscowość; NIP i KRS w dwóch liniach;
- własny e-mail zamiast ogólnego; telefon zawsze widoczny;
- belka nagłówka na ulotce o ok. 10% węższa niż w LuMaFi;
- kompetencje w dwóch kolumnach z nagłówkami, z kreskami zamiast numerów;
- nagłówek sekcji musi pasować do treści pod nim; zawsze zdanie o stałej współpracy z klientem.

---

## 5. Strona CAB — `index.html`

**Układ:** Hero → 01 O nas → 02 Jak działamy → 03 Obszary → 04 Doświadczenie → 05 Kontakt.
Na dole stopka z danymi spółki.

**Menu:** O nas · Jak działamy · Obszary · **Zespół** · przycisk „Kontakt”. „Zespół” to rozwijana lista:
- Marek Andryszczyk → `marek-andryszczyk/`;
- Mateusz Wirwicki → `https://wirwicki.eu/` (w nowej karcie).

**Kluczowe treści i zasady:**
- **Hasło:** „Rozwiązujemy problemy technologiczne przedsiębiorstw”.
- **Obszary (5):** Energia i OZE · Stomatologia, implanty i DSD · Materiały i ich właściwości ·
  Konstrukcje i produkty · Technologie i procesy produkcyjne.
  CAB prowadził badania w stomatologii, implantach i DSD; badania dwutlenku cyrkonu to doktorat Mateusza.
- **Jak działamy:** 6 etapów — problem → diagnoza → koncepcja → badania i optymalizacja →
  dokumentacja i finansowanie → wdrożenie.
- **Doświadczenie — wyłącznie jako dorobek zespołu.**
  - **CAB nie posiada patentów.** Twórcą intelektualnym jest Marek, osobiście. CAB nie pośredniczył,
    a prawa należą do firm partnerskich i uczelni.
  - Liczby: 14 zgłoszeń · 7 udzielonych praw · 3 patenty w mocy · 4 wdrożenia przez firmy.
  - Są też 3 kafelki patentów w mocy z linkami do UPRP i link do pełnej listy na wizytówce Marka.
- **Programy B+R:** SMART/FENG, Bony na innowacje (POIR), Fundusz Badań i Wdrożeń 3.0,
  Kredyt Ekologiczny, FEnIKS, Horyzont 2020 i GEKON. Nie obiecujemy dotacji.
- **Formularz kontaktowy:**
  - stała `FORM_ENDPOINT` w `script.js` jest pusta, więc formularz otwiera dziś program pocztowy (mailto);
  - adres docelowy to `CONTACT_EMAIL`;
  - pod formularzem jest klauzula informacyjna zamiast checkboxa zgody.
- **Polityka prywatności:** administratorem jest CAB. Dane z zapytań służą wyłącznie do kontaktu.
  Wymienieni dostawcy techniczni: Google (poczta) i GitHub (hosting). Strona nie używa cookies.

---

## 6. Strona-wizytówka — `marek-andryszczyk/`

**Zasady (decyzje Marka):**
- **Bez odniesień:** żadnych wzmianek o CAB i LuMaFi, bez roli w CAB, bez StatPomoc.
- **Bez publikacji:** nie ma listy artykułów ani ich liczby. Dorobek naukowy jest tylko jako linki:
  - Google Scholar: https://scholar.google.com/citations?user=M6mWizMAAAAJ&hl=pl
  - ORCID (publiczny adres): https://orcid.org/0000-0003-2732-8631
- **Kontakt:** LinkedIn https://www.linkedin.com/in/marek-andryszczyk-11485a90/, telefon i e-mail.
- **Tekst:** po polsku, w pierwszej osobie. Hero: „Szukam rozwiązań tam, gdzie inni widzą ograniczenia”.
- **Przy patentach:** podajemy tytuł i branżę, bez nazw firm. Znaczek wdrożenia brzmi „Wdrożony przez firmę”.
- **Bez LS-DYNA:** wystarczą „analizy MES”.
- **Zdjęcie:** `marek-andryszczyk.jpg` (3:4) jest tymczasowe, Marek podmieni je na docelowe.

**Układ:**
1. Hero z liczbami: 3 patenty w mocy · 4 zgłoszenia · ~30 projektów B+R · 4 wdrożenia.
2. Podejście: 4 zasady.
3. Projekty: BabyTrack AI; wytrzymałość połączeń szewnych powięzi; biomateriały w modelach ML.
4. **Współpraca w projektach B+R:**
   - 9 kafelków z linkami do UPRP;
   - rozwijane archiwum z 5 pozycjami;
   - pasek „Moja rola / Obszary projektów / Materiały”.
5. Kompetencje (4 karty).
6. O mnie: wykształcenie, złoty medal IWIS 2018, linki Scholar i ORCID.
7. Kontakt.

**Patenty i wzory** (14 spraw z folderu wydruków UPRP; link: `ewyszukiwarka.pue.uprp.gov.pl/search/pwp-details/<numer>`):

| Numer | Rozwiązanie | Status | Na stronie |
|---|---|---|---|
| Pat.245586 (P.436148) | Sposób wytwarzania tlenku diazotu | w mocy, wdrożony | kafelek |
| Pat.242732 (P.436166) | Sposób wytwarzania tacek aluminiowych | w mocy, wdrożony | kafelek |
| Pat.247446 (P.444751) | Sposób recyklingu paneli fotowoltaicznych | w mocy | kafelek |
| P.436224 | Sposób konfekcjonowania folii aluminiowej | decyzja wygaszona, wdrożony | kafelek |
| P.429838 | Modułowa tektura falista | konwersja na wzór użytkowy, wdrożony | kafelek |
| P.444943 | Rury do instalacji przeciwpożarowych | w toku | kafelek |
| P.444978 | Konstrukcje pod panele fotowoltaiczne | w toku | kafelek |
| P.448147 | Sposób prania wyrobów tekstylnych | oczekuje na badanie | kafelek |
| W.131325 | Konstrukcja wsporcza mobilnych systemów agro-PV | w toku | kafelek |
| Pat.234420 (P.421511) | Urządzenie do rehabilitacji stawu promieniowo-nadgarstkowego | wygasł 2023; złoty medal IWIS 2018, Marek pierwszym twórcą | archiwum |
| Ru.071514 (W.127334) | Nakładka na zamek w drzwiach | wygasł 2021 | archiwum |
| Ru.071622 (W.127648) | Osłonka termokurczliwa na aparaty słuchowe | wygasł 2021 | archiwum |
| Ru.071897 (W.127883) | Pudełko do kurczenia osłony na aparaty słuchowe | wygasł 2021 | archiwum |
| P.436520 | Stolarka okienna i drzwiowa z profili PVC | decyzja wygaszona | archiwum |

Poza stroną zostają, zgodnie z decyzją Marka, dwie odmowy udzielenia prawa: P.436841 (powłoki na szkło kabin
prysznicowych) i W.126844 (rękawica do rehabilitacji). P.427350 nie jest rozwiązaniem Marka.

---

## 7. Opis strony (SEO i podgląd linków)

Wzorem był pakiet z lumafi.pl. Każda z trzech stron ma:
- `description`, `robots`, `author` i `canonical`;
- pełne Open Graph i Twitter Card z obrazkami 1200×630:
  - `assets/og-cab.png`,
  - `marek-andryszczyk/og-marek-andryszczyk.png`;
- dane strukturalne JSON-LD: `Organization` (CAB) oraz `ProfilePage` / `Person` (Marek);
- ikony `favicon.svg`, 32, 180 (Apple), 192 i 512 px oraz `site.webmanifest`.

Serwisy społecznościowe przechowują podgląd linku w pamięci. Po zmianach odśwież go
w **LinkedIn Post Inspector** i **Facebook Sharing Debugger**.

---

## 8. Materiały do druku — `wizytówka i oferta/`

| Plik | Co to jest |
|---|---|
| `wizytowka-cab.html` | Wizytówka firmowa CAB, 90×50 mm, spad 3 mm, znaczniki cięcia (arkusz 106×66 mm). Przód: pełne logo CAB, hasło, `cab-innowacje.com`. Tył: pełna nazwa spółki, Marek (mgr inż. · Członek Zarządu), telefon, e-mail, oba adresy stron, **kod QR z vCard** (zapis kontaktu), niebieski pas z adresem oraz NIP i KRS. |
| `oferta-cab.html` | Ulotka A4 do maila — szybki przegląd firmy: 5 obszarów + 5 usług, sposób pracy, programy B+R, kontakt i dane spółki. Patenty z przypisem „dorobek zespołu”. Linki w PDF są klikalne. |
| `wizytowka-osobista.html` | Wizytówka osobista „MA.” (naukowa): hasło, telefon, e-mail, `andryszczyk.eu`, ORCID, LinkedIn, **kod QR do Google Scholar**. |
| `oferta-osobista.html` | Osobista oferta A4 („MA.”), wersja zapasowa. |
| `podglad.html` | Wszystkie cztery projekty na jednej stronie. |
| `druk.css`, `luki.js` | Wspólne style; skrypt rysuje półokręgi dookoła kropki logo lub wierzchołka „A”. |
| `cab-logo.png`, `cab-znak.png` | Logo CAB w wysokiej rozdzielczości (bez tła). |
| `_qr.py`, `qr-*.svg` | Generator kodów QR (biblioteka `segno`) i gotowe kody. |

**Zapis do PDF:** otwórz plik w Chrome → Ctrl+P → „Zapisz jako PDF” → marginesy: **Brak**,
zaznacz **Grafika tła**. Wizytówka daje 2 strony (przód i tył), ulotka 1 stronę A4.

**Kody QR:** vCard ma wersję 8 (20 mm, ok. 0,41 mm na moduł), a Scholar wersję 4. Oba odczytują się
z wydruku 300 i 200 dpi. Po zmianie telefonu lub e-maila uruchom `python _qr.py` w tym folderze.

**Do drukarni:** papier od 350 g, mat, lakier wybiórczy na logo. Niebieski `#2E5BFF` w CMYK wyjdzie ciemniejszy,
więc poproś o proof albo druk z Pantone 2728 C.

---

## 9. Otwarte sprawy (do zrobienia)

1. **E-mail w domenie:** Marek założy pocztę i poda adres. Wtedy podmień go w:
   - `index.html`, `polityka-prywatnosci.html`, `marek-andryszczyk/index.html` (także JSON-LD);
   - `CONTACT_EMAIL` w `script.js`;
   - wszystkich plikach w `wizytówka i oferta/`, a potem przegeneruj `_qr.py`;
   - nocie biograficznej i dokumencie LinkedIn.
2. **andryszczyk.eu:** najlepiej przenieść wizytówkę do osobnego repozytorium z własnym `CNAME`
   (andryszczyk.eu), bo wtedy adres nie zawiera „CAB” i działa HTTPS. Prostsza opcja to przekierowanie
   „widoczne 301” w panelu OVH zamiast ramki.
3. **Formspree:** wpisz adres formularza w `FORM_ENDPOINT` i dopisz Formspree w punkcie 3 polityki prywatności.
4. **Kapitał zakładowy:** zostaje ze względu na art. 206 KSH, chyba że Marek zdecyduje inaczej.
5. **wirwicki.eu nie działa:** ustalić z Mateuszem albo tymczasowo zmienić link w „Zespół”.
6. **BIO i LinkedIn:** dokumenty w `Desktop\materiały do BIO i Likedin` (generatory w `_generatory/`)
   podają jeszcze tymczasowy adres wizytówki. Wpisz `andryszczyk.eu` i dodaj ją w LinkedIn w polach
   „Witryna” i „Wyróżnione”. Jeśli zmienisz adres profilu LinkedIn, podmień link na wizytówce.
7. **Zdjęcie docelowe** na wizytówkę (3:4) i ewentualnie zdjęcie zespołu na ulotkę (za zgodą Mateusza).
8. **Logo w wersji wektorowej** (SVG lub PDF) dla drukarni i większych formatów.
9. **Co kwartał** sprawdź statusy zgłoszeń w UPRP (KAPEO, MEDWASH, PV Technologie) i zaktualizuj kafelki.
10. **Po obronie doktoratu (2027):** zmień „mgr inż.” na „dr inż.” na stronach, wizytówkach, w BIO i na LinkedIn.
11. **Plan rozwoju w internecie** (Google, SEO, marka) jest w osobnym planie HTML.

---

## 10. Źródła materiałów

- **Brief i teksty strony:** `CAB_materiały/` (prompt v2 jest nadrzędny nad v1).
- **Recenzja strony od Mateusza** (zrzuty z uwagami): `Downloads\recenzja strony CAB\`.
- **Wydruki patentów, BIO, profil LinkedIn i zdjęcia:** `Desktop\materiały do BIO i Likedin\`.
- **Wzory LuMaFi z uwagami Marka:** `Downloads\LUMAFI — wizytówka do druku.pdf`,
  `Downloads\LUMAFI — oferta technologiczna.pdf`.
- **Strony wzorcowe:** https://lumafi.pl/ (kolorystyka i opis strony),
  https://llhqv2.vercel.app/ (wizytówka Łukasza Łapiaka — wzór strony osobistej).
