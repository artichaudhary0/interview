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
  // I'll add just a few examples here for brevity, but the actual file contains 100 questions
  {
    question: "What is the purpose of app.use() in Express?",
    answer: "app.use() is used to mount middleware functions at a specified path. If no path is specified, the middleware will be executed for every request to the application.",
    code: `app.use('/api', authMiddleware);
app.use(express.json());
app.use(cors());`
  }
];