---
title: Typescript Cheatsheet
---

## Core Concepts


### Datatypes

1. number
    
    ```typescript
        let age: number;
        age = 25;

        let age = 25;
    ```
2. string

    ```typescript
    let name: string;
    name = "John";

    let name = "John";

    ```

3. boolean

    ```typescript
    let isValid: boolean;
    isValid = true;

    let isValid = true;
    ```

4. array

    ```typescript
    let numbers: number[];
    numbers = [1,2,3];

    let numbers = [1,2,3];
    ```

5. tuple

    ```typescript
    let random: [string, number, string] = ["A", 1, "B"]
    ```
6. enum

    ```typescript
    enum Color {
        Red,
        Blue
    }

    enum CustomColorCode {
        Red = "#233233"
        Blue = "#434384"
    }

    let red = CustomColorCode.Red;
    ```
7. any

    ```typescript
        // Do not use it unless unavoidable or for dynamic values

        let dynamicValue: any = 5;
    ```
8. void

    ```typescript
    function sayHello():void {
        console.log("Hello")
    }
    ```
9. null

    ```typescript
        let nullValue: null = null;
    ```
10. undefined

    ```typescript
        let undefinedValue: undefined = undefined;
    ```
11. object

    ```typescript
    let user:object = {
        name: "john",
        age: "25"
    }
    ```
### Operators

1. Arithmetic - `+,-,*,/,%`
2. Assignment - `=,+=,-=,*=,/=,%=`
3. Comparison - `==, !=, ===, !==, > < , >=, <=`
4. Logical - `&&, ||, !`

### Control flow

1. `if...else`
2. `do...while`
3. `switch`
4. `while`

### Functions

1. Simple function
```typescript
function addNumbers(number1: number, number2: number): number {
    return number1 + number2;
}

const result = addNumbers(1,2);
```

2. Optional parameter
```typescript
function addNumbers(number1: number, number2?: number): number {
    // function body
}

const result = addNumbers(1);
const result = addNumbers(1,2);
```

3. Default parameter
```typescript
function addNumbers(number1: number, number2= 10): number {
    // function body
}

const result = addNumbers(1);
const result = addNumbers(1,2);
```

4. Rest parameter
```typescript
function addNumbers(number1: number, ...numbers: number[]): number {
    // function body
}

const result = addNumbers(1);
const result = addNumbers(1,2,3,4,5);
```

5. No return
```typescript
function NOOP(): void {
    // function body
}
```

### Interfaces & Classes

Interface - defines the structure of objects and provide contract for implementing classes

```typescript
interface Person {
    name: string;
    age: number;
    sayHi: () => void
}

let person: Person = {
    name: "Balaji",
    age: "22",
    sayHi: function() {
        // function body
    }
}
```

Classes - defines the object blue print

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHi():void {
        console.log(`Hi ${this.name}`)
    }
}

let person:Person = new Person("Balaji", 22)
person.sayHi();
```


## Advanced Concepts

1. Union types -allows multiple types `|`
2. Intersection types - combine multiple types `&`

## Updates to TS