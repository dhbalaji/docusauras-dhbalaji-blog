---
title: How to prevent focus scroll in react ref?
categories:
  - frontend
date: 2022-06-24 22:03:10
authors: [dhbalaji]
---

![Some alt text](./assets/react-ref.webp)

Have to tried to set focus on an element in react? I have done it multiple times for accessibility reasons. I have uncovered an edge case in setting focus and the page would scroll to the element where the focus was set. 

<!--truncate-->

Here is the explanation of how to do this.

 
 
## What is the default focus behavior after set `focus`?

When you set focus, few things happen visually.

1. The focus-related CSS kicks in and the user can see the outline of the button or similar behavior if any CSS was written for `focus`. The CSS is based on pseudo-classes.

```css
el:focus {
    border: 1px solid tomato;
}
```

2. The focusing element is scrolled to the view if the user had scrolled past/before the element under focus, the browser will pull the user's attention towards the focussed element by scrolling the element to the viewport.

In case you wish to prevent scrolling on focus, the `focus` method takes in options. 

```javascript
elRef.current.focus({
    preventScroll: true
})
```

Once set, the scroll position is turned off. There you go.