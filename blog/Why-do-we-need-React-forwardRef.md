---
title: Why do we need React.forwardRef
tags:
  - frontend
date: 2022-02-07 10:59:36
authors: [dhbalaji]
---

![React forward ref](./assets/react-forward-ref.webp)

The best thing about React props is the ability to send different data structures from parent to child without any code configuration like `@input` etc. But why do we need an extra construct `React.forwardRef` for passing ref? let us find out.

<!-- truncate -->
 
## Where is `React.forwardRef` used?

It's used when we are passing `ref` as a prop to functional components

## What is `React.forwardRef`?

It is a way to create a component. At a high level, React forwardRef takes 2 arguments

1. props that are to be passed to the child component
2. ref that needs to be passed to the child component

## Why do we need `React.forwardRef`?

In functional components, we cannot instantiate the components. Instantiating components is a feature offered by class-based components in React. But we want to be able to use `Ref` in functional components. The ability to instantiate functional components and assign the value to `ref.current` is provided by `React.forwardRef`

If you are using class-based components, then we need not use React.forwardRef to accept ref as a prop.

## What is the structure of the `ref`

Let's understand who we create a `ref`

- Inside functional components, we use `useRef` hook.
- Outside of functional components, we use `React.createRef`

The ref object has the following structure

```javascript
{
    current: null
}
```

When the component is instantiated, the element reference is stored in current. When the component is destroyed, the `current` points to `null`.

To access the ref contents we can do 

```javascript
const {value} = ref?.current;  
```

## Why do we need refs?

We need ref to do `DOM` stuff like selection, querying, and animations. Instead of using `document.getElementById` or any `DOM` queries, we can use `ref` which are reliable in React.


## Can we pass multiple refs to React.forwardRef?

We can pass through a callback function. The return of the callback function should contain the ref objects.

```typescript jsx
const multiRef = () => ({
    ref1: React.createRef<HTMLInputElement>(),
    ref2: React.createRef<HTMLInputElement>()
})
```

