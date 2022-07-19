---
title: 'Javascript collections implementation in ES6, heard of weakmap?'
categories:
  - frontend
date: 2021-06-11 00:46:34
authors: [dhbalaji]
---

![Some alt text](./assets/garbage-collection.webp)

To implement a data structure in Javascript, we used Array or Object but things are set to change. We have 4 new entrants with ES6 or ECMAScript Harmony. They are Map, WeakMap, Set, and WeakSet. Let us look at each one of them in detail.

<!-- truncate -->
 
## Native data structures in JS

Until ES5, the developers were building data structures with Arrays and Objects. Sometimes objects were used to make associative arrays, it's something like a double duty for the Object data type. That's why ES6 brings new data structures.

The new data structures in ES6 fall under 2 categories, they are 

- Weak
- Non-weak versions

## Map

Map is a set of key and value pairs and also remembers the order of the key. Read more about the difference between Object and Map here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps

```javascript
var phoneBook = new Map();
phoneBook.set(100, 100);
phoneBook.set('JS-HQ' ,1001);

// Map is iterable but Objects are not
// Map can be cloned, merged

phoneBook.size; // 2
```

## Set

Set is similar to an array but the items of the set must be unique.

```javascript
var array = [1,2,3,1];
var set = new Set(array);
console.log(set); // {1, 2, 3} 
```

## Weak as in easily garbage collected

The last 2 new entrants are 

1. WeakMap

2. WeakSet

We need to understand javascript garbage collection. An object is garbage collected when

1. The object is deallocated by setting to null

2. The object is no longer referenced

3. No keys, values, or entries of the Object exists. The entries in Map and Set count as references and the object is no longer garbage collected.

In the case of weakmap and weakset, the object references are held weakly. 

In case of weakMap & weakSet, the objects are dereferenced when all other references are removed. Use these data structures when you are interested in better memory management.

In a weak map, a key is always an object.

> The WeakMap is great for memos because once the object (used as the key) gets garbage collected, so does the computed value on the WeakMap.
