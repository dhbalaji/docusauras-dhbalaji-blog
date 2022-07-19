---
title: 10 ways in which Java programs differs from Javascript
tags:
  - backend
date: 2020-11-20 21:55:16
authors: [dhbalaji]
---

![Java program](./assets/Javaprogram.webp)

This is a fun post in which I collect 10 semantic differences between Java programs and Javascript programs. Here we go

<!-- truncate  -->
 
## 1. There is no global scope for variables or functions in Java

In Javascript basic programs, it's very common to ignore the scope and directly set variables & methods on the global scope. In Java, we cannot notice dangling global variables or methods. The variables and methods are scoped within the class and there is a methodology to access the variables or methods even if they are public scope. In javascript, the global variables are invoked by their names without the need to reference the `window` object.


## 2. Semicolons are mandatory in Java

I can write Javascript without semicolons but in Java it's mandatory. It's interesting to note that the Java code will throw a compile-time error when there is a missing semicolon. In javascript, we can set up eslint to check if every statement ends with a semicolon.

## 3. Single quotes have a different meaning in Java

Single quotes are reserved for `char` data type. Double quotes are used for `String` data type. In Javascript, we can use a single quote and double quote interchangeably based on developer / eslint preference.

## 4. There is no variable hoisting in Java

We have a variety of variables in Java-like class, block, instance, static. These variable types have one thing in common. These types of variables are a classification of when a variable is created and destroyed in our program. By default, Java variables fall into one of the 4 variable classifications. No more global variables like JS.

## 5. Typecasting, widening is an important Java concept

By virtue of static typecasting, the variables in our Java program cannot be mutated to another datatype within the code. Such code leads to compile-time errors. For instance, we cannot assign an integer to a string variable. Widening of Java variables needs no extra attention from the developer but narrowing needs typecasting. In JS we are free to play around with variables as they are dynamically typed. But dynamic typing is seen as a limitation and programming languages like Typescript offer to rescue JS limitations in large scale apps.

## 6. Checking Java version

`java -version`

For nodeJS, we use `node --version`

Other differences to be updated soon.

Of course, there are many more differences. For instance, we have the concept of higher-order components in JS but in Java it's a big deal.
