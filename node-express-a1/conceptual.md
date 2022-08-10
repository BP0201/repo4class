### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

        The best way to handle async code in JS is to use the async / await keywords. This will halt any code that comes after a line with await in it until the request is finished. 

- What is a Promise?

        A Promise is a guarantee of a future value, which can be resolved or rejected. Used with async code.

- What are the differences between an async function and a regular function?

        An async function is working with asynchronous code, which can include making HTTP requests, so it can take slightly longer to resolve (not too long) and have special keywords like async and await that are used to help this process. A regular function does not deal with HTTP requests or awaiting a value.

- What is the difference between Node.js and Express.js?

        Express is a framework for Node, much like Flask is a framework for Python.

- What is the error-first callback pattern?

        This pattern is used to throw any errors that may occur when working with asynchronous code.

- What is middleware?

        Middleware is code that runs between the request / response cycle when working with async code.

- What does the `next` function do?

        The 'next' function can be used to go to the next app.use() line, usually used for error handling. If you pass a value in while using the next() function, it will be handled as an error.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

          One issue with the code is the repeated URL, which can be set as a variable and then using backticks you can add the username to the end of the base URL. Another issue with this code is the multiple requests that are made. An easy fix to both of these problems would look like this:



```js
const baseURL = 'https://api.github.com/users'

async function getUsers() {
  const elie = $.getJSON(`${baseURL}/elie`);
  const joel = $.getJSON(`${baseURL}/joelburton`);
  const matt = $.getJSON(`${baseURL}/mmmaaatttttt`);

  let p1 = await elie
  let p2 = await joel
  let p3 = await matt

  return [p1, p2, p3];
}
```