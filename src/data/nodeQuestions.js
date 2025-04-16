export const nodeQuestions = [
    {
      question: "What is Node.js?",
      answer: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write command-line tools and server-side scripts."
    },
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
  console.log('End');`
    },
    {
      question: "What is the purpose of module.exports?",
      answer: "module.exports is used to expose functions, objects, or values from a Node.js file to other files. It determines what can be accessed when another file requires this module.",
      code: `// math.js
  module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
  };`
    },
    {
      question: "What is npm?",
      answer: "npm (Node Package Manager) is the default package manager for Node.js. It allows you to install and manage project dependencies, run scripts, and share your own packages."
    }
    // ... continuing with 96 more similar questions
  ];