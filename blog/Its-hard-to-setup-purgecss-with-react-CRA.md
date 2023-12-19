---
title: It's hard to setup purgeCSS with react CRA
tags:
  - performance-eng
date: 2021-02-22 22:29:42
authors: [dhbalaji]
---

![CSS modules](./assets/CSS-modules.webp)

Ask any frontend veteran, `CSS` is the hardest thing to refactor. Having said that, unused CSS easily gets shipped to production despite modern build. One of the CSS pruning libraries is `purgeCSS`. Let's see how purgeCSS works with react CRA.

<!-- truncate -->
 
## What is Unused CSS?

Let us say we use Bootstrap CSS for styling the webpage, style the components, etc. When your package for production, the styles which are not relevant to your web app get added to the CSS file because there is no `tree-shaking` concept in traditional CSS build tools.

Back in `gulp JS` days, the CSS files were 

1. piped from their source to the system
2. Converted into a bundle &
3. later minified
 
 The minified bundle was later gzipped before sending the data from the server to the client. Despite the three-step process, the unused CSS was still shipped to production leading to several KiloBytes of unwanted code shipped to a client.

## How to know if your site has unused CSS

Follow the below steps

1. Open chrome dev tools

2. Goto Elements tab

3. Click on the 3 dots next to the close button on the top right

4. Goto `more tools` > `coverage`

5. This should open a tab next to the console

6. Click on the refresh icon

The page loads and we can see the unused Bytes in both CSS and JS

> The particular CSS code may be unused in the current Html page but used in other pages. So do not jump to a conclusion and remove them.

## How to manage unused CSS

When it comes to JS, we can get a little smarter by importing the required modules out of the library like

```javascript
import {isUndefined} from 'lodash';
```

But in traditional CSS frameworks like `bootstrap`, we do not have any such options. We have to import the whole CSS file unless you choose the `sass` way to consume CSS.

Utility first CSS frameworks like tailwind CSS have a different approach to how CSS gets consumed and reused. If not careful, you may be importing the whole CSS utility file `.css` in Html leading to a lot of unused CSS

> Manually managing unused CSS is not an option. We need to use tools that work at the building level.

## Any popular nodeJS based CSS cleaning libraries out there?

A quick google gave few names like 

1. PurgeCSS

2. PureCSS etc

In my opinion, PurgeCSS had the flexibility through configuration which we can integrate to build tools like webpack.

## How about react CRA?

Out of the box, purgeCSS is not going to work with react-scripts. The document mentions `CRACO` JS library. [Craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md) is an interesting library that alleviates the problem of missing configuration in CRA. You have to replace `react-scripts` with `craco` in the npm scripts.

I did not find this setup appealing because the configuration file is quite lengthy and its one JS module which holds all the configuration for 

1. Webpack

2. eslint

3. CSS 

Refer <a href="https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file">Github Repo</a>

I still tried craco with Purge CSS with React CRA without ejecting. Still, the build system was not working.

I tried to run PostCSS with purgeCSS on top of the build folder contents. Alas seems like a dream run but this setup also did not work. Most of the blog posts were half-baked or copy-paste.

## What's the status?

It is still a work in progress. I will keep you posted when I have a breakthrough.

Till then keep referring to stack overflow <a href="https://stackoverflow.com/questions/tagged/css-purge?sort=unanswered">Stackoverflow</a>
