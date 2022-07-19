---
title: stages in Ecmascript and how it relates to Javascript
tags:
  - frontend
date: 2021-11-27 23:21:23
authors: [dhbalaji]
---

![Ecmascript and JavaScript](./assets/ecmascript-relates-JS.webp)

Let us say you drop a cheque at the local bank, it goes through several stages and finally, you get your money. Similarly in JavaScript, the working committee throws in an idea that goes through several stages before it becomes a language feature. Let's find out more.

<!-- truncate -->
 
## What is the difference between ECMAScript and JavaScript?

ECMAScript is the standard on which JavaScript is based. Whenever a new standard is added to ECMAScript and it's in Stage 4, we can safely assume that the particular feature will be ready in JavaScript.

Ecmascript can be compared to the plan given by the architects in the real world. JavaScript is the building that is based on the plan.

I hope you liked the analogy.

## What are the stages involved in the ECMAScript feature proposal

Someone or the TC39 committee proposes a language feature to JavaScript and it goes through several stages.

Stage 0 - Sketch
Stage 1 - Proposal, pick the developers from TC39 who would work on the idea
Stage 2 - Draft of spec, with implementations
Stage 3 - Spec complete, needs feedback from implementations
Stage 4 - Test 262 acceptance tests pass, ready for standardization


Some geek words in the above stages are

- TC39 implementors are called champions
- Test 262 is the actual test suite for JavaScript engines
- Strawperson is a word for any discussion, idea, or proposal which is not been submitted as a formal proposal

> Read more https://tc39.es/process-document/

## What features go into JS release every year?

Stage 4 features before the release deadline will be shipped.

> Any stage 4 feature which is waiting for release should be on your to-read list.