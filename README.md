# Kleine Schritte – Wellnessmassage in Dillingen

Website für Hanna Dederer. Vite + React, Ausgabe als statische HTML-Dateien.

Aktuell: GitHub → Vercel. Später: derselbe `dist/`-Ordner auf einen netcup VPS.

## Lokal starten

Voraussetzung: Node.js 20 oder neuer

```bash
npm install
npm run dev
```

Die Seite läuft unter http://localhost:3000

## Vercel (aktuell)

1. Repository auf GitHub anlegen und pushen.
2. Bei [Vercel](https://vercel.com) das Repo importieren. Framework Vite, Build `npm run build`, Output `dist` stehen in `vercel.json`.
3. Domain später in Vercel eintragen (oder vorerst `*.vercel.app` nutzen).

`/impressum` und `/datenschutz` laufen über Clean URLs. Die 404-Seite ist `404.html`. Apache-`.htaccess` in `public/` bleibt für den späteren VPS und wird von Vercel ignoriert.

## Für den Server bauen (netcup VPS später)

```bash
npm run build
```

Der Ordner `dist/` wird auf den Server geladen (Document Root). `.htaccess` gilt nur unter Apache; bei Nginx die Regeln in die Server-Config übernehmen.

## Backup

`backups/Backup-erstellen.bat` doppelklicken. Es entstehen ZIP-Dateien `kleine-schritte-backup-YYYY-MM-DD_HH-mm.zip` im Ordner `backups/`.
