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
3. Type aliases - create custom names for types
4. Generics - reusable methods that can work with multiple types
5. Module - encapsulate code into seperate files
    - export
    - import
    - default export
6. Namespace - internal modules, code organization
7. Type inference - auto infer types of variables
8. Type guards - infer type during runtime `typeof`
9. Module resolution - relative path, package import
10. Decorators - add metadata, modify the behavior of classes, methods at design time
11. Inheritance - can `extend` classes
12. Encapsulation - bundle related properties and methods `private`, `public` and `protected`
13. Polymorphism - method overloading


### Generics

1. Methods

```typescript
function identity<T>(arg: T) {
    return arg;
}
```

2. Classes

```typescript
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let stringBox = new Box<string>("Typescript");
console.log(stringBox.getValue());

let numberBox = new Box<number>(40);
console.log(numberBox.getValue());
```

3. Constraints with Generics

```typescript
interface LengthType {
    length: number;
}

function getLength<T extends LengthType>(arg: T): number {
    return arg.length
}

let arrayLength = getLength([1,2,3,4,5]);
console.log(arrayLength);
```

### Decorators

Special declaration that can be attached to classes, methods, properties or parameters. Prefixed with `@`. Executed at runtime.

```typescript
function log(target: any) {
    console.log("target is", target);
}

@log
class MyClass {
    // class body
}

class MyClass {

    @readonly
    name: string = "John";

    @log
    method() {
        // method body
    }

    method1(@dec input: string) {
        // method body
    }
}
```

### metadata

Attach additional data to classes, methods, properties or parameters.

```typescript
class MyClass {
    // Set metadata
    @Reflect.metadata("custom tag", "some data");
    method() {
        // method body
    }
}

const metadata = Reflect.getMetadata("custom:tag", MyClass.prototype, "method");
console.log(metadata); // some data
```

Useful in logging and debugging. Argument decorators can be used in input validation. Dependency injection for frameworks, routing and middleware.

From architecture perspective, the above features can help in code modularity by seperating concerns.Others being readability and runtime reflection.

### Async

1. Callback

```
function getData(callback: (data: string) => void) {
    setTimeout(() => {
        callback("Hello")
    }, 1000)
}

getData((msg: string) => {
    console.log(msg)
})
```

2. Promises

```typescript

function fetchData():Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success")
        }, 1000)
    })
}

fetchData().then((data) => {
    console.log(data)
}).catch((e) => {
    console.log(e)
})
```

3. Async await

```typescript
async function fetchData():Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success")
        })
    })
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // success
    } catch(e) {
        console.error(e)
    }
}

getData()
```

## Updates to TS

--- coming soon! ---