export const cssQuestions = [
  {
    question: "What is the box model in CSS?",
    answer: "The CSS box model consists of content, padding, border, and margin. Content is the actual content area, padding is the space between content and border, border is the line around the padding, and margin is the space outside the border."
  },
  {
    question: "Explain the difference between display: none and visibility: hidden",
    answer: "display: none removes the element from the document flow and hides it completely, while visibility: hidden keeps the element in the document flow (preserving its space) but makes it invisible."
  },
  {
    question: "What are CSS Grid and Flexbox?",
    answer: "CSS Grid and Flexbox are modern layout systems. Grid is designed for two-dimensional layouts (rows and columns), while Flexbox is designed for one-dimensional layouts (either rows OR columns)."
  },
  {
    question: "What is specificity in CSS?",
    answer: "Specificity determines which CSS rule is applied when multiple rules could apply to the same element. It is calculated based on the type of selectors used in the rule."
  },
  {
    question: "What is the difference between relative, absolute, fixed, and sticky positioning?",
    answer: "Relative positions the element relative to its normal position. Absolute positions it relative to the nearest positioned ancestor. Fixed positions it relative to the viewport. Sticky toggles between relative and fixed depending on scroll position."
  },
  {
    question: "What is the difference between em, rem, %, and px units in CSS?",
    answer: "px is an absolute unit, em is relative to the font-size of the parent, rem is relative to the root font-size, and % is relative to the parent element’s dimension."
  },
  {
    question: "What is the default position value of an HTML element?",
    answer: "The default position value of an HTML element is static."
  },
  {
    question: "How can you center a div horizontally and vertically?",
    answer: "You can center a div using Flexbox with justify-content: center and align-items: center, or using CSS Grid with place-items: center, or using margin auto and positioning."
  },
  {
    question: "What is the z-index in CSS?",
    answer: "z-index determines the stack order of elements. Higher values are displayed in front of lower values."
  },
  {
    question: "How does inheritance work in CSS?",
    answer: "Inheritance allows certain properties (like font and color) to be passed from parent to child elements. Not all properties are inherited by default."
  },{
    question: "What is a pseudo-class in CSS?",
    answer: "A pseudo-class is used to define the special state of an element. For example, :hover applies a style when the user hovers over an element."
  },
  {
    question: "What is a pseudo-element in CSS?",
    answer: "A pseudo-element allows you to style specific parts of an element, like ::before or ::after to insert content before or after an element's content."
  },
  {
    question: "What does the !important declaration do?",
    answer: "The !important declaration overrides any other declarations, even inline styles or more specific selectors."
  },
  {
    question: "How can you apply styles to multiple selectors?",
    answer: "You can apply styles to multiple selectors by separating them with commas. For example: h1, h2, p { color: red; }"
  },
  {
    question: "What is the difference between inline, block, and inline-block elements?",
    answer: "Inline elements do not start on a new line and only take up as much width as necessary. Block elements start on a new line and take up the full width. Inline-block elements are like inline but allow setting width and height."
  },
  {
    question: "What is the difference between max-width and min-width?",
    answer: "max-width sets the maximum width an element can be, while min-width sets the minimum width an element can shrink to."
  },
  {
    question: "What is the use of the 'calc()' function in CSS?",
    answer: "The calc() function is used to perform calculations to determine CSS property values dynamically. For example: width: calc(100% - 50px);"
  },
  {
    question: "How can you make a website responsive?",
    answer: "You can make a website responsive using media queries, flexible grids, fluid images, and modern layout techniques like Flexbox and CSS Grid."
  },
  {
    question: "What are media queries in CSS?",
    answer: "Media queries allow you to apply different styles based on the device characteristics like screen width, height, resolution, and orientation."
  },
  {
    question: "What is the difference between class and ID selectors in CSS?",
    answer: "An ID selector targets a unique element using '#', while a class selector targets multiple elements using '.'. IDs must be unique; classes can be reused."
  },{
    question: "What are vendor prefixes in CSS?",
    answer: "Vendor prefixes are used to ensure compatibility with different browsers. Examples include -webkit-, -moz-, -ms-, and -o-."
  },
  {
    question: "How can you add a background image in CSS?",
    answer: "Use the background-image property: background-image: url('image.jpg');"
  },
  {
    question: "What is the difference between relative and absolute units?",
    answer: "Relative units (em, rem, %, vw, vh) depend on another value. Absolute units (px, pt, cm) are fixed and don't scale."
  },
  {
    question: "What does the 'inherit' keyword do in CSS?",
    answer: "The inherit keyword forces a property to inherit its value from its parent element."
  },
  {
    question: "What does the 'initial' keyword do in CSS?",
    answer: "The initial keyword sets a property to its default value defined by the browser."
  },
  {
    question: "What does the 'unset' keyword do in CSS?",
    answer: "The unset keyword acts as inherit if the property is inherited, otherwise it acts as initial."
  },
  {
    question: "What are transitions in CSS?",
    answer: "Transitions allow you to smoothly change property values over time using properties like transition-duration and transition-timing-function."
  },
  {
    question: "What are animations in CSS?",
    answer: "Animations allow for more complex property changes using keyframes and the animation property."
  },
  {
    question: "How do you create a CSS animation?",
    answer: "Define @keyframes and use the animation property: animation: slide 2s infinite;"
  },
  {
    question: "What are keyframes in CSS?",
    answer: "@keyframes define the styles at various points during the animation sequence."
  },
  {
    question: "What is the purpose of the 'overflow' property?",
    answer: "The overflow property controls what happens to content that overflows an element's box. Values include visible, hidden, scroll, and auto."
  },
  {
    question: "What is the difference between static and relative positioning?",
    answer: "Static is the default and ignores top/right/bottom/left. Relative positions the element relative to its normal position."
  },
  {
    question: "What is opacity in CSS?",
    answer: "Opacity defines the transparency level of an element. 0 is fully transparent, 1 is fully opaque."
  },
  {
    question: "How do you hide an element in CSS?",
    answer: "You can hide an element using display: none or visibility: hidden."
  },
  {
    question: "How do you apply styles conditionally in CSS?",
    answer: "Use selectors like :hover, :focus, :checked, and @media for conditional styling."
  },
  {
    question: "How do you style a link in CSS?",
    answer: "Use pseudo-classes like :link, :visited, :hover, and :active."
  },
  {
    question: "What is the difference between nth-child and nth-of-type?",
    answer: ":nth-child matches the element based on position among all children, while :nth-of-type matches based on type."
  },
  {
    question: "What is the difference between 'visibility: hidden' and 'opacity: 0'?",
    answer: "Both hide the element visually, but 'opacity: 0' allows it to be clickable while 'visibility: hidden' does not."
  },
  {
    question: "How do you make an element responsive to screen size?",
    answer: "Use percentage widths, media queries, and flexible units like vw, vh, em, and rem."
  },
  {
    question: "What is stacking context in CSS?",
    answer: "A stacking context is a three-dimensional conceptualization of HTML elements along the z-axis."
  },
  {
    question: "What is the default z-index value of elements?",
    answer: "The default z-index is auto, meaning it follows the natural stack order."
  },
  {
    question: "How can you apply a shadow to an element?",
    answer: "Use the box-shadow property: box-shadow: 2px 2px 5px rgba(0,0,0,0.3);"
  },
  {
    question: "How do you round the corners of an element?",
    answer: "Use the border-radius property: border-radius: 10px;"
  },
  {
    question: "What is the difference between padding and margin?",
    answer: "Padding is space inside the border. Margin is space outside the border between elements."
  },
  {
    question: "What is line-height in CSS?",
    answer: "Line-height controls the amount of space above and below inline elements like text."
  },
  {
    question: "What are web safe fonts?",
    answer: "Web safe fonts are fonts that are likely to be installed on most devices, like Arial, Times New Roman, and Courier New."
  },
  {
    question: "What is a media feature in a media query?",
    answer: "A media feature describes a characteristic of the user's device, like width, height, resolution, orientation, etc."
  },
  {
    question: "What are the types of combinators in CSS?",
    answer: "Combinators include descendant (space), child (>), adjacent sibling (+), and general sibling (~)."
  },
  {
    question: "What does object-fit do in CSS?",
    answer: "The object-fit property defines how an image or video should be resized to fit its container."
  },
  {
    question: "How do you import CSS into another CSS file?",
    answer: "Use @import url('styles.css'); at the top of the file."
  },
  {
    question: "What is a universal selector?",
    answer: "The universal selector (*) applies styles to all elements in the document."
  },
  {
    question: "What does the 'position: sticky' do?",
    answer: "It makes the element toggle between relative and fixed, depending on the scroll position."
  },
  {
    question: "How can you prevent an element from shrinking in a Flexbox layout?",
    answer: "Use flex-shrink: 0;"
  },
  {
    question: "What is the difference between inline and block elements?",
    answer: "Inline elements do not start on a new line and can't set width/height, while block elements start on a new line and occupy full width."
  },
  {
    question: "How can you change the cursor on hover?",
    answer: "Use the cursor property: cursor: pointer;"
  },
  {
    question: "How do you apply a gradient in CSS?",
    answer: "Use background-image with linear-gradient or radial-gradient."
  },
  {
    question: "What is specificity hierarchy?",
    answer: "Specificity hierarchy determines which CSS rule wins in case of conflicts: inline > ID > class > element."
  },
  {
    question: "What is the difference between float and position?",
    answer: "Float removes the element from normal flow and lets text wrap around. Position allows precise placement based on offsets."
  },
  {
    question: "What is clearfix in CSS?",
    answer: "Clearfix is a technique used to fix issues with floated elements inside a container."
  },
  {
    question: "What is a responsive breakpoint?",
    answer: "Breakpoints are specific widths at which the layout adjusts for better display on different devices."
  },{
    question: "How can you make a div take up the full height of the viewport?",
    answer: "Set the height to 100vh: height: 100vh;"
  },
  {
    question: "What is the difference between absolute and fixed positioning?",
    answer: "Absolute is positioned relative to the nearest positioned ancestor, while fixed is relative to the viewport and doesn't move on scroll."
  },
  {
    question: "How do you vertically align text in a div?",
    answer: "Use Flexbox with align-items: center or set line-height equal to the height for single-line text."
  },
  {
    question: "What is the difference between overflow: scroll and overflow: auto?",
    answer: "overflow: scroll always shows scrollbars; overflow: auto only shows them when necessary."
  },
  {
    question: "What is the difference between visibility and display?",
    answer: "Visibility hides the element but keeps its space; display removes the element from the document flow."
  },
  {
    question: "What are custom properties in CSS?",
    answer: "Custom properties are CSS variables defined using --var-name and used with var(--var-name)."
  },
  {
    question: "What is a responsive design?",
    answer: "Responsive design adapts layout and content based on screen size and device type."
  },
  {
    question: "How do you prevent text from wrapping?",
    answer: "Use white-space: nowrap;"
  },
  {
    question: "How can you animate color changes in CSS?",
    answer: "Use the transition property with color: transition: color 0.5s;"
  },
  {
    question: "What is the difference between white-space: nowrap and overflow: hidden?",
    answer: "nowrap prevents line breaks; overflow: hidden hides overflowing content."
  },
  {
    question: "How do you make an element fill its container?",
    answer: "Use width: 100%; height: 100%;"
  },
  {
    question: "What is isolation in CSS?",
    answer: "The isolation property creates a new stacking context. Useful for z-index management."
  },
  {
    question: "How do you set a maximum height for an element?",
    answer: "Use max-height: value;"
  },
  {
    question: "What does 'display: contents' do?",
    answer: "It makes the element disappear, but its children remain and behave as if they were direct children of the parent."
  },
  {
    question: "What is pointer-events: none in CSS?",
    answer: "It disables mouse interactions on an element."
  },
  {
    question: "What is the difference between :nth-child and :nth-of-type?",
    answer: ":nth-child counts all siblings; :nth-of-type counts only elements of the same type."
  },
  {
    question: "What is rem in CSS?",
    answer: "rem stands for 'root em' and is relative to the root element's font-size."
  },
  {
    question: "How can you make a container scrollable?",
    answer: "Set overflow: auto or overflow: scroll."
  },
  {
    question: "What are focus styles?",
    answer: "Focus styles appear when an element receives keyboard focus, often using the :focus pseudo-class."
  },
  {
    question: "What is the difference between border-box and content-box?",
    answer: "In border-box, padding and border are included in the width. In content-box, they're added outside the width."
  },{
    question: "How do you create a fixed header?",
    answer: "Set position: fixed; top: 0; width: 100%; z-index: high value;"
  },
  {
    question: "What is the use of the clip-path property?",
    answer: "clip-path defines a clipping region to show part of an element."
  },
  {
    question: "How can you apply styles based on the input type?",
    answer: "Use attribute selectors: input[type='text'] { ... }"
  },
  {
    question: "What does ::placeholder do in CSS?",
    answer: "It styles the placeholder text in input fields."
  },
  {
    question: "What does the :not() selector do?",
    answer: ":not() excludes specific elements from a rule."
  },
  {
    question: "What does the :checked pseudo-class target?",
    answer: "It targets radio buttons and checkboxes that are checked."
  },
  {
    question: "What is the difference between transition and animation?",
    answer: "Transition is for simple property changes; animation allows more complex multi-step changes with keyframes."
  },
  {
    question: "How do you make an element fade in using CSS?",
    answer: "Set opacity from 0 to 1 using keyframes or transition."
  },
  {
    question: "What is hover state in CSS?",
    answer: "It's a pseudo-class that applies styles when the mouse hovers over an element: a:hover { ... }"
  },
  {
    question: "What are grid-template-columns and grid-template-rows?",
    answer: "They define the column and row structure of a CSS Grid layout."
  },
  {
    question: "What does gap do in Flexbox or Grid?",
    answer: "The gap property sets spacing between rows and columns in Grid or between items in Flexbox."
  },
  {
    question: "What is object-position in CSS?",
    answer: "It sets the alignment of the content inside replaced elements like <img>."
  },
  {
    question: "What is the aspect-ratio property?",
    answer: "aspect-ratio sets the preferred width-to-height ratio of an element."
  },
  {
    question: "How do you center text vertically in a div?",
    answer: "Use Flexbox with align-items: center or vertical-align with table-cell."
  },
  {
    question: "How can you apply a blur effect in CSS?",
    answer: "Use the filter property: filter: blur(5px);"
  },
  {
    question: "What is the use of the will-change property?",
    answer: "It hints to the browser what elements will change, allowing optimization ahead of time."
  },
  {
    question: "What is the currentColor keyword?",
    answer: "currentColor uses the current value of the color property wherever it's applied."
  },
  {
    question: "How do you override inherited styles?",
    answer: "Use more specific selectors, !important, or reset the property using initial or unset."
  },
  {
    question: "What is a logical property in CSS?",
    answer: "Logical properties are writing-mode-aware alternatives like margin-inline-start instead of margin-left."
  },
  {
    question: "How do you remove list bullets?",
    answer: "Use list-style: none;"
  }
];
