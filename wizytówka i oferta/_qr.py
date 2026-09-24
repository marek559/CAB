# Generuje kody QR (SVG) do wizytówek. Uruchom ponownie po zmianie danych kontaktowych.
# Wymaga: pip install segno
import pathlib

import segno

here = pathlib.Path(__file__).parent

# vCard 3.0 — po zeskanowaniu telefon proponuje zapisanie kontaktu
vcard = "\n".join([  # LF zamiast CRLF: krótszy kod, telefony czytają oba warianty
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Andryszczyk;Marek",
    "FN:Marek Andryszczyk",
    "ORG:CAB Centrum Analizy Badań",
    "TEL:+48609222466",
    "EMAIL:andryszczyk.marek@gmail.com",
    "URL:https://cab-innowacje.com",
    "END:VCARD",
])

codes = {
    "qr-vcard-cab.svg": (vcard, "l"),  # L: 49 modułów, ok. 0,41 mm przy 20 mm
    "qr-scholar.svg": ("https://scholar.google.com/citations?user=M6mWizMAAAAJ", "m"),
}

for name, (data, err) in codes.items():
    qr = segno.make(data, error=err, micro=False, boost_error=False)
    qr.save(here / name, kind="svg", scale=1, border=0, dark="#0B0D12", light=None,
            xmldecl=False, omitsize=True, nl=False)
    print(f"{name}: wersja {qr.version}, poziom korekcji {qr.error}, {qr.symbol_size(border=0)[0]} modułów")
