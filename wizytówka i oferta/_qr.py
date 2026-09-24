# Generuje kod QR (SVG) do wizytówki firmowej CAB. Uruchom ponownie po zmianie danych kontaktowych.
# Kod wizytówki osobistej jest w repozytorium andryszczyk.
# Wymaga: pip install segno
import pathlib

import segno

here = pathlib.Path(__file__).parent


def vcard(*lines):
    """vCard 3.0 — po zeskanowaniu telefon proponuje zapisanie kontaktu.
    LF zamiast CRLF: krótszy kod, telefony czytają oba warianty."""
    return "\n".join(["BEGIN:VCARD", "VERSION:3.0", *lines, "END:VCARD"])


codes = {
    # wizytówka firmowa CAB
    "qr-vcard-cab.svg": vcard(
        "N:Andryszczyk;Marek",
        "FN:Marek Andryszczyk",
        "ORG:CAB Centrum Analizy Badań",
        "TEL:+48609222466",
        "EMAIL:andryszczyk.marek@gmail.com",
        "URL:https://cab-innowacje.com",
    ),
}

for name, data in codes.items():
    # poziom korekcji L — mniej modułów, większy moduł w druku (ok. 0,4 mm przy 20 mm)
    qr = segno.make(data, error="l", micro=False, boost_error=False)
    qr.save(here / name, kind="svg", scale=1, border=0, dark="#0B0D12", light=None,
            xmldecl=False, omitsize=True, nl=False)
    print(f"{name}: wersja {qr.version}, poziom korekcji {qr.error}, {qr.symbol_size(border=0)[0]} modułów")
