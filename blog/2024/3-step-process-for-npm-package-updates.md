---
title: 3 step process to keep your NPM packages updated in VS Code
tags:
  - npm-packages
  - work
date: 2024-01-14 13:30:30
authors: [dhbalaji]
---

Here is a short post detailing the methodology used by me to keep the npm packages up to date.

1. Install vs-code extension called [package-json-upgrade](https://marketplace.visualstudio.com/items?itemName=codeandstuff.package-json-upgrade) which will give information about the latest version available.

> Extension ID of the extension - `codeandstuff.package-json-upgrade`

2. Use `package-json-upgrade` extension tooltip to update the package.

3. Run `npm update` to update the packages and modify the `package-lock.json`

Once updates are performed, check if the application can build successfully.