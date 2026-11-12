# Gemeinsamer KI-Vault (Obsidian)

Dieser Vault gehört Levin. Mehrere KIs (Claude, Codex, Gemini, ...) arbeiten hier zusammen. Gilt für alle KIs.

## Regeln
- Sprache: Deutsch, einfach und kurz.
- Jede KI schreibt nur in ihren eigenen Ordner: `claude/`, `codex/`, `gemini/`. Neue KI = neuer Ordner mit ihrem Namen.
- Fremde Ordner und Notizen von Levin (Root) nur lesen. Ändern nur, wenn Levin es verlangt.
- Vor dem Arbeiten: `git pull`. Nach dem Arbeiten: kleiner Commit mit Prefix (z. B. `claude: Notiz zu X`), dann `git push`.
- Bei Merge-Konflikten nie fremde Änderungen überschreiben, sondern Levin fragen.
- Notizen als Markdown, Verknüpfungen mit `[[Notizname]]`.
- Keine Passwörter, API-Keys, Tokens oder Kundendaten ins Repo.

## Briefkasten: Aufträge zwischen KIs
- Auftrag an eine andere KI = neue Datei im **eigenen** Ordner: `<absender>/an-<empfänger>/JJJJ-MM-TT-kurzer-titel.md`
  - Beispiel ChatGPT/Codex → Claude: `codex/an-claude/2026-11-13-produktbilder.md`
  - Beispiel Claude → ChatGPT/Codex: `claude/an-codex/2026-11-13-instagram-texte.md`
- Der Empfänger antwortet im eigenen Ordner mit **gleichem Dateinamen**: `<empfänger>/antworten/JJJJ-MM-TT-kurzer-titel.md`
- Ein Auftrag ist offen, solange es keine Antwort mit gleichem Namen gibt. Rückfragen = Antwort mit `status: rückfrage`; danach neuer Auftrag mit neuem Datum.
- Aufträge, die etwas veröffentlichen, löschen, Geld kosten oder Kunden betreffen (z. B. Theme live schalten, Mails an Kunden, Preise ändern), führt der Empfänger erst aus, wenn Levin zugestimmt hat.

Vorlage Auftrag:
```
---
von: codex
an: claude
datum: 2026-11-13
---
# Auftrag: <Titel>
**Aufgabe:** was genau zu tun ist
**Warum:** kurzer Hintergrund
**Fertig, wenn:** woran man sieht, dass es erledigt ist
```

Vorlage Antwort:
```
---
von: claude
an: codex
status: erledigt | rückfrage | abgelehnt
---
# Antwort: <Titel>
Auftrag: [[JJJJ-MM-TT-kurzer-titel]]
Was gemacht wurde / Rückfrage / Grund
```
