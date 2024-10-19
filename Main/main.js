/*
JavaScript is a high-level, object-oriented, multi-paradigm programming language.
@High-Level -> We don't have to worry about complex tasks like memory management.
@Multi-Paradigm Language -> We can use different styles of programming, such as imperative or declarative programming.
@Imperative or Declarative programming -> Different ways of structuring the code.
@Object-Oriented -> Based on objects, for storing most kinds of data.
@Programming Language -> A tool that instructs the computer to perform tasks.

ES6/ES2015 is the biggest JavaScript release ever.
@ES -> ECMAScript.
Modern JavaScript -> Refers to all the versions released after ES6.

This line of code is used to link a JavaScript file to an HTML file. 
It should be placed at the end of the body tag:
<script src="./script.js"></script>

@Value -> The smallest unit of information available in JavaScript.

@Variable Naming Standards
-> Use camelCase or snake_case (e.g., firstName or first_name).
-> Don't start with an uppercase letter.
-> Only constants should be in UPPERCASE (e.g., PI).

@Variable Naming Rules
-> Can't start with a number.
-> A variable name can only contain letters, numbers, underscores, and dollar signs.
-> Can't use reserved JavaScript keywords (except 'name').

@Every value in JavaScript is either an object or a primitive value.

@Primitive Data Types
-> Number (both decimals and integers).
-> String (a sequence of characters).
-> Boolean (either true or false).
-> Undefined (the value taken by a variable that is declared but not yet defined, e.g., `let children;`).
-> Null (an explicitly empty value).
-> Symbols (ES2015 -> a unique and immutable value).
-> BigInt (ES2020 -> for integers larger than the Number type can hold).

JavaScript uses dynamic typing, meaning we do not need to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
-> Note: Only values have a data type, not the variables.
-> We can reassign the type of a variable.

The type of null should be 'null', but we get 'object' due to a bug in JavaScript. This bug was not fixed for legacy reasons.
// console.log(typeof null); // 'object'

@Undefined vs Null vs NaN

Undefined:
-> A variable is declared but not yet assigned a value.
-> Example: 
   let x;
   console.log(x);  // Output: undefined

Null:
-> An intentional absence of any value (explicitly set by the developer).
-> Example:
   let x = null;
   console.log(x);  // Output: null

NaN (Not-a-Number):
-> Indicates that a value is not a valid number (result of an invalid numeric operation).
-> Example:
   let x = "abc" / 2;
   console.log(x);  // Output: NaN

@let, const, and var
let and const are modern JavaScript features (ES6).

let:
-> Block-scoped (only accessible within the block it was declared).
-> Can be re-assigned but not re-declared in the same scope.
-> Example:
   let x = 10;
   x = 20;  // Allowed

var:
-> Function-scoped or globally-scoped.
-> Can be re-declared and updated.
-> Example:
   var y = 10;
   var y = 20;  // Allowed

const:
-> Block-scoped.
-> Cannot be re-assigned or re-declared.
-> Must be initialized during declaration.
-> Example:
   const z = 10;
   z = 20;  // Error: Assignment to constant variable

Note: You can actually create a variable without using let, const, or var keywords:
firstName = "Jack";
console.log(firstName); // 'Jack'
This is a bad practice because it doesn’t create a variable in the current scope. Instead, JavaScript creates a property on the global object.

@Operator Precedence
The order in which operators are evaluated in expressions (refer to JavaScript operator precedence tables for more).
Refer this link for exact details --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

@Multiple Variable Declarations and Assignments
We can declare multiple variables at once using `let` or `const`:

let x, y;
x = y = 25 - 10 - 5;  // x and y will both be assigned the value 10
console.log(x, y);  // Output: 10, 10

-> The expression is evaluated from right to left, so `y` is assigned first, and then `x` gets the same value.
-> This is possible with both `let` and `const`. However, with `const`, all variables must be initialized at the time of declaration.
   Example:
   const a = 5, b = 10;
   console.log(a, b);  // Output: 5, 10

-> Always ensure that all variables are assigned valid values when using `const`.

@Template String is an ES6 Feature

@ If Else is called as If Else Control Structure and it can work without a else statement as it is optional

@Type Conversion and Type Coercion 
Type Conversion -> When the user manually convert the type from one type to another
Type Coercion -> When JS automatically converts the type from one type to another behind the scenes
NaN means Invalid Number. It is still a number and will give a type of Number. It is generated when the code fails to produce a new number from a mathematical operation.

'-' Operator triggers a String to Number Type Coercion
'*' Operator triggers a String to Number Type Coercion
'/' Operator triggers a String to Number Type Coercion
'+' Operator triggers a Number to String Type Coercion


There are 5 Falsy Values in JavaScript
0, '', undefined, null, NaN

'===' is called as Strict Equality Operator
'==' is called as Loose Equialty Operator

Expressions produces values and Statement performs some set of actions


@Strict Mode in JavaScript

To enable strict mode, include 'use strict'; at the top of your script or function.
Strict mode helps catch silent errors by throwing exceptions in cases that JavaScript normally ignores.
It reserves certain keywords for future versions of JavaScript, preventing their usage as variable names.


@Functions

A function is a block of reusable code.
Parameter: A placeholder used within a function definition.
Argument: The actual value passed to the function during its call.


@Const with Arrays and Objects

Generally, variables declared with const cannot be reassigned. However, arrays and objects declared with const can have their elements or properties modified because they are reference types, not primitive data types.


@console.table

Outputs an object or an array in a table format, making it easy to view large sets of data.


@CSS Style Manipulation via JavaScript

Always use camelCase to manipulate CSS properties (e.g., backgroundColor instead of background-color).
CSS property values should be passed as strings (e.g., element.style.backgroundColor = "red";).
Use querySelector to select the first matching element in the DOM.

@Scoping

Scoping determines where variables are accessible within the code.
Global Scope: Variables accessible throughout the entire code.
Function Scope: Variables declared inside a function are only accessible within that function.
Block Scope: Variables declared with let and const are confined to the block in which they are defined.
Key Points:
Lexical Scoping: Scopes are determined by the placement of functions and blocks within the code.
Scope Chain: A function or block has access to its own scope and all outer scopes, but not to inner scopes.
Variable Lookup: If a variable is not found in the current scope, JavaScript looks for it in outer scopes.

@Hoisting

Hoisting allows variable and function declarations to be moved to the top of their containing scope during the compile phase.
Variables declared with var are hoisted but are initialized with undefined.
Function declarations are fully hoisted, allowing them to be called before they appear in the code.

@this Keyword

Global Context: In global code, this refers to the global object (i.e., window in browsers).
Function Context:
In non-strict mode, this refers to the global object.
In strict mode, this is undefined within a function declaration.
Arrow Functions: They do not have their own this context. Instead, they inherit this from their parent scope.
Object Methods: When used inside an object’s method, this refers to the object itself.

@Arguments Object
In regular functions (declarations/expressions), we can pass more arguments than the function expects. These can be accessed via the arguments object.
Arrow functions do not have an arguments object.


@Primitive Data Types and Reference Types

- In JavaScript, data types are classified into primitive types and reference types. 

@Primitive Data Types
- Definition: Primitive data types are the basic building blocks of data in JavaScript. They hold a single value and are stored directly in the call stack.

- Types of Primitive Data:
  1. String: A sequence of characters.  
     -> Example:  
     `let name = "Alice";` // A string primitive
  
  2. Number: Represents both integer and floating-point numbers.  
     -> Example:  
     `let age = 30;` // A number primitive
  
  3. Boolean: Represents a logical entity with two values: true or false.  
     -> Example:  
     `let isStudent = true;` // A boolean primitive
  
  4. Null: Represents the intentional absence of any value.  
     -> Example:  
     `let selectedOption = null;` // A null primitive
  
  5. Undefined: Indicates a variable that has been declared but not assigned a value.  
     -> Example:  
     `let score;` // score is undefined
  
  6. BigInt: Represents whole numbers larger than 2^53 - 1.  
     -> Example:  
     `let bigNumber = BigInt(1234567890123456789012345678901234567890);` // A BigInt
  
  7. Symbol: Represents a unique and immutable value, often used as object property keys.  
     -> Example:  
     `const uniqueID = Symbol("id");` // A symbol primitive

@Reference Types
- Definition: Reference types are more complex data structures that can store collections of values. They are stored in the heap, and variables hold a reference to the memory location where the object is stored.

- Types of Reference Data:
  1. Object Literals: Key-value pairs representing real-world entities.  
     -> Example:  
     `let person = { name: "Bob", age: 25 };` // An object literal
  
  2. Arrays: Ordered collections of values, which can be of any type.  
     -> Example:  
     `let fruits = ["apple", "banana", "cherry"];` // An array
  
  3. Functions: First-class objects that can be assigned to variables, passed as arguments, and returned from other functions.  
     -> Example:  
     `function greet() { return "Hello!"; }` // A function


@Variable Storage in JavaScript
- When you declare a variable, JavaScript allocates memory for it behind the scenes.

- Example:  
  `let age = 30;`
  
  -> Behind the Scenes:  
    - In the Call Stack:  
      - Identifier: `age`  
      - Address: `0001` (hypothetical address)  
      - Value: `30`
  
  In this case, `age` is an identifier pointing to a memory address where the value `30` is stored. When you reference `age`, JavaScript retrieves the value from that address.

- Objects Storage:  
  `let person = { name: "Alice", age: 30 };`
  
  -> In the Call Stack:  
    - Identifier: `person`  
    - Address: `0002` (hypothetical address of the object)
  
  -> In the Heap:  
    - Address: `D30F` (hypothetical address where the object is stored)  
    - Value: `{ name: "Alice", age: 30 }`
  
  Here, the variable `person` in the call stack holds a reference to the address in the heap where the object is stored.

---

@Mutability of Const Variables
- Although `const` variables cannot be reassigned, the contents of objects or arrays declared with `const` can still be modified.

- Example:  
  `const data = { age: 30 };`  
  `let data2 = data;` // data2 now references the same object  
  `data2.age = 27;` // Modifying the object via data2  
  `console.log(data.age);` // Output: 27

  -> Behind the Scenes:  
    - In the Call Stack:  
      - Identifier: `data`  
      - Address: `0003` (hypothetical address)  
      - Value: `D30F` (address of the object)

    - In the Heap:  
      - Address: `D30F`  
      - Value: `{ age: 27 }` (the object was modified)

  In this case, `data` remains a constant reference, but the contents of the object it points to can change, which demonstrates that `const` is mutable in terms of object properties.

---

@Shallow and Deep Copying of Objects
- Shallow Copy: When copying an object using methods like `Object.assign()`, it creates a new object with the same top-level properties. If the original object contains nested objects, those nested objects are still referenced, not duplicated.

- Example:  
  `const original = { a: 1, b: { c: 2 } };`  
  `const shallowCopy = Object.assign({}, original);`  
  `shallowCopy.b.c = 3;` // This modifies the nested object in both copies  
  `console.log(original.b.c);` // Output: 3

- Deep Copy: To copy an object deeply (including all nested objects), libraries like Lo-Dash can be used.

- Example using Lo-Dash:  
  `const _ = require('lodash');`  
  `const original = { a: 1, b: { c: 2 } };`  
  `const deepCopy = _.cloneDeep(original);`  
  `deepCopy.b.c = 3;` // This does not affect the original object  
  `console.log(original.b.c);` // Output: 2

---

@Immutable Behavior of Primitive Data Types
- Primitive data types are immutable, meaning when you assign a new value to a primitive variable, JavaScript creates a new memory address for the new value, leaving the original value unchanged.

- Example:  
  `let score = 10;`  
  `score = 20;` // A new address is created for the new value  
  `console.log(score);` // Output: 20

  In this example, when `score` is reassigned to `20`, JavaScript creates a new memory address for this new value. The original value (`10`) remains unchanged, demonstrating the immutability of primitive types.


@ Mutating Variables

- Mutating variables directly from objects requires special handling in JavaScript:
   - Example:
     -> `let a = 888;`
     -> `let b = 999;`
     -> `const obj = {a: 23, b: 14, c: 35};`
   - Incorrect Way: This doesn't work:
     -> `{a, b} = obj;`
   - Correct Way: You need to wrap it in parentheses because when a line starts with `{`, JavaScript expects a code block:
     -> `({a, b} = obj);`

---

@ Operator Short-circuiting

- `||` (OR Operator):
   - The `||` operator short circuits when it finds a truthy value.
   - Example: 
     -> `const result = 0 || 'Hello';` // 'Hello' (because 0 is falsy)

- `&&` (AND Operator):
   - The `&&` operator short circuits when it finds a falsy value.
   - Example: 
     -> `const result = 'Hello' && null;` // null (because null is falsy)

---

@ Nullish Coalescing (`??`) Operator

- Nullish Coalescing considers only `null` and `undefined` as nullish values.
- The `??` operator short circuits when it finds a non-nullish value.
- Example:
   -> `const result = null ?? 'Default';` // 'Default' (because null is nullish)
   -> `const anotherResult = 0 ?? 'Default';` // 0 (because 0 is not nullish)

---

@ Dynamic Property Names in Objects

- Dynamic property names can be used in objects when the variable name is used as the property name. To do this, we use square brackets (`[]`) instead of the dot (`.`) notation.
- Example:
   -> `const prop = 'age';`
   -> `const person = { [prop]: 25 };`
   -> `console.log(person.age);` // 25

---

@ Pass by Value in JavaScript

- In JavaScript, everything is passed by value, even when working with objects.
- Objects and arrays are passed by reference to the value, meaning the reference is copied, but not the actual object.
- Example:
   -> `let obj1 = { name: 'Alice' };`
   -> `let obj2 = obj1;`
   -> `obj2.name = 'Bob';`
   -> `console.log(obj1.name);` // 'Bob' (because both obj1 and obj2 reference the same object)
- While the reference is passed, we don’t have pass-by-reference like in some other languages.

---

@ Call, Apply, Bind Methods 

1. **Call Method**:
   - Definition: Call is used to call a function and tell it what `this` should be.
   - Example: Imagine you have a car, and you want to lend it to your friend. You can say, "Hey, use my car like it's yours for this ride."
     -> `function sayHello() {`
     -> `console.log(\`Hello, my name is \${this.name}\`);`
     -> `}`
     -> `const person1 = { name: 'John' };`
     -> `const person2 = { name: 'Alice' };`
     -> `sayHello.call(person1);` // Hello, my name is John
     -> `sayHello.call(person2);` // Hello, my name is Alice
   - Use case: Useful when we want to borrow methods from one object and use them with another.

2. **Apply Method**:
   - Definition: Similar to `call`, but it takes an array of arguments instead of individual arguments.
   - Example: You give your friend a list of things to do while borrowing your car.
     -> `function introduce(language, country) {`
     -> `console.log(\`Hello, my name is \${this.name}. I speak \${language} and live in \${country}.\`);`
     -> `}`
     -> `const person = { name: 'John' };`
     -> `introduce.apply(person, ['English', 'USA']);`
   - Use case: Use it when you have an array of arguments you want to pass to a function.

3. **Bind Method**:
   - Definition: `Bind` creates a new function with a specific `this` value and optional arguments.
   - Example: You give your car to your friend, but only for a specific time (like a pre-scheduled time).
     -> `const person = { name: 'John' };`
     -> `function greet() {`
     -> `console.log(\`Hello, my name is \${this.name}\`);`
     -> `}`
     -> `const greetPerson = greet.bind(person);`
     -> `greetPerson();` // Hello, my name is John
   - Use case: Use it when you want to create a copy of a function with a fixed `this` value that can be used later.

---

@ Closures 

- Definition: A closure is like a backpack that a function carries around. Inside that backpack, it keeps variables and can use them even after the main function is done.
- Example: Imagine a secret box that remembers what's inside, even after you've closed the box.
    -> `function outerFunction() {`
    -> `let secret = 'I know the secret!';`
    -> `return function innerFunction() {`
    -> `console.log(secret);`
    -> `};`
    -> `}`
    -> `const mySecret = outerFunction();`
    -> `mySecret();` // I know the secret!
- Use case: Useful when we want functions to remember things like settings, preferences, or when we need privacy in code (like hiding data).

---

@ Example 1: Function Re-assignment with Closures

#### Code Explanation:

```javascript
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);
```

#### What’s Happening?
- **Step 1 (g function)**:
  - `g` creates a local variable `a = 23`. 
  - It then assigns a new function to `f`, where it remembers the value of `a` (closure).
  - When `f()` is called after running `g()`, it remembers `a` and prints `46` (`a * 2`).
  
- **Step 2 (h function)**:
  - The `h` function does something similar, but with `b = 777`.
  - It reassigns the function `f` so that now it will remember `b` instead of `a`.
  - When `f()` is called after running `h()`, it prints `1554` (`b * 2`).

#### Use Case of this Example:
- This example shows how closures remember variables even after the original function has finished. When you reassign `f`, it "remembers" different variables depending on which function (`g` or `h`) was called last.
- Re-assigning behavior is useful when you want to have a single function (`f`) whose behavior can change dynamically based on some conditions or settings. For instance, you can use this in UI frameworks where a button click may trigger different actions depending on the state of the application.

---

@ Example 2: Delayed Execution with Closures

#### Code Explanation:

```javascript
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
```

#### What’s Happening?
- **Step 1**: When `boardPassengers` is called with `n = 180` and `wait = 3`:
  - It calculates `perGroup` as `180 / 3 = 60` inside the function.
  - The message `"Will start boarding in 3 seconds"` is immediately logged to the console.
  
- **Step 2**: The `setTimeout` function is set to run after 3 seconds (because `wait * 1000` is used).
  - After 3 seconds, the closure inside `setTimeout` runs, logging:
    - `"We are now boarding all 180 passengers"`
    - `"There are 3 groups, each with 60 passengers"`
  - Even though the function `boardPassengers` has already completed, the `setTimeout` closure remembers the values of `n` and `perGroup`.

#### Important Thing:
- Notice that `const perGroup = 1000;` outside the function is ignored by the closure inside `setTimeout`. It still uses the local `perGroup` inside `boardPassengers` (which is 60), because closures prioritize the scope in which they were created.

#### Use Case of this Example:
- This example demonstrates a common use of closures in timing functions like `setTimeout`.
- You might use this technique when you need to delay the

 execution of code while still needing access to variables that were defined in the scope of a function. It’s often used in event handling, animation sequences, or loading processes in applications.



@ Spreading and Destructuring

1. Spreading:
   - Definition: Spreading is like unpacking things from a suitcase. You spread out all the things inside.
   - Example: You want to take all the toys out of one box and put them into another.
      const numbers = [1, 2, 3]  
      const moreNumbers = [...numbers, 4, 5, 6]  
      console.log(moreNumbers) // [1, 2, 3, 4, 5, 6]  
   - Use case: Use spreading when you want to merge arrays or objects, or when copying things quickly.

2. Destructuring:
   - Definition: Destructuring is like taking things out of a bag, but you only take out the items you need.
   - Example: You have a backpack with a book, a pen, and a toy. You just want the book and the pen.
      const toyBox = { car: 'red', doll: 'pink', blocks: 'blue' }  
      const { car, doll } = toyBox  
      console.log(car) // red  
      console.log(doll) // pink  
   - Use case: Destructuring is great for getting values from objects or arrays without having to type a lot.

@ Spreading and Destructuring with Different Data Types

1. Spreading

Spreading is useful for unpacking elements from arrays, objects, or other iterable data types.

1.1 Spreading Arrays

- Merging Arrays:
   - Example:  
      const arr1 = [1, 2, 3]  
      const arr2 = [4, 5, 6]  
      const mergedArray = [...arr1, ...arr2]  
      console.log(mergedArray) // [1, 2, 3, 4, 5, 6]  

- Copying Arrays:
   - Example:  
      const originalArray = [1, 2, 3]  
      const copyArray = [...originalArray]  
      console.log(copyArray) // [1, 2, 3]  

- Adding New Elements:
   - Example:  
      const numbers = [1, 2, 3]  
      const moreNumbers = [...numbers, 4, 5]  
      console.log(moreNumbers) // [1, 2, 3, 4, 5]  

1.2 Spreading Objects

- Merging Objects:
   - Example:  
      const obj1 = { name: 'John', age: 30 }  
      const obj2 = { job: 'Developer', country: 'USA' }  
      const mergedObject = { ...obj1, ...obj2 }  
      console.log(mergedObject)  
      // { name: 'John', age: 30, job: 'Developer', country: 'USA' }  

- Copying Objects:
   - Example:  
      const originalObj = { name: 'Alice', age: 25 }  
      const copyObj = { ...originalObj }  
      console.log(copyObj) // { name: 'Alice', age: 25 }  

- Overwriting Properties:
   - Example:  
      const person = { name: 'John', age: 30 }  
      const updatedPerson = { ...person, age: 35 }  
      console.log(updatedPerson) // { name: 'John', age: 35 }  

1.3 Spreading Strings

- Spreading Characters in a String:
   - Example:  
      const greeting = 'Hello'  
      const letters = [...greeting]  
      console.log(letters) // ['H', 'e', 'l', 'l', 'o']  

1.4 Spreading with Function Arguments (Rest Parameters)

- Passing Arrays as Function Arguments:
   - Example:  
      function sum(x, y, z) {  
         return x + y + z  
      }  

      const numbers = [1, 2, 3]  
      console.log(sum(...numbers)) // 6  

- Combining Rest with Spreading:
   - Example:  
      function displayNames(...names) {  
         console.log(names)  
      }  

      const people = ['John', 'Alice', 'Bob']  
      displayNames(...people) // ['John', 'Alice', 'Bob']  

2. Destructuring

Destructuring is used to unpack values from arrays or properties from objects into distinct variables.

2.1 Destructuring Arrays

- Basic Destructuring:
   - Example:  
      const fruits = ['Apple', 'Banana', 'Orange']  
      const [first, second, third] = fruits  
      console.log(first) // Apple  
      console.log(second) // Banana  
      console.log(third) // Orange  

- Skipping Elements:
   - Example:  
      const colors = ['Red', 'Green', 'Blue']  
      const [, , thirdColor] = colors  
      console.log(thirdColor) // Blue  

- Using Default Values:
   - Example:  
      const numbers = [1, 2]  
      const [a, b, c = 3] = numbers  
      console.log(a) // 1  
      console.log(b) // 2  
      console.log(c) // 3 (default)  

- Swapping Variables:
   - Example:  
      let x = 1  
      let y = 2  
      [x, y] = [y, x]  
      console.log(x) // 2  
      console.log(y) // 1  

2.2 Destructuring Objects

- Basic Destructuring:
   - Example:  
      const person = { name: 'John', age: 30 }  
      const { name, age } = person  
      console.log(name) // John  
      console.log(age) // 30  

- Using Different Variable Names:
   - Example:  
      const car = { brand: 'Toyota', model: 'Camry' }  
      const { brand: carBrand, model: carModel } = car  
      console.log(carBrand) // Toyota  
      console.log(carModel) // Camry  

- Setting Default Values:
   - Example:  
      const user = { name: 'Alice' }  
      const { name, age = 25 } = user  
      console.log(name) // Alice  
      console.log(age) // 25 (default)  

- Nested Object Destructuring:
   - Example:  
      const employee = {  
         id: 101,  
         name: 'Bob',  
         address: {  
            city: 'New York',  
            country: 'USA'  
         }  
      }  
      const { name, address: { city, country } } = employee  
      console.log(city) // New York  
      console.log(country) // USA  

2.3 Destructuring Function Parameters

- Destructuring Arrays in Functions:
   - Example:  
      function printNumbers([a, b, c]) {  
         console.log(a, b, c)  
      }  

      const numbers = [1, 2, 3]  
      printNumbers(numbers) // 1 2 3  

- Destructuring Objects in Functions:
   - Example:  
      function printPerson({ name, age }) {  
         console.log(`Name: ${name}, Age: ${age}`)  
      }  

      const person = { name: 'Alice', age: 25 }  
      printPerson(person) // Name: Alice, Age: 25  

3. Special Cases

3.1 Destructuring with Rest Operator

- Extracting Remaining Elements:
   - Example:  
      const numbers = [1, 2, 3, 4, 5]  
      const [first, second, ...rest] = numbers  
      console.log(first) // 1  
      console.log(second) // 2  
      console.log(rest) // [3, 4, 5]  

- Extracting Remaining Properties:
   - Example:  
      const car = { brand: 'Toyota', model: 'Corolla', year: 2020 }  
      const { brand, ...otherDetails } = car  
      console.log(brand) // Toyota  
      console.log(otherDetails) // { model: 'Corolla', year: 2020 }  

3.2 Destructuring Nested Arrays

- Nested Array Destructuring:
   - Example:  
      const nestedArray = [1, [2, 3], 4]  
      const [first, [second, third], fourth] = nestedArray  
      console.log(first) // 1  
      console.log(second) // 2  
      console.log(third) // 3  
      console.log(fourth) // 4  

@ Conclusion:

- Spreading is useful for copying, merging, and passing data (arrays, objects, and strings).
- Destructuring simplifies extracting values from arrays, objects, and function parameters while allowing for default values and renaming.



### @ Summary of Use Cases

- **Call, Apply, Bind**: 
  - Borrowing methods from other objects.
  - Useful when you want to reuse functions but need to change the `this` context.
  - `Call` and `Apply` differ only in how they pass arguments (separately vs. in arrays).
  - `Bind` is good when you need to set a permanent `this` for later use.

- **Closures**:
  - When you want a function to "remember" something.
  - Helps in making private variables or persistent states in your code.

- **Spreading**:
  - Merging, copying, or combining arrays/objects easily.

- **Destructuring**:
  - Extracting values from objects or arrays.
  - Simplifies pulling out only the data you need.



### @Map:
`Map` is used to **transform every element** in an array. It applies a function to each element and returns a **new array** with the transformed values.

- **Example:** You want to convert a list of prices in dollars to euros.
  - `[100, 200, 300]` -> After `map()`, you get `[90, 180, 270]` (assuming $1 = €0.90).

- **Arguments:** 
  - `(element, index)` – `element` is the value, and `index` is the position of the item in the array.

### @Reduce:
`Reduce` takes an array and **reduces it to a single value** (like sum, product, etc.). It goes through the array and combines everything into one result.

- **Example:** You want to sum all the numbers in an array.
  - `[100, 200, 300]` -> After `reduce()`, you get `600`.

- **Arguments:**
  - `(accumulator, currentValue)` – `accumulator` stores the accumulated result, and `currentValue` is the current element.

### @Filter:
`Filter` creates a **new array** with elements that pass a condition. It doesn’t change the original array but **filters** out the unwanted items.

- **Example:** You want to keep only the numbers greater than 150.
  - `[100, 200, 300]` -> After `filter()`, you get `[200, 300]`.

- **Arguments:**
  - `(element, index)` – `element` is checked against the condition, and the index can be used for additional logic.

### @FindIndexOf:
`FindIndex` returns the **position (index)** of the first element that matches a condition.

- **Example:** Find the index of the first number greater than 200.
  - `[100, 200, 300]` -> `findIndex()` returns `2` because `300` is the first number greater than 200.

- **Arguments:**
  - `(element, index)` – `element` is compared to the condition, and the index is its position in the array.

### @Find:
`Find` returns the **first element** that matches a condition, instead of the index.

- **Example:** Find the first number greater than 200.
  - `[100, 200, 300]` -> `find()` returns `300` because it’s the first number greater than 200.

- **Arguments:**
  - `(element, index)` – Similar to `findIndex`, but returns the actual element instead of its position.

### @Flat:
`Flat` is used to **flatten nested arrays**. You can specify how many levels deep you want to flatten with an argument.

- **Example:** Flatten a nested array.
  - `[1, [2, [3, [4]]]]`
  - `flat(1)` -> `[1, 2, [3, [4]]]`
  - `flat(2)` -> `[1, 2, 3, [4]]`
  - `flat(Infinity)` -> `[1, 2, 3, 4]`

- **Arguments:**
  - `flat(depth)` – The `depth` determines how many levels to flatten. Defaults to 1 if no argument is provided.

### @FlatMap:
`FlatMap` is a combination of `map()` and `flat()`. It first applies a transformation with `map()`, then automatically flattens the result **one level deep**.

- **Example:** Double the numbers and flatten the array.
  - `[[1, 2], [3, 4]]`
  - After `flatMap()`, you get `[2, 4, 6, 8]`.

- **Arguments:** 
  - Same as `map()`, it takes a callback function with `(element, index)`.

### @Some:
`Some` checks if **at least one element** in the array passes a condition. It returns `true` if any element matches, otherwise `false`.

- **Example:** Check if any number in the array is greater than 100.
  - `[50, 60, 200]` -> After `some()`, it returns `true` because `200` is greater than 100.

- **Arguments:**
  - `(element, index)` – The function checks if an element satisfies the condition.

### @Every:
`Every` checks if **all elements** in the array match a condition. If all elements pass, it returns `true`, otherwise `false`.

- **Example:** Check if all numbers are greater than 50.
  - `[60, 70, 80]` -> `every()` returns `true`.
  - `[60, 40, 80]` -> `every()` returns `false` because `40` is less than 50.

- **Arguments:**
  - `(element, index)` – The function checks every element against the condition.

---

### @Sort Method:
In **JavaScript**, the `sort()` method converts everything into strings before sorting. This is why it might sort numbers in a weird way.

- **Example (Default Behavior):**
  - `[3000, 70, 45, 100]`
  - Default `sort()` compares as strings, so it results in `[100, 3000, 45, 70]`.

To fix this and sort numbers numerically, you use a **callback function**.

- **Example (Ascending Order):**
  - `[3000, 70, 45, 100]`
  - `sort((a, b) => a - b)` -> `[45, 70, 100, 3000]`.

- **Example (Descending Order):**
  - `[3000, 70, 45, 100]`
  - `sort((a, b) => b - a)` -> `[3000, 100, 70, 45]`.

- **Arguments:**
  - `(a, b)` – The function compares two elements. If `a - b` is negative, `a` comes first; if positive, `b` comes first.

---

### @`new Array(7)`:
When you do `new Array(7)`, it creates an array with **7 empty slots**. These slots are not filled with values, so most array methods like `map()` won’t work properly on it. 

- **Example:** You can only use methods like `fill()` to populate the array:
  - `new Array(7).fill(1)` -> `[1, 1, 1, 1, 1, 1, 1]`.

---

### @`Array.from()`:
`Array.from()` is useful for converting **array-like objects** (like `NodeList`) into a real array. It can also be used to create arrays from objects or lengths.

- **Example 1 (Convert `NodeList` to Array):** If you get a `NodeList` from `querySelectorAll()`, you can convert it to an array:
  - `Array.from(nodeList)` -> Now you can use array methods like `map()`.

- **Example 2 (With Length Property):**
  - `Array.from({ length: 5 })` -> Creates an array with 5 elements: `[undefined, undefined, undefined, undefined, undefined]`.

- **Example 3 (With Callback Function):**
  - `Array.from({ length: 5 }, (_, i) => i * i)` -> Creates an array of squares: `[0, 1, 4, 9, 16]`.

- **Arguments:**
  - `Array.from(arrayLike, callback)` – The first argument is the array-like object, and the second is a callback function that works like `map()`.

---

### Final Notes:
- `FlatMap` flattens **one level deep**.
- `Flat` can flatten **multiple levels** using the depth argument.
- `Sort` can sort numbers numerically by using a **callback function**.
- `Array.from()` can be used with a **length property** and a callback function to initialize values.

forEach Loop:
It passes current value, current index, and the original array as arguments to the callback function.
Limitation: It doesn't support break or continue statements.
When you need to use break or continue, it's better to use a for...of loop.
*/

/*
Errors and Basic Identification:
@ReferenceError -> Occurs when a variable or value does not exist.
@SyntaxError -> Usually a typo or incorrect formatting of code.
@TypeError -> Occurs when a value is used in an unexpected way (e.g., trying to assign a non-function to a function call).
*/

/*
Tips & Tricks:
-> Ctrl + / -> Single line comment (from any part of the current line).
-> Windows + . -> Emojis in Windows

@Prettier Setup
-> Install Prettier Extension
-> Settings -> Default Formatter -> Prettier
-> Settings -> Format on Save -> Check
-> Create .prettierrc file and add configurations.

@Always use Strict Mode and not the sloppy mode


@Strict vs. Sloppy Mode in JavaScript

### **1. Definitions**

- **Strict Mode**: A feature in JavaScript that allows you to opt into a restricted variant of JavaScript. It helps you write cleaner code by catching common coding errors and preventing the use of certain features that can lead to bugs.

- **Sloppy Mode**: The default mode in JavaScript where the engine allows you to write code more flexibly, but this can also lead to potential issues and bugs.

### **2. Enabling Strict Mode**

- You can enable Strict Mode by adding `"use strict";` at the beginning of a script or a function. 
  - Example:
    ```javascript
    "use strict";
    // Your code here
    ```

### **3. Key Differences**

- **Variable Declarations**: In Strict Mode, all variables must be declared using `let`, `const`, or `var`. If you attempt to assign a value to an undeclared variable, it will throw a ReferenceError. In Sloppy Mode, it would silently create a global variable.

- **Silent Failures**: Strict Mode throws errors for bad syntax or mistakes that would normally fail silently in Sloppy Mode.
  - Example:
    ```javascript
    "use strict";
    x = 10; // ReferenceError: x is not defined
    ```

- **Duplicate Parameter Names**: In Strict Mode, functions cannot have duplicate parameter names. In Sloppy Mode, duplicate parameter names are allowed but can lead to confusion.
  - Example:
    ```javascript
    function test(a, a, b) { // SyntaxError in Strict Mode
      return a + a + b;
    }
    ```

- **`this` Keyword**: In Strict Mode, `this` is `undefined` in functions that are called without a context (not as methods of an object). In Sloppy Mode, it defaults to the global object (or `window` in browsers).
  - Example:
    ```javascript
    "use strict";
    function test() {
      console.log(this); // undefined
    }
    test();
    ```

### **4. Advantages of Strict Mode**

- **Error Prevention**: Strict Mode helps catch common coding mistakes, reducing bugs in your code. 
- **Cleaner Code**: Enforcing variable declarations and disallowing certain features encourages better coding practices.
- **Security**: It prevents the use of certain unsafe actions, such as assigning values to undeclared variables, which can lead to security vulnerabilities.
- **Performance**: In some cases, Strict Mode can lead to better performance optimizations by the JavaScript engine.

### **5. Why Use Strict Mode?**

- **Best Practices**: Strict Mode promotes best practices by enforcing stricter parsing and error handling in your JavaScript code.
- **Team Collaboration**: In a work environment, where multiple developers collaborate, Strict Mode ensures that the code is consistent and less prone to errors, making it easier to maintain.
- **Future-Proofing**: Using Strict Mode prepares your code for future JavaScript versions, as new language features may have stricter rules.

### **6. Use Cases Where Strict Mode Saves Us**

- **Avoiding Global Variables**: Helps prevent accidental creation of global variables, which can lead to unpredictable behavior.
- **Parameter Name Conflicts**: Avoids conflicts with parameter names that can lead to confusion and bugs.
- **Undefined `this`**: Helps catch errors related to the use of `this` in functions, preventing unexpected behavior.
- **Using Reserved Words**: Prevents the use of certain reserved words, helping avoid conflicts with future versions of JavaScript.

### **7. Is Strict Mode Better than Sloppy Mode?**

Yes, in most cases, Strict Mode is better than Sloppy Mode and should be preferred, especially in professional settings. It enhances code quality, reduces the chances of errors, and promotes good coding practices, which is crucial in a work environment where reliability and maintainability are essential.




*/
