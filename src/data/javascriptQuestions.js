export const javascriptQuestions = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is used primarily for creating interactive effects within web browsers."
  },
  {
    question: "What is the difference between let and var?",
    answer: "let is block-scoped while var is function-scoped. let was introduced in ES6 and provides better scoping rules and avoids issues with hoisting."
  },
  {
    question: "What is closure in JavaScript?",
    answer: "A closure is a function that remembers the variables from its outer lexical scope even when the function is executed outside that scope."
  },
  {
    question: "What are the primitive data types in JavaScript?",
    answer: "String, Number, Boolean, Null, Undefined, Symbol, BigInt are primitive data types in JavaScript."
  },
  {
    question: "Explain the difference between == and ===.",
    answer: "== compares values after type coercion; === compares both value and type without coercion."
  },
  {
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value. null is an assignment value that represents no value."
  },
  {
    question: "What is hoisting?",
    answer: "Hoisting is JavaScript's behavior of moving declarations (variables and functions) to the top of their scope before code execution."
  },
  {
    question: "What is the event loop?",
    answer: "The event loop allows JavaScript to perform non-blocking operations by offloading operations to the browser and putting callbacks in a queue to be executed after the main stack is clear."
  },
  {
    question: "What are promises in JavaScript?",
    answer: "Promises are objects representing the eventual completion or failure of an asynchronous operation."
  },
  {
    question: "What are arrow functions?",
    answer: "Arrow functions are a concise syntax for writing functions introduced in ES6, which do not have their own 'this' binding."
  },
  {
    question: "What is a callback function?",
    answer: "A callback function is a function passed as an argument to another function and executed after some operation completes."
  },
  {
    question: "What is the difference between function declaration and function expression?",
    answer: "Function declarations are hoisted and can be called before they are defined, while function expressions are not hoisted."
  },
  {
    question: "What is a pure function?",
    answer: "A pure function returns the same output for the same input and has no side effects."
  },
  {
    question: "What is NaN in JavaScript?",
    answer: "NaN stands for 'Not-a-Number' and is a value representing an undefined or unrepresentable number result."
  },
  {
    question: "What does typeof NaN return?",
    answer: "typeof NaN returns 'number'."
  },
  {
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code blocks further execution until it finishes; asynchronous code allows execution to continue while operations complete in the background."
  },
  {
    question: "Explain prototypal inheritance.",
    answer: "In JavaScript, objects inherit properties and methods from other objects via the prototype chain."
  },
  {
    question: "What is the difference between call, apply, and bind?",
    answer: "call invokes a function with a given 'this' and arguments; apply is similar but takes an array of arguments; bind returns a new function with bound 'this'."
  },
  {
    question: "What is the difference between map, filter, and reduce?",
    answer: "map transforms each element of an array; filter returns elements that meet a condition; reduce accumulates array values into a single value."
  },
  {
    question: "What is the use of the 'this' keyword?",
    answer: "'this' refers to the object from which the function was called."
  },
  {
    question: "What are template literals?",
    answer: "Template literals allow embedded expressions and multi-line strings using backticks (`) and ${expression} syntax."
  },
  {
    question: "What is destructuring?",
    answer: "Destructuring allows extracting values from arrays or properties from objects into distinct variables."
  },
  {
    question: "What is a spread operator?",
    answer: "The spread operator (...) allows an iterable to be expanded in places where multiple arguments or elements are expected."
  },
  {
    question: "What is a rest parameter?",
    answer: "A rest parameter allows representing an indefinite number of arguments as an array using ...syntax."
  },
  {
    question: "What is JSON.stringify and JSON.parse?",
    answer: "JSON.stringify converts a JavaScript object into a JSON string; JSON.parse converts a JSON string into a JavaScript object."
  },
  {
    question: "What is an IIFE?",
    answer: "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined."
  },
  {
    question: "What is a higher-order function?",
    answer: "A higher-order function is a function that takes another function as an argument or returns a function."
  },
  {
    question: "What is memoization?",
    answer: "Memoization is an optimization technique to cache the result of expensive function calls."
  },
  {
    question: "What is a generator function?",
    answer: "A generator function returns an iterator and can pause and resume execution using the yield keyword."
  },
  {
    question: "What is the difference between deep and shallow copy?",
    answer: "Shallow copy copies only references to nested objects; deep copy recursively copies all nested objects."
  },
  {
    question: "What are falsy values in JavaScript?",
    answer: "Falsy values are false, 0, '', null, undefined, and NaN."
  },
  {
    question: "What is the difference between Object.freeze and Object.seal?",
    answer: "Object.freeze prevents adding, removing, or changing properties. Object.seal allows changing existing properties but prevents adding or removing properties."
  },
  {
    question: "What is the difference between splice and slice?",
    answer: "splice changes the original array by adding/removing elements; slice returns a shallow copy without modifying the array."
  },
  {
    question: "What is the difference between forEach and map?",
    answer: "forEach executes a function for each array element but returns undefined; map returns a new array with transformed elements."
  },
  {
    question: "What is a WeakMap?",
    answer: "A WeakMap is a collection of key/value pairs where keys must be objects and references are weakly held (not preventing garbage collection)."
  },
  {
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "localStorage persists data with no expiration; sessionStorage clears data when the browser session ends."
  },
  {
    question: "What is a symbol in JavaScript?",
    answer: "A Symbol is a unique and immutable primitive value used as an object property key."
  },
  {
    question: "What is optional chaining?",
    answer: "Optional chaining (?.) allows accessing nested object properties without throwing an error if an intermediate property is null or undefined."
  },
  {
    question: "What is nullish coalescing operator?",
    answer: "The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined."
  },
  {
    question: "What is event delegation?",
    answer: "Event delegation is a technique where a parent element handles events for its child elements using event bubbling."
  },
  {
    question: "What are JavaScript modules?",
    answer: "Modules allow splitting code into reusable files that export/import functionality."
  },
  {
    question: "What is a promise chain?",
    answer: "A promise chain allows chaining multiple asynchronous operations using .then() so each one waits for the previous to complete."
  },
  {
    question: "What is async/await?",
    answer: "async/await is syntactic sugar over promises, allowing asynchronous code to be written in a synchronous-looking manner."
  },
  {
    question: "What is the difference between document.getElementById and document.querySelector?",
    answer: "getElementById returns an element by ID; querySelector returns the first element matching a CSS selector."
  },
  {
    question: "What are the different ways to create an object?",
    answer: "Objects can be created using object literals, Object.create(), constructor functions, or ES6 classes."
  },
  {
    question: "What is function currying?",
    answer: "Currying transforms a function with multiple arguments into a series of functions each taking a single argument."
  },
  {
    question: "What is the difference between window and document objects?",
    answer: "window represents the browser window; document represents the DOM loaded in that window."
  },
  {
    question: "What is DOM?",
    answer: "DOM (Document Object Model) is a programming interface for HTML/XML documents, representing the page as a tree of nodes."
  },
  {
    question: "What is the difference between innerHTML and innerText?",
    answer: "innerHTML returns HTML content including tags; innerText returns only text content, ignoring tags."
  },
  {
    question: "What is debouncing?",
    answer: "Debouncing limits the rate at which a function executes by delaying it until a pause in input events."
  },
  {
    question: "What is throttling?",
    answer: "Throttling limits a function from being called more than once in a specified time interval."
  },
  {
    question: "What is a service worker?",
    answer: "A service worker is a background script that enables features like caching and offline support in web apps."
  },
  {
    question: "What is the purpose of use strict?",
    answer: "'use strict' enforces stricter parsing and error handling in JavaScript to avoid unsafe actions."
  },
  {
    question: "What are data attributes?",
    answer: "Data attributes are custom attributes on HTML elements starting with data-, used to store extra information."
  },{
    question: "What is the difference between global scope and local scope?",
    answer: "Variables in the global scope are accessible everywhere in the code, while local scope variables are only accessible within the function or block they are defined."
  },
  {
    question: "What is variable shadowing?",
    answer: "Variable shadowing occurs when a variable declared within a certain scope (local) has the same name as a variable in an outer scope, effectively overriding access to the outer variable."
  },
  {
    question: "What are the different types of errors in JavaScript?",
    answer: "Common error types are SyntaxError, ReferenceError, TypeError, RangeError, and EvalError."
  },
  {
    question: "How can you handle errors in JavaScript?",
    answer: "By using try...catch blocks, optionally with a finally clause."
  },
  {
    question: "What is a promise state?",
    answer: "A promise can be in one of three states: pending, fulfilled, or rejected."
  },
  {
    question: "What is the difference between shallow copy and deep copy of an object?",
    answer: "A shallow copy copies the first level properties; a deep copy recursively copies all nested objects and arrays."
  },
  {
    question: "What is the difference between 'in' and 'hasOwnProperty'?",
    answer: "'in' checks if a property exists anywhere in the prototype chain; 'hasOwnProperty' checks only on the object itself."
  },
  {
    question: "What is the difference between enumerable and non-enumerable properties?",
    answer: "Enumerable properties show up in for...in loops and Object.keys, while non-enumerable properties do not."
  },
  {
    question: "What is function overloading in JavaScript?",
    answer: "JavaScript does not support function overloading like other languages; you can achieve similar behavior using arguments object or default parameters."
  },
  {
    question: "How does JavaScript handle asynchronous operations?",
    answer: "JavaScript uses callbacks, promises, and async/await to handle asynchronous operations."
  },
  {
    question: "What is the difference between setTimeout and setInterval?",
    answer: "setTimeout runs a function once after a delay; setInterval runs a function repeatedly at specified intervals."
  },
  {
    question: "What are the different ways to iterate over an array?",
    answer: "You can use for, for...of, forEach, map, filter, reduce, or a traditional for loop."
  },
  {
    question: "What is function composition?",
    answer: "Function composition is combining two or more functions to produce a new function where the output of one function becomes the input of the next."
  },
  {
    question: "What is an event bubbling and capturing?",
    answer: "Bubbling means the event propagates from the target element up to ancestors; capturing (or trickling) is the reverse order."
  },
  {
    question: "What is the difference between == and Object.is?",
    answer: "Object.is is similar to === but treats NaN as equal to NaN and +0 and -0 as different."
  },
  {
    question: "What is a WeakSet?",
    answer: "A WeakSet is a collection of objects where references are weak, meaning they don't prevent garbage collection."
  },
  {
    question: "What is destructuring assignment?",
    answer: "Destructuring assignment is a syntax for extracting values from arrays or properties from objects into distinct variables."
  },
  {
    question: "What is a tagged template literal?",
    answer: "A tagged template literal allows you to parse template literals with a function to manipulate the final string output."
  },
  {
    question: "What is an iterator?",
    answer: "An iterator is an object that defines a sequence and potentially a return value upon completion, following the {value, done} protocol."
  },
  {
    question: "What is the difference between Array.from() and Array.of()?",
    answer: "Array.from creates an array from an iterable or array-like object; Array.of creates an array from its arguments."
  },
  {
    question: "What is the difference between Math.floor(), Math.ceil(), and Math.round()?",
    answer: "Math.floor rounds down, Math.ceil rounds up, and Math.round rounds to the nearest integer."
  },
  {
    question: "How do you clone an object in JavaScript?",
    answer: "Using Object.assign({}, obj), spread operator {...obj}, or JSON.parse(JSON.stringify(obj)) for deep cloning (with limitations)."
  },
  {
    question: "What is optional parameter in function?",
    answer: "You can set default values for function parameters so they are optional if not passed by the caller."
  },
  {
    question: "What is a polyfill?",
    answer: "A polyfill is code that implements a feature on older browsers that do not natively support it."
  },
  {
    question: "What is tail call optimization?",
    answer: "Tail call optimization is a feature where the JavaScript engine optimizes recursive function calls that are in the tail position to avoid growing the call stack."
  },
  {
    question: "What are reserved words in JavaScript?",
    answer: "Reserved words are identifiers that cannot be used as variable names because they are part of the JavaScript syntax, like let, var, if, else, return."
  },
  {
    question: "What is difference between isNaN() and Number.isNaN()?",
    answer: "isNaN() coerces the argument before checking; Number.isNaN() does not coerce and only returns true if the value is exactly NaN."
  },
  {
    question: "What is implicit type coercion?",
    answer: "Implicit type coercion happens when JavaScript automatically converts one data type to another during evaluation of expressions."
  },
  {
    question: "What is a ternary operator?",
    answer: "The ternary operator is a shorthand for if-else: condition ? value_if_true : value_if_false."
  },
  {
    question: "What is a constructor function?",
    answer: "A constructor function is used with the 'new' keyword to create and initialize objects."
  },
  {
    question: "What is a static method?",
    answer: "A static method belongs to the class itself, not to instances, and is called using ClassName.methodName()."
  },
  {
    question: "What is event.preventDefault()?",
    answer: "event.preventDefault() prevents the default action of the event from occurring."
  },
  {
    question: "What is event.stopPropagation()?",
    answer: "event.stopPropagation() prevents further propagation of the event in the bubbling or capturing phases."
  },
  {
    question: "What is difference between shallow equality and deep equality?",
    answer: "Shallow equality compares only top-level properties; deep equality checks nested properties recursively."
  },
  {
    question: "What are import and export statements?",
    answer: "import and export allow modules to share and reuse code by explicitly importing and exporting variables, functions, or classes."
  },
  {
    question: "What is a factory function?",
    answer: "A factory function is a function that returns a new object every time it's called."
  },
  {
    question: "What is the difference between push() and unshift()?",
    answer: "push() adds an element to the end of an array; unshift() adds an element to the beginning."
  },
  {
    question: "What is the difference between pop() and shift()?",
    answer: "pop() removes the last element of an array; shift() removes the first element."
  },
  {
    question: "What is an Immediately Invoked Arrow Function?",
    answer: "An IIAFE (Immediately Invoked Arrow Function Expression) is an arrow function that runs immediately after its declaration."
  },
  {
    question: "What is a callback hell?",
    answer: "Callback hell is a situation where multiple nested callbacks make code hard to read and maintain."
  },
  {
    question: "How do you flatten an array in JavaScript?",
    answer: "Using Array.prototype.flat() or recursion or reduce methods."
  },
  {
    question: "What is the difference between includes() and indexOf()?",
    answer: "includes() returns a boolean indicating if an array contains an element; indexOf() returns the index or -1."
  },
  {
    question: "What is a Proxy object?",
    answer: "A Proxy allows defining custom behavior for fundamental operations like property lookup, assignment, and enumeration."
  },
  {
    question: "What is Reflect in JavaScript?",
    answer: "Reflect is an object that provides methods for interceptable JavaScript operations, corresponding to Proxy handler methods."
  },
  {
    question: "What is Symbol.iterator?",
    answer: "Symbol.iterator is a method that returns the default iterator for an object, enabling it to work with for...of loops."
  },
  {
    question: "What is the difference between console.log and console.dir?",
    answer: "console.log prints values in a readable format; console.dir displays an interactive list of properties for an object."
  },
  {
    question: "What is garbage collection?",
    answer: "Garbage collection is the process of automatically freeing memory by removing objects that are no longer reachable."
  },
  {
    question: "What is a WeakRef?",
    answer: "WeakRef allows holding a weak reference to an object without preventing its garbage collection."
  },
  {
    question: "What is the temporal dead zone?",
    answer: "The temporal dead zone is the time between entering a scope and the actual declaration of a let or const variable where accessing it throws a ReferenceError."
  },
  {
    question: "What is an import.meta object?",
    answer: "import.meta provides metadata about the current module, like its URL in a browser environment."
  },
  {
    question: "What is optional catch binding?",
    answer: "Optional catch binding allows omitting the error parameter in catch blocks if it's not used: catch { ... }."
  },
  {
    question: "What is BigInt?",
    answer: "BigInt is a built-in object that provides a way to represent integers larger than Number.MAX_SAFE_INTEGER."
  }
];
