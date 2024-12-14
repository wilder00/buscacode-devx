---
title: PNPM
description: Relevant information about pnpm.
---

# PNPM workspaces

To install a package into a subpackage run

```bash
pnpm add tailwindcss --filter @buscacode/tailwind-plugins
```

It is also possible to run a command only for the workspace

```bash
pnpm --filter <package_selector> <command>
```

More details [here](https://pnpm.io/filtering)

## Add a workspace dependency

```bash
pnpm add @buscacode/tailwind-plugins@workspace:*
```

## Add a workspace dependency into another sub dependency

```bash
pnpm add @buscacode/tailwind-base@workspace:* --filter @buscacode/tailwind-utils
```
