### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

        A JWT is a JSON Web Token, used to authenticate a user and validate data they send.

- What is the signature portion of the JWT?  What does it do?

        The signature portion of the JWT is added to the end of the payload, and it is used to identify the sender.

- If a JWT is intercepted, can the attacker see what's inside the payload?

        Yes, so it is important not to put sensitive information on the payload.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

        You can make a middleware function that will verify the token, and use this 
        between routes like app.use(express.json()). It will try to match the token sent in the JSON body with the SECRET_KEY, if verified, you can return next(), if not, return next(e) in a catch (e) {}.

- Compare and contrast unit, integration and end-to-end tests.

        Unit tests are used to test individual pieces of an app. Integration tests make sure these pieces work together, and end-to-end tests test the entire user experience start to finish.

- What is a mock? What are some things you would mock?

        A mock is when you have an inconsistent value returned from a piece of your app. We can mock the result to make it consistent for the sake of testing. An example of something you could mock is Math.random().

- What is continuous integration?

        Continuous integration is when you use automated testing when pushing code up. If the tests don't pass, the code is not pushed.

- What is an environment variable and what are they used for?

        Environment variables are special variables that impact the behavior of certain processes. These are used to declare what kind of environment you want to use, such as development or production in Flask. In Node, we use these to declare which Database URI to use, since we have a separate one for testing. 

- What is TDD? What are some benefits and drawbacks?

        Test Driven Development is when you write tests before writing code. It can help prevent bugs from appearing during the coding process, but takes a little longer to get started.

- What is the value of using JSONSchema for validation?

        JSONSchema is used for validating JSON, you can make sure certain key/value pairs appear in the body, even require that a given value is a certain type such as integer, string, float, etc.

- What are some ways to decide which code to test?

        When writing tests, you want to make sure you are testing the functionality of your routes/functions, making sure to test edge cases.

- What does `RETURNING` do in SQL? When would you use it?

        The RETURNING clause in SQL is used to return data when you are merely updating/inserting new data. You can pick which columns you'd like to return, or return all of them.

- What are some differences between Web Sockets and HTTP?

        HTTP requests require a refresh to appear, while Web Sockets are usually used for live changes and will appear right away, similar to AJAX.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

        I enjoy writing SQL when querying the database in Express. Routes are fairly simple to write as well. I like how everything is JSON in Express, so I think I like Express over Flask, but I like Python > JS so it's tough.