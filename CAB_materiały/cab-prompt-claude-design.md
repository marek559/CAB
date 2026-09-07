# Prompt do Claude Design — strona CAB Centrum Analizy Badań

> **Uwaga:** ten dokument jest wersją archiwalną. Aktualny prompt, z połączoną sekcją obszarów technologicznych, patentami i wdrożeniami, znajduje się w `CAB_pakiet_strona/01_prompt/prompt-claude-design-v2.md`.

Zaprojektuj i przygotuj kompletną, responsywną stronę typu one-page dla firmy **CAB Centrum Analizy Badań**. Język strony: polski. Strona ma budować zaufanie do eksperckiej, technicznej firmy doradczo-badawczej, która wspiera przedsiębiorstwa w przechodzeniu od pomysłu technologicznego do projektu B+R, dokumentacji konkursowej oraz działań wdrożeniowych.

## Kontekst marki

CAB Centrum Analizy Badań jest firmą spin-offową. 90% udziałów posiada Mateusz Wirwicki, a 10% Centrum Transferu Technologii UTP. Prezesem CAB jest Mateusz Wirwicki. Nie dopowiadaj formy prawnej, adresu, NIP-u, liczb zatrudnienia, wartości pozyskanych środków ani daty założenia — w tych miejscach zastosuj wyraźne placeholdery do późniejszego uzupełnienia.

Pozycjonowanie marki:

> Łączymy analizę, inżynierię i badania z realnymi potrzebami przedsiębiorstw. Pomagamy zamieniać wyzwania technologiczne w przemyślane projekty B+R, dokumentację aplikacyjną i rozwiązania gotowe do wdrożenia.

Ton komunikacji: konkretny, partnerski, techniczny i spokojny. Bez napompowanych haseł, bez obietnic „gwarantujemy dotację” oraz bez twierdzenia, że każdy przygotowany wniosek otrzymał finansowanie. Zamiast tego pisz: „przygotowujemy”, „wspieramy”, „opracowujemy materiały”, „prowadzimy prace analityczne”.

Inspiruj się logiką i czytelnością strony lumafi.pl: wyrazisty hero, duże nagłówki, drobne numerowane etykiety sekcji, jasno rozdzielone kompetencje, portfolio i kontakt. Nie kopiuj jej układu ani tekstów 1:1. Dla CAB zaproponuj autorską, bardziej przemysłowo-badawczą estetykę.

## Kierunek wizualny

- Styl: nowoczesna pracownia badawczo-inżynieryjna; premium B2B, wyraźna typografia, dużo oddechu i precyzyjna siatka.
- Kolory: głęboki granat `#091826`, prawie czarny `#0B0E12`, kość słoniowa `#F5F2EA`, energetyczna zieleń `#A6FF4D` jako akcent, chłodny błękit `#8DD7FF` do danych/rysunków. Unikaj typowego „unijnego” niebieskiego jako dominującego koloru.
- Typografia: wyrazisty grotesk dla nagłówków (np. Manrope / Sora / Space Grotesk) i bardzo czytelny Inter dla tekstu. Stosuj wersaliki w mikroetykietach.
- Motyw graficzny: subtelne linie techniczne, siatka pomiarowa, warstwy materiałów, schematy przepływu energii i delikatne kontury CAD. Nie stosuj stereotypowych żarówek, uścisków dłoni, stockowych sal konferencyjnych ani dużych flag UE.
- Zdjęcia traktuj jak autentyczną dokumentację pracy: detal przemysłowy, instalacja PV, moduł budowlany, laboratorium stomatologiczne, pomiar/analiza. Nie pokazuj rozpoznawalnych osób ani logo klientów.
- Dostępność: wysoki kontrast, czytelna hierarchia, sensowne focus states, tekst alternatywny dla grafik, pełna responsywność.

## Struktura strony i gotowe treści

### 1. Nawigacja

Logo tekstowe: `CAB` oraz podpis `Centrum Analizy Badań`.

Pozycje: `O nas` · `Kompetencje` · `Branże` · `Realizacje` · `Programy` · `Kontakt`.

Po prawej wyróżniony przycisk: `Porozmawiajmy o projekcie →`.

### 2. Hero

Mikroetykieta: `SPIN-OFF · ANALIZA · B+R · WDROŻENIA`

Nagłówek:

> Od technologicznego pomysłu do projektu, który można wdrożyć.

Tekst:

> CAB Centrum Analizy Badań wspiera firmy w przygotowaniu projektów badawczo-rozwojowych, dokumentacji konkursowej i analiz technicznych. Łączymy perspektywę nauki, przemysłu oraz efektywności energetycznej.

Przyciski: `Opowiedz o wyzwaniu →` oraz `Zobacz nasze obszary`.

Poniżej trzy krótkie wyróżniki:

- `Spin-off z zapleczem transferu technologii`
- `Od koncepcji i agendy B+R po dokumentację`
- `Przemysł, energia, materiały i medtech`

Hero visual: kolaż z ciemnego zdjęcia detalu metalowej konstrukcji / technicznego rysunku CAD / jasnej zielonej linii danych. Zachowaj spokojną kompozycję, bez tekstu na samej fotografii.

### 3. O nas

Etykieta: `01 — O FIRMIE`

Nagłówek:

> Analityczne zaplecze dla projektów, które mają działać poza prezentacją.

Tekst:

> CAB jest firmą spin-offową, działającą na styku nauki, technologii i przedsiębiorczości. Wspieramy zespoły, które rozwijają produkty, procesy i inwestycje wymagające nie tylko dobrego pomysłu, lecz także rzetelnego uzasadnienia technicznego, badawczego i biznesowego.

Karta „Model działania”:

- `Diagnoza` — problem, technologia, ograniczenia i potencjał wdrożenia.
- `Koncepcja` — cel, zakres badań, plan prac i model rezultatu.
- `Dokumentacja` — opisy, analizy, agendy B+R, wnioski, audyty i załączniki.
- `Rozwój` — doprecyzowanie materiałów w toku przygotowania i oceny projektu.

Karta „Zarządzanie i własność”:

> Prezes: Mateusz Wirwicki. CAB jest spin-offem; 90% udziałów posiada Mateusz Wirwicki, a 10% Centrum Transferu Technologii UTP.

Zaprojektuj obok abstrakcyjną infografikę „nauka ↔ przedsiębiorstwo ↔ wdrożenie”, nie wykres udziałów.

### 4. Kompetencje

Etykieta: `02 — CO ROBIMY`

Nagłówek: `Projektujemy drogę od problemu do mierzalnego rezultatu.`

Przedstaw sześć kart, z numerem i prostą ikoną liniową:

1. **Projekty B+R i koncepcje technologiczne**  
   Formułowanie problemu badawczego, celów, hipotez, etapów prac i rezultatów możliwych do wdrożenia.
2. **Dokumentacja konkursowa i aplikacyjna**  
   Przygotowanie opisów projektów, agend badawczych, analiz, załączników technicznych oraz materiałów do wniosków o dofinansowanie.
3. **Analizy technologiczne i rynkowe**  
   Ocena stanu techniki, kierunków rozwoju, potrzeb użytkownika, ryzyk oraz potencjału innowacji.
4. **Efektywność energetyczna i audyty**  
   Materiały audytowe i techniczne dla inwestycji ograniczających zużycie energii, m.in. PV, chłodnictwa, termomodernizacji oraz linii technologicznych.
5. **Inżynieria produktu i procesu**  
   Wsparcie rozwoju konstrukcji, materiałów, technologii wytwarzania i rozwiązań przemysłowych.
6. **Strategia wdrożenia**  
   Łączenie wyników prac B+R z planem prototypowania, walidacji i wdrożenia w przedsiębiorstwie.

### 5. Branże

Etykieta: `03 — DOŚWIADCZENIE BRANŻOWE`

Nagłówek: `Technologie różnią się detalem. Dobra metodyka zaczyna się od zrozumienia procesu.`

Użyj siatki 2 × 3 oraz miniatur zdjęciowych jako placeholderów:

- **Energia i środowisko** — agrofotowoltaika, OZE, ślad węglowy, efektywność energetyczna, chłodnictwo, termomodernizacja, GOZ i recykling.
- **Produkcja i inżynieria przemysłowa** — obróbka stali, konstrukcje metalowe, narzędzia, linie technologiczne, malowanie proszkowe, laser i automatyzacja.
- **Materiały, opakowania i tworzywa** — folie, karton, powłoki, wyroby z tworzyw, właściwości materiałowe i technologie przetwórstwa.
- **Budownictwo i rozwiązania modułowe** — kontenery mieszkalne, konstrukcje, stolarka, pawilony samowystarczalne i materiały budowlane.
- **Zdrowie i medtech** — stomatologia cyfrowa, protezy, suprakonstrukcje, szablony stomatologiczne i procesy medyczne.
- **Rolnictwo, żywność i gospodarka zasobami** — systemy dla rolnictwa, mikroklimat, silosy, przetwórstwo oraz technologie poprawiające efektywność zasobową.

### 6. Wybrane realizacje / przykłady prac

Etykieta: `04 — WYBRANE OBSZARY PRAC`

Nagłówek: `Praca oparta na konkretnej technologii, nie na ogólnym szablonie.`

Zaprojektuj 5 kart case-study bez eksponowania nazw klientów. Każda karta ma zawierać: kategorię, tytuł, 2–3 zdania opisu, trzy tagi i status `Materiały przygotowane` albo `Dokumentacja złożona`. Nie sugeruj otrzymania dofinansowania.

1. **Mobilne systemy agrofotowoltaiczne**  
   Opracowanie materiałów do projektu B+R dotyczącego mobilnych instalacji AgroPV, które umożliwiają równoczesną produkcję energii i użytkowanie rolnicze gruntu. Zakres obejmował założenia konstrukcyjne, projekt, symulacje oraz prototyp pojedynczego modułu.  
   Tagi: `OZE` `AgroPV` `prototypowanie`
2. **Cyfrowy workflow w protetyce stomatologicznej**  
   Przygotowanie dokumentacji dla prac B+R nad innowacyjną protezą zębową oraz cyfrowym modelem leczenia bezzębia całkowitego. Obszar obejmuje właściwości materiałowe, trwałość produktu i walidację efektu użytkowego.  
   Tagi: `medtech` `B+R` `stomatologia cyfrowa`
3. **Suprakonstrukcje z cyrkonu w protezach ruchomych**  
   Materiały projektowe dotyczące zwiększenia wytrzymałości suprakonstrukcji poprzez zastosowanie cyrkonu IC plus w protezach typu OVD.  
   Tagi: `materiały` `medtech` `walidacja`
4. **Zoptymalizowane kontenery mieszkalne**  
   Dokumentacja projektu badawczego dla lżejszych i łatwiejszych w montażu konstrukcji kontenerowych, z cyfrową optymalizacją ramy i ograniczeniem materiałochłonności.  
   Tagi: `budownictwo modułowe` `konstrukcje` `ekoefektywność`
5. **Efektywność energetyczna obiektów i procesów**  
   Opracowanie audytów i materiałów technicznych dla inwestycji obejmujących m.in. systemy chłodnicze, fotowoltaikę, termomodernizację oraz modernizację maszyn i linii produkcyjnych.  
   Tagi: `audyt energetyczny` `PV` `chłodnictwo`

Pod kartami dodaj uczciwy komunikat: `Zakres publikowanych informacji jest ograniczony poufnością współpracy. Szczegóły podobnych realizacji przedstawiamy podczas rozmowy.`

### 7. Programy i ścieżki finansowania

Etykieta: `05 — DOŚWIADCZENIE KONKURSOWE`

Nagłówek: `Przygotowujemy materiały dla projektów, które wymagają jednocześnie języka nauki, biznesu i kryteriów konkursowych.`

Wizualnie przedstaw „mapę doświadczenia” w formie eleganckich kart — nie jako logotypy instytucji. Na każdej karcie pokaż „obszar przygotowywanych materiałów”, nie stwierdzenie o sukcesie finansowym:

- **Fundusze Europejskie dla Nowoczesnej Gospodarki — Ścieżka SMART**: projekty B+R i komponenty aplikacyjne.
- **Program Operacyjny Inteligentny Rozwój — Bony na innowacje dla MŚP**: przygotowanie materiałów do projektów związanych z rozwojem produktów i technologii.
- **Fundusz Badań i Wdrożeń 3.0 / Fundusze Europejskie dla Kujaw i Pomorza 2021–2027**: materiały projektowe dla przedsięwzięć B+R i wdrożeniowych.
- **Kredyt Ekologiczny / FENG**: dokumentacja i analizy audytowe dla inwestycji w efektywność energetyczną.
- **FEnIKS**: materiały powiązane z inwestycjami środowiskowymi i energetycznymi.
- **Horyzont 2020 oraz GEKON**: doświadczenie w pracy z dokumentacją programów badawczych i środowiskowych.

Tekst pod sekcją:

> Dobieramy zakres pracy do programu i dojrzałości projektu: od koncepcji oraz agendy badawczej, przez opis technologii i plan badań, po wymagane analizy, załączniki i materiały audytowe.

### 8. Jak pracujemy

Etykieta: `06 — METODYKA`

Nagłówek: `Porządkujemy złożoność w pięć czytelnych etapów.`

Pokaż poziomą oś czasu:

`01 Diagnoza` — cel biznesowy, technologia i ograniczenia.  
`02 Analiza` — stan wiedzy, proces, dane, ryzyka i potencjał innowacji.  
`03 Koncepcja` — zakres B+R, rezultaty, plan prac i logika wdrożenia.  
`04 Dokumentacja` — opisy, agendy, audyty, załączniki i spójność formalna.  
`05 Dopracowanie` — odpowiedzi, korekty i przygotowanie materiału do kolejnego kroku.

### 9. Kontakt

Tło w jasnej kości słoniowej, tekst w granacie.

Etykieta: `POROZMAWIAJMY`

Nagłówek: `Masz technologię, inwestycję albo problem do rozwiązania? Nadajmy mu strukturę.`

Tekst: `Opisz krótko cel, branżę i etap, na którym jest projekt. Wrócimy z propozycją sensownego pierwszego kroku.`

Formularz: `Imię i nazwisko` · `Firma` · `E-mail` · `Telefon (opcjonalnie)` · `Obszar projektu` (lista: B+R / dokumentacja konkursowa / audyt energetyczny / analiza technologii / inne) · `Opis wyzwania` · checkbox RODO · przycisk `Wyślij zapytanie →`.

Dodaj placeholdery: `[adres e-mail]`, `[telefon]`, `[miasto / adres]`, `[link do LinkedIn]`.

### 10. Stopka

`CAB Centrum Analizy Badań`  
`ANALIZA · B+R · WDROŻENIA`

Linki: O nas / Kompetencje / Branże / Realizacje / Kontakt / Polityka prywatności.

Mały komunikat: `Dane rejestrowe i polityka prywatności — do uzupełnienia przed publikacją.`

## Materiały wizualne — placeholdery do wykorzystania

Wstaw estetyczne placeholdery z poniższymi opisami. Każdy ma mieć podpis w interfejsie edytora, aby można go było łatwo podmienić:

1. `hero-industrial-cad.jpg` — makrofotografia precyzyjnie wykonanej stalowej konstrukcji na ciemnym tle; nałożone bardzo subtelne linie CAD w zieleni, poziomy kadr 16:9. Alt: „Detal konstrukcji przemysłowej z liniami technicznymi”.
2. `energy-audit.jpg` — dach handlowo-przemysłowego obiektu z panelami PV, widok z góry, neutralne światło, bez widocznych marek, 4:3. Alt: „Instalacja fotowoltaiczna na obiekcie przemysłowym”.
3. `medtech-dental.jpg` — czysty, abstrakcyjny detal cyfrowej protezy lub modelu stomatologicznego w pracowni, bez pacjenta i bez rozpoznawalnych osób, 4:3. Alt: „Cyfrowy model stomatologiczny”.
4. `modular-construction.jpg` — rama modułu budowlanego w hali, geometryczne światło, 4:3. Alt: „Konstrukcja modułowa w procesie wytwarzania”.
5. `materials-lab.jpg` — powierzchnia folii lub zaawansowanego materiału oglądana pod kątem, mikroskopijna faktura i światło laboratoryjne, 4:3. Alt: „Badanie właściwości materiału”.
6. `data-grid.svg` — abstrakcyjna siatka danych / krzywe pomiarowe / drobne oznaczenia techniczne jako tło dla sekcji metodyki. Alt: „Schemat danych i pomiarów”.

## Wymagania końcowe

- Zbuduj rzeczywistą, dopracowaną stronę, a nie sam moodboard.
- Użyj płynnych, subtelnych animacji: pojawianie sekcji przy scrollu, delikatny ruch linii danych, stany hover kart. Bez agresywnych efektów.
- Na telefonie zamień szerokie osie czasu w czytelną listę pionową; formularz ma być wygodny w obsłudze kciukiem.
- Przygotuj komponenty tak, aby kolejne case studies, programy i branże dało się dodawać bez przebudowy layoutu.
- Nie umieszczaj na stronie nazw klientów ani ich znaków bez odrębnej zgody. Nie używaj określeń „lider rynku”, „gwarantujemy sukces” ani nie deklaruj skuteczności procentowej.
