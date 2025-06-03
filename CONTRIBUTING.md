# Contributing

The goal is to make contributing to Luxe as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## About this repository

This repository is a monorepo.

- Using [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- Using [Turborepo](https://turbo.build/repo) as our build system.

## Structure

This repository is structured as follows:

```
apps
└── www
    ├── app
        ├── _components
        ├── _docs
        ├── ui
packages
└── cli
```

| Path                       | Description                              |
| -------------------------- | ---------------------------------------- |
| `apps/www/app`             | The Next.js application for the website. |
| `apps/www/app/_components` | The React components for the website.    |
| `packages/cli`             | The `@luxeui/ui` package.                |

## Pull requests

Pull requests are the best way to propose changes to the codebase. Pull requests are actively welcome:

1. Fork the repo and create your branch from `main`.
2. If you've changed APIs, update the documentation.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Issue that pull request.

## Report bugs using [GitHub's issues](https://github.com/guhrodrrigues/luxe/issues)

GitHub issues are used to track public bugs. Report a bug by [opening a new issue](https://github.com/guhrodrrigues/luxe/issues/new)!

## Use a Consistent Coding Style

- Use 2 spaces for indentation rather than tabs
- You can try running `pnpm lint` for style unification

## CLI

The `@luxeui/ui` package is a CLI for adding components to your project. You can find the [docs](https://luxeui.com/ui/cli).

Any changes to the CLI should be made in the packages/cli directory.

## What is Accepted

Contributions are welcome for:

- Fixing bugs and issues
- Improving CLI performance
- Enhancing existing features
- Adding better error handling
- Improving docs
- Adding new CLI commands that extend functionality

## What is Not Accepted

Contributions will not be accepted for:

- Creating new UI components
- Adding new frameworks
- Changing the core architecture without discussion
- Adding features that are outside the scope of the CLI tool

## Development Process

1. Create a new branch for your feature/fix
2. Make your changes
3. Add tests if applicable
4. Update docs
5. Submit a pull request
