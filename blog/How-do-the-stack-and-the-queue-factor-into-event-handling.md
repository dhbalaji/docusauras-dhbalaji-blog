---
title: How do the JS stack and the queue factor into event handling?
tags:
  - tech-interviews
date: 2021-06-09 23:42:46
authors: [dhbalaji]
---

![Some alt text](./assets/white-board-discussion.webp)

How do the stack and the queue factor into event handling? This is cryptic question that checks candidates awareness about event loop in Javascript. This is my favourite question because I can check for programming concepts like stack, queue and thinking in threads right away. Let us discuss the question further.



## How do the Javascript stack and the queue factor into event handling?

> alias -  What is event loop in JS

JS is single threaded. The Javascript thread works with other thread in a concurrency model based on event loop. Event loop is responsible for executing async code & handling events.

> The event loop takes care of scheduling part of asynchronous code execution for JS Engines. The event loop exists irrespective of JS engine running on browser or server.

1. When a user action occurs on a webpage, the `event tracking` thread checks for the associated event handler for the event.
   
2. If event handler is found, the event loop pushes the eventhandler to the JS queue so that the handler gets executed when the stack is free.
   
3. If no event handler is found, then nothing happens.
   
4. the event loop puts the event handler to the queue to execute at the earliest, but the event loop does not interrupt the current running items in the stack.

When an async code is executed, the event loop puts it on the queue. The async code gets executed once the stack is empty.

Keywords: event handling, async, stack, queue, JS thread


## How do you stop the event from bubbling up the DOM tree?

use `event.stopPropogation` method. This helps us with which element can handle the event and which one should not be interested in the event.

## How to avoid default actions from the browser?

Certain functionalities or actions are added by default by the browser like

1. the last button in the form acting as a submit button
   
2. the anchor tag click taking us to next page after bubling and capture phase
   
3. the tooltip of the image is the alt text

These events cannot be stopped with event.stopPropogation even if they occur after bubbling phase. so we have event.preventDefault. We can stop any default action added by browser. This helps us write better consistent apps.

## What do you know about non mouse event bindings

This is a topic related to accessibility context. We must write events that help people who have trouble using mouse or visually impaired. Here are some techniques.

1. Use enter key based event along with click event

2. Use focus and blur events when mouse over, mouse out are used.
