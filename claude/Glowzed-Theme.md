# Glowzed – Theme-Code

Ordner: `claude/glowzed-theme/` = exakter Stand des Live-Themes **glowzed-theme-v2-20** (12.11.2026). Gehört zu [[Glowzed-Shop]].

Nur zum Lesen. Änderungen am Shop laufen immer über eine Theme-Kopie in Shopify, siehe [[Glowzed-Shop#Theme (Design der Seite)]].

## Aufbau
- `layout/theme.liquid` – Seitenrahmen: Sprach-Weiterleitung nach Land, Google-Titel und -Beschreibung.
- `sections/sno-*.liquid` – alle Bausteine der Seite:
  - `sno-header` – Menü, Konto, Warenkorb-Icon
  - `sno-footer` – Footer mit Lieferland und Sprach-Umschalter
  - `sno-product` – Produktseite
  - `sno-cart` – Warenkorb mit 15-%-Bundle-Rabatt
  - `sno-quiz` – Routine-Quiz („Your Routine“)
  - `sno-hero`, `sno-featured`, `sno-tiles`, `sno-strip`, `sno-newsletter` … – Startseite
- `snippets/`:
  - `sno-card` – Produktkarte
  - `sno-account` – Konto-Fenster
  - `sno-eta` – Lieferdatum
  - `sno-meta` – Link-Vorschau (WhatsApp, Instagram)
  - `sno-schema` – Google-Produktdaten (JSON-LD)
- `locales/en.default.json`, `locales/de.json` – alle festen Texte (Schlüssel `sno.*`).
- `templates/*.json` – welche Sections auf welcher Seite, mit ihren Texten.
- `assets/` – CSS (`sno.css`, `sno-shopify.css`, `sno-cookies.css`), JS (`sno.js`), Produkt-Freisteller (`p-*.webp`), Favicon.

## Texte übersetzen
- Feste Texte: in beiden `locales`-Dateien.
- Texte aus den Section-Einstellungen, Produkte, Seiten: über die Shopify-Übersetzungen (Translations API), nicht im Code.
