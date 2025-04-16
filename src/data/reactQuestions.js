export const reactQuestions = [

    {
      id: 1,
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
      id: 2,
      question: "Explain the virtual DOM.",
      answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM. When state changes, React first updates the virtual DOM, compares it with the previous version, and then efficiently updates only the necessary parts of the actual DOM."
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX stands for JavaScript XML. It allows you to write HTML-like syntax in your JavaScript code which React transforms into React elements."
    },
    {
      id: 4,
      question: "What is the difference between a class component and a functional component?",
      answer: "Class components use ES6 classes and can have lifecycle methods, while functional components are simpler and use hooks for state and side effects."
    },
    {
      id: 5,
      question: "What is useState in React?",
      answer: "useState is a Hook that lets you add state to functional components.",
      code: `const [count, setCount] = useState(0);`
    },
    {
      id: 6,
      question: "What is useEffect in React?",
      answer: "useEffect lets you perform side effects in functional components, such as data fetching or subscribing to events."
    },
    {
      id: 7,
      question: "What is a controlled component?",
      answer: "A controlled component is a component whose form data is handled by the state of the component."
    },
    {
      id: 8,
      question: "What is an uncontrolled component?",
      answer: "An uncontrolled component is a component that handles its own state internally using refs."
    },
    {
      id: 9,
      question: "What is the useRef hook?",
      answer: "useRef returns a mutable ref object whose .current property is initialized to the passed argument."
    },
    {
      id: 10,
      question: "What is the purpose of ids in React lists?",
      answer: "ids help React identify which items have changed, are added, or are removed to optimize rendering."
    },
    {
      id: 11,
      question: "What is prop drilling?",
      answer: "Prop drilling is the process of passing props from a parent component to deeply nested child components."
    },
    {
      id: 12,
      question: "What is the Context API?",
      answer: "The Context API is a way to pass data through the component tree without having to pass props down manually at every level."
    },
    {
      id: 13,
      question: "What is useContext?",
      answer: "useContext is a hook that lets you use context data in functional components."
    },
    {
      id: 14,
      question: "What is lifting state up in React?",
      answer: "Lifting state up means moving shared state to the closest common ancestor of the components that need it."
    },
    {
      id: 15,
      question: "What is the difference between props and state?",
      answer: "Props are read-only and passed to components, while state is local and managed within a component."
    },
    {
      id: 16,
      question: "How do you handle forms in React?",
      answer: "Use controlled components by tying input values to component state and handling changes with onChange."
    },
    {
      id: 17,
      question: "What are fragments in React?",
      answer: "Fragments let you group multiple elements without adding extra nodes to the DOM.",
      code: `<>\n  <h1>Hello</h1>\n  <p>World</p>\n</>`
    },
    {
      id: 18,
      question: "What is conditional rendering?",
      answer: "Conditional rendering in React means showing or hiding elements based on some condition using operators like if, &&, or ternary."
    },
    {
      id: 19,
      question: "How do you handle errors in React components?",
      answer: "Use error boundaries to catch and display errors in React components."
    },
    {
      id: 20,
      question: "What are error boundaries?",
      answer: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and display a fallback UI."
    },
    {
      id: 21,
      question: "How do you update state based on previous state in React?",
      answer: "Use a function inside setState or useState's setter to access the previous state.",
      code: `setCount(prevCount => prevCount + 1);`
    },
    {
      id: 22,
      question: "How do you pass data from child to parent in React?",
      answer: "By passing a callback function from the parent to the child and calling it in the child with the data."
    },
    {
      id: 23,
      question: "What is state immutability in React?",
      answer: "React requires state to be updated immutably, meaning you should not modify the existing state directly."
    },
    {
      id: 24,
      question: "How can you debug React applications?",
      answer: "Use browser dev tools, React Developer Tools, console logs, and error boundaries."
    },
    {
      id: 25,
      question: "What is the difference between useEffect and useLayoutEffect?",
      answer: "useLayoutEffect runs synchronously after DOM mutations; useEffect runs asynchronously after painting."
    },
    {
      id: 26,
      question: "What is React Strict Mode?",
      answer: "StrictMode is a development-only feature that highlights potential problems in an application."
    },
    {
      id: 27,
      question: "What is reconciliation in React?",
      answer: "Reconciliation is React’s process of comparing the virtual DOM with a previous snapshot and applying minimal DOM operations."
    },
    {
      id: 28,
      question: "What is Concurrent Mode in React?",
      answer: "Concurrent Mode allows React to interrupt rendering work to handle more urgent updates."
    },
    {
      id: 29,
      question: "What are render props?",
      answer: "Render props are a pattern where a function is used to share code between components using a prop whose value is a function."
    },
    {
      id: 30,
      question: "What is the difference between presentational and container components?",
      answer: "Presentational components focus on UI, while container components handle logic and state."
    },
    {
      id: 31,
      question: "How do you handle events in React?",
      answer: "React uses camelCase syntax for event handlers and passes functions to them.",
      code: `<button onClick={handleClick}>Click me</button>`
    },
    {
      id: 32,
      question: "What is a pure component?",
      answer: "A pure component implements shouldComponentUpdate with a shallow prop and state comparison."
    },
    {
      id: 33,
      question: "How can you optimize a React list rendering?",
      answer: "Use ids, React.memo, and pagination or virtualization libraries like react-window or react-virtualized."
    },
    {
      id: 34,
      question: "What is a custom hook?",
      answer: "A custom hook is a JavaScript function that starts with 'use' and uses other hooks to encapsulate reusable logic."
    },
    {
      id: 35,
      question: "What is forwardRef in React?",
      answer: "forwardRef is used to pass refs through components to access child DOM nodes."
    },
    {
      id: 36,
      question: "How to fetch data in React?",
      answer: "Use fetch or libraries like axios, often within useEffect.",
      code: `useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);`
    },
    {
      id: 37,
      question: "How do you redirect in React Router?",
      answer: "Use the `useNavigate` hook in React Router v6+.",
      code: `const navigate = useNavigate(); navigate('/home');`
    },
    {
      id: 38,
      question: "What is the difference between useEffect and useCallback?",
      answer: "useEffect is used for side effects; useCallback memoizes a callback function."
    },
    {
      id: 39,
      question: "What is the useId hook?",
      answer: "useId is a hook that generates a unique ID that is stable across server and client."
    },
    {
      id: 40,
      question: "What are transitions in React 18?",
      answer: "Transitions let you mark updates as non-urgent so React can keep the app responsive."
    },
    {
      id: 41,
      question: "What is suspense for data fetching?",
      answer: "It allows components to wait for something like data before rendering, using fallback UI."
    },
    {
      id: 42,
      question: "How to create global state without Redux?",
      answer: "Use React Context with useReducer or useState."
    },
    {
      id: 43,
      question: "How to throttle or debounce events in React?",
      answer: "Use lodash’s debounce/throttle or implement with timers inside event handlers."
    },
    {
      id: 44,
      question: "What is propTypes in React?",
      answer: "PropTypes is a type-checking library used to validate props passed to a component."
    },
    {
      id: 45,
      question: "How does React handle re-rendering?",
      answer: "React re-renders components when state or props change, using virtual DOM diffing to update efficiently."
    },
    {
      id: 46,
      question: "What is shallow rendering?",
      answer: "Shallow rendering renders only the component itself, not its children, often used in unit testing."
    },
    {
      id: 47,
      question: "What is enzyme in React testing?",
      answer: "Enzyme is a testing utility for React that makes it easier to assert, manipulate, and traverse components."
    },
    {
      id: 48,
      question: "What are React testing libraries?",
      answer: "React Testing Library and Enzyme are popular libraries used for testing React components."
    },
    {
      id: 49,
      question: "What is testId in React Testing Library?",
      answer: "It's a custom attribute (data-testid) used to select elements in tests."
    },
    {
      id: 50,
      question: "How do you animate components in React?",
      answer: "Use libraries like Framer Motion, React Spring, or CSS transitions."
    },
    {
      id: 51,
      question: "How to use TypeScript with React?",
      answer: "By creating components with TypeScript syntax and defining prop types and state interfaces."
    },
    {
      id: 52,
      question: "What are React Server Components?",
      answer: "They are components that render on the server and send HTML to the client, introduced to improve performance."
    },
    {
      id: 53,
      question: "How to prevent memory leaks in useEffect?",
      answer: "Use cleanup functions or abort controllers for async tasks inside useEffect."
    },
    {
      id: 54,
      question: "What is hydration mismatch?",
      answer: "Hydration mismatch occurs when the client-rendered content differs from the server-rendered HTML."
    },
    {
      id: 55,
      question: "How to integrate third-party libraries with React?",
      answer: "Use refs or componentDidMount/useEffect to integrate libraries that manipulate the DOM."
    },
    {
      id: 56,
      question: "How to update nested state in React?",
      answer: "Use spread syntax or deep cloning to immutably update nested state objects or arrays."
    },
    {
      id: 57,
      question: "What is a fallback UI?",
      answer: "A fallback UI is shown when a component is loading or has errored (e.g., in Suspense or Error Boundaries)."
    },
    {
      id: 58,
      question: "How to handle authentication in React?",
      answer: "Use context or global state for user data, protect routes with conditional rendering or private routes."
    },
    {
      id: 59,
      question: "How to build a reusable button component in React?",
      answer: "Create a functional component that accepts props like text, onClick, and className.",
      code: `const Button = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;`
    },
    {
      id: 60,
      question: "How to set default props in React?",
      answer: "You can set default props using the defaultProps property or default parameters.",
      code: `MyComponent.defaultProps = { color: 'blue' };`
    },
    {
      id: 61,
      question: "How does React update the UI efficiently?",
      answer: "By using the virtual DOM and a diffing algorithm to only update changed elements."
    },
    {
      id: 62,
      question: "What is JSX spread attribute?",
      answer: "It allows you to pass an object as props using the spread operator.",
      code: `<Component {...props} />`
    },
    {
      id: 63,
      question: "What is DangerouslySetInnerHTML?",
      answer: "DangerouslySetInnerHTML is a React property that lets you set HTML directly from React, but it can expose your application to XSS attacks if not used carefully."
    },
    {
      id: 64,
      question: "What are React.Children utilities?",
      answer: "React.Children provides methods for dealing with this.props.children, such as map, forEach, count, toArray, and only."
    },
    {
      id: 65,
      question: "What is createRef in React?",
      answer: "createRef is a method that returns a new ref object which can be attached to React elements via the ref attribute.",
      code: `this.myRef = React.createRef();`
    },
    {
      id: 66,
      question: "What is the difference between createRef and useRef?",
      answer: "createRef creates a new ref on every render in functional components if not memoized, while useRef returns a persistent ref across renders."
    },
    {
      id: 67,
      question: "What is useDebugValue?",
      answer: "useDebugValue is a hook that lets you display a label for custom hooks in React DevTools."
    },
    {
      id: 68,
      question: "What is React.Profiler?",
      answer: "Profiler is a component that measures the performance of its child components and logs timing information."
    },
    {
      id: 69,
      question: "What is the useTransition hook?",
      answer: "useTransition returns a stateful isPending value and a startTransition function to mark state updates as non-urgent.",
      code: `const [isPending, startTransition] = useTransition(); startTransition(() => setValue(newValue));`
    },
    {
      id: 70,
      question: "What is the useDeferredValue hook?",
      answer: "useDeferredValue returns a deferred version of a value that will lag behind the current value when updates are urgent."
    },
    {
      id: 71,
      question: "What is SuspenseList?",
      answer: "SuspenseList coordinates the order in which Suspense boundaries show their fallback or revealed content."
    },
    {
      id: 72,
      question: "What is React Fiber?",
      answer: "React Fiber is the reconciliation engine written to enable incremental rendering of the virtual DOM."
    },
    {
      id: 73,
      question: "What is setState batching in React?",
      answer: "React batches state updates for performance, meaning multiple setState calls in event handlers are combined into a single render."
    },
    {
      id: 74,
      question: "What is event pooling in React?",
      answer: "React reuses SyntheticEvent objects for performance, which means event properties should be accessed asynchronously via event.persist()."
    },
    {
      id: 75,
      question: "What is ReactDOM.createPortal?",
      answer: "createPortal allows you to render children into a DOM node that exists outside the hierarchy of the parent component.",
      code: `ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));`
    },
    {
      id: 76,
      question: "What is reconciliation's id heuristic?",
      answer: "React uses ids to match old and new elements in a list to determine which items to update, add, or remove."
    },
    {
      id: 77,
      question: "What is useSyncExternalStore?",
      answer: "useSyncExternalStore is a hook for subscribing to external stores in a way that supports concurrent rendering."
    },
    {
      id: 78,
      question: "What is the difference between Concurrent Mode and Legacy Mode?",
      answer: "Concurrent Mode enables interruptible and async rendering, while Legacy Mode blocks rendering until updates complete."
    },
    {
      id: 79,
      question: "What is ReactDOM.hydrate?",
      answer: "hydrate is used to attach event listeners to server-rendered HTML for client-side React apps."
    },
    {
      id: 80,
      question: "What are Server Components vs Client Components?",
      answer: "Server Components render on the server and send HTML without sending JavaScript, while Client Components ship JS for interactivity."
    },
    {
      id: 81,
      question: "What caution should you take with JSX spread attributes?",
      answer: "You should avoid spreading unknown props to DOM elements as it may pass invalid attributes and cause warnings."
    },
    {
      id: 82,
      question: "What is a recommended file structure for React projects?",
      answer: "Common structures include grouping by feature or by type (components, hooks, utils), ensuring clear organization and scalability."
    },
    {
      id: 83,
      question: "What is the difference between CSS Modules and styled-components?",
      answer: "CSS Modules locally scope CSS class names, while styled-components allows writing CSS in JS and creates styled React components."
    },
    {
      id: 84,
      question: "What is the difference between inline styles and CSS classes in React?",
      answer: "Inline styles are objects passed via the style prop and scoped to a specific element, while CSS classes are managed in external stylesheets."
    },
    {
      id: 85,
      question: "How do you implement theming in React?",
      answer: "Use Context to provide theme values and styled-components or CSS variables to apply different themes."
    },
    {
      id: 86,
      question: "How do you handle accessibility in React?",
      answer: "Follow WCAG guidelines, use ARIA attributes, semantic HTML, and tools like eslint-plugin-jsx-a11y."
    },
    {
      id: 87,
      question: "What is react-helmet?",
      answer: "react-helmet is a library to manage changes to the document head, such as title and meta tags, from React components."
    },
    {
      id: 88,
      question: "What memory leak risk does useLayoutEffect have?",
      answer: "Because useLayoutEffect runs synchronously, long-running tasks inside it can block rendering and cause memory leaks if not cleaned up."
    },
    {
      id: 89,
      question: "How do you test custom hooks?",
      answer: "Use React Hooks Testing Library or renderHook from @testing-library/react-hooks to test hook behavior."
    },
    {
      id: 90,
      question: "What is react-test-renderer?",
      answer: "react-test-renderer is a package that allows you to render React components to pure JavaScript objects without a DOM."
    },
    {
      id: 91,
      question: "How do you set up environment variables in React?",
      answer: "In create-react-app, prefix variables with REACT_APP_ in a .env file and access them via process.env.REACT_APP_*."
    },
    {
      id: 92,
      question: "What is Hot Module Replacement (HMR)?",
      answer: "HMR allows modules to be updated in the browser at runtime without a full refresh."
    },
    {
      id: 93,
      question: "What is react-refresh?",
      answer: "react-refresh is a fast refresh tool for React that preserves component state while editing."
    },
    {
      id: 94,
      question: "How do you optimize bundle size in React?",
      answer: "Use code splitting, tree shaking, lazy loading, and analyze bundles with tools like webpack-bundle-analyzer."
    },
    {
      id: 95,
      question: "What are dynamic imports in React?",
      answer: "Dynamic imports allow you to load modules on demand using the import() function."
    },
    {
      id: 96,
      question: "How do you implement pagination in React?",
      answer: "Use state to track the current page, fetch data accordingly, and render page controls."
    },
    {
      id: 97,
      question: "How do you debounce user input in React?",
      answer: "Use lodash.debounce or implement a custom debounce function inside useEffect or event handlers."
    },
    {
      id: 98,
      question: "How do you integrate GraphQL with React?",
      answer: "Use libraries like Apollo Client or Relay, set up a GraphQL client, and fetch data via hooks like useQuery."
    },
    {
      id: 99,
      question: "What is Context.Consumer?",
      answer: "Context.Consumer is a component that subscribes to context changes and renders using a render prop.",
      code: `<Theme.Consumer>{
        value => <div>{value}</div>
}</Theme.Consumer>`
    },
    {
      id: 100,
      question: "What is the difference between ReactDOM.render and createRoot?",
      answer: "createRoot (React 18) enables concurrent features, while ReactDOM.render does not support them. createRoot is the new API for rendering."
    }
  ]
