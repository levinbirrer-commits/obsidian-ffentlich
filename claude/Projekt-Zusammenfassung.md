# Projekt-Zusammenfassung: Glowzed mit Claude

Stand: 12.11.2026 · geschrieben von Claude, damit andere KIs schnell wissen, worum es geht. Details: [[Glowzed-Shop]] · Aufgaben: [[Glowzed-Aufgaben]] · Code: [[Glowzed-Theme]]

## Worum geht es?
Levin baut einen Online-Shop für Männerpflege: **Glowzed** (glowzed.com, Shopify). Zielgruppe: junge Männer, Looksmaxxing ohne riskante Methoden („no bone smashing“). Sortiment: Haut, Haare, Bart, Körper, Schlaf (Mouth Tape, Nasenpflaster), Tools (Gua Sha, Trimmer). Ware kommt per Dropshipping, Preise fair statt Influencer-Aufschlag.

## Was bisher passiert ist (7.–12.11.2026)
- **Aufbau:** Erst ein HTML-Prototyp, dann der Shopify-Shop mit eigenem Theme im dunklen „Gloss“-Look. 61 Produkte inkl. 7 Kits, freigestellte Produktbilder.
- **Name:** SNØ → Ølby → **Glowzed** (Logo GLØWZED).
- **Funktionen:** Routine-Quiz mit 4 Fragen, 15 % Rabatt ab 3 Produkten (Code ROUTINE15), Newsletter mit WELCOME10, Konto-Fenster mit Login per E-Mail-Code, Lieferdatum auf jeder Produktseite, Cookie-Banner im eigenen Design, Link-Vorschau für WhatsApp und Instagram.
- **Länder:** Schweiz, USA und EU aktiv, mit festen Preisen in CHF, USD und EUR und eigenem Versand pro Markt. UK ist vorbereitet, aber noch aus.
- **Recht:** Rückgabe/Widerruf (EU 14 Tage), Versand, AGB, Impressum, Datenschutz im Shop hinterlegt.
- **Domain:** glowzed.com gekauft, E-Mail info@glowzed.com (Weiterleitung), Zahlungen mit Shopify Payments getestet.
- **Preise:** CHF enden auf .95, USD/EUR/GBP auf .99.
- **Zweisprachig:** alles auf Englisch und Deutsch. CH/DE/AT/LI sehen automatisch Deutsch.
- **Handy-Fixes:** Newsletter-Feld und iPhone-Zoom beim Antippen von Feldern.
- **SEO:** Google-Titel und -Beschreibungen für alle Seiten in beiden Sprachen (Keywords u. a. „cheap/affordable men's skincare“, „günstige Hautpflege für Männer“), Produktdaten für Google, Search Console eingerichtet, Sitemap eingereicht.
- **Dieser Vault:** gemeinsamer Ort für alle KIs, mit Briefkasten für Aufträge (siehe AGENTS.md).

## Stand jetzt
- Live-Theme: **glowzed-theme-v2-20**. Levin findet die Seite fertig. **Fokus ab jetzt: Marketing.**
- Offen sind vor allem kleine Admin-Sachen (Mails, Checkout-Design, Google Shopping) und später DSers, UK und EU-Kosmetikregeln. Siehe [[Glowzed-Aufgaben]].

## Wie wir arbeiten
- Levin schreibt locker auf Deutsch, oft per Sprache („Glowst“ = Glowzed). Antworten: Deutsch, kurz, einfach.
- **Claude** hat direkten Zugriff auf den Shopify-Admin (Produkte, Preise, Übersetzungen, Theme-Kopien). Theme-Änderungen laufen immer über eine Kopie; **Levin veröffentlicht selbst**.
- Nichts am Shop ändern, was Levin nicht verlangt hat. Er will die Seite so lassen, wie sie ist.
- Was andere KIs gut übernehmen können: Marketing-Texte, Instagram- und TikTok-Ideen, Werbevideo-Prompts, Produktbeschreibungen als Vorschlag, Recherche. Ergebnisse als Notiz im eigenen Ordner oder als Auftrag an Claude (`codex/an-claude/`), wenn etwas im Shop umgesetzt werden soll.
