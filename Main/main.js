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



**@Primitive Data Types and Reference Types**  

In JavaScript, data types are classified into **primitive types** and **reference types**. 

### **Primitive Data Types**
- **Definition**: Primitive data types are the basic building blocks of data in JavaScript. They hold a single value and are stored directly in the call stack.  

- **Types of Primitive Data**:
  1. **String**: A sequence of characters.  
     - **Example**:  
       ```javascript
       let name = "Alice"; // A string primitive
       ```
  
  2. **Number**: Represents both integer and floating-point numbers.  
     - **Example**:  
       ```javascript
       let age = 30; // A number primitive
       ```
  
  3. **Boolean**: Represents a logical entity with two values: `true` or `false`.  
     - **Example**:  
       ```javascript
       let isStudent = true; // A boolean primitive
       ```

  4. **Null**: Represents the intentional absence of any value.  
     - **Example**:  
       ```javascript
       let selectedOption = null; // A null primitive
       ```

  5. **Undefined**: Indicates a variable that has been declared but not assigned a value.  
     - **Example**:  
       ```javascript
       let score; // score is undefined
       ```

  6. **BigInt**: Represents whole numbers larger than `2^53 - 1`.  
     - **Example**:  
       ```javascript
       let bigNumber = BigInt(1234567890123456789012345678901234567890); // A BigInt
       ```

  7. **Symbol**: Represents a unique and immutable value, often used as object property keys.  
     - **Example**:  
       ```javascript
       const uniqueID = Symbol("id"); // A symbol primitive
       ```

### **Reference Types**
- **Definition**: Reference types are more complex data structures that can store collections of values. They are stored in the heap, and variables hold a reference to the memory location where the object is stored. 

- **Types of Reference Data**:
  1. **Object Literals**: Key-value pairs representing real-world entities.  
     - **Example**:  
       ```javascript
       let person = { name: "Bob", age: 25 }; // An object literal
       ```

  2. **Arrays**: Ordered collections of values, which can be of any type.  
     - **Example**:  
       ```javascript
       let fruits = ["apple", "banana", "cherry"]; // An array
       ```

  3. **Functions**: First-class objects that can be assigned to variables, passed as arguments, and returned from other functions.  
     - **Example**:  
       ```javascript
       function greet() { return "Hello!"; } // A function
       ```

---

**@Variable Storage in JavaScript**

When you declare a variable, JavaScript allocates memory for it behind the scenes.

- **Example**: 
  ```javascript
  let age = 30;
  ```
  - **Behind the Scenes**:
    - **In the Call Stack**:
      - **Identifier**: `age`
      - **Address**: `0001` (hypothetical address)
      - **Value**: `30`
    
    In this case, `age` is an identifier pointing to a memory address where the value `30` is stored. When you reference `age`, JavaScript retrieves the value from that address.

- **Objects Storage**:
  ```javascript
  let person = { name: "Alice", age: 30 };
  ```
  - **In the Call Stack**:
    - **Identifier**: `person`
    - **Address**: `0002` (hypothetical address of the object)
    
  - **In the Heap**:
    - **Address**: `D30F` (hypothetical address where the object is stored)
    - **Value**: `{ name: "Alice", age: 30 }`

Here, the variable `person` in the call stack holds a reference to the address in the heap where the object is stored.

---

**@Mutability of Const Variables**

Although `const` variables cannot be reassigned, the contents of objects or arrays declared with `const` can still be modified.

- **Example**:
  ```javascript
  const data = { age: 30 };
  let data2 = data; // data2 now references the same object
  data2.age = 27; // Modifying the object via data2
  console.log(data.age); // Output: 27
  ```

  - **Behind the Scenes**:
    - **In the Call Stack**:
      - **Identifier**: `data`
      - **Address**: `0003` (hypothetical address)
      - **Value**: `D30F` (address of the object)
    
    - **In the Heap**:
      - **Address**: `D30F`
      - **Value**: `{ age: 27 }` (the object was modified)

In this case, `data` remains a constant reference, but the contents of the object it points to can change, which demonstrates that `const` is mutable in terms of object properties.

---

**@Shallow and Deep Copying of Objects**

- **Shallow Copy**: When copying an object using methods like `Object.assign()`, it creates a new object with the same top-level properties. If the original object contains nested objects, those nested objects are still referenced, not duplicated.

- **Example**:
  ```javascript
  const original = { a: 1, b: { c: 2 } };
  const shallowCopy = Object.assign({}, original);
  shallowCopy.b.c = 3; // This modifies the nested object in both copies
  console.log(original.b.c); // Output: 3
  ```

- **Deep Copy**: To copy an object deeply (including all nested objects), libraries like **Lo-Dash** can be used.

- **Example using Lo-Dash**:
  ```javascript
  const _ = require('lodash');
  const original = { a: 1, b: { c: 2 } };
  const deepCopy = _.cloneDeep(original);
  deepCopy.b.c = 3; // This does not affect the original object
  console.log(original.b.c); // Output: 2
  ```

---

**@Immutable Behavior of Primitive Data Types**

Primitive data types are immutable, meaning when you assign a new value to a primitive variable, JavaScript creates a new memory address for the new value, leaving the original value unchanged.

- **Example**:
  ```javascript
  let score = 10;
  score = 20; // A new address is created for the new value
  console.log(score); // Output: 20
  ```

In this example, when `score` is reassigned to `20`, JavaScript creates a new memory address for this new value. The original value (`10`) remains unchanged, demonstrating the immutability of primitive types.
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
