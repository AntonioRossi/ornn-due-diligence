# Ornn Remotion Project

This directory contains the standalone Remotion project for the Ornn investor video work.

The main composition is `OrnnIcV1`, a first-cut investor presentation based on:

- `../investment-committee-memo.md`
- `../management-diligence-request-list.md`

## Commands

Install dependencies:

```bash
pnpm install
```

Start Remotion Studio:

```bash
pnpm dev
```

Render the current composition:

```bash
pnpm render
```

Run static checks:

```bash
pnpm typecheck
pnpm lint
```

## Project Layout

```text
src/
  index.ts
  Root.tsx
  compositions/
  components/
  data/
  utils/
```

## Next Step

Refine the current cut against the plan documents:

- `../remotion-v1-build-plan.md`
- `./v1-review-notes.md`
