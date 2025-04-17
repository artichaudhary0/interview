export const nodeQuestions = [
  {
    key: 1,
    question: "What is Node.js?",
    answer: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write command-line tools and server-side scripts."
  },
  {
    key: 2,
    question: "What is the Event Loop in Node.js?",
    answer: "The Event Loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It handles the execution of callbacks and manages various phases including timers, pending callbacks, idle/prepare, poll, check, and close callbacks.",
    code: `console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');`
  },
  {
    key: 3,
    question: "What is the purpose of module.exports?",
    answer: "module.exports is used to expose functions, objects, or values from a Node.js file to other files. It determines what can be accessed when another file requires this module.",
    code: `// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};`
  },
  {
    key: 4,
    question: "What is npm?",
    answer: "npm (Node Package Manager) is the default package manager for Node.js. It allows you to install and manage project dependencies, run scripts, and share your own packages."
  },
  {
    key: 5,
    question: "What is a callback function in Node.js?",
    answer: "A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."
  },
  {
    key: 6,
    question: "What are streams in Node.js?",
    answer: "Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. Examples include reading/writing files, network communications, etc."
  },
  {
    key: 7,
    question: "Explain the concept of middleware in Express.js.",
    answer: "Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle.",
    code: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});`
  },
  {
    key: 8,
    question: "What is the difference between require and import?",
    answer: "'require' is the Node.js CommonJS module system, while 'import' is part of ES6 modules. 'require' can be used natively in Node.js, while 'import' may require transpilation or enabling experimental support."
  },
  {
    key: 9,
    question: "What is the use of process object in Node.js?",
    answer: "The 'process' object is a global object in Node.js that provides information and control over the current Node.js process. It can be used to handle input/output, manage environment variables, etc."
  },
  {
    key: 10,
    question: "What are environment variables in Node.js?",
    answer: "Environment variables are system-level variables that can affect the way running processes behave on a computer. In Node.js, they are accessible via process.env."
  },
  {
    key: 11,
    question: "How do you handle errors in Node.js?",
    answer: "In Node.js, errors can be handled using try-catch blocks for synchronous code and callbacks or .catch() for asynchronous code with Promises."
  },
  {
    key: 12,
    question: "What is the difference between synchronous and asynchronous code in Node.js?",
    answer: "Synchronous code blocks further execution until the current operation finishes, while asynchronous code allows other operations to continue and uses callbacks, promises, or async/await for handling."
  },
  {
    key: 13,
    question: "What is the role of the package.json file?",
    answer: "package.json holds metadata relevant to the project and is used to manage the project's dependencies, scripts, version, and other settings."
  },
  {
    key: 14,
    question: "What is the difference between global and local installation in npm?",
    answer: "Global packages are available system-wide (installed with -g), while local packages are installed in the current project directory and available only within that project."
  },
  {
    key: 15,
    question: "What is Express.js?",
    answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications."
  },
  {
    key: 16,
    question: "What is a RESTful API?",
    answer: "A RESTful API is an architectural style for building web services based on HTTP methods. It uses endpoints to represent resources and standard methods like GET, POST, PUT, DELETE."
  },
  {
    key: 17,
    question: "What is the purpose of the next() function in Express middleware?",
    answer: "The next() function passes control to the next middleware in the stack. Without it, the request will hang."
  },
  {
    key: 18,
    question: "How do you read and write files in Node.js?",
    answer: "You can use the 'fs' module to read and write files. For example, fs.readFile() and fs.writeFile()."
  },
  {
    key: 19,
    question: "What is the difference between readFile and createReadStream in Node.js?",
    answer: "readFile reads the entire file into memory before processing, while createReadStream reads the file in chunks, making it more memory efficient."
  },
  {
    key: 20,
    question: "What is the use of the Buffer class in Node.js?",
    answer: "Buffer is used to handle binary data directly in memory. It is especially useful when dealing with file streams or network protocols."
  },

  ...Array.from({ length: 80 }, (_, i) => ({
    key: i + 21,
    question: `What is Node.js concept ${i + 21}?`,
    answer: `This is the explanation of Node.js concept number ${i + 21}.`
  }))
];
