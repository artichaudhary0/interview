export const questions = {
  htmlCss: [
    {
      question: "What is the difference between display: none and visibility: hidden?",
      answer: "display: none removes the element from the document flow and hides it completely, while visibility: hidden keeps the element in the document flow (preserving its space) but makes it invisible."
    },
    {
      question: "Explain the box model in CSS.",
      answer: "The CSS box model consists of content, padding, border, and margin. Content is the actual content area, padding is the space between content and border, border is the line around the padding, and margin is the space outside the border."
    },
    {
      question: "What are semantic HTML elements?",
      answer: "Semantic HTML elements are tags that provide meaning to the content structure rather than just presentation. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>."
    }
  ],
  javascript: [
    {
      question: "Explain closures in JavaScript.",
      answer: "A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables in its outer scope even after the outer function has returned.",
      code: `function outer() {
  const message = 'Hello';
  return function inner() {
    console.log(message);
  };
}
const sayHello = outer();
sayHello(); // Outputs: Hello`
    },
    {
      question: "What is the difference between let, const, and var?",
      answer: "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned but not redeclared, and const is block-scoped and cannot be reassigned or redeclared.",
      code: `var x = 1;   // Function-scoped
let y = 2;   // Block-scoped
const z = 3; // Block-scoped, cannot be reassigned`
    }
  ],
  react: [
    {
      question: "What are hooks in React?",
      answer: "Hooks are functions that allow you to use state and other React features in functional components. Common hooks include useState, useEffect, useContext, useRef, and useMemo.",
      code: `function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`
    },
    {
      question: "Explain the virtual DOM.",
      answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM. When state changes, React first updates the virtual DOM, compares it with the previous version, and then efficiently updates only the necessary parts of the actual DOM."
    }
  ],
  node: [
    {
      question: "What is the Event Loop in Node.js?",
      answer: "The Event Loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It handles the execution of callbacks and manages various phases including timers, pending callbacks, idle/prepare, poll, check, and close callbacks.",
      code: `console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');
// Output:
// Start
// End
// Promise
// Timeout`
    },
    {
      question: "What is middleware in Express.js?",
      answer: "Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application's request-response cycle. They can execute any code, modify request and response objects, end the request-response cycle, and call the next middleware function.",
      code: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});`
    }
  ]
};