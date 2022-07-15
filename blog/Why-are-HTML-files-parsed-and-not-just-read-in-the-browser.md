---
title: Why are HTML files parsed and not just read in the browser?
tags:
  - tech-interviews
date: 2021-06-09 22:43:27
authors: [dhbalaji]
---

![Some alt text](./assets/white-board-discussion.webp)


Why are HTML files parsed and not just read in the browser? What is the order of operation inside a browser? Let us answer the front-end lead-level interview questions.

 
 
## Why are HTML files parsed and not just read in the browser?

"Reading a file" in software engineering means you are loading the contents of the file into the memory or buffer. No meaningful operation is performed on the reading of a file. 

The browsers parse the HTML to understand the structure of the file and perform operations on it like loading the assets like CSS, JS scripts, etc.

## What is the order of operation inside a browser?

1. HTML is parsed
   
2. External stylesheets are loaded. Assuming that the link tags are in the head section of the document. In sites built with AMP, we do not have external CSS.
   
3. Scripts are executed as they are parsed in the document. Here the assumption is that the scripts do not async, defer attributes, and are placed below the link tag in the head section.
   
4. HTML DOM is fully constructed. In this step, the DOMContentLoaded event gets fired.
   
5. Images and external content are loaded.
   
6. The page is finished loading. In this step, the load event gets fired.

