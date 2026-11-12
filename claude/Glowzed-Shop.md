# Glowzed – Shop-Überblick

Stand: 12.11.2026 · geschrieben von Claude

## Was ist Glowzed?
- Online-Shop für Männerpflege (Haut, Haare, Körper, Schlaf, Tools). Domain: glowzed.com
- Läuft auf Shopify. Dropshipping von AliExpress, Bestellungen später über die App DSers.
- 61 Produkte, davon 7 Kits (3 Produkte im Set, günstiger als einzeln).
- Frühere Namen: SNØ, dann Ølby. Logo-Schreibweise: GLØWZED.

## Sprachen und Länder
- Englisch und Deutsch (`glowzed.com/de`).
- Besucher aus Schweiz, Deutschland, Österreich, Liechtenstein landen automatisch auf Deutsch, alle anderen auf Englisch. Umschalter unten im Footer.
- Märkte: Schweiz (CHF), USA (USD), EU (EUR). UK ist vorbereitet, aber noch aus (wartet auf UK-Mehrwertsteuer-Registrierung).

## Preise und Versand
- Preise in CHF enden auf **.95**, in USD/EUR/GBP auf **.99**. Neue Produkte genauso.
- Versand: CH CHF 7, gratis ab CHF 50 · USA $7.90, gratis ab $60 · EU €7.90, gratis ab €55.
- Lieferzeit ca. 6–15 Tage.
- Rabattcodes: `ROUTINE15` (15 % ab 3 Einzelprodukten, Quiz und Warenkorb) und `WELCOME10` (Newsletter). Die beiden lassen sich nicht kombinieren.

## Theme (Design der Seite)
- Eigenes Theme „Glowzed Gloss“. Live ist **glowzed-theme-v2-20**. Code: [[Glowzed-Theme]].
- So wird geändert: Live-Theme in Shopify duplizieren → Dateien in die Kopie hochladen → Prüfsummen vergleichen → **Levin veröffentlicht**. Nie direkt ins Live-Theme schreiben.
- Nach jedem Veröffentlichen: Backup als ZIP in `OBSIDIAN Shop/shopify/` (OneDrive-Desktop).

## SEO (Google)
- Alle Produkte, Kategorien und Seiten haben eigene Google-Titel und -Beschreibungen auf Englisch und Deutsch.
- Keywords u. a. „cheap/affordable men's skincare“, „günstige Hautpflege für Männer“.
- Strukturierte Daten (Preis, Verfügbarkeit) auf Produktseiten.
- Google Search Console ist eingerichtet, Sitemap `https://glowzed.com/sitemap.xml` eingereicht.

## Stolperfallen (für alle KIs)
- Shopifys `t`-Filter gibt Text schon HTML-kodiert zurück → danach `escape_once`, nicht `escape`.
- Admin-GraphQL: Anfrage max. 16 384 Zeichen → Daten in Variablen packen.
- `themeFilesUpsert` per URL ignoriert `layout/*.liquid` und JSON-Templates → diese als TEXT hochladen.
- Prüfsumme von JSON-Templates = MD5 des minifizierten JSON ohne Kopfkommentar.
- Beim Duplizieren eines Themes werden die Übersetzungen mitkopiert.
- Shopify setzt die hreflang-Tags selbst → keine eigenen einbauen.

## Wo liegt was?
- `OBSIDIAN Shop` (OneDrive-Desktop): alter HTML-Prototyp, `docs/` (Rechtstexte, Prompts), `shopify/` (Theme-Backups, Preislisten), `Glowzed-ToDo.docx` (Hauptliste der Aufgaben).
- Offene Aufgaben als Kopie: [[Glowzed-Aufgaben]]
