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
  {
    key: 21,
    question: "What is a cluster module in Node.js?",
    answer: "The cluster module allows Node.js to fork multiple child processes to handle the load, enabling better performance on multi-core systems."
  },
  {
    key: 22,
    question: "What is worker_threads in Node.js?",
    answer: "worker_threads is a module that enables multi-threading in Node.js, allowing you to run JavaScript in multiple threads for CPU-bound tasks."
  },
  {
    key: 23,
    question: "What is the difference between EventEmitter and Stream in Node.js?",
    answer: "EventEmitter is used to handle events like listeners, while Stream deals with reading and writing data in chunks. Both can emit events, but Streams are specifically designed for handling data flows."
  },
  {
    key: 24,
    question: "What is a memory leak in Node.js?",
    answer: "A memory leak happens when a program fails to release unused memory, leading to reduced performance or crashing. It can happen when references to objects are not cleared."
  },
  {
    key: 25,
    question: "How can you scale an application in Node.js?",
    answer: "Scaling in Node.js can be achieved using load balancing, clustering, and running multiple instances of the app, often managed using process managers like PM2."
  },
  {
    key: 26,
    question: "What is the purpose of the buffer module?",
    answer: "The buffer module is used to handle binary data in Node.js. It helps to manipulate raw binary data directly in memory."
  },
  {
    key: 27,
    question: "What is the 'path' module in Node.js?",
    answer: "The 'path' module provides utilities for working with file and directory paths, like joining paths, resolving absolute paths, etc."
  },
  {
    key: 28,
    question: "How does the async/await pattern work in Node.js?",
    answer: "The async/await pattern is used to handle asynchronous code in a more synchronous manner. An async function always returns a promise, and the await keyword waits for the promise to resolve."
  },
  {
    key: 29,
    question: "What is the significance of the process.nextTick() method?",
    answer: "process.nextTick() is used to place a callback function in the next iteration of the event loop. It ensures that the function is executed after the current operation completes."
  },
  {
    key: 30,
    question: "What are child processes in Node.js?",
    answer: "Child processes in Node.js are used to run separate processes in parallel, enabling Node.js to perform CPU-intensive tasks without blocking the main thread."
  },
  {
    key: 31,
    question: "What is the use of the fs module in Node.js?",
    answer: "The fs (File System) module allows interaction with the file system, providing functionality like reading, writing, renaming, and deleting files."
  },
  {
    key: 32,
    question: "What is a promise in Node.js?",
    answer: "A promise is an object representing the eventual completion or failure of an asynchronous operation. It provides methods like .then() and .catch() for handling success and error cases."
  },
  {
    key: 33,
    question: "What is a process.env object in Node.js?",
    answer: "The process.env object contains environment variables that are accessible in the Node.js application, often used for configurations like API keys and database credentials."
  },
  {
    key: 34,
    question: "What are the common HTTP methods used in Node.js?",
    answer: "Common HTTP methods include GET, POST, PUT, DELETE, PATCH, OPTIONS, and HEAD, each representing a specific type of operation on a resource."
  },
  {
    key: 35,
    question: "What is a promise chain in Node.js?",
    answer: "A promise chain is a sequence of promises where each promise is resolved after the previous one completes. It helps to handle multiple asynchronous tasks in a readable and organized way."
  },
  {
    key: 36,
    question: "What is a web socket in Node.js?",
    answer: "A web socket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection, enabling real-time communication between a client and a server."
  },
  {
    key: 37,
    question: "What are the different types of streams in Node.js?",
    answer: "There are four types of streams in Node.js: Readable streams, Writable streams, Duplex streams (both readable and writable), and Transform streams (a type of duplex stream that modifies data as it is written and read)."
  },
  {
    key: 38,
    question: "What are the advantages of using async/await over callbacks?",
    answer: "Async/await makes asynchronous code look and behave like synchronous code, improving readability, reducing errors related to callback hell, and handling promises more effectively."
  },
  {
    key: 39,
    question: "What is the difference between null and undefined in Node.js?",
    answer: "null is a value explicitly assigned to indicate 'no value,' while undefined represents a variable that has been declared but not assigned a value."
  },
  {
    key: 40,
    question: "What is the purpose of the util.promisify() method?",
    answer: "The util.promisify() method is used to convert callback-based asynchronous functions into functions that return promises, making them compatible with async/await."
  },
  {
    key: 41,
    question: "What is the difference between process.nextTick() and setImmediate()?",
    answer: "process.nextTick() is executed before the event loop continues, while setImmediate() is executed during the next iteration of the event loop, allowing other operations to occur before it."
  },
  {
    key: 42,
    question: "What are some techniques for debugging Node.js applications?",
    answer: "Node.js debugging can be done using console.log(), the built-in inspector module, and using Node.js debugging tools like node --inspect."
  },
  {
    key: 43,
    question: "What is the 'crypto' module in Node.js?",
    answer: "The 'crypto' module provides cryptographic functionality, including algorithms for hashing, signing, and encryption/decryption of data."
  },
  {
    key: 44,
    question: "What are some methods to optimize Node.js performance?",
    answer: "Some performance optimization techniques in Node.js include optimizing event loop performance, caching, using cluster modules, and reducing synchronous blocking calls."
  },
  {
    key: 45,
    question: "What is a data race in Node.js?",
    answer: "A data race occurs when two or more operations try to change shared data at the same time, leading to unexpected results. In Node.js, it typically happens in multi-threaded operations."
  },
  {
    key: 46,
    question: "What is the role of the callback queue in Node.js?",
    answer: "The callback queue holds callbacks that are ready to be executed after the current stack of code finishes, such as timers, I/O, and other events."
  },
  {
    key: 47,
    question: "What is an example of a non-blocking I/O operation in Node.js?",
    answer: "An example of a non-blocking I/O operation is using fs.readFile() to read a file asynchronously without blocking the execution of other operations."
  },
  {
    key: 48,
    question: "How do you implement authentication in Node.js?",
    answer: "Authentication in Node.js can be implemented using middleware like Passport.js, which supports various authentication strategies, such as OAuth and JWT (JSON Web Tokens)."
  },
  {
    key: 49,
    question: "What is the role of the 'res' object in Express.js?",
    answer: "The 'res' (response) object in Express.js is used to send back the response to the client after receiving the request. It includes methods like res.send(), res.json(), and res.status() to send responses."
  },
  {
    key: 50,
    question: "What is the purpose of the 'req' object in Express.js?",
    answer: "The 'req' (request) object in Express.js represents the HTTP request and contains information like headers, query parameters, body, and URL parameters."
  },
  {
    key: 51,
    question: "What is the purpose of the 'app.listen()' method in Express?",
    answer: "The 'app.listen()' method is used to bind and listen for connections on a specified port, making the server active and capable of handling incoming requests."
  },
  {
    key: 52,
    question: "What is the meaning of the term 'event-driven architecture' in Node.js?",
    answer: "Event-driven architecture means that the flow of the program is determined by events like user interactions, messages from other programs, or messages from hardware devices. Node.js uses this architecture for handling I/O operations asynchronously."
  },
  {
    key: 53,
    question: "What is an HTTP request?",
    answer: "An HTTP request is a message sent by a client to a server, asking for a resource. It typically includes method (GET, POST, etc.), headers, and body data."
  },
  {
    key: 54,
    question: "How do you handle CORS in Node.js?",
    answer: "CORS (Cross-Origin Resource Sharing) can be handled in Node.js by using the 'cors' middleware, which allows you to specify which domains are allowed to access your API."
  },
  {
    key: 55,
    question: "What are the different types of HTTP status codes?",
    answer: "HTTP status codes are categorized as follows: 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), 5xx (Server Error)."
  },
  {
    key: 56,
    question: "How does the Node.js package manager (npm) handle dependencies?",
    answer: "npm installs dependencies listed in the package.json file and manages them by creating a 'node_modules' folder. It also uses versioning to manage different versions of dependencies."
  },
  {
    key: 57,
    question: "What is a query parameter in a URL?",
    answer: "A query parameter is part of the URL that contains key-value pairs, separated by '&', which can be used to pass additional data to the server."
  },
  {
    key: 58,
    question: "What is a 404 error?",
    answer: "A 404 error means that the requested resource could not be found on the server."
  },
  {
    key: 59,
    question: "What is the role of a proxy server?",
    answer: "A proxy server acts as an intermediary between a client and a server. It can handle requests, modify them, cache responses, or route them to different destinations."
  },
  {
    key: 60,
    question: "What is the difference between a GET and a POST request?",
    answer: "A GET request is used to retrieve data from the server, while a POST request is used to submit data to the server to be processed."
  },
  {
    key: 61,
    question: "What is a session in web development?",
    answer: "A session is a temporary storage of user data on the server, allowing the server to remember information about a user between requests."
  },
  {
    key: 62,
    question: "What is the 'jsonwebtoken' module in Node.js?",
    answer: "The 'jsonwebtoken' module is used to create and verify JSON Web Tokens (JWTs), often used for authentication and data integrity."
  },
  {
    key: 63,
    question: "How do you prevent XSS attacks in Node.js?",
    answer: "XSS (Cross-Site Scripting) attacks can be prevented by sanitizing user inputs, using frameworks that escape output, and setting proper HTTP headers like Content Security Policy."
  },
  {
    key: 64,
    question: "What is the 'compression' middleware used for in Express?",
    answer: "The 'compression' middleware is used to compress HTTP responses in order to reduce the size of the data sent from the server to the client."
  },
  {
    key: 65,
    question: "What is a callback hell?",
    answer: "Callback hell occurs when you have multiple nested callback functions, making the code hard to read and maintain. It can be avoided using Promises or async/await."
  },
  {
    key: 66,
    question: "What is the purpose of the 'debug' module in Node.js?",
    answer: "The 'debug' module provides a simple way to log messages for debugging purposes, with the ability to enable or disable debugging output based on namespaces."
  },
  {
    key: 67,
    question: "How do you handle rate limiting in Node.js?",
    answer: "Rate limiting in Node.js can be handled using middleware like 'express-rate-limit', which restricts the number of requests from a client in a given time frame."
  },
  {
    key: 68,
    question: "What is a promise.all() method in Node.js?",
    answer: "The promise.all() method accepts an array of promises and returns a single Promise that resolves when all the promises in the array have resolved."
  },
  {
    key: 69,
    question: "What are query selectors in Node.js?",
    answer: "Query selectors are used to select elements from the DOM. In Node.js, query selectors are commonly used with libraries like cheerio or Puppeteer to manipulate HTML."
  },
  {
    key: 70,
    question: "What is a REST API?",
    answer: "A REST API (Representational State Transfer) is a web service based on HTTP methods and the stateless communication between client and server, utilizing URLs to interact with resources."
  },
  {
    key: 71,
    question: "What is WebSockets in Node.js?",
    answer: "WebSockets provide a full-duplex communication channel over a single TCP connection, allowing real-time data transfer between a client and server."
  },
  {
    key: 72,
    question: "What is the purpose of the 'url' module?",
    answer: "The 'url' module provides utilities for parsing and formatting URLs. It helps break down URLs into their components and provides functions for resolving relative URLs."
  },
  {
    key: 73,
    question: "How do you set up a Node.js project?",
    answer: "To set up a Node.js project, create a new directory, initialize the project with 'npm init', install necessary dependencies using npm, and create the application logic files."
  },
  {
    key: 74,
    question: "What is the purpose of the 'dotenv' module?",
    answer: "The 'dotenv' module loads environment variables from a .env file into process.env, helping to manage configuration variables outside of your source code."
  },
  {
    key: 75,
    question: "How do you set up an Express server?",
    answer: "To set up an Express server, create a new file, import Express, instantiate an app object, define routes, and listen on a specific port. Example: `app.listen(3000);`"
  },
  {
    key: 76,
    question: "How do you handle validation in Express?",
    answer: "Validation can be handled using libraries like 'express-validator' or 'joi', which provide functions to validate and sanitize incoming request data."
  },
  {
    key: 77,
    question: "What are the pros and cons of using Node.js?",
    answer: "Pros of Node.js include non-blocking I/O, scalability, and the use of JavaScript on both the client and server. Cons include its single-threaded nature, which may not be ideal for CPU-bound tasks."
  },
  {
    key: 78,
    question: "What is a 502 Bad Gateway error?",
    answer: "A 502 Bad Gateway error indicates that the server received an invalid response from an upstream server while attempting to fulfill the request."
  },
  {
    key: 79,
    question: "How do you secure Node.js applications?",
    answer: "Security can be improved by using HTTPS, avoiding direct access to sensitive data, validating inputs, using security headers, and using libraries like Helmet.js for protection."
  },
  {
    key: 80,
    question: "What is the Express.js Router?",
    answer: "The Express.js Router is used to define modular route handlers, which helps keep the server code organized by separating route logic into smaller files."
  },
  {
    key: 81,
    question: "What is a POST request?",
    answer: "A POST request is used to send data to the server to create or update a resource. It is commonly used for submitting forms or uploading files."
  },
  {
    key: 82,
    question: "How do you handle file uploads in Node.js?",
    answer: "File uploads can be handled using middleware like 'multer', which parses incoming request bodies and stores files."
  },
  {
    key: 83,
    question: "What is CORS (Cross-Origin Resource Sharing)?",
    answer: "CORS is a mechanism that allows a web application running at one origin to request resources from another origin, often used to enable client-side JavaScript to interact with a different domain."
  },
  {
    key: 84,
    question: "What are the key differences between Node.js and traditional server-side languages?",
    answer: "Node.js is event-driven and non-blocking, while traditional server-side languages like PHP or Python may rely on blocking I/O operations. Node.js also uses JavaScript for both front-end and back-end code."
  },
  {
    key: 85,
    question: "How do you prevent SQL injection in Node.js?",
    answer: "SQL injection can be prevented by using parameterized queries, ORMs like Sequelize, or query builders that escape user input to prevent malicious SQL statements."
  },
  {
    key: 86,
    question: "How can you set up error handling in Express.js?",
    answer: "Error handling in Express.js can be done by defining error middleware functions that take four arguments (err, req, res, next) and handle errors globally or locally for specific routes."
  },
  {
    key: 87,
    question: "What is a module in Node.js?",
    answer: "A module in Node.js is a reusable code package that can be imported and exported in other parts of the application. Examples include core modules like 'fs' and 'http'."
  },
  {
    key: 88,
    question: "What are the uses of the 'querystring' module?",
    answer: "The 'querystring' module provides utilities for parsing and formatting query strings in URLs."
  },
  {
    key: 89,
    question: "What are JSON Web Tokens (JWT)?",
    answer: "JWT is a compact, URL-safe means of representing claims between two parties. It is commonly used for authentication and authorization."
  },
  {
    key: 90,
    question: "What is the difference between put() and patch() in HTTP?",
    answer: "PUT is used to update a resource completely, while PATCH is used to partially update a resource."
  },
  {
    key: 91,
    question: "What is middleware in Express.js?",
    answer: "Middleware in Express.js refers to functions that have access to the request and response objects, allowing them to modify the request, perform operations, and call the next function."
  },
  {
    key: 92,
    question: "What is an I/O-bound operation in Node.js?",
    answer: "An I/O-bound operation refers to tasks that involve interaction with external systems, like reading files or making network requests. These tasks often benefit from Node.js's non-blocking I/O model."
  },
  {
    key: 93,
    question: "How do you monitor performance in Node.js?",
    answer: "Performance in Node.js can be monitored using tools like Node.js built-in profiler, PM2, New Relic, and other performance monitoring systems."
  },
  {
    key: 94,
    question: "What are the disadvantages of using a callback?",
    answer: "Callbacks can lead to 'callback hell' or 'pyramid of doom,' making the code hard to maintain and debug. This issue can be mitigated using Promises or async/await."
  },
  {
    key: 95,
    question: "What is the role of package-lock.json?",
    answer: "The package-lock.json file locks the versions of dependencies in your project to ensure consistency across different environments and installations."
  },
  {
    key: 96,
    question: "What is Express-session?",
    answer: "Express-session is a middleware used to manage user sessions in a web application by storing session data on the server and referencing it using a session ID."
  },
  {
    key: 97,
    question: "What is the 'helmet' module in Node.js?",
    answer: "Helmet is a security middleware that helps secure Express apps by setting HTTP headers like Content-Security-Policy, X-Content-Type-Options, and others."
  },
  {
    key: 98,
    question: "What is Node.js's default port?",
    answer: "The default port for Node.js applications is 3000 unless specified otherwise in the app.listen() method."
  },
  {
    key: 99,
    question: "What is clustering in Node.js?",
    answer: "Clustering is a method used to spawn multiple child processes to take advantage of multi-core systems, improving the performance and scalability of Node.js applications."
  },
  {
    key: 100,
    question: "What is Node.js's event-driven architecture?",
    answer: "Node.js uses an event-driven architecture, where events trigger functions to be executed asynchronously, allowing non-blocking I/O operations."
  }
];
