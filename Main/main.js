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


@strict mode in javascript can be enable by writing 'use strict' at the top line of the code.
This will forbid few things that JavaScript would have allowed to fail silently.
This will reserve soem words by JavaScript that might be used in later releases of JavaScript.

@Function -> It is a block of code which can be reused again and again
Paramter is the Placeholder in the function
Argument is the actual value which is been passed into the function.
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
*/


