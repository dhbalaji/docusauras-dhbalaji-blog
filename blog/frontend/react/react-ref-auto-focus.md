---
slug: /2022/06/24/frontend/How-to-prevent-focus-scroll-in-react-ref/
title: How to prevent focus scroll in react ref?
date: 2022-06-24 22:03:10
authors:
  name: dhbalaji
tags: [frontend]
---

![react logo](./react-ref.jpg)

Have to tried to set focus on a element in react? I have done it multiple times for accessibility reasons. I have uncovered an edge case in setting focus and the page would scroll to the element were the focus was set. 

Here is the explanation on how to do this.

## What is the default focus behavior after set `focus`?

When you set focus, few things happen visually.

1. The focus related CSS kicks in and user can see the outline of the button or similar behavior if any css was written for `focus`. The css is based on pseudo classes.

```css
el:focus {
    border: 1px solid tomato;
}
```

2. The focussed element is scrolled to the view if user had scrolled past/before the element under focus, the browser will pull the user attention towards the focussed element by scrolling the element to the viewport.

In case if you wish to prevent the scrolling on focus, the `focus` method takes in options. 

```javascript
elRef.current.focus({
    preventScroll: true
})
```

Once set, the scroll position is turned off. There you go.
