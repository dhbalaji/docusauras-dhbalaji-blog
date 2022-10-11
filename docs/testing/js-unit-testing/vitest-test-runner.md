---
sidebar_position: 2
---

# Vitest & React

![](./img/vitest-homepage.png)

## Why Vitest

[Vitest](https://vitest.dev/) is a testing library that works alongside Vite which is a super fast JS bundler. The speed of Vitest is faster than webpack based bundlers like the one we get with Create React App.

Once I had my vite setup ready, I was interested in checking out vitest to see if it competes well with Jest.

## Vitest building blocks

Vitest makes a big claim that Jest code works the same when Jest is replaced by Vitest but I highly doubt that because `toHaveFocus` was not found in vitest. Its because, on the inside Vitest is using a bunch of other stuff like `chai`.

The way we test react components remains the same. We need to lean on `react testing library` or `enzyme` to render the component and check the internals.

To mock a method, we need to use `jest.fn()` and later check if that were called.

Similar to jest config, we have `vitest.config.ts` where we can configure the way tests get executed.


## Example

> Checkout the repo <https://github.com/dhbalaji/monorepo-POCs/tree/main/tooling/vite-react-app>


```typescript
import React from "react";
import jest from "jest-mock";
import App from "./App";
import { describe, it, expect } from "vitest";
import { findByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App test", () => {
  it("should contain text", async () => {
    render(<App />);
    // screen.debug();
    expect(screen.getByText("Vite + React + Vitest")).toBeDefined();
    expect(screen.queryAllByRole("link").length).toBe(3);
    expect(screen.queryAllByRole("link")[0].getAttribute("href")).toBe(
      "https://vitejs.dev"
    );
    expect(screen.queryAllByRole("link")[1].getAttribute("href")).toBe(
      "https://reactjs.org"
    );
    expect(screen.queryAllByRole("link")[2].getAttribute("href")).toBe(
      "https://vitest.dev"
    );

    const btn = screen.getByRole("button", {
      name: /count is 0/i,
    });
    expect(btn).toBeDefined();

    userEvent.click(btn);
    userEvent.click(btn);
    await screen.findByText(/count is 2/i);

    // This would fail because on click would change text in async way
    // expect(screen.getByRole("button").textContent).toBe();
  });

  it("should match snapshot", () => {
    const result = render(<App />);
    expect(result).toMatchSnapshot();
  });
});
```

## Conclusion

I quickly jumped to the conclusion because of the below reasons

- `Jest` seems to be a great ally for react testing when compared to `vitest`
- The faster test execution claim in the vitest homepage banner was not observed or perceived by me during development
- Some of the advanced jest matchers are not available in `vitest`
- The vscode plugin was buggy, the vitest UI seemed to be slow
- I would give `vitest` a few more months till it reaches `version 1` and later I would revisit it for evaluation.