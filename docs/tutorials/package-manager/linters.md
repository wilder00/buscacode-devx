---
sidebar_position: 1
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
