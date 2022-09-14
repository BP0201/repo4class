### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

            React is a front end library. You can use it when working on the front end of an app, it's great for breaking up the necessities.

- What is Babel?

            Babel is a compiler that takes in the JSX we write and turns it into valid JS.

- What is JSX?

            JSX is illegal JS that must be transpiled to JS. We do this via Babel. This allows us to create components.

- How is a Component created in React?

            A component is created in React in the form of a function using JSX and Babel.

- What are some difference between state and props?

            State is always changing, while props are consistent. State is initialized, while a prop is passed to a component.

- What does "downward data flow" refer to in React?

            Downward data flow refers to the use of props to pass certain functions or values down the component hierarchy. 

- What is a controlled component?

            A controlled component is one which is fixed in the sense that the value is always being read and memorized with state.

- What is an uncontrolled component?

            An uncontrolled component is handled by the DOM and the value is not saved in state.

- What is the purpose of the `key` prop when rendering a list of components?

            The key prop is used to give each component a unique id so if the order of components is changed for whatever reason (deletion, insertion), everything can still be referenced.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

            The index will change if a component is inserted or deleted.

- Describe useEffect.  What use cases is it used for in React components?

            useEffect is a hook that is used for "side effects." It is effective for fetching data or other asynchronous activities.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

            useRef, another hook, is used to make a reference to a certain element or value. No.

- When would you use a ref? When wouldn't you use one?

            A ref would be helpful when creating a timer, but not when you just want to create a new variable.

- What is a custom hook in React? When would you want to write one?

            A custom hook is one that you craft yourself. You would want to write one if you use the same logic several times to refactor your code and make it more readable.
