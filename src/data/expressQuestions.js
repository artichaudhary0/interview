export const expressQuestions = [
{
    question: "What is Express.js?",
    answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It facilitates the rapid development of Node based Web applications.",
    code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
  },
  {
    question: "Explain middleware in Express.js",
    answer: "Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function. They can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.",
    code: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});`
  },
  {
    question: "What is the purpose of app.use() in Express?",
    answer: "app.use() is used to mount middleware functions at a specified path. If no path is specified, the middleware will be executed for every request to the application.",
    code: `app.use('/api', authMiddleware);
app.use(express.json());
app.use(cors());`
  },
  {
    question: "How do you handle 404 errors in Express.js?",
    answer: "You can handle 404 errors by adding a middleware at the end of all routes to catch unmatched routes.",
    code: `app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found');
});`
  },
  {
    question: "What is the difference between res.send() and res.json() in Express.js?",
    answer: "`res.send()` can send various types of responses (strings, objects, buffers), while `res.json()` specifically sends a JSON response.",
    code: `res.send('Hello World'); // Sends plain text
res.json({ message: 'Hello World' }); // Sends JSON`
  },
  {
    question: "How can you serve static files in Express.js?",
    answer: "Use the built-in `express.static` middleware to serve static files like images, CSS, and JavaScript.",
    code: `app.use(express.static('public')); // Serves files from the 'public' directory`
  },
  {
    question: "What is the purpose of express.Router() in Express.js?",
    answer: "`express.Router()` is used to create modular, mountable route handlers. It helps in organizing routes.",
    code: `const router = express.Router();
router.get('/users', (req, res) => {
  res.send('User list');
});
app.use('/api', router);`
  },
  {
    question: "How do you handle errors in Express.js?",
    answer: "Define an error-handling middleware function with four parameters: (err, req, res, next).",
    code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`
  },
  {
    question: "What is the role of the next() function in Express.js middleware?",
    answer: "`next()` is a function in Express.js that passes control to the next middleware function. If not called, the request will be left hanging.",
    code: `app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Passes control to the next middleware
});`
  },
  {
    question: "How can you parse incoming request bodies in Express.js?",
    answer: "Use the built-in middleware `express.json()` and `express.urlencoded()` to parse JSON and URL-encoded data respectively.",
    code: `app.use(express.json());
app.use(express.urlencoded({ extended: true }));`
  },
  {
    question: "What is CORS and how do you enable it in Express.js?",
    answer: "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain. Use the `cors` middleware to enable it.",
    code: `const cors = require('cors');
app.use(cors());`
  },
  {
    question: "How do you implement route parameters in Express.js?",
    answer: "Route parameters are named URL segments used to capture values at specific positions in the URL.",
    code: `app.get('/users/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});`
  },
  {
    question: "What is the difference between app.use() and app.get() in Express.js?",
    answer: "`app.use()` is used to mount middleware functions, whereas `app.get()` is used to define a route handler for GET requests.",
    code: `app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});`
  },
  {
    question: "How can you handle multiple request methods (GET, POST, PUT, DELETE) for a single route in Express.js?",
    answer: "Use `app.method()` for each HTTP method, e.g., `app.get()`, `app.post()`, `app.put()`, etc.",
    code: `app.get('/api/users', (req, res) => { /* handle GET */ });
app.post('/api/users', (req, res) => { /* handle POST */ });
app.put('/api/users', (req, res) => { /* handle PUT */ });`
  },
  {
    question: "What is the purpose of the express.json() middleware?",
    answer: "`express.json()` is a built-in middleware to parse incoming JSON requests and convert them into JavaScript objects.",
    code: `app.use(express.json());`
  },
  {
    question: "How do you prevent a route handler from being executed?",
    answer: "You can prevent a route handler from being executed by calling `next()` within a middleware before sending a response.",
    code: `app.use((req, res, next) => {
  if (!req.user) {
    return res.status(401).send('Unauthorized');
  }
  next();
});`
  },
  {
    question: "What is the role of the app.listen() method?",
    answer: "`app.listen()` starts the Express.js server and listens for incoming requests on a specified port.",
    code: `app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`
  },
  {
    question: "What is Express.js routing?",
    answer: "Express.js routing refers to the way that requests (HTTP methods like GET, POST, etc.) are matched to specific route handlers or middleware in the application.",
    code: `app.get('/users', (req, res) => { res.send('User list'); });`
  },
  {
    question: "How can you handle multipart form data in Express.js?",
    answer: "Use the `multer` middleware to handle file uploads in a multipart form.",
    code: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => { res.send('File uploaded'); });`
  },
  {
    question: "What is the purpose of res.status() in Express.js?",
    answer: "The `res.status()` method is used to set the HTTP status code for the response.",
    code: `res.status(200).send('OK');`
  },
  {
    question: "What is Express.js templating engine?",
    answer: "A templating engine is used to generate HTML dynamically. In Express.js, you can use engines like EJS, Pug, or Handlebars to render views.",
    code: `app.set('view engine', 'ejs');
app.get('/', (req, res) => { res.render('index'); });`
  },
  {
    question: "How do you redirect a request in Express.js?",
    answer: "You can use `res.redirect()` to redirect a request to another URL.",
    code: `app.get('/home', (req, res) => {
  res.redirect('/newhome');
});`
  },
  {
    question: "What is the use of res.sendFile() in Express?",
    answer: "The `res.sendFile()` method is used to send a file as an HTTP response.",
    code: `res.sendFile(path.join(__dirname, 'public', 'index.html'));`
  },
  {
    question: "How do you get query parameters in Express.js?",
    answer: "Query parameters can be accessed through the `req.query` object.",
    code: `app.get('/search', (req, res) => {
  res.send(req.query.name); // Access 'name' query parameter
});`
  },
  {
    question: "How do you handle PUT and DELETE requests in Express.js?",
    answer: "Use `app.put()` and `app.delete()` to define handlers for PUT and DELETE requests respectively.",
    code: `app.put('/user/:id', (req, res) => {
  res.send('User updated');
});
app.delete('/user/:id', (req, res) => {
  res.send('User deleted');
});`
  },{
    question: "How do you use the app.all() method in Express.js?",
    answer: "The `app.all()` method is used to handle all HTTP methods for a specific route. It can be used for middleware or processing on any HTTP request method.",
    code: `app.all('/api/*', (req, res) => {
  res.send('Request made to any HTTP method for this route');
});`
  },
  {
    question: "What is the purpose of app.param() in Express.js?",
    answer: "The `app.param()` method is used to define middleware that will run when a route parameter is passed.",
    code: `app.param('userId', (req, res, next, userId) => {
  console.log('User ID param:', userId);
  next();
});
app.get('/users/:userId', (req, res) => {
  res.send('User details');
});`
  },
  {
    question: "How do you secure your Express.js application?",
    answer: "Security in Express can be enhanced by using middleware like `helmet` for HTTP headers, `cors` for cross-origin requests, `express-rate-limit` for rate limiting, and `express-validator` for input validation.",
    code: `const helmet = require('helmet');
app.use(helmet());`
  },
  {
    question: "What is the purpose of res.cookie() in Express.js?",
    answer: "The `res.cookie()` method is used to set cookies in the HTTP response.",
    code: `res.cookie('user', 'John', { maxAge: 900000, httpOnly: true });`
  },
  {
    question: "How do you manage session data in Express.js?",
    answer: "Session data can be managed using the `express-session` middleware, which stores session data on the server side and links it with a session ID stored in the user's cookie.",
    code: `const session = require('express-session');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));`
  },
  {
    question: "What are application-level middleware in Express.js?",
    answer: "Application-level middleware is middleware bound to an instance of `express()` and can be used for tasks such as logging, authentication, and parsing.",
    code: `app.use((req, res, next) => {
  console.log('Request received');
  next();
});`
  },
  {
    question: "What is the difference between req.body and req.params in Express.js?",
    answer: "`req.body` is used to access data sent in the body of a POST request (usually JSON or form data), while `req.params` is used to access route parameters.",
    code: `app.post('/user', (req, res) => {
  console.log(req.body);
});

app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
});`
  },
  {
    question: "How can you log request details in Express.js?",
    answer: "You can log requests using middleware like `morgan` or create custom middleware to log request details.",
    code: `const morgan = require('morgan');
app.use(morgan('tiny'));`
  },
  {
    question: "What are the different HTTP request methods supported by Express.js?",
    answer: "Express.js supports the following HTTP methods: GET, POST, PUT, DELETE, PATCH, and OPTIONS.",
    code: `app.get('/', (req, res) => { res.send('GET request'); });
app.post('/', (req, res) => { res.send('POST request'); });`
  },
  {
    question: "How do you handle file uploads in Express.js?",
    answer: "File uploads can be handled using `multer`, a middleware for handling multipart/form-data, which is used for uploading files.",
    code: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});`
  },
  {
    question: "What is the difference between app.listen() and http.createServer()?",
    answer: "`app.listen()` is a shorthand for creating an HTTP server and listening on a port using Express, while `http.createServer()` is used to create a raw HTTP server in Node.js.",
    code: `const http = require('http');
const app = express();
http.createServer(app).listen(3000, () => {
  console.log('Server running on port 3000');
});`
  },
  {
    question: "How can you perform validation of request data in Express.js?",
    answer: "Request data can be validated using middleware libraries like `express-validator` or by writing custom validation logic.",
    code: `const { body, validationResult } = require('express-validator');
app.post('/user', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Valid data');
});`
  },
  {
    question: "How do you handle asynchronous code in Express.js?",
    answer: "Asynchronous code in Express can be handled using `async/await`, promises, or callbacks. Ensure to handle errors with try/catch blocks or use a global error handler.",
    code: `app.get('/data', async (req, res) => {
  try {
    const data = await fetchDataFromDB();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});`
  },
  {
    question: "How can you perform rate-limiting in Express.js?",
    answer: "Rate-limiting can be implemented using the `express-rate-limit` middleware to restrict the number of requests a user can make within a specified timeframe.",
    code: `const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);`
  },
  {
    question: "What are the different ways to send a response in Express.js?",
    answer: "In Express.js, you can send responses using `res.send()`, `res.json()`, `res.sendFile()`, `res.render()`, or `res.redirect()`.",
    code: `res.send('Response text');
res.json({ message: 'Response in JSON' });`
  },
  {
    question: "How do you implement authentication in Express.js?",
    answer: "Authentication can be implemented in Express.js using middleware for verifying credentials, such as using JSON Web Tokens (JWT) or Passport.js for handling login sessions.",
    code: `const jwt = require('jsonwebtoken');
app.post('/login', (req, res) => {
  const token = jwt.sign({ userId: 1 }, 'secretKey');
  res.json({ token });
});`
  },
  {
    question: "What is the use of app.set() in Express.js?",
    answer: "`app.set()` is used to set application-level settings such as view engine, views directory, and environment variables.",
    code: `app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));`
  },
  {
    question: "What is a session in Express.js?",
    answer: "A session in Express.js is a mechanism for storing and retrieving data related to a specific user between requests. Sessions are typically stored on the server with a session ID sent as a cookie in the client.",
    code: `app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true
}));`
  }, {
    question: "What is the purpose of res.status() in Express.js?",
    answer: "The `res.status()` method is used to set the HTTP status code for the response. This is commonly used to indicate the success or failure of a request.",
    code: `res.status(404).send('Not Found');`
  },
  {
    question: "How can you configure a static file server in Express.js?",
    answer: "You can configure a static file server in Express.js using `express.static()` middleware to serve static files such as images, CSS, and JavaScript.",
    code: `app.use(express.static('public'));`
  },
  {
    question: "What is a router in Express.js?",
    answer: "A router in Express.js is a mechanism that helps define groups of routes that can be modularized. Routers are used to handle specific sets of routes for a given endpoint.",
    code: `const router = express.Router();
router.get('/', (req, res) => { res.send('Welcome'); });
app.use('/home', router);`
  },
  {
    question: "What is the purpose of res.sendFile() in Express.js?",
    answer: "The `res.sendFile()` method is used to send a file as the response to a client, such as an HTML or image file.",
    code: `res.sendFile(path.join(__dirname, 'index.html'));`
  },
  {
    question: "How can you handle errors in Express.js?",
    answer: "Errors in Express.js can be handled by defining an error-handling middleware, which takes four arguments: `err`, `req`, `res`, `next`.",
    code: `app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong');
});`
  },
  {
    question: "How do you handle JSON data in Express.js?",
    answer: "You can handle JSON data in Express.js by using the `express.json()` middleware to parse incoming request bodies as JSON.",
    code: `app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});`
  },
  {
    question: "How do you handle URL-encoded data in Express.js?",
    answer: "You can handle URL-encoded data using the `express.urlencoded()` middleware. It parses incoming request bodies with URL-encoded data.",
    code: `app.use(express.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  console.log(req.body);
  res.send('Form data received');
});`
  },
  {
    question: "How can you set HTTP headers in Express.js?",
    answer: "HTTP headers can be set using the `res.set()` method. This is commonly used for things like content-type and cache-control.",
    code: `res.set('Cache-Control', 'public, max-age=3600');`
  },
  {
    question: "What are the differences between app.get() and app.post() in Express.js?",
    answer: "`app.get()` is used to handle HTTP GET requests, typically for retrieving data, while `app.post()` is used to handle HTTP POST requests, typically for sending data to the server.",
    code: `app.get('/data', (req, res) => { res.send('GET data'); });
app.post('/data', (req, res) => { res.send('POST data'); });`
  },
  {
    question: "How do you implement cross-origin resource sharing (CORS) in Express.js?",
    answer: "CORS can be implemented using the `cors` middleware, which allows you to specify which domains are allowed to access your server resources.",
    code: `const cors = require('cors');
app.use(cors());`
  },
  {
    question: "How can you handle multipart/form-data in Express.js?",
    answer: "To handle multipart/form-data (usually used for file uploads), you can use the `multer` middleware.",
    code: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});`
  },
  {
    question: "What is the purpose of res.json() in Express.js?",
    answer: "`res.json()` sends a JSON response to the client, converting the JavaScript object or array into a JSON string.",
    code: `res.json({ message: 'Success' });`
  },
  {
    question: "What is the purpose of req.query in Express.js?",
    answer: "`req.query` is used to access query parameters in the URL. Query parameters are passed in the URL after the `?` symbol.",
    code: `app.get('/search', (req, res) => {
  console.log(req.query.searchTerm);
  res.send('Search results');
});`
  },
  {
    question: "What is the purpose of req.body in Express.js?",
    answer: "`req.body` is used to access data sent in the body of a POST request. It is typically used for JSON or form submissions.",
    code: `app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});`
  },
  {
    question: "How can you send a redirect response in Express.js?",
    answer: "You can send a redirect response using the `res.redirect()` method, which sends an HTTP redirect to another URL.",
    code: `res.redirect('/new-location');`
  },
  {
    question: "What is the purpose of app.set() and app.get() in Express.js?",
    answer: "`app.set()` is used to set application settings, while `app.get()` is used to retrieve the value of a setting.",
    code: `app.set('view engine', 'ejs');
console.log(app.get('view engine'));`
  },
  {
    question: "How do you parse URL parameters in Express.js?",
    answer: "URL parameters can be accessed through `req.params`, which contains the values of dynamic route parameters.",
    code: `app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  res.send('User info');
});`
  },
  {
    question: "How can you define a route for all HTTP methods in Express.js?",
    answer: "You can use `app.all()` to define a route that matches all HTTP methods.",
    code: `app.all('/api/*', (req, res) => {
  res.send('Request made to any HTTP method for this route');
});`
  },
  {
    question: "What is the purpose of app.listen() in Express.js?",
    answer: "`app.listen()` is used to bind and listen to the specified port for incoming HTTP requests.",
    code: `app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
  },
  {
    question: "How do you set up template engines in Express.js?",
    answer: "Template engines like EJS or Pug can be set up using `app.set('view engine', 'engineName')`.",
    code: `app.set('view engine', 'ejs');`
  },
  {
    question: "What is the purpose of the app.route() method in Express.js?",
    answer: "The `app.route()` method is used to chain multiple route handlers for the same path and HTTP method.",
    code: `app.route('/user')
  .get((req, res) => { res.send('GET request'); })
  .post((req, res) => { res.send('POST request'); });`
  },
  {
    question: "How can you send custom headers in Express.js?",
    answer: "Custom headers can be sent using the `res.set()` method to add any headers to the response.",
    code: `res.set('X-Custom-Header', 'value');`
  },
  {
    question: "What is the purpose of app.locals in Express.js?",
    answer: "`app.locals` is an object where you can store variables that are available throughout the application for use in views.",
    code: `app.locals.title = 'My App';`
  },
  {
    question: "What is the purpose of app.get('env') in Express.js?",
    answer: "`app.get('env')` retrieves the current environment, typically either 'development', 'production', or 'test'. It is used to configure different settings based on the environment.",
    code: `if (app.get('env') === 'production') {
  console.log('Production mode');
}`
  },
  {
    question: "What is the role of next() function in Express.js?",
    answer: "The `next()` function is used to pass control to the next middleware function in the stack. If `next()` is not called, the request-response cycle is not completed.",
    code: `app.use((req, res, next) => {
  console.log('Logging request');
  next();
});`
  },
  {
    question: "What is an example of a custom middleware in Express.js?",
    answer: "Custom middleware in Express.js can be used to perform specific tasks like logging, authentication, etc.",
    code: `app.use((req, res, next) => {
  console.log('Request received');
  next();
});`
  },
  {
    question: "How do you enable HTTPS in Express.js?",
    answer: "HTTPS in Express can be enabled by creating an HTTPS server using the `https` module and passing it the Express app.",
    code: `const https = require('https');
const fs = require('fs');
const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};
https.createServer(options, app).listen(3000, () => {
  console.log('Secure server running');
});`
  },{
    question: "What is Express.js Router and how does it work?",
    answer: "Express Router is a mini express application that can handle its own set of routes and middleware. It can be used to organize the routing logic of your application into smaller pieces.",
    code: `const router = express.Router();
router.get('/', (req, res) => { res.send('Welcome'); });
app.use('/home', router);`
  },
  {
    question: "How do you handle form data in Express.js?",
    answer: "Form data in Express.js can be handled using middleware like `express.urlencoded()` for form submissions with the application/x-www-form-urlencoded encoding.",
    code: `app.use(express.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  console.log(req.body);
  res.send('Form data received');
});`
  },
  {
    question: "How can you parse cookies in Express.js?",
    answer: "To parse cookies, you can use the `cookie-parser` middleware to parse cookies attached to the incoming request object.",
    code: `const cookieParser = require('cookie-parser');
app.use(cookieParser());`
  },
  {
    question: "What is the difference between app.get() and app.all() in Express.js?",
    answer: "`app.get()` is used to define a route for GET requests, while `app.all()` is used to define a route that matches all HTTP methods.",
    code: `app.all('/api/*', (req, res) => {
  res.send('Request made to any HTTP method for this route');
});`
  },
  {
    question: "How do you parse JSON data in Express.js?",
    answer: "To parse JSON data, you can use the `express.json()` middleware which parses incoming JSON payloads.",
    code: `app.use(express.json());
app.post('/json', (req, res) => {
  console.log(req.body);
  res.send('JSON data received');
});`
  },
  {
    question: "What is the purpose of app.param() in Express.js?",
    answer: "`app.param()` is used to define middleware for specific route parameters. It is useful when you want to perform operations on route parameters before the route handler is called.",
    code: `app.param('userId', (req, res, next, userId) => {
  console.log('User ID:', userId);
  next();
});
app.get('/user/:userId', (req, res) => { res.send('User data'); });`
  },
  {
    question: "What are the different HTTP methods supported by Express.js?",
    answer: "Express.js supports all standard HTTP methods such as GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.",
    code: `app.get('/', (req, res) => { res.send('GET request'); });
app.post('/', (req, res) => { res.send('POST request'); });`
  },
  {
    question: "How can you enable CORS in Express.js?",
    answer: "You can enable CORS in Express.js by using the `cors` middleware, which allows you to configure cross-origin requests.",
    code: `const cors = require('cors');
app.use(cors());`
  },
  {
    question: "What is the purpose of the express.json() middleware?",
    answer: "The `express.json()` middleware parses incoming requests with JSON payloads. It makes the parsed data available in `req.body`.",
    code: `app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('JSON data received');
});`
  },
  {
    question: "What is the purpose of the express.urlencoded() middleware?",
    answer: "The `express.urlencoded()` middleware is used to parse incoming requests with URL-encoded payloads. This is typically used for handling form submissions.",
    code: `app.use(express.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  console.log(req.body);
  res.send('Form data received');
});`
  },
  {
    question: "How can you access request headers in Express.js?",
    answer: "Request headers can be accessed using `req.headers`. This contains all the headers sent with the request.",
    code: `app.get('/headers', (req, res) => {
  console.log(req.headers);
  res.send('Headers received');
});`
  },
  {
    question: "How can you redirect a user in Express.js?",
    answer: "You can redirect a user using the `res.redirect()` method, specifying the URL to which the user should be redirected.",
    code: `res.redirect('/new-location');`
  },
  {
    question: "How can you configure custom error handling in Express.js?",
    answer: "Custom error handling can be configured using middleware. You define an error-handling middleware that takes four arguments (`err, req, res, next`).",
    code: `app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong');
});`
  },
  {
    question: "How do you handle session data in Express.js?",
    answer: "Session data in Express.js can be handled using the `express-session` middleware, which allows storing data between requests.",
    code: `const session = require('express-session');
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));`
  },
  {
    question: "How do you implement basic authentication in Express.js?",
    answer: "Basic authentication can be implemented by checking the `Authorization` header for a valid user and password combination.",
    code: `app.use((req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth || auth !== 'Basic dXNlcjpwYXNz') {
    return res.status(401).send('Unauthorized');
  }
  next();
});`
  },
  {
    question: "What is a Promise in Express.js?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It is often used for asynchronous tasks in Express.js, such as database queries.",
    code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data fetched'), 1000);
});
promise.then(data => console.log(data));`
  },
  {
    question: "How do you handle file uploads in Express.js?",
    answer: "File uploads in Express.js can be handled using the `multer` middleware, which handles multipart form-data requests.",
    code: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});`
  },
  {
    question: "What is the purpose of app.set('view engine', 'ejs') in Express.js?",
    answer: "Setting `view engine` to `ejs` tells Express to use EJS as the template engine for rendering views.",
    code: `app.set('view engine', 'ejs');`
  },
  {
    question: "What is the role of next() in Express.js?",
    answer: "The `next()` function is used to pass control to the next middleware function. It is commonly used in custom middleware functions.",
    code: `app.use((req, res, next) => {
  console.log('Logging request');
  next();
});`
  },
  {
    question: "How do you protect routes in Express.js?",
    answer: "Routes can be protected using middleware functions that check for valid authentication tokens or user sessions before granting access.",
    code: `app.use((req, res, next) => {
  if (!req.session.user) {
    return res.status(403).send('Unauthorized');
  }
  next();
});`
  },
  {
    question: "How do you render dynamic content with Express.js?",
    answer: "You can render dynamic content by passing data to the template engine in the `res.render()` method.",
    code: `app.get('/profile', (req, res) => {
  res.render('profile', { user: { name: 'John' } });
});`
  },
  {
    question: "How can you create a route handler for all HTTP methods in Express.js?",
    answer: "You can create a route handler for all HTTP methods using `app.all()`.",
    code: `app.all('/user', (req, res) => {
  res.send('Request made to any HTTP method for this route');
});`
  },
  {
    question: "How do you set a custom HTTP header in Express.js?",
    answer: "You can set custom HTTP headers using `res.set()`.",
    code: `res.set('X-Custom-Header', 'value');`
  },
  {
    question: "How do you enable HTTPS in Express.js?",
    answer: "You can enable HTTPS by using the `https` module to create a secure server that uses SSL certificates.",
    code: `const https = require('https');
const fs = require('fs');
const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};
https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS server running');
});`
  },
  {
    question: "What is the role of app.listen() in Express.js?",
    answer: "`app.listen()` is used to start the server and listen for incoming requests on a specified port.",
    code: `app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
  },
  {
    question: "How do you handle multiple routes with the same path in Express.js?",
    answer: "You can handle multiple routes with the same path by chaining route handlers or using route parameters.",
    code: `app.get('/user/:id', (req, res) => {
  res.send('User profile');
});`
  }
];
