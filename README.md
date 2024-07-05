# Webflow Dev Template

A template for starting all your Webflow projects requiring code.
It looks like the one of [finsweet](https://github.com/finsweet/developer-starter) but it's easily customizable.

## Requirements

Install pnpm on your computer
```bash
npm i -g pnpm
```

Got a npm token (named NPM_TOKEN) : [How to do](https://docs.npmjs.com/creating-and-viewing-access-tokens)

## Installation

1. Click on Use this template > [Create a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)
2. Change some settings in your repository 

```Settings > Actions > General > Workflow Permissions```

- Read and write permissions.
- Allow GitHub Actions to create and approve pull requests.

```Settings > Secrets and variables > Actions > New repository secret ```
- Name: NPM_TOKEN
- Secret: you token
3. Install dependencies
```bash
pnpm install
```

You can start your project! Here are two useful scripts:

Dev mode (with live reload)
```bash
pnpm dev
```

Build (for production)
```bash
pnpm build
```

4. Write your code in src/index.ts (don't touch Webflow.push but you should remove console.log)

```typescript
Webflow.push(() => {
  //Write your code here

  console.log('Hello World')
})

```

## Deployment

```bash
pnpm changeset
```
Then push your code,

In GitHub, when CI/CD is finished, you will have a pull request, merge it and you're done!

Your package will appear in npm.

## Tools

The advantage of this template is you can easily change each tool to suit your configuration.

### Finsweet ts-utils (don't change)

Finsweet did a HUGE work by typing the Webflow.js file included in all Webflow projects.

With this, you can access many types and methods not provided by Webflow.

### ESBuild

A fast JavaScript bundler and minifier that compiles and packages JavaScript and TypeScript code for deployment.

Update builder/esbuild.js

It includes a live reload in builder/live-reload.js

### TSConfig

A configuration file for TypeScript that specifies the compiler options and file paths required to compile a TypeScript project.

Update tsconfig.json

### ESLint

A static code analysis tool for JavaScript that identifies and fixes problems in your code to ensure adherence to specified coding standards and best practices.

Update eslint.config.js

### Prettier

A code formatter for JavaScript that enforces consistent style by parsing code and reprinting it with its own rules.

Update .prettierrc file.

### Husky (Git hooks)

A tool that enables Git hook scripts to run automatically, helping to enforce quality checks and other tasks during the development process.

Add hooks in .husky folder

### Changeset (versioning)

A tool for managing and automating the versioning and changelog generation process for projects, especially those using monorepos, by tracking changes across packages.

Update .changeset/config.json

### CI/CD

This pipeline uses GitHub Actions

#### Lint

Check if your code got errors before going to production

Update .github/workflows.ci.yml


#### Release

Publish package to npm

Update .github/workflows.realease.yml
