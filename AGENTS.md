# EKOS Mimoň Variant B — Project Instructions

## Scope

These instructions apply only to:

```text
C:\CodexWorkspace\20-websites\codex_navrh
```

Global rules from `C:\Users\Adelka\.codex\AGENTS.md` also apply.

## Sources of Truth

Before substantial work, read:

- `README.md`
- `docs/PROJECT_BRIEF.md`
- `docs/BUSINESS_GOALS.md`
- `docs/TARGET_AUDIENCE.md`
- `docs/CONTENT_SOURCE.md`
- `docs/INFORMATION_ARCHITECTURE.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/CURRENT_SITE_AUDIT.md`
- `docs/SEO.md`
- `docs/QA_CHECKLIST.md`
- `docs/TROUBLESHOOTING.md`
- `docs/DECISIONS.md`

If essential information is missing, stop the affected work and ask focused questions.

Do not silently overwrite approved documentation.

## Znovupoužití ověřených řešení

Před opakováním diagnostiky, hledáním cesty, příkazu nebo řešení zkontroluj:

- `README.md`,
- `docs/TROUBLESHOOTING.md`,
- `docs/DECISIONS.md`.

Pokud je v těchto dokumentech uvedeno ověřené řešení a relevantní podmínky se nezměnily, použij je přímo.

Neopakuj stejné hledání pouze proto, že začal nový prompt nebo nová relace.

Po ověření nového opakovaně použitelného řešení aktualizuj `docs/TROUBLESHOOTING.md` a uveď:

- problém,
- potvrzenou příčinu,
- přesnou cestu nebo příkaz,
- způsob ověření,
- podmínky platnosti,
- datum posledního ověření.

## Project Type

This is a redesign variant of a corporate B2B website.

The primary conversion is a qualified enquiry.

The secondary conversion is a phone contact.

Do not finalize or materially change the information architecture without checking `BUSINESS_GOALS.md`, `INFORMATION_ARCHITECTURE.md`, and `DECISIONS.md`.

## Redesign Workflow

1. audit the current state,
2. identify what to keep, improve, remove, or add,
3. obtain approval for major changes,
4. implement the approved direction,
5. run the project QA checklist.

Do not implement a major redesign, architecture change, or technology migration without approval.

## Design Hard Rules

- Use a professional modern industrial direction.
- Prefer technical elegance, premium restraint, clean typography, strong hierarchy, real photography, and concrete evidence.
- Avoid generic AI/SaaS templates, random gradients, excessive glassmorphism, purposeless animation, visual noise, and filler sections.
- AI visuals may be used only as clearly marked concepts or after explicit approval.
- Never present AI visuals as evidence of real products, facilities, references, technology, or capacity.
- Cover desktop, tablet, and mobile.
- Target at least WCAG 2.2 AA.
- Do not claim performance without measurement.

Detailed visual rules belong in `docs/DESIGN_SYSTEM.md`.

## Content Hard Rules

- Do not invent customers, references, certifications, technologies, capacities, locations, statistics, or results.
- Use `docs/CONTENT_SOURCE.md` as the claims register.
- Mark missing information as `[PLACEHOLDER — TO BE CONFIRMED]`.
- AI-generated copy is not approved by default.
- For substantial copy changes, show the original problem, recommended version, and reason.

## CSS Change Control

Main CSS and design-token files are protected.

Do not modify, overwrite, copy into, reformat, or auto-merge protected CSS files without explicit approval for that specific write.

Protected files, if present:

- `global.css`
- `styles.css`
- `src/index.css`
- `base44-export/src/index.css`
- other shared stylesheet or design-token files identified in `DESIGN_SYSTEM.md`

When comparing variants:

1. read and report differences,
2. prepare a diff summary,
3. recommend a transfer plan,
4. wait for approval before editing protected CSS.

## Technology and Commands

Verify the real stack and commands from `README.md` and project files.

Do not invent run, test, lint, or build commands.

## Approval Gates

Require approval before:

- changing goals or scope,
- changing information architecture,
- changing content structure,
- changing visual direction,
- changing technology,
- editing protected CSS,
- making major implementation decisions,
- final acceptance.

If a request conflicts with an approved decision, stop and reference the relevant decision ID.

## Definition of Done

A task is complete only when:

- it supports the approved business goal,
- it respects approved documents and decisions,
- claims are verified or marked,
- responsive behavior is covered,
- key interactions are accessible,
- relevant real checks pass,
- the primary enquiry and phone paths work,
- remaining risks are documented,
- the result does not look like a generic AI output.
