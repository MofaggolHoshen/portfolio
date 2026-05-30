# AGENTS

## Purpose

This repository is building a premium personal portfolio using React + TypeScript (Vite) with phased delivery.

Primary project roadmap: [docs/phase-status.md](docs/phase-status.md)

## Current Reality

- Repository is early stage and still in Phase 1 (Foundation).
- [README.md](README.md) is currently a stub and should be expanded later.
- Follow phase gates in [docs/phase-status.md](docs/phase-status.md) before jumping ahead.

## Working Rules

1. Respect phase boundaries:

- Do not start Phase 2+ implementation before Phase 1 verification passes.

2. Keep placeholder-first workflow:

- Use typed placeholder content for sections unless the user explicitly asks to replace with real personal content.

3. Preserve strict typing:

- Prefer explicit types and avoid `any` unless there is a clear, documented reason.

4. Build responsive-first:

- Treat mobile support as required, not optional.

5. Keep accessibility baked in:

- New UI should support keyboard navigation, visible focus states, and semantic markup from the start.

6. Update phase tracking immediately after completion:

- When any phase is finished, update [docs/phase-status.md](docs/phase-status.md) in the same change set.
- Update all related fields: current phase, overall completion, phase progress, and completed verification items.
- Do not mark a phase Completed until its done criteria and verification checks are satisfied.

## Expected Commands (After Scaffold Exists)

Run these only after `package.json` and scripts are present:

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run type-check`

## Deployment Notes

- Target host is GitHub Pages.
- Validate Vite base path and SPA fallback behavior during deployment setup.

## Where To Look First

1. [docs/phase-status.md](docs/phase-status.md) for authoritative scope, deliverables, and verification criteria.
2. [README.md](README.md) for setup/deploy instructions once expanded.
