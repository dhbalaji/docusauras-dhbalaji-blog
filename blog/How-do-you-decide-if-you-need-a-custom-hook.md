---
title: How do you decide if you need a custom React hook
tags:
  - frontend
date: 2022-03-06 19:58:46
authors: [dhbalaji]
---

![React developers](./assets/react-custom-hooks-developers.webp)

Hundreds of React tutorials and videos directly start with a custom hook. Here is my experience, where I had to write a custom react hook for the first time. Sharing the rationale and logic behind the first custom react hook.

<!-- truncate -->
 
 ## Is custom hook similar to JS functions? 

Let us say you have 2 react components that have different JSX but a similar/duplicated hooks logic. The code might be the same or similar `useEffect` code or similar operations on `useState`. In that case, we can move the code to a separate React custom hook. This is similar to our `util` pattern. In the `util` pattern we pull out code that was written in multiple places into a single module. Then call the functions from the `util` file. The `util` pattern is good enough for Javascript but React and react fiber is inefficient. We need custom hooks.

Custom hooks have simple rules, to begin with.

1. The name of the custom hook should start with `use`.
2. The custom hook can call/make use of other hooks in its body.
3. The custom hook can return any data type like normal functions.

Writing custom hooks is not different from Javascript functions except for the semantics of the hooks. For instance, the custom hook can be called inside react components, they cannot be inside a branching statement or loop-like any other React hooks. However, we do not have such limitations in `util` methods.

## Why custom hook?

The `how-to` write custom hook has been discussed over and over at conferences and by React influencers many times. In 2022, react developers should be in a position to identify hooks in libraries like `nextJS`. I mean to say, hooks are everywhere. Be it your office code or inside libraries.

Before you write a custom hook, understand why we need one. It's easy to over-engineer the code and make it complex. If your code does not look like a story, something is incorrect.

> When you spot repetitive hooks related code, it's an ideal candidate for a custom hook.

## How to test a custom hook?

This is another area where the `how-to` articles do not meet my expectation. Once you have spotted repetitive React hooks code and built your custom hook. We need to get the hook under the unit test.

The challenge with testing custom hooks comes with the hook's semantics. The hooks can be called from react components only. The test case or `it block` is not a react component so the custom hook cannot be invoked. 

In `react testing library` we have a method called `renderHook`. According to [render hook documentation](https://react-hooks-testing-library.com/reference/api#renderhook), the `renderHook` gives a test component or I would say a host component for the custom hook to be rendered.

The return of `renderHook` is an `object`.

```javascript
{
  all: Array<any>
  current: any,
  error: Error
}
```

## Summary

- Deciding on when you should promote your component logic to custom hook is critical for scaling and testing the React code
- Writing a custom hook is not scary. It's natural like JS functions with some twists.
