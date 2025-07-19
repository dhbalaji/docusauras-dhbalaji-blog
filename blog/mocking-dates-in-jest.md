---
title: 'Why & how to mock date methods in JEST unit tests'
tags:
  - frontend
date: 2022-10-23 23:22:36
authors: [dhbalaji]
---

## What are the `Date` methods?

I have worked with a bunch of web apps and all of them have date-related code in common. The Date utils are written in plain Javascript using the `Date` constructor. 

```js
var date = new Date()

// Sample date methods
date.getMonth()
date.getFullYear()
date.getDate()
```

I have also worked on issues where the test suite would pass correctly on the day the tests were authored but they would fail on the other day or in the server. This is because the dates are getting dynamically generated in the test but the matcher value is static.

## Why is testing Dates tricky?

You cannot assert a dynamically generated date. For instance, if your date until returns a new date by applying some logic. You cannot put a test that looks like this.

```js
// WRONG code, don't use without mocking date.getDate

expect(add2DaysToCurrentDate()).toBe("Some hard coded date")
```

If you want to use a hardcoded date, you should be able to control the output of the `add2DaysToCurrentDate` method.

## How to make dynamic date logic predictable?

The short answer is `JEST mocks`. Whenever we want to add 2 days to the current date, we need to ensure the `date.getDate()` method returns the same value, then we can write a test to assert the returned value.

```js
it("should return new Date which is two days ahead of today", function() {
  jest.spyOn(Date, "getDate").mockImplementation(() => 14) // Mocks the getDate method until this test block
  expect(add2DaysToCurrentDate()).toBe("Some hard coded date")
})
```

## Downsides to this approach

As I mentioned in the comment, till the end of the test block, we cannot use `date.getDate()` as if it's a real function. The mock will replace the actual function call in the test block. This might hinder your assertion logic. We need to plan accordingly.


### References

https://stackoverflow.com/questions/29719631/how-do-i-set-a-mock-date-in-jest
