# EKOS Mimoň Variant B

## Project

Redesign variant of a corporate B2B website.

## Active Instructions

- Global: `C:\Users\Adelka\.codex\AGENTS.md`
- Project: `AGENTS.md`

## Documentation

Project facts and decisions are stored in `docs/`.

## Ověřená řešení a troubleshooting

Před opakováním diagnostiky, hledáním příkazu nebo systémové cesty zkontroluj:

- `docs/TROUBLESHOOTING.md`
- `docs/DECISIONS.md`

Běžné příkazy, standardní cesty a způsob spuštění patří do tohoto `README.md`.

Konkrétní ověřené řešení chyby patří do `docs/TROUBLESHOOTING.md`.

Nevkládej sem detailní záznamy jednotlivých chyb.

## Technology Stack

- Framework: React 18 + Vite 6 application in `base44-export`.
- Package manager: npm (`base44-export/package-lock.json` is present).
- Runtime: Node.js project; exact local Node version is not pinned in project files.

## Commands

Run from `base44-export`:

```powershell
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

No dedicated test script is defined in `base44-export/package.json`.

## Repository Structure

```text
.
├── AGENTS.md
├── README.md
├── assets
├── base44-export
├── docs
├── global.css
├── index.html
├── src
└── styles.css
```

## Current Status

- Documentation baseline created.
- Information architecture and design system require confirmation.
- Current-site audit requires evidence from the actual website/build.
