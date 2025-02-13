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


Here are the explanations for the points you mentioned, along with the revised notes:

@Numbers in JavaScript

#### Definition
- **Numbers** in JavaScript represent both integers and floating-point values. JavaScript uses a 64-bit format for numerical representation, which is consistent with the IEEE 754 standard for double-precision floating-point numbers.

#### Key Points
1. **Equality of Numbers**:  
   - `23 === 23.0`  
   - In JavaScript, integers and floating-point numbers are treated as equal.

2. **Storage Format**:  
   - Numbers are stored in a **binary format** (Base 2).
   - **Base 10 (Decimal)**: Uses digits 0-9.
   - **Base 2 (Binary)**: Uses digits 0 and 1.
     - Example: In Base 2, the sum `0.1 + 0.3` may yield `0.30000000000000004` instead of the expected `0.3` due to floating-point precision issues.

3. **Precision Issues**:  
   - JavaScript (like many languages such as PHP or Ruby) sometimes hides precision issues in arithmetic operations. 
   - It is important to be aware that scientific or financial calculations may not be accurate in JavaScript due to these limitations.

4. **Number Conversion Functions**:  
   - **Number(str)**: Converts a string to a number. Example: `Number.parseInt('30px', 2)` converts a string to an integer based on the specified base (2 in this case).
     - **Arguments**:
       - First argument: The string to be converted.
       - Second argument: The base (e.g., 10 for decimal, 2 for binary).
     - Important: The string should start with numeric characters.

   - **Number.parseFloat(str)**: Similar to `parseInt`, but for floating-point numbers. 
     - Example: `Number.parseFloat('30.5px')` would return `30.5`.

5. **Global Objects**:  
   - `isNaN(value)`: Determines whether the value is NaN (Not-a-Number).
   - `isFinite(value)`: Checks if the value is a finite number.

6. **Bit Representation**:  
   - A **64-bit representation** means 64 bits are used to represent a number. 
   - However, only **53 bits** are used for the actual digits, while the rest are used for the decimal point and its position.

7. **Max Safe Integer**:  
   - Numbers larger than `Number.MAX_SAFE_INTEGER` (2^53 - 1) may produce inaccuracies in calculations.

8. **BigInt**:  
   - Appending `n` to a number (e.g., `123n`) converts it to a BigInt. 
   - The `BigInt()` function can also be used. It's advisable to use BigInt with smaller numbers to avoid performance issues.

9. **Date Object and UTC**:  
   - The letter **"Z"** in date strings refers to **UTC** (Coordinated Universal Time), which is a standard time without any time zone or daylight savings adjustment. 
   - **Example**: `console.log(new Date(2037, 12, 28, 23, 59, 5));`
     - This creates a date object for **December 28, 2037**, at **23:59:05** (11:59:05 PM). The parameters are structured as follows:
       - Year: `2037`
       - Month: `12` (December; note that months are 0-indexed, so 0 = January)
       - Date: `28`
       - Hours: `23`
       - Minutes: `59`
       - Seconds: `5`

10. **Handling Invalid Dates**:  
    - When passing values outside the expected range, such as `console.log(new Date(2037, 59, 5));`, the behavior can be unexpected:
      - In this case, `59` as a month will be interpreted as **July of the following year** (2038), because there are only 12 months (0-11). Thus, this would create a date for **July 5, 2038**.

11. **Unix Time**:  
    - Unix time begins on **January 1, 1970**. 
    - Example: `new Date(0)` creates a date object set to this epoch time.
    - Useful methods:
      - `toISOString()`: Converts the date to a string in the ISO format.
      - `getTime()`: Returns the number of milliseconds since the Unix epoch.

---

### Definitions

- **Base 2 (Binary)**: A numeral system that uses two symbols, typically 0 and 1. Each digit in a binary number represents a power of 2. It is the foundation of computer processing and data representation.

- **Base 10 (Decimal)**: The standard numeral system used in everyday life, consisting of ten symbols (0-9). Each digit's position represents a power of 10, making it easier for humans to perform calculations.

- **64-bit**: A data type that uses 64 bits (or 8 bytes) to represent a value. In computing, a 64-bit architecture can handle a vast range of numbers (up to 2^64 distinct values) and allows for more memory access compared to 32-bit systems.

- **UTC (Coordinated Universal Time)**: A time standard that serves as the basis for civil timekeeping worldwide. It is not affected by time zones or Daylight Saving Time, making it a consistent reference for global time.

- **Daylight Saving Time**: A practice where clocks are set forward by one hour during the warmer months to extend evening daylight. Typically, this occurs in spring and reverts in autumn, aiming to make better use of daylight.

- **UNIX Time**: A system for tracking time represented as the number of seconds that have elapsed since **January 1, 1970, at 00:00:00 UTC**, not counting leap seconds. It is widely used in computing for date and time representation.


### Internationalization (i18n) in JavaScript

**Internationalization (i18n)** in JavaScript allows web applications to adapt to different languages, regions, or cultural conventions. The `Intl` object in JavaScript provides various APIs for formatting dates, times, numbers, and handling locale-sensitive operations, making it easier to support multiple languages and formats.

---

### Key Internationalization APIs in JavaScript

1. **`Intl.DateTimeFormat`**: For formatting dates and times.
2. **`Intl.NumberFormat`**: For formatting numbers.
3. **`Intl.Collator`**: For comparing and sorting strings based on locale.
4. **`Intl.RelativeTimeFormat`**: For displaying relative time (e.g., "3 days ago").
5. **`Intl.ListFormat`**: For formatting lists (e.g., "Apple, Orange, and Banana").
6. **`Intl.PluralRules`**: For determining the pluralization rules in different locales.
7. **`Intl.Locale`**: For handling locale information and manipulation.

---

### Parameters, Options, and Properties of Internationalization APIs

Each `Intl` API has specific parameters and options, generally structured like this:

- **Parameters**:
  - `locale`: The language code or array of language codes (like `en-US`, `fr-FR`).
  - `options`: An object containing specific formatting settings (e.g., time zone, date style).

- **Common options**:
  - `localeMatcher`: Specifies the algorithm to match the locale (`lookup` or `best fit`).
  - `timeZone`: The time zone to use (e.g., `UTC`, `America/New_York`).
  - `style`: Defines how to display numbers (e.g., `decimal`, `currency`, `percent`).
  - `currency`: Used in `Intl.NumberFormat` to specify the currency (e.g., `USD`, `EUR`).
  - `dateStyle`, `timeStyle`: Used in `Intl.DateTimeFormat` to control the date and time format (e.g., `short`, `medium`, `long`).

---

### `navigator.language` and Similar Properties

- **`navigator.language`**: Returns the user's preferred language set in the browser, typically represented as a locale string, e.g., `'en-US'`. This can help tailor the web experience to the user's language automatically.
  
- **`navigator.languages`**: Returns an array of the user's preferred languages in order of preference, e.g., `['en-US', 'fr-FR']`.

These are helpful for automatically adjusting your content to the user's language preferences.

---

### Converting Time Between Time Zones and UTC

To convert time between different time zones in JavaScript, you can use `Intl.DateTimeFormat` or libraries like `Date` and `moment.js` (though using `Intl` is preferred).

#### Example: Convert Local Time to Another Time Zone
```javascript
let date = new Date(); // current date and time
let options = {
  timeZone: 'America/New_York', // specify the target time zone
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};
let newYorkTime = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(newYorkTime); // displays time in New York
```

#### Convert to UTC
JavaScript’s `Date` object automatically handles UTC conversion:
```javascript
let utcDate = date.toUTCString(); // Converts the current time to UTC format
console.log(utcDate); // e.g., "Sat, 20 Oct 2024 12:34:56 GMT"
```

---

### `Intl.DateTimeFormat`

The **`Intl.DateTimeFormat`** API is used to format date and time according to locale-specific conventions. It takes two parameters: a locale string (optional) and an options object (optional).

#### Example: Basic Date and Time Formatting
```javascript
let date = new Date();
let formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',  // Full day name
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'America/New_York'
});
console.log(formatter.format(date)); // "Saturday, October 20, 2024, 8:34 AM"
```

#### Options for `Intl.DateTimeFormat`:
- **`weekday`**: `'narrow'`, `'short'`, `'long'` (e.g., `M`, `Mon`, `Monday`)
- **`year`**: `'numeric'`, `'2-digit'`
- **`month`**: `'numeric'`, `'2-digit'`, `'narrow'`, `'short'`, `'long'`
- **`day`**: `'numeric'`, `'2-digit'`
- **`hour`, `minute`, `second`**: `'numeric'`, `'2-digit'`
- **`timeZone`**: Specify a time zone (e.g., `UTC`, `America/New_York`)

You can format time zones, weekday names, and more according to locale standards.

---

### `Intl.NumberFormat`

The **`Intl.NumberFormat`** API is used for formatting numbers according to a locale. This is particularly useful for currencies, percentages, and large numbers.

#### Example: Formatting Numbers and Currencies
```javascript
let number = 123456.789;

// Format as currency
let currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
console.log(currencyFormatter.format(number)); // "$123,456.79"

// Format as percentage
let percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
});
console.log(percentFormatter.format(0.123)); // "12%"
```

#### Options for `Intl.NumberFormat`:
- **`style`**: `'decimal'`, `'currency'`, `'percent'`
- **`currency`**: Currency code like `'USD'`, `'EUR'`
- **`minimumFractionDigits`/`maximumFractionDigits`**: Control the number of decimal places
- **`useGrouping`**: Whether to use grouping separators (e.g., commas)

---

### Summary

- The `Intl` object provides powerful tools for **internationalization** in JavaScript, making it easy to adapt dates, numbers, and strings to different locales.
- **`Intl.DateTimeFormat`** and **`Intl.NumberFormat`** are commonly used APIs for handling locale-sensitive formatting.
- **`navigator.language`** helps detect the user's language preferences.
- For **time zone conversions**, `Intl.DateTimeFormat` can specify time zones directly. The `Date` object can also convert to **UTC** easily.

### Relative Time Zones in JavaScript

**Relative time zones** refer to expressing the time difference between the current time and a past or future time. For example, saying "2 hours ago" or "in 3 days" instead of providing an absolute timestamp like "2024-10-20 10:00 AM."

In JavaScript, you can handle **relative time formatting** using the `Intl.RelativeTimeFormat` API. This API is designed to format relative times based on the locale and unit (e.g., seconds, minutes, hours, days, years, etc.).

---

### `Intl.RelativeTimeFormat` API

The `Intl.RelativeTimeFormat` API is used to create relative time messages in a way that is sensitive to the user's locale. This API handles different plural rules and grammar for time units (e.g., "day", "days") automatically.

#### Basic Usage Example:

```javascript
let rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf.format(-1, 'day'));  // "yesterday"
console.log(rtf.format(1, 'day'));   // "tomorrow"
console.log(rtf.format(-5, 'hour')); // "5 hours ago"
```

### Parameters and Options

- **Locale**: The first parameter (like `'en'` for English or `'fr'` for French) is used to determine how the message should be displayed in the appropriate language.
- **Value**: The second parameter (number) represents how far in the past or future the time is.
  - Negative numbers refer to the past (`-5` for "5 hours ago").
  - Positive numbers refer to the future (`5` for "in 5 hours").
- **Unit**: The third parameter defines the unit of time. Valid units are:
  - `'second'`
  - `'minute'`
  - `'hour'`
  - `'day'`
  - `'week'`
  - `'month'`
  - `'year'`

- **Options**: You can customize the output with an options object:
  - **`numeric`**: Controls whether the result should always be numeric or if it can be displayed as text (like "yesterday" or "tomorrow").
    - `'auto'`: Uses labels like "yesterday" or "tomorrow" when possible.
    - `'always'`: Forces numeric output (e.g., "-1 day" instead of "yesterday").
  - **`style`**: Controls how detailed the output should be. Can be `'long'`, `'short'`, or `'narrow'`.
    - `'long'`: Full words (e.g., "5 hours ago").
    - `'short'`: Abbreviated (e.g., "5 hr ago").
    - `'narrow'`: Even shorter (e.g., "5h ago").

#### Example with Options:

```javascript
let rtf = new Intl.RelativeTimeFormat('en', { numeric: 'always', style: 'short' });
console.log(rtf.format(-1, 'day')); // "-1 day"
console.log(rtf.format(3, 'hour')); // "in 3 hr"
```

### Full Example

Here’s a complete example that shows different time units and how `Intl.RelativeTimeFormat` handles them:

```javascript
let rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

console.log(rtf.format(-1, 'year'));   // "last year"
console.log(rtf.format(1, 'year'));    // "next year"
console.log(rtf.format(-6, 'month'));  // "6 months ago"
console.log(rtf.format(3, 'week'));    // "in 3 weeks"
console.log(rtf.format(-45, 'minute')); // "45 minutes ago"
```

### Practical Use Case

Relative time is often used in social media apps or notifications to tell users when an event occurred, such as:

- "Posted 2 hours ago"
- "Event happening in 3 days"
- "Your subscription ended 1 month ago"

The `Intl.RelativeTimeFormat` API makes this formatting easy to localize for international users, ensuring that the phrases are displayed correctly in different languages and locales.

---

### Summary

The **relative time zone** in JavaScript allows you to display how far an event is in the past or future using human-friendly phrases like "yesterday" or "in 5 days." This can be achieved using the `Intl.RelativeTimeFormat` API, which provides a localized way to express relative time differences based on specific units like seconds, hours, days, or years. The API is flexible, and by using options, you can control whether to display the time in a more detailed or shortened format.

### **Browser API vs. Network API**

#### **1. Browser API (Web API):**
- **Basic Explanation:**  
  Browser APIs are sets of functions that are built directly into modern web browsers, allowing developers to interact with the browser and the webpage. These APIs provide access to features such as DOM (Document Object Model) manipulation, user interactions, animations, multimedia, and more.

- **Use Case:**  
  Browser APIs are primarily used for building interactive and responsive web applications. They help developers create dynamic content, handle user inputs (e.g., clicking a button), and manipulate the appearance and behavior of web elements.

- **Examples:**
  - **DOM API:** Modify webpage content, such as changing the color of a button when clicked.
  - **Fetch API:** Used to make network requests (like getting data from a server).
  - **Geolocation API:** To get the user's current location.
  - **Local Storage API:** Enables the storage of data in the user's browser, allowing websites to save information (like user preferences) that persists even after the browser is closed. For instance, a shopping website can store items in the cart locally, so users can return to it later.

#### **2. Network API (Web-based Network API):**
- **Basic Explanation:**  
  A Network API refers to a set of functions that allow communication between different systems over a network (such as the internet). These are often server-based and enable data to be transferred between a client (like a browser or an app) and a server. They typically deal with protocols like HTTP, TCP, and more.

- **Use Case:**  
  Network APIs are used for transferring data, interacting with remote servers, fetching resources, and connecting different applications or services over the internet.

- **Examples:**
  - **REST API:** Allows web services to communicate by sending HTTP requests (e.g., retrieving weather data from a server).
  - **GraphQL API:** A more flexible alternative to REST, used for querying specific data from a server.
  - **SOAP API:** Used in enterprise systems for exchanging structured data between web services.

---

### **Comparison:**

- **Scope:**
  - **Browser API** focuses on enhancing the user experience inside a browser by interacting with web pages.
  - **Network API** focuses on communication over a network to fetch or send data.

- **Typical Usage:**
  - **Browser API:** Manipulate webpage elements, create animations, detect user location, and manage local storage.
  - **Network API:** Retrieve data from a server, communicate between applications or devices.

### **Example of Use Cases Together:**
1. **Browser API:** A webpage shows a form to enter your city.
2. **Network API:** When you submit the form, it makes a **network API** request to get the weather data from a server.
3. **Local Storage:** The weather data is saved to **local storage** so that the next time the user visits, they can quickly view the latest weather without having to re-enter their city.


### 1. Bubbling Phase and Capturing Phase
**Definitions:**
- **Bubbling Phase:** This phase occurs when an event starts from the target element and then bubbles up to the root of the DOM. For example, if you click on a button inside a div, the event will first trigger the button's event handlers and then move up to the div and its parent elements.

- **Capturing Phase:** In this phase, the event starts from the root of the DOM and travels down to the target element. Continuing the previous example, if the same button is clicked, the event will first trigger the handlers of the parent div, moving downward until it reaches the button.

**Example Use Case:**  
Consider a nested structure:
```html
<div id="parent">
    <button id="child">Click me</button>
</div>
```
- **Bubbling:** If you attach a click event to both the button and the div, and you click the button, the button's handler runs first, followed by the div's handler.
  
- **Capturing:** If you switch to capturing mode (using `addEventListener` with the third parameter set to `true`), the div's handler will run before the button's when clicking the button.

---

### 2. Target Phase
**Definition:** The target phase is when the event is executed specifically on the target element that triggered the event. For instance, when you click the button in the previous example, the button itself is the target, and its event handlers are executed.

---

### 3. Viewport
**Definition:** The viewport is the visible area of a web page in the browser. It’s essentially the user’s screen size minus any scrollbars or other interface elements.

---

### 4. `getBoundingClientRect()`
**Definition:** This method returns the size of an element and its position relative to the viewport. It provides an object with properties like `top`, `right`, `bottom`, `left`, `width`, and `height`.

**Points for Calculation:**
- **From:** The edges of the viewport (the visible area of the browser window).
- **To:** The edges of the element being measured.

**Example Use Case:**
```javascript
const rect = element.getBoundingClientRect();
console.log(rect.top, rect.left); // Logs the position of the element relative to the viewport
```

---

### 5. `window.pageXOffset` and `window.pageYOffset`
**Definitions:**  
- **`window.pageXOffset`:** This property returns the number of pixels that the document has been scrolled horizontally from the left edge of the viewport to the left edge of the document.
  
- **`window.pageYOffset`:** This property returns the number of pixels that the document has been scrolled vertically from the top edge of the viewport to the top edge of the document.

**Example Use Case:**
```javascript
console.log(window.pageXOffset, window.pageYOffset); // Logs current horizontal and vertical scroll position
```

---

### 6. Client Height and Width
**Definitions:**
- **Client Height:** This property returns the inner height of an element in pixels, including padding but not the horizontal scrollbar, border, or margin.
  
- **Client Width:** Similarly, this property returns the inner width of an element in pixels.

**Example Use Case:**
```javascript
const element = document.getElementById('myElement');
console.log(element.clientHeight, element.clientWidth); // Logs the height and width of the element
```

---

### 7. `window.scrollTo()`
**Definition:** The `window.scrollTo(x, y)` method scrolls the document to a specified set of coordinates, where `x` represents the horizontal position and `y` represents the vertical position.

**Arguments:**
- **x:** The number of pixels to scroll horizontally (from the left edge of the document).
- **y:** The number of pixels to scroll vertically (from the top edge of the document).

**Example Use Case:**
```javascript
window.scrollTo(200, 400); // Scrolls 200 pixels right and 400 pixels down
```

---

### 8. Scroll Into View
**Definition:** This method scrolls the element into the visible area of the browser window.

**Example Use Case:**
```javascript
const element = document.getElementById('myElement');
element.scrollIntoView(); // Scrolls the element into view
```

Here's your organized and detailed set of notes on the given JavaScript concepts and Object-Oriented Programming (OOP) principles:

---

## **Object-Oriented Programming (OOP)**

### **1. Overview**
- **OOP** is a programming paradigm that focuses on creating objects to model real-world entities and their interactions.
- The main goal is to organize code to make it more maintainable, scalable, and reusable, thus avoiding "spaghetti code."
- **Paradigm**: Refers to the style or approach of coding.
- **Public Interface (API)**: Methods and properties exposed by an object for interaction with other parts of the code.

---

## **2. Key Concepts in OOP**

### **i. Class**
- A **Class** is a **blueprint** used to create objects (instances).
- It defines properties (state) and methods (behavior) that its instances will have.
- Objects created from a class are referred to as **instances** of that class.

### **ii. State and Behavior**
- **State**: Refers to the data stored in an object (e.g., properties).
- **Behavior**: Refers to the actions the object can perform (e.g., methods).

### **iii. Principles of OOP**
1. **Abstraction**: Hiding complex implementation details and exposing only essential features.
2. **Encapsulation**: Bundling data and methods that operate on that data within a single unit (class). It also restricts direct access to some of the object's components.
3. **Inheritance**: Mechanism where a class derives properties and methods from another class.
4. **Polymorphism**: Ability to use a method in different ways, typically through method overriding or overloading.

---

## **3. Prototypal Inheritance in JavaScript**

### **i. Understanding Prototypes**
- **Prototype**: Every JavaScript object is linked to a prototype, which provides shared methods and properties.
- Objects created using **constructor functions** or **classes** inherit from their prototype.
- Methods defined on the prototype can be shared across instances, saving memory.

### **ii. `hasOwnProperty()`**
- Checks if a property is **directly defined** on the object itself and not inherited from the prototype.

---

## **4. Constructor Functions**

### **i. Basics**
```js
'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
```
- A **constructor function** is used to create objects.
- The `new` keyword:
  - Creates an empty object `{}`.
  - Sets `this` to the new object.
  - Links the object to a prototype.
  - Returns the object.

### **ii. Adding Methods to the Prototype**
```js
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
jonas.calcAge(); // Output: 33
```
- Defining methods on the prototype ensures that they are not duplicated for each instance.

---

## **5. Class Syntax (ES6)**

### **i. Class Declaration**
```js
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method defined on the prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge(); // Output: 41
```
- Classes in JavaScript are essentially **syntactic sugar** over constructor functions.
- **Classes are not hoisted**, meaning they cannot be used before they are defined.
- **Classes operate in strict mode** by default.

### **ii. Adding Methods to the Prototype**
```js
PersonCl.prototype.greet = function () {
  console.log('Hey, Good Evening');
};
jessica.greet(); // Output: Hey, Good Evening
```

---

## **6. Example: Car Constructor Function**

### **i. Constructor Function Example**
```js
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate(); // Output: 130 km/h
bmw.brake();      // Output: 125 km/h
```
- This example demonstrates how to use a constructor function to create instances and define shared methods using prototypes.

---

## **7. Behind the Scenes of Classes**

- **Classes are still functions** behind the scenes in JavaScript.
- They can be created using either **declaration** or **expression** syntax:
  ```js
  // Class Expression
  const PersonClExp = class {};
  
  // Class Declaration
  class PersonClDec {}
  ```
- **First-class citizens**: Classes can be passed as arguments, returned from functions, and assigned to variables.

---

## **8. Additional Notes**
- Always use `'use strict'` to enforce secure coding practices.
- Use **classes and prototypes** effectively to optimize memory usage by sharing methods among instances.
- Understanding OOP and prototypes in JavaScript is crucial for writing clean, efficient, and modular code.

Alright bro, let's break down these JavaScript concepts into simpler terms. I'll explain each topic in detail and make sure to clarify the `this` keyword with specific examples since that’s an area you're confused about.

---

### 1. **Constructor Function vs. Classes**

#### **Constructor Functions:**
- A **constructor function** is a special function used to create and initialize objects in JavaScript.
- Before ES6, it was the primary way to create objects that share properties and methods.
- By convention, the name of a constructor function starts with a capital letter.

**Example:**
```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car('Bajaj', 'Dominar 400');
console.log(myCar); // Output: { brand: 'Bajaj', model: 'Dominar 400' }
```

- Here, `this` refers to the new object being created (`myCar`).

#### **Classes (ES6):**
- **Classes** were introduced in ES6 as a more intuitive way to create objects and handle inheritance.
- Under the hood, classes are just syntactic sugar over constructor functions.

**Example:**
```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

const myCar = new Car('Bajaj', 'Dominar 400');
console.log(myCar); // Output: { brand: 'Bajaj', model: 'Dominar 400' }
```

- The `constructor` method is used to initialize the object's properties.
- Classes also support methods directly inside their definition, making them cleaner and easier to read.

---

### 2. **Object.get Method vs. Classic Methods**

The `Object.get` methods (like `Object.getPrototypeOf`) are newer ways to access an object's properties or prototype chain.

#### **Object.create vs. Classic Constructor Function**
- `Object.create` creates a new object with a specified prototype.
  
**Example using `Object.create`:**
```js
const personProto = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const student = Object.create(personProto);
student.name = 'Abishek';
student.greet(); // Output: Hello, my name is Abishek
```

- Here, `student` inherits methods from `personProto`.

**Example using Constructor Function:**
```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const student = new Person('Abishek');
student.greet(); // Output: Hello, my name is Abishek
```

---

### 3. **Encapsulation vs. Abstraction**

#### **Encapsulation:**
- It's about **restricting direct access** to some of an object's components and can be achieved by using private variables or closures.
- In JavaScript (using ES6 classes), we can use `#` to make properties private.

**Example:**
```js
class User {
  #password;
  constructor(username, password) {
    this.username = username;
    this.#password = password; // Private property
  }
  
  getPassword() {
    return this.#password;
  }
}

const user = new User('abishek', '1234');
console.log(user.getPassword()); // Output: 1234
console.log(user.#password); // Error: Private field
```

#### **Abstraction:**
- It's about **hiding complex implementation details** and showing only the necessary parts to the user.
- You only expose methods that are needed, while the internal logic is hidden.

---

### 4. **Understanding the `this` Keyword**

The value of `this` depends on **how** a function is called:

#### **A. In Global Scope**
```js
console.log(this); // Refers to the global object (window in browsers)
```

#### **B. Inside a Function**
```js
function showThis() {
  console.log(this);
}
showThis(); // Output: global object (or `undefined` in strict mode)
```

#### **C. Inside a Method**
```js
const bike = {
  brand: 'Bajaj',
  getBrand() {
    console.log(this.brand);
  }
};
bike.getBrand(); // Output: Bajaj
```
- Here, `this` refers to the `bike` object because the method is called on it.

#### **D. In an Arrow Function**
```js
const car = {
  model: 'Dominar',
  getModel: () => {
    console.log(this.model);
  }
};
car.getModel(); // Output: undefined (arrow functions do not have their own `this`)
```

#### **E. With Constructor Functions**
```js
function Animal(type) {
  this.type = type;
}
const dog = new Animal('Dog');
console.log(dog.type); // Output: Dog
```
- `this` refers to the newly created object (`dog`).

#### **F. With `call`, `apply`, and `bind`**
- These methods allow you to explicitly set `this`.

**Example:**
```js
function greet() {
  console.log(`Hello, I am ${this.name}`);
}

const person = { name: 'Abishek' };
greet.call(person); // Output: Hello, I am Abishek
```

---

### **Bonus Point Example**:

Let's revisit your specific code:

```js
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
```

#### **Explanation**:
- This is a **constructor function** where `Person.call(this, firstName, birthYear)` is used to inherit properties from a parent function (`Person`).
- The `call` method ensures that `this` refers to the new `Student` object being created.

Assuming `Person` is defined as:
```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Inherit properties from Person
  this.course = course;
};

const student1 = new Student('Abishek', 2001, 'Engineering');
console.log(student1);
// Output: { firstName: 'Abishek', birthYear: 2001, course: 'Engineering' }
```

- `this` in `Person.call(this, firstName, birthYear)` refers to the new `Student` object (`student1`).
  
---

Ah, got it, bro! Let's dive deeper into how **Object-Oriented Programming (OOP)** concepts are applied in JavaScript using **ES6 classes**, **`Object.create()`**, and **constructor functions**.

---

### **OOP Concepts in JavaScript (ES6 Classes, Object.create, and Constructor Functions)**

JavaScript supports core OOP principles like **Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**. Let's see how these concepts can be implemented using different approaches in JavaScript:

#### **1. Encapsulation**
- Encapsulation is achieved by bundling data (properties) and methods (functions) inside a single unit, usually a class.
- ES6 classes allow us to create private fields using `#`.

**Example using ES6 Classes:**
```js
class Car {
  #speed; // Private property
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.#speed = speed;
  }

  getDetails() {
    return `${this.brand} ${this.model} is running at ${this.#speed} km/h`;
  }

  accelerate() {
    this.#speed += 10;
  }
}

const myCar = new Car('Bajaj', 'Dominar 400', 100);
myCar.accelerate();
console.log(myCar.getDetails()); // Output: Bajaj Dominar 400 is running at 110 km/h
```

- Here, the `#speed` property is encapsulated within the class and can't be accessed directly.

#### **2. Inheritance**

Inheritance allows one class to **inherit properties and methods** from another class.

**A. Using ES6 Classes:**
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call the parent class constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const student1 = new Student('Abishek', 23, 'Engineering');
student1.greet(); // Output: Hi, I'm Abishek
student1.study(); // Output: Abishek is studying Engineering
```

- The `Student` class inherits from `Person`, gaining access to its properties and methods.

**B. Using Constructor Functions and `Object.create()`:**
```js
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const Student = function (name, age, course) {
  Person.call(this, name, age); // Inherit properties
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log(`${this.name} is studying ${this.course}`);
};

const student2 = new Student('Abishek', 23, 'Engineering');
student2.greet(); // Output: Hi, I'm Abishek
student2.study(); // Output: Abishek is studying Engineering
```

- Here, `Object.create()` sets up the prototype chain, allowing `Student` to inherit from `Person`.

#### **3. Polymorphism**
- Polymorphism allows different classes to be treated as instances of the same class through a common interface.

**Example using Method Overriding:**
```js
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

const animal = new Animal();
const dog = new Dog();
animal.speak(); // Output: Animal makes a sound
dog.speak(); // Output: Dog barks
```

- The `Dog` class overrides the `speak()` method from the `Animal` class.

#### **4. Abstraction**
- Abstraction is about exposing only the necessary details and hiding the implementation details.

**Example using Classes:**
```js
class BankAccount {
  #balance;
  
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount('Abishek', 1000);
account.deposit(500); // Output: Deposited 500. New balance: 1500
console.log(account.getBalance()); // Output: 1500
```

- The `#balance` is hidden from direct access and can only be modified through the provided methods.

---

### **How to Implement OOP in Different Styles in JavaScript**

Let's revisit the main styles for implementing OOP in JavaScript:

1. **Using ES6 Classes (Modern Approach)**
2. **Using `Object.create()` (Prototype-based Inheritance)**
3. **Using Constructor Functions (Traditional Approach)**

---

### **OOP Comparison Table**

| Concept         | ES6 Classes        | Constructor Functions           | `Object.create()`              |
|-----------------|---------------------|--------------------------------|--------------------------------|
| Syntax          | Cleaner, more readable | Older, traditional approach   | Explicitly sets the prototype  |
| Inheritance     | `extends` keyword  | `call` and prototype chaining  | Prototype linking              |
| Encapsulation   | `#privateFields`   | Closures for private variables | Limited without closures       |
| Abstraction     | Methods and getters| Closures and methods           | Methods defined on prototype   |

---

Hope that clears up the concepts, bro! Let me know if you have any more questions or if anything needs more clarity.

Alright, bro, let’s dive into this concept:

In JavaScript, when you use the `extends` keyword to create a **child class** that inherits from a **parent class**, you typically call the `super()` method inside the child's constructor. The `super()` function is used to call the constructor of the parent class, which allows you to inherit its properties and methods.

However, if your **child class does not have any additional properties of its own** and only inherits everything from the parent class, then you don't actually need to call `super()` in the constructor or even define a constructor at all.

### **Why is `super()` Needed?**
1. **When the Child Class has a Constructor**:
   - If you define a `constructor` in a child class, you **must** call `super()` before you can use `this`.
   - This is because the `super()` function sets up the `this` context for the child class. Without calling `super()`, you won't be able to access or assign properties using `this`.

2. **If No New Properties are Needed**:
   - If your child class doesn't need its own constructor (i.e., it only uses the parent class's properties and methods), you can **skip defining a constructor** entirely.
   - In this case, the child class automatically uses the parent class’s constructor.

---

### **Example 1: Using `super()` with Additional Properties**

If the child class has its own properties, you need to call `super()`:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name}, the ${this.breed}, barks`);
  }
}

const myDog = new Dog('Bruno', 'Golden Retriever');
myDog.speak(); // Output: Bruno, the Golden Retriever, barks
```

- Here, `super(name)` is necessary because we need to pass `name` to the `Animal` class.

---

### **Example 2: When You Don’t Need `super()` or a Constructor**

If your child class doesn’t add any new properties, you can skip calling `super()` and even skip defining a `constructor`:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  // No constructor needed since we're not adding any new properties
}

const myDog = new Dog('Max');
myDog.speak(); // Output: Max makes a sound
```

- In this example, the `Dog` class automatically inherits the constructor from `Animal`.
- Since there are no new properties in `Dog`, we didn’t need to define a constructor or call `super()`.

---

### **Key Takeaways**
1. **If your child class defines its own constructor**, you **must** call `super()` before using `this`.
2. **If your child class doesn’t need a constructor** (i.e., it doesn't have additional properties), you can **omit the constructor entirely**.
3. In cases where the child class only extends the behavior of the parent class without introducing new properties, skipping the `constructor` and `super()` simplifies your code.

Let me know if that clears things up, bro!

@Common Format of an User Story
As a [type of User], I want [an action] so that [a benefit]

When we write a HTMl Code 
  <script defer src="script.js"></script>
  <script defer src="index.js"></script>
Then index.js would have access to the global variables defined in the script.js file as long as it is rendered before the index.js file.


---

## **@closure Function in JavaScript**  

### **1. Definition**  
- A **closure** in JavaScript is a function that **remembers the variables** from its **parent scope**, even after the parent function has finished execution.  
- It allows functions to maintain private variables and encapsulation.  

### **2. Example of Closure**  
```javascript
function outerFunction() {
    let count = 0; // Private variable

    return function innerFunction() {
        count++; 
        console.log(`Count is: ${count}`);
    };
}

const counter = outerFunction(); 

counter(); // Output: Count is: 1
counter(); // Output: Count is: 2
```

### **3. Key Points**  
- `innerFunction` retains access to `count`, even after `outerFunction` has executed.  
- Used in **data privacy**, **caching**, and **event handlers**.  



## **Code Architecture & Data Storage**  

### **1. Architecture - Structure of Code**  
- Defines how different components of an application interact.  
- Helps in scalability, maintainability, and efficiency.  
- **Key Aspects:**
  - Modular Design: Break code into reusable modules.
  - Layered Approach: Separate concerns (e.g., UI, Business Logic, Data).
  - Clean Code: Follow best practices to keep the structure understandable.  

### **2. Data Storage - First Step in Development**  
- Data is the backbone of any application.  
- **Deciding When, How & Where to Store Data:**  
  - **When?** Store data when persistence is needed beyond a single session.  
  - **How?** Choose between Local Storage, Session Storage, Cookies, or Database.  
  - **Where?** Depends on the need:  
    - **Frontend**: Local Storage, Session Storage, IndexedDB.  
    - **Backend**: Database (SQL, NoSQL).  

---

## **3. LocalStorage API (Frontend Storage)**  
- A **browser-provided API** to store data persistently in the user's browser.  
- Data remains even after **page refresh or browser restart**.  
- It is linked with the URL (per domain).  

### **4. Key Methods in LocalStorage API**  
- **localStorage.setItem(key, value)** → Stores data.  
- **localStorage.getItem(key)** → Retrieves stored data.  
- **localStorage.removeItem(key)** → Deletes specific data.  
- **localStorage.clear()** → Removes all stored data for that domain.  

### **5. When to Use LocalStorage?**  
- Storing small, non-sensitive data like theme preferences, user settings, or cached data.  
- Not recommended for **sensitive** or **large amounts of data** (use databases instead).  

------------------------------------------

---

## **Asynchronous JavaScript**  

### **1. Synchronous Code (Blocking Execution)**  
- **Definition:** Executes line by line, where each line **waits** for the previous one to complete.  
- **Thread of Execution:**  
  - A part of the execution context that **processes code in the CPU**.  
  - Only **one line runs at a time** in JavaScript (Single-threaded).  
- **Problem with Synchronous Code:**  
  - If a task takes **too long** (e.g., fetching data from a server), it **blocks** further execution.  
  - The webpage becomes **unresponsive** (freezes).  

---

### **2. What is Asynchronous JavaScript?**  
- **Definition:**  
  - Asynchronous code **does not block execution**.  
  - Instead of waiting for a task to complete, it **moves on** and handles results **later**.  
- **How it Works?**  
  - Uses **Web APIs**, **Callbacks**, **Promises**, or **Async/Await** to execute tasks in the background.  

---

### **3. Are All Callbacks & Event Handlers Asynchronous?**  
- **No!**  
- Callbacks are just functions passed as arguments.  
- Example of **Synchronous Callback:**  
  ```javascript
  function greet(name, callback) {
      console.log(`Hello, ${name}`);
      callback(); // This runs synchronously
  }

  function sayBye() {
      console.log("Goodbye!");
  }

  greet("Abishek", sayBye);
  // Output:
  // Hello, Abishek
  // Goodbye!
  ```
- Example of **Asynchronous Callback (setTimeout)**  
  ```javascript
  setTimeout(() => console.log("Delayed Message"), 2000);
  console.log("This runs first!");
  // Output:
  // This runs first!
  // (After 2 seconds) Delayed Message
  ```

---

### **4. AJAX (Asynchronous JavaScript and XML)**  
- **Definition:**  
  - AJAX allows browsers to communicate with web servers **asynchronously**.  
  - It helps fetch and update data **without reloading the page**.  
- **Example using Fetch API (Modern AJAX Approach)**  
  ```javascript
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  ```

---

### **5. Does AJAX Still Use XML Today?**  
- **No, XML is mostly outdated!**  
- Earlier, AJAX used XML to transfer data.  
- Today, **JSON (JavaScript Object Notation)** is the **preferred format** because:  
  - It is **lighter and faster** than XML.  
  - It integrates seamlessly with JavaScript.  
- **Example of JSON Response:**  
  ```json
  {
    "name": "Abishek",
    "role": "Software Engineer"
  }
  ```

---

### **Promise in JavaScript**
- A **Promise** is an **object** that represents the **future result** of an asynchronous operation.
- It's like a **container** for a value that will be available later, after the operation is completed.

---

### **Lifecycle of a Promise**
1. **Pending State**:  
   - The promise is in the initial stage where it is **waiting** for the asynchronous task to finish.  
   - It's neither fulfilled nor rejected.

2. **Async Task in Background**:  
   - While the promise is pending, the asynchronous task is working in the background (like fetching data from a server).

3. **Settled State**:  
   - Once the asynchronous task finishes, the promise moves to the **settled state**.
   - A promise can be settled in two ways:  
     ✅ **Fulfilled**: The task completed successfully (e.g., data fetched successfully).  
     ❌ **Rejected**: The task failed (e.g., error occurred).

4. **State Cannot Change After Settling**:  
   - A promise can only settle once, meaning once it’s fulfilled or rejected, it **cannot change its state** again.  
   - **No going back** to pending once settled.

---

### **Consuming a Promise**
- To **consume** a promise, we first **create** the promise and then use it.
  
- **Building a Promise**:  
  - For example, in the **fetch** function, a promise is built internally when fetching data, and we consume it after the promise is returned.
  
  - **Example**:  
    ```javascript
    let fetchData = new Promise((resolve, reject) => {
      let dataFetched = true; // Change this to false for a rejected state

      if (dataFetched) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data!");
      }
    });

    fetchData
      .then((message) => console.log(message)) // Handling the fulfilled state
      .catch((error) => console.log(error)); // Handling the rejected state
    ```

---

### **Summary**
- **Promise** is like a container for an **future value** that will be resolved later.
- It goes through **pending** → **settled** (fulfilled or rejected) stages.
- A promise’s state **can’t be changed once settled**.
- To **consume** a promise, you must first **create** it, then **handle** its states (fulfilled or rejected).


---

### 1. `.then()`

#### **Definition**:
- `.then()` is used to handle the **successful resolution** of a **Promise**.
- It is invoked once the promise has been **fulfilled** and returns the result from the promise (or it can return another promise).

#### **Syntax**:
```javascript
promise.then(onSuccess, onFailure);
```

- `onSuccess`: A function that is executed when the promise is **fulfilled** (resolved).
- `onFailure` (optional): A function that is executed when the promise is **rejected** (failure).

#### **Use Case**:
- You use `.then()` to process the result of a **successful** asynchronous operation.
- It helps chain actions to be executed after an asynchronous task finishes.

#### **Basic Example**:

```javascript
const promise = new Promise((resolve, reject) => {
  let isSuccess = true;
  
  if (isSuccess) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((result) => {
    console.log(result); // "Operation succeeded!"
  })
  .catch((error) => {
    console.log(error); // This won’t run in this case
  });
```

---

### 2. `.catch()`

#### **Definition**:
- `.catch()` is used to **handle errors** or **rejections** that occur in the promise chain.
- It is invoked if the promise is **rejected**.

#### **Syntax**:
```javascript
promise.catch(onError);
```

- `onError`: A function that is executed when the promise is **rejected** (failure).

#### **Use Case**:
- Use `.catch()` to **handle failures** or **exceptions** in promises.
- It provides an easy way to manage errors that occur during asynchronous operations.

#### **Basic Example**:

```javascript
const promise = new Promise((resolve, reject) => {
  let isSuccess = false;
  
  if (isSuccess) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((result) => {
    console.log(result); // This won’t run in this case
  })
  .catch((error) => {
    console.log(error); // "Operation failed!"
  });
```

---

### 3. `.finally()`

#### **Definition**:
- `.finally()` is used to execute code **after** the promise has settled, regardless of whether it was **resolved** or **rejected**.
- It is helpful for **cleanup** tasks, like hiding a loading spinner, closing a database connection, or releasing resources.

#### **Syntax**:
```javascript
promise.finally(onFinally);
```

- `onFinally`: A function that is executed when the promise **settles** (either resolved or rejected). It doesn’t receive the promise result or error.

#### **Use Case**:
- Use `.finally()` for **final operations** that need to happen regardless of the outcome of the promise.
- It's ideal for tasks that must be executed no matter what (e.g., UI updates, logging).

#### **Basic Example**:

```javascript
const promise = new Promise((resolve, reject) => {
  let isSuccess = true;
  
  if (isSuccess) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((result) => {
    console.log(result); // "Operation succeeded!"
  })
  .catch((error) => {
    console.log(error); // This won’t run in this case
  })
  .finally(() => {
    console.log("This runs no matter what (cleanup code)");
  });
```

In this example, no matter whether the promise resolves or rejects, the **"This runs no matter what"** message will always be logged.

---

### **Key Differences**:

- **`.then()`**: Used for handling **success** of the promise and chaining further operations.
- **`.catch()`**: Used for handling **errors** and **failures** in the promise.
- **`.finally()`**: Executes code once the promise **settles**, regardless of success or failure, typically used for cleanup.

---

### **Real-World Example**:

Imagine you’re fetching data from an API:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())  // Handle the successful data response
  .then((data) => {
    console.log("Data received:", data);  // Process the data
  })
  .catch((error) => {
    console.log("Error occurred:", error);  // Handle errors (like no internet, 404, etc.)
  })
  .finally(() => {
    console.log("API request finished, clean-up if needed");  // Final clean-up action, like hiding a loading spinner
  });
```

In this example:
- `.then()` handles the successful response from the API.
- `.catch()` handles any errors if the fetch operation fails (e.g., network issues).
- `.finally()` performs any cleanup (e.g., hiding the loading spinner) once the API request is complete, regardless of whether it was successful or not.

# **JavaScript Runtime in Browser – A Deep Dive**

JavaScript is a **single-threaded, non-blocking, asynchronous** programming language. This means it executes one operation at a time but can efficiently handle multiple tasks in the background without blocking execution.  

This is made possible by the **JavaScript Runtime Environment**, which consists of several key components:

### **1. JavaScript Runtime in Browser**  
The **JavaScript runtime** in a browser is like a **container** that holds everything needed to execute JavaScript code. It includes:  
- **JavaScript Engine** – The core processor of JavaScript.  
- **Heap** – Memory storage for objects.  
- **Call Stack** – Where JavaScript code is executed.  
- **Web APIs** – Browser-provided APIs like `setTimeout()`, `fetch()`, and DOM manipulation.  
- **Callback Queue** – Stores functions waiting to be executed after an event occurs.  
- **Event Loop** – Monitors the **call stack** and **callback queue** to maintain concurrency.  
- **Microtask Queue** – Holds higher-priority tasks, mainly for `Promises`.  

---

## **2. JavaScript Engine – The Heart of the Runtime**
The **JavaScript Engine** is responsible for executing JavaScript code. Every browser has its own engine:  
- **V8 (Chrome, Node.js)**  
- **SpiderMonkey (Firefox)**  
- **JavaScriptCore (Safari)**  

The engine converts JavaScript code into machine code for execution.  

---

## **3. Heap – Memory Storage**
The **Heap** is an area in memory where objects and variables are stored. Unlike the **Call Stack**, which follows a structured order, the heap is unstructured and dynamically allocated.  

Example:  
```js
let user = { name: "Abishek" }; 
// 'user' is stored in the heap
```

---

## **4. Call Stack – Where Code is Executed**
The **Call Stack** is a **LIFO (Last In, First Out)** data structure where JavaScript executes code synchronously. It pushes function calls onto the stack and removes them after execution.  

Example:  
```js
function greet() {
    console.log("Hello, Bro!");
}

greet();
```
Execution steps:  
1. `greet()` is **pushed** to the Call Stack.  
2. `console.log("Hello, Bro!")` is executed.  
3. `greet()` is **popped** off the Call Stack.  

---

## **5. Web APIs – Browser-Provided Features**
JavaScript alone **cannot** handle asynchronous operations like **network requests, timers, and DOM manipulation**. This is where **Web APIs** come into play.  

Examples of Web APIs:  
- `setTimeout()` for timers  
- `fetch()` for network requests  
- DOM manipulation like `document.getElementById()`  
- Event Listeners like `click` and `keydown`  

These APIs **do not** execute inside the JavaScript engine but are handled by the browser.

Example:
```js
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");
```
### **Execution Flow**
1. `console.log("Start")` → Goes to **Call Stack**, executed immediately.  
2. `setTimeout()` is sent to the **Web API**, handled **outside** the Call Stack.  
3. `console.log("End")` → Executed immediately.  
4. After 2 seconds, the **callback** of `setTimeout()` moves to the **Callback Queue**.  
5. **Event Loop** moves it to the **Call Stack** when it’s empty.  

**Output:**
```
Start
End
Inside setTimeout
```
This shows **non-blocking concurrency** in action.

---

## **6. Callback Queue – Handling Events**
The **Callback Queue** stores callbacks from:  
- `setTimeout()`  
- DOM events (`click`, `scroll`, etc.)  
- `setInterval()`  

They are added to the **Callback Queue** and executed only when the **Call Stack is empty**.

Example:  
```js
console.log("Start");

document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
});

console.log("End");
```
**Execution Flow:**  
1. `console.log("Start")` executes.  
2. Event Listener is registered but not executed yet.  
3. `console.log("End")` executes.  
4. When the button is clicked, the event goes to the **Callback Queue**.  
5. The **Event Loop** pushes it to the **Call Stack** when empty.  

---

## **7. Event Loop – The Heart of Concurrency**
The **Event Loop** continuously checks:  
1. **Is the Call Stack empty?**  
2. **Are there pending tasks in the Callback Queue?**  

If **yes**, it moves the first task from the **Callback Queue** to the **Call Stack**.

This is why JavaScript is **non-blocking and asynchronous**.

---

## **8. Microtask Queue – Higher Priority Queue**
The **Microtask Queue** stores:  
- `Promise.then()` callbacks  
- `MutationObserver()`  

**It has a higher priority than the Callback Queue.**  

Example:  
```js
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");
```
### **Execution Flow**
1. `console.log("Start")` executes.  
2. `setTimeout()` goes to the **Web API**, scheduled with **0ms delay**.  
3. `Promise.then()` goes to the **Microtask Queue**.  
4. `console.log("End")` executes.  
5. **Microtask Queue** executes first → `"Inside Promise"`.  
6. **Callback Queue** executes → `"Inside setTimeout"`.  

**Output:**
```
Start
End
Inside Promise
Inside setTimeout
```
Even though `setTimeout()` had `0ms` delay, the **Promise executed first** because the **Microtask Queue has higher priority**.

---

## **Full Lifecycle Example**
```js
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");

function syncTask() {
    console.log("Sync Task Executed");
}
syncTask();
```
### **Execution Flow**
1. `console.log("Start")` → **Call Stack**, executes.  
2. `setTimeout()` → Sent to **Web API**.  
3. `Promise.then()` → Goes to **Microtask Queue**.  
4. `console.log("End")` → Executes.  
5. `syncTask()` → Executes immediately.  
6. **Microtask Queue executes** → `"Inside Promise"`.  
7. **Callback Queue executes** → `"Inside setTimeout"`.  

**Final Output:**
```
Start
End
Sync Task Executed
Inside Promise
Inside setTimeout
```

---

## **Summary**
| Component | Function |
|-----------|----------|
| **Call Stack** | Executes JavaScript synchronously. |
| **Heap** | Stores objects and memory allocations. |
| **Web APIs** | Handles async tasks (setTimeout, fetch, DOM events). |
| **Callback Queue** | Holds event-driven functions to be executed later. |
| **Microtask Queue** | Holds high-priority tasks (Promises). |
| **Event Loop** | Moves tasks from Queues to Call Stack when empty. |

### **Key Takeaways**
- JavaScript executes synchronously but can handle async tasks with Web APIs.  
- The **Event Loop** ensures smooth execution of pending tasks.  
- **Microtask Queue has higher priority than Callback Queue**, so Promises execute first.  

This is why **JavaScript is non-blocking, yet handles concurrency efficiently**. 🚀


---

### **1. `async/await`**
- **`async`**: Marks a function as asynchronous. It always returns a **Promise**.
- **`await`**: Pauses execution until the Promise resolves (only works inside `async` functions). It unwraps the value of a resolved Promise.
- **Usage**: Simplifies working with Promises by writing asynchronous code as if it were synchronous, avoiding `.then()` and `.catch()` chaining.

**Example**:
```javascript
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

### **2. `Promise.all()`**
- **Purpose**: Runs multiple promises **concurrently** and waits for all to resolve. If any promise fails (is rejected), the whole `Promise.all()` fails and goes to `.catch()`.
- **Returns**: A single Promise that resolves to an array of resolved values of the input promises.

**Example**:
```javascript
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
Promise.all([promise1, promise2])
  .then(([users, posts]) => {
    console.log(users, posts);
  })
  .catch(err => console.error(err));
```

---

### **3. `Promise.race()`**
- **Purpose**: Waits for the **first** promise to resolve or reject. It returns the result of the first Promise that settles (whether resolved or rejected).
- **Returns**: A single Promise that resolves or rejects based on the outcome of the first settled promise.

**Example**:
```javascript
const promise1 = new Promise(resolve => setTimeout(resolve, 200, 'First'));
const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'Second'));

Promise.race([promise1, promise2])
  .then(result => console.log(result))  // Output: 'Second'
  .catch(err => console.error(err));
```

---

### **4. `Promise.allSettled()`**
- **Purpose**: Waits for **all** promises to settle, regardless of whether they resolve or reject. It returns an array with the result of all promises.
- **Returns**: An array of objects that each represent the outcome (either `fulfilled` or `rejected`) of each promise.

**Example**:
```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject('Error');
const promise3 = Promise.resolve(42);

Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));
  // Output: [
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'rejected', reason: 'Error' },
  //   { status: 'fulfilled', value: 42 }
  // ]
```

---

### **5. `Promise.any()`**
- **Purpose**: Waits for the **first promise that resolves**. It ignores rejected promises. If all promises are rejected, it returns an aggregate error.
- **Returns**: The first resolved value or an aggregate error if all promises are rejected.

**Example**:
```javascript
const promise1 = Promise.reject('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.resolve('Third');

Promise.any([promise1, promise2, promise3])
  .then(result => console.log(result))  // Output: 'Second'
  .catch(err => console.error(err));
```

---

### **6. `try/catch`**
- **Purpose**: Handles synchronous and asynchronous errors. `try` block contains code that may throw an error, and the `catch` block handles the error.
- **Works with `async/await`**: `try/catch` can catch errors from async functions that throw or return a rejected promise.

**Example**:
```javascript
try {
  const result = await fetchData();
  console.log(result);
} catch (error) {
  console.error('Error occurred:', error);
}
```
----
Here's your **corrected and structured notes** with **code examples** where needed:  

---

# **Modern JavaScript & ES Modules**  

## **1. Module-Based Code**  
- Modern JavaScript uses **modules** instead of writing all code in a single file.  
- Modules help in **code organization, reusability, and maintainability**.  
- We can use third-party modules via **NPM (Node Package Manager)**.  

---

## **2. NPM (Node Package Manager)**  
- NPM is both a **repository** (to find packages) and a **software tool** (to manage dependencies).  
- We install packages using:  
  ```sh
  npm install package-name
  ```
- Example: Installing Axios  
  ```sh
  npm install axios
  ```
- Installed packages are stored in the **node_modules** folder.  

---

## **3. Build Process & Bundling**  
- We write modular JavaScript, but for **production**, we bundle everything into a single file.  
- **Bundling**: Combines multiple JS files into a single optimized file.  
- Tools like **Webpack** and **Parcel** help automate this.  
- Example using Webpack:  
  ```sh
  npx webpack
  ```

---

## **4. Transpiling & Polyfilling**  
- **Transpiling**: Converts modern JavaScript (ES6+) to older versions for browser compatibility.  
- **Polyfilling**: Adds missing features to older browsers.  
- This is done using **Babel**.  
- Example using Babel CLI:  
  ```sh
  npx babel src --out-dir dist
  ```

---

## **5. Webpack vs Parcel**  
| Feature | Webpack | Parcel |
|---------|--------|--------|
| Configuration | Complex | Zero-config |
| Performance | Optimized | Faster builds |
| Learning Curve | Steep | Easy |

---

## **6. ES Modules (ECMAScript Modules - ESM)**  
- ES Modules allow us to **import/export** code between files.  
- Modules are executed **before** regular scripts.  
- To use modules in an HTML file:  
  ```html
  <script type="module" src="app.js"></script>
  ```
- Variables defined in a module are scoped to that module and are not global like in regular script files. 
-  ES modules work without extensions in some cases, but it's generally recommended to include extensions for clarity.

---

## **7. Named & Default Exports**  

### **7.1 Named Exports**  
- Used when exporting multiple values.  
- Must be imported using **exact names** inside `{}`. 
- Exports must be at the top level of the module; they won’t work inside nested functions or blocks.

**Example (exporting multiple values)**:  
```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**Example (importing multiple values)**:  
```js
// app.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

- We can also **import everything** using `*`:  
  ```js
  import * as MathUtils from './math.js';
  console.log(MathUtils.add(2, 3));
  ```

---

### **7.2 Default Exports**  
- Used when exporting a **single value**.  
- Can be imported with **any name**.  

**Example (exporting a default value)**:  
```js
// logger.js
export default function logMessage(message) {
    console.log(`LOG: ${message}`);
}
```

**Example (importing a default value)**:  
```js
// app.js
import log from './logger.js';

log("Hello World"); // Output: LOG: Hello World
```

---

### **7.3 Named & Default Exports Together**  
- A file can have **both named and default exports**, but it’s **not a good practice**.  
- Example:  
  ```js
  export const add = (a, b) => a + b;
  export default function multiply(a, b) {
      return a * b;
  }
  ```
- Importing:  
  ```js
  import multiply, { add } from './math.js';
  console.log(multiply(2, 3)); // Output: 6
  console.log(add(2, 3)); // Output: 5
  ```

---

## **8. Important Notes About Imports**  
Importing is **not** just a copy of the exported value—it’s a **live connection**.  
Exports must be at the **top level** of the file (not inside functions or loops).  
Default exports **don’t** use `{}` while importing, but named exports **do**.  

---

## **9. Conclusion**  
- **Modules** help in writing clean, maintainable, and reusable JavaScript code.  
- **NPM** allows us to use third-party libraries.  
- **Webpack & Parcel** simplify the **build process**.  
- **Babel** ensures browser compatibility through transpiling.  
- **ES Modules (ESM)** provide a modern way to organize JavaScript code using `import/export`.  

---

### **Modern JavaScript: Top-Level Await & Function Scope**  

---

## **1. Top-Level Await in Modules**  
- In **JavaScript modules**, we can now use `await` **at the top level** without wrapping it inside an `async` function.  
- This **only works in modules**, **not** in regular scripts.  

✅ **Example (Using Top-Level Await in a Module)**  
```js
// data.js (Module)
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
console.log(data);
```

```js
// main.js
import './data.js';
console.log("This will run after data.js is executed");
```
📌 **Explanation:**  
- The `fetch` call executes at the top level without needing an `async function`.  
- Since `await` is blocking, `main.js` will **only execute after `data.js` completes.**  

---

## **2. Caution: Blocking Behavior of Top-Level Await**  
- **Top-Level Await blocks execution** of the module where it's used **and also any file importing that module**.  
- This can create **performance bottlenecks** if not used carefully.  

❌ **Bad Example (Unintended Blocking)**  
```js
// slowModule.js
await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
console.log("Slow module loaded");
```

```js
// app.js
import './slowModule.js';
console.log("This will execute only after 5 seconds!");
```
🚨 **Warning:**  
- Since `slowModule.js` has a top-level `await`, it delays **everything** in `app.js`.  
- This can freeze parts of your application if not handled correctly.

---

## **3. Async Functions Always Return a Promise**  
- Any function declared as `async` will **always return a promise**, even if we return a simple value.  

✅ **Example:**  
```js
async function greet() {
    return "Hello, Abishek!";
}

greet().then(console.log); // Output: Hello, Abishek!
```
📌 **Explanation:**  
- Even though `greet()` returns a string, JavaScript automatically wraps it in a **Promise**.

---

## **4. Function Scope & Closures (Birthplace Concept)**  
- A function has access to **all variables where it was originally created**, even if it is executed elsewhere.  
- This behavior is known as a **closure**.  

✅ **Example:**  
```js
function outer() {
    let message = "I was born here!";

    function inner() {
        console.log(message); // Inner function still has access to `message`
    }

    return inner;
}

const myFunc = outer(); // `outer` runs and returns `inner`
myFunc(); // Output: I was born here!
```
📌 **Explanation:**  
- The function `inner()` remembers its **birthplace** (`outer()` function) and can access `message`, even though `outer()` has finished execution.  
- This is why closures are powerful in JavaScript.

---

## **5. Summary**  
🔹 **Top-Level Await** works **only in modules**, not in regular scripts.  
🔹 Be cautious, as **Top-Level Await can block execution** in imported files.  
🔹 **Async functions always return a promise**, even if they return a simple value.  
🔹 Functions have access to variables from their **birthplace** due to **closures**.  


---

## **1. CommonJS vs ES Modules (ESM)**

### **CommonJS (CJS)**
- **CommonJS** is the **module system** used in **Node.js** by default.
- It uses **`require()`** to import modules and **`module.exports`** to export them.
- **Synchronous loading**: CommonJS loads modules synchronously, meaning the code runs in a specific order.
- It's the **standard module system** in Node.js before ES Modules (ESM) were introduced.
- **Example (CommonJS)**:
  ```js
  // Exporting a function in CommonJS
  module.exports = function greet(name) {
      console.log(`Hello, ${name}`);
  };

  // Importing the function using require()
  const greet = require('./greet');
  greet('Abishek'); // Output: Hello, Abishek
  ```

### **ES Modules (ESM)**
- **ES Modules (ESM)** is the **official JavaScript module system** introduced in ECMAScript 6 (ES6).
- It uses **`import` and `export`** to load and share code.
- **Asynchronous loading**: ES Modules can be loaded asynchronously (in modern browsers and environments like Webpack).
- **Example (ESM)**:
  ```js
  // Exporting a function in ES Module
  export function greet(name) {
      console.log(`Hello, ${name}`);
  }

  // Importing the function using import
  import { greet } from './greet.js';
  greet('Abishek'); // Output: Hello, Abishek
  ```

### **Key Differences:**
- **Syntax**: CommonJS uses `require()` and `module.exports`, while ES Modules use `import` and `export`.
- **Use Case**: CommonJS is mainly for **Node.js** (server-side JavaScript), while ES Modules are for both **browser-side** and **server-side** JavaScript.
- **Loading**: CommonJS is **synchronous**, whereas ES Modules can be **asynchronous**.

---

## **2. Can We Use Modules Without a Bundler?**

### **ES Modules without Bundler**
- Yes, you can use **ES Modules** (ESM) **directly in browsers** if you use the `<script type="module">` tag in HTML. However, in **Node.js**, ES Modules are supported from version 12 onward with **`.mjs`** extension or with `"type": "module"` in `package.json`.

### **CommonJS (CJS) and Bundlers**
- **CommonJS** is **mainly used in Node.js**. When using CommonJS in a browser, you usually need a **module bundler** like **Webpack** or **Parcel** to bundle your code. These bundlers convert **CommonJS modules** into something that the browser can understand (typically into ESM or UMD).

### **Package Management:**
- Many packages, like **Lodash**, are written in **CommonJS** format, which is why you often use bundlers to load them into a web application.  

---

## **3. Lodash Package Functionalities**

Lodash is a **utility library** that provides many helpful methods for working with arrays, objects, and other common tasks in JavaScript. It’s widely used for its **performance** and **ease of use**.

### **Main Functionalities of Lodash:**
- **Array manipulation**: Methods like `map()`, `filter()`, `chunk()`.
- **Object manipulation**: Methods like `merge()`, `get()`, `set()`.
- **Functional programming utilities**: Methods like `debounce()`, `throttle()`, `curry()`.
- **Utilities for data**: Methods like `cloneDeep()`, `isEqual()`, `uniqueId()`.

Lodash is famous for simplifying complex operations that would otherwise require verbose and error-prone code.

---

## **4. Deep Clone: Lodash vs Normal Deep Clone**

### **Normal Deep Clone (Vanilla JS)**
In JavaScript, a **deep clone** means creating a **new object** that has the same properties as the original, but **without references** to the original object’s nested objects.  
You can manually implement a deep clone with recursion or use libraries like Lodash for better performance and flexibility.

#### **Example of Deep Clone in Vanilla JS:**

```js
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {}; // Check if it's an array or an object

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]); // Recursively clone properties
        }
    }

    return clone;
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

cloned.b.c = 3;
console.log(original.b.c); // Output: 2 (original object is not affected)
console.log(cloned.b.c);   // Output: 3 (cloned object is modified)
```

**Explanation:**
- The function `deepClone()` recursively clones the object’s properties.
- This implementation works for simple objects and arrays but may have performance issues for large and complex structures.

### **Lodash Deep Clone**
Lodash provides a method called `cloneDeep()` that handles deep cloning efficiently and more flexibly. It accounts for many edge cases and performs better than a manual deep clone implementation.

#### **Example of Deep Clone using Lodash:**

```js
// First, you need to install Lodash in your project
// npm install lodash

const _ = require('lodash');

const original = { a: 1, b: { c: 2 } };
const cloned = _.cloneDeep(original);

cloned.b.c = 3;
console.log(original.b.c); // Output: 2 (original object is not affected)
console.log(cloned.b.c);   // Output: 3 (cloned object is modified)
```

**Explanation:**
- Lodash’s `cloneDeep()` method creates a new object with the same structure as the original, but it handles more complex cases like circular references, special objects (like `Date`), etc.
- **Performance-wise**, Lodash’s implementation is optimized for deep cloning objects in a more efficient way than a manual recursive approach.

---

## **5. Summary of Key Points**

1. **CommonJS vs ES Modules**: 
   - **CommonJS** uses `require()` and `module.exports`, whereas **ES Modules** use `import` and `export`.
   - CommonJS is synchronous and used in Node.js, while ES Modules are asynchronous and more widely supported.

2. **Lodash Functionalities**: 
   - Lodash offers utilities like `cloneDeep()`, `debounce()`, `merge()`, `map()`, and many others to simplify complex operations.

3. **Deep Cloning**: 
   - **Vanilla JS deep cloning** is recursive but can be complex and error-prone.
   - **Lodash’s `cloneDeep()`** method is more efficient, handles more cases, and is generally preferred for deep cloning in production environments.



Let's dive into each of your questions step-by-step:

---

### **1. `module.hot` in Parcel**

- **`module.hot`** is related to **Hot Module Replacement (HMR)**, which is a feature provided by bundlers like **Parcel** (and Webpack) for faster development.
- When you make a change in your code, HMR allows **only the changed parts of the code** to be replaced in the browser, without needing to do a full page reload. This **increases development speed** and provides a smoother experience.
  
- **`module.hot`** is a property that is part of the **Webpack's HMR** API, but Parcel also supports this concept for auto-updating modules during development.

- For example, if you're working with a React component:
  ```js
  if (module.hot) {
    module.hot.accept('./myComponent.js', () => {
      // Re-load or update the component
    });
  }
  ```

- **Why is it useful?** It helps during **development** to **inject updated code** into the running app without a full page reload, preserving the app state (like form inputs or data).

---

### **2. What is `npx`?**

- **`npx`** is a package runner that comes with **npm (Node Package Manager)**. It allows you to run Node.js binaries from **npm packages** without needing to install them globally on your system.
  
- **Main Use Cases:**
  1. **Running packages without installing globally**: Instead of installing a package globally (`npm install -g <package>`), you can run it directly via `npx <package-name>`. This can be useful for one-time executions.
     ```bash
     npx create-react-app my-app  # Run create-react-app without installing it globally
     ```
  2. **Running specific versions of packages**: You can also specify versions or run packages from a URL, like:
     ```bash
     npx lodash@4.17.21  # Run a specific version of Lodash
     ```
  
- **Why is `npx` useful?**
  - It simplifies **one-time usage** of a package.
  - It prevents unnecessary global installations, keeping your environment cleaner.
  - Great for **scripts** or tools that you don't need to keep installed.

---

### **3. Why did `parcel index.html` work when loaded via script and needed `npx` when running directly in the command prompt?**

- **When using Parcel directly via script:**
  - When you load the `index.html` through **Parcel’s development server**, it internally uses `parcel index.html` command to **bundle and serve** your assets.
  - **Parcel takes care of everything**, including the **dev server**, **bundling**, and handling your HTML file.
  
- **When using `npx` in command prompt:**
  - When you run **`npx parcel index.html`** in the command prompt, **Parcel** is invoked using **`npx`** (which ensures that you don't need to globally install Parcel). 
  - This command tells **Parcel** to **bundle** and **serve** the `index.html` file from the **current directory**, just like the script does.
  - The reason `npx` is needed here is because **Parcel might not be installed globally** on your system, and **npx** ensures the command works by fetching and running the locally available version.

In short: 
- **`parcel index.html` via script** works because you are running it from a **script** (perhaps set up by a bundler or as part of your dev workflow).
- **`npx parcel index.html`** works from the command line because **npx** ensures the local or global execution of Parcel even if it's not installed globally.

---

### **4. `"main": "script.js"` in `package.json` – What is it and Why is it Needed?**

- The **`main`** field in the **`package.json`** file tells **Node.js** and other tools (like bundlers or package managers) which file is the **entry point** for your package or module. It typically refers to the **primary script** or **module** you want to expose to be required or imported by others.

  For example:
  ```json
  {
    "name": "my-package",
    "version": "1.0.0",
    "main": "script.js"
  }
  ```

- **What does it mean?** 
  - When you **require** or **import** your package, the **Node.js runtime** will look at this **`main`** field to find the **default entry file**. 
  - If someone installs your package using `npm install <package-name>`, they can easily `require()` or `import` it, and the **main field** tells them which file to load.

- **Why is it needed?**
  - It helps **Node.js** or other developers know **where to start** when importing your module.
  - For instance, if you create a package, you might have multiple files, but the **`main`** field directs users to the correct one.

---

### **Quick Example for `main` in `package.json`:**

If you have a `package.json` like:
```json
{
  "name": "my-package",
  "version": "1.0.0",
  "main": "index.js"
}
```
Then, when someone runs:
```js
const myPackage = require('my-package');
```
It will resolve to **`index.js`** in the root of your package.

---

### **Summary:**
1. **`module.hot`**: Part of Hot Module Replacement (HMR), used in Parcel for live reloading during development.
2. **`npx`**: A tool to execute Node.js binaries without needing to install them globally.
3. **Parcel command (`parcel index.html`) vs `npx parcel index.html`**: The first uses Parcel via a script (which could be pre-configured), while `npx` runs the tool directly, ensuring Parcel is available for execution.
4. **`"main": "script.js"` in `package.json`**: Specifies the entry point for a package, so when it’s imported or required, it knows which file to load.

Not all ES6 features can be transpiled directly using tools like Babel. Some built-in methods, such as Promise.resolve() or Array.prototype.find(), require polyfills because they are part of the JavaScript runtime, not just syntax transformations.

However, polyfills alone are not enough for certain async operations, such as async/await or generator functions (function*). These require regenerator-runtime, which provides the necessary runtime support for transforming and executing asynchronous code.


*/

/*
Errors and Basic Identification:
@ReferenceError -> Occurs when a variable or value does not exist.
@SyntaxError -> Usually a typo or incorrect formatting of code.
@TypeError -> Occurs when a value is used in an unexpected way (e.g., trying to assign a non-function to a function call).
*/

/*
Tips & Tricks:

### **Review: Modern and Clean Code**

#### **Readable Code**
- Write code so that **others** can understand it.
- Write code so that **you** can understand it in 1 year.
- Avoid **too "clever" and overcomplicated solutions**.
- Use **descriptive variable names** (what they contain).
- Use **descriptive function names** (what they do).

#### **General**
- Follow **DRY principle** (refactor your code).
- Don’t **pollute global namespace**, encapsulate instead.
- **Don’t use** `var`.
- Use **strong type checks** (`===` and `!==`).

#### **Functions**
- Functions should do **only one thing**.
- Avoid using more than **3 function parameters**.
- Use **default parameters** whenever possible.
- Return the **same data type** as received.
- Use **arrow functions** when they improve readability.

#### **OOP (Object-Oriented Programming)**
- Use **ES6 classes**.
- **Encapsulate data** and **don’t mutate** it from outside the class.
- Implement **method chaining**.
- **Do not** use arrow functions as methods (in regular objects).


Avoid Nested Code
Use early return (guard clauses).
Use ternary (conditional) or logical operators instead of if.
Use multiple if instead of if/else-if.
Avoid for loops, use array methods instead.
Avoid callback-based asynchronous APIs.
Asynchronous Code
Consume promises with async/await for best readability.
Whenever possible, run promises in parallel (Promise.all).
Handle errors and promise rejections.
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
