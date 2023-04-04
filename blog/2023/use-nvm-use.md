---
title: Use nvm use while switching codebases
tags:
  - tech-solved-it
date: 2023-04-04 15:30:22
authors: [dhbalaji]
slug: /nvm-use-nvm
---

> Disclaimer: Works only on mac OS & Linux

When you work with modern and legacy codebases, we have to switch the node versions that fits the project.

Most developers are familiar with `nvm` aka Node version manager.

While we switch to a codebase which uses a different codebase, use `nvm use` command. But its not a magical command to analyze the node version requirements. 

Make sure to add `.nvmrc` to the project root with the minimal node version.

```
v18
```

The terminal output would be 

```
> nvm use
Now using node v18.15.0 (npm v9.5.0)
```

Interestingly the global node version across the machine is not impacted. The changes are restricted to the terminal.

## Checklist

- Install NVM
- Add `.nvmrc` with minimum required version number
- Run `nvm use` command
- Notice the change in the version in the terminal