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
