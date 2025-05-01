export const htmlQuestions = [
  {
    question: "What is the purpose of the DOCTYPE declaration?",
    answer: "The DOCTYPE declaration tells the browser which version of HTML the document is written in. It must be the first line of code in your HTML document. For HTML5, the declaration is simply <!DOCTYPE html>."
  },
  {
    question: "What are semantic HTML elements?",
    answer: "Semantic HTML elements are tags that provide meaning to the content structure rather than just presentation. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>."
  },
  {
    question: "Explain the importance of accessibility in HTML.",
    answer: "HTML accessibility ensures that websites are usable by people with disabilities. This includes using proper semantic elements, ARIA labels, alt text for images, and ensuring keyboard navigation works correctly."
  },
  {
    question: "What is the difference between <div> and <span>?",
    answer: "<div> is a block-level element used for grouping larger chunks of content, while <span> is an inline element used for grouping small pieces of content within a line."
  },
  {
    question: "What is the difference between block-level and inline elements?",
    answer: "Block-level elements start on a new line and take up the full width available, while inline elements do not start on a new line and only take up as much width as necessary."
  },
  {
    question: "What are void elements in HTML?",
    answer: "Void elements are elements that do not have closing tags and cannot have any child elements. Examples include <img>, <br>, <hr>, <input>, <meta>, and <link>."
  },
  {
    question: "What is the purpose of the alt attribute in <img> tag?",
    answer: "The alt attribute provides alternative text for an image if the image cannot be displayed. It also improves accessibility for users relying on screen readers."
  },
  {
    question: "What is the difference between <strong> and <b>?",
    answer: "<strong> indicates that the text is of strong importance, while <b> makes the text bold without adding importance or emphasis semantically."
  },
  {
    question: "What is the difference between <em> and <i>?",
    answer: "<em> emphasizes the text and conveys meaning to assistive technologies, while <i> simply renders text in italic style without semantic importance."
  },
  {
    question: "What is the purpose of the <meta> tag?",
    answer: "The <meta> tag provides metadata about the HTML document, such as character set, author, description, and viewport settings."
  },
  {
    question: "What does the 'viewport' meta tag do?",
    answer: "The viewport meta tag controls how a web page is displayed on mobile devices, including scaling and sizing."
  },
  {
    question: "What is the difference between id and class attributes?",
    answer: "An id uniquely identifies an element on a page and must be unique, while a class can be shared by multiple elements for styling or JavaScript purposes."
  },
  {
    question: "What is the difference between <ol>, <ul>, and <dl>?",
    answer: "<ol> creates an ordered (numbered) list, <ul> creates an unordered (bulleted) list, and <dl> creates a description list of terms and definitions."
  },
  {
    question: "What are data-* attributes in HTML?",
    answer: "Data attributes allow embedding custom data in HTML elements using the format data-name='value', which can be accessed using JavaScript."
  },
  {
    question: "What is the difference between <link> and <a>?",
    answer: "<link> defines a relationship between the document and an external resource (commonly CSS files), while <a> defines a hyperlink to navigate to another URL or resource."
  },
  {
    question: "What is the use of <noscript> tag?",
    answer: "<noscript> defines content to display if JavaScript is disabled in the user's browser."
  },
  {
    question: "What is the difference between HTML and XHTML?",
    answer: "HTML is less strict and more forgiving, while XHTML follows stricter XML syntax rules, requiring all tags to be properly closed and nested."
  },
  {
    question: "What is the difference between absolute and relative URLs?",
    answer: "Absolute URLs specify the full path including protocol and domain, while relative URLs specify the path relative to the current page."
  },
  {
    question: "How do you create a hyperlink that opens in a new tab?",
    answer: "Add target='_blank' to the <a> tag to open the link in a new browser tab."
  },
  {
    question: "What are inline frames (<iframe>) used for?",
    answer: "<iframe> embeds another HTML page within the current page."
  },
  {
    question: "What is a favicon and how do you include it in HTML?",
    answer: "A favicon is a small icon displayed in the browser tab. It is included using <link rel='icon' href='favicon.ico'> in the <head> section."
  },
  {
    question: "What is the difference between <script> and <noscript>?",
    answer: "<script> is used to embed JavaScript, while <noscript> provides fallback content if JavaScript is disabled."
  },
  {
    question: "What is the difference between <section> and <article>?",
    answer: "<section> defines a thematic grouping of content, while <article> represents a self-contained piece of content that could stand alone."
  },
  {
    question: "What is the difference between <thead>, <tbody>, and <tfoot>?",
    answer: "<thead> groups table header content, <tbody> groups table body content, and <tfoot> groups table footer content."
  },
  {
    question: "How do you make a table cell span multiple columns?",
    answer: "Use the colspan attribute in <td> or <th> to make a cell span multiple columns."
  },
  {
    question: "How do you make a table cell span multiple rows?",
    answer: "Use the rowspan attribute in <td> or <th> to make a cell span multiple rows."
  },
  {
    question: "What is a placeholder attribute?",
    answer: "The placeholder attribute provides a short hint inside an input field to describe the expected value."
  },
  {
    question: "What is the difference between required and readonly attributes?",
    answer: "The required attribute forces the user to fill out a field before submitting, while readonly makes the field uneditable but allows submission."
  },
  {
    question: "What does the autocomplete attribute do?",
    answer: "The autocomplete attribute enables or disables autofill for form fields based on stored user data."
  },
  {
    question: "What is the difference between GET and POST methods in a form?",
    answer: "GET appends form data in the URL, suitable for non-sensitive data; POST sends data in the request body, more secure for sensitive data."
  },
  {
    question: "What is progressive enhancement?",
    answer: "Progressive enhancement is a strategy that builds a basic, functional experience first and adds enhancements for capable browsers/devices."
  },
  {
    question: "What is graceful degradation?",
    answer: "Graceful degradation is designing an application so that it works acceptably in older browsers even if some features are missing."
  },
  {
    question: "What is ARIA and why is it used?",
    answer: "ARIA (Accessible Rich Internet Applications) provides attributes to enhance accessibility for dynamic content and custom widgets."
  },
  {
    question: "What is the difference between <button> and <input type='submit'>?",
    answer: "<button> can contain HTML and text, allowing more flexible content, while <input type='submit'> only submits a form with a simple button."
  },
  {
    question: "What does the <base> tag do?",
    answer: "The <base> tag specifies a base URL for all relative URLs in a document."
  },
  {
    question: "What is the difference between <mark> and <highlight>?",
    answer: "<mark> highlights text as part of a search result; <highlight> is not a valid HTML element."
  },
  {
    question: "What is the <picture> element used for?",
    answer: "The <picture> element allows defining multiple image sources for different device resolutions or formats."
  },
  {
    question: "What does the crossorigin attribute do on <img> or <script>?",
    answer: "It controls CORS (Cross-Origin Resource Sharing) requests for images or scripts loaded from other domains."
  },
  {
    question: "What is a custom element in HTML?",
    answer: "A custom element is a user-defined HTML tag defined using Web Components to encapsulate functionality and style."
  },
  {
    question: "What is shadow DOM?",
    answer: "Shadow DOM allows encapsulating a component's DOM structure and styles so they do not affect the main document."
  },
  {
    question: "What is the difference between defer and async in script tags?",
    answer: "defer loads the script in parallel but executes it after HTML parsing; async loads and executes the script immediately when ready."
  },
  {
    question: "What is a contenteditable attribute?",
    answer: "The contenteditable attribute makes an HTML element editable by the user."
  },
  {
    question: "What is the <template> element?",
    answer: "<template> defines HTML content that is not rendered immediately but can be cloned and inserted into the DOM via JavaScript."
  },
  {
    question: "What is the <details> and <summary> tag used for?",
    answer: "<details> creates a disclosure widget that users can open or close; <summary> defines the visible heading."
  },
  {
    question: "What is a manifest file in HTML5?",
    answer: "A manifest file lists resources for offline caching in HTML5 applications (deprecated in favor of Service Workers)."
  },
  {
    question: "What is a viewport unit?",
    answer: "Viewport units (vw, vh, vmin, vmax) are relative to the size of the viewport and used in CSS for responsive design."
  },
  {
    question: "What are global attributes in HTML?",
    answer: "Global attributes are valid on all HTML elements, like id, class, style, title, data-*, lang, dir."
  },
  {
    question: "What is the use of the hidden attribute?",
    answer: "The hidden attribute makes an element not visible on the page."
  },
  {
    question: "What is the role of the rel attribute in a <link> tag?",
    answer: "The rel attribute specifies the relationship between the current document and the linked resource."
  },
  {
    question: "What is the difference between attribute and property in HTML?",
    answer: "Attributes are defined in the HTML markup, while properties are values stored in the DOM objects representing the elements."
  },
  {
    question: "What is the role of the <address> tag?",
    answer: "The <address> tag provides contact information for its nearest article or body ancestor."
  },
  {
    question: "What is the <time> element used for?",
    answer: "<time> represents a specific time or date in a machine-readable format."
  },
  {
    question: "What is a polyfill?",
    answer: "A polyfill is JavaScript code that replicates newer browser features in older browsers that don’t support them."
  },
  {
    question: "What is the difference between <meta charset='UTF-8'> and <meta http-equiv>?",
    answer: "<meta charset='UTF-8'> defines character encoding, while <meta http-equiv> can define HTTP headers like refresh or content type."
  },
  {
    question: "What is an empty element?",
    answer: "An empty element is an HTML element that doesn't have any content or closing tag, like <br> or <hr>."
  },
  {
    question: "How do you disable an input field in HTML?",
    answer: "Add the disabled attribute to an <input> element to make it non-editable and excluded from form submission."
  },
  {
    question: "What does the accept attribute do on a file input?",
    answer: "The accept attribute restricts the types of files that can be selected for upload."
  },
  {
    question: "What is the <abbr> tag?",
    answer: "The <abbr> tag defines an abbreviation or acronym with an optional title attribute to specify its full form."
  },
  {
    question: "What is the <progress> tag used for?",
    answer: "<progress> represents the progress of a task like a download or file transfer."
  },
  {
    question: "What is the <meter> tag used for?",
    answer: "<meter> represents a scalar measurement within a known range, such as a disk usage indicator."
  },
  {
    question: "What is the difference between draggable and contenteditable attributes?",
    answer: "draggable makes an element draggable, while contenteditable makes an element editable."
  },
  {
    question: "What is the <fieldset> and <legend> tag used for?",
    answer: "<fieldset> groups related form elements, and <legend> provides a caption for the fieldset."
  },
  {
    question: "What is the difference between <sup> and <sub>?",
    answer: "<sup> renders text as superscript; <sub> renders text as subscript."
  },
  {
    question: "What is the <bdi> tag?",
    answer: "<bdi> isolates a span of text that might be formatted in a different direction than surrounding text."
  },
  {
    question: "What is the <wbr> tag?",
    answer: "<wbr> defines a word break opportunity, suggesting where a long word can break if needed."
  },
  {
    question: "What is the <main> tag?",
    answer: "<main> specifies the main content of the document that is unique and excludes navigation or sidebars."
  },
  {
    question: "What is the <output> tag?",
    answer: "<output> represents the result of a calculation or user action."
  },
  {
    question: "What is the <canvas> element used for?",
    answer: "<canvas> is used to draw graphics via JavaScript (like charts, games, or drawings)."
  },
  {
    question: "What is the difference between <embed> and <object>?",
    answer: "<embed> is a self-contained tag for embedding external resources, while <object> can nest fallback content."
  },
  {
    question: "What does the sandbox attribute do on <iframe>?",
    answer: "The sandbox attribute applies extra restrictions on content loaded inside an iframe, like disabling scripts or forms."
  },
  {
    question: "What is the difference between innerHTML and outerHTML?",
    answer: "innerHTML returns or sets the content inside an element, while outerHTML returns or sets the element including its tags."
  },
  {
    question: "How do you link an external stylesheet in HTML?",
    answer: "Use <link rel='stylesheet' href='styles.css'> inside the <head> section."
  },
  {
    question: "What is the default display value of <div> and <span>?",
    answer: "<div> has display:block; <span> has display:inline by default."
  },
  {
    question: "What is the difference between the title attribute and the alt attribute?",
    answer: "title shows a tooltip on hover; alt provides alternative text for images if they can't be displayed."
  },
  {
    question: "How do you specify multiple file uploads in HTML?",
    answer: "Add the multiple attribute to an <input type='file'> element to allow selecting multiple files."
  },
  {
    question: "What is the use of the download attribute on an <a> tag?",
    answer: "The download attribute prompts the browser to download the linked file instead of navigating to it."
  },
  {
    question: "What is the <pre> tag used for?",
    answer: "<pre> displays preformatted text, preserving spaces and line breaks."
  },
  {
    question: "What is the difference between <code> and <kbd>?",
    answer: "<code> represents code snippets; <kbd> represents user input via keyboard."
  },
  {
    question: "What is the <samp> tag used for?",
    answer: "<samp> represents sample output from a computer program."
  },
  {
    question: "What does the translate attribute do?",
    answer: "The translate attribute specifies whether the content should be translated when using automated translation tools."
  },
  {
    question: "What is the <script type='module'>?",
    answer: "type='module' indicates that the script should be treated as a JavaScript module, supporting import/export syntax."
  },
  {
    question: "What does the ismap attribute on <img> do?",
    answer: "The ismap attribute turns an <img> inside a link into a server-side image map, sending click coordinates to the server."
  },
  {
    question: "What is a formnovalidate attribute?",
    answer: "formnovalidate disables form validation for a specific <button type='submit'>."
  },
  {
    question: "What is the accept-charset attribute in <form>?",
    answer: "accept-charset specifies the character encodings that the server accepts for form submission."
  }
];
