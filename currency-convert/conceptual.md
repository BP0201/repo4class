### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

Some differences between Python and JS are the syntax. For example, in JS you would write a function as function add(a,b) {}, where in Python you would write the same function as def add(a,b): ...indentation... rest. Another key difference is the ability to redeclare/reassign any variable in Python. This is not possible in JS. You can only redeclare let variables and even then you don't have the same flexibility. One last key difference is the use of the terminal with Python, which is similar to the console with JS. You cannot use the terminal in a JS file, just as you cannot use the console with a Python file.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

  dict.get('c', None)

  for letter in alphabet:
    if letter in dict:
      return dict``['letter']``


- What is a unit test?

  A unit test is a test that tests an individual unit or function in an application.


- What is an integration test?

  An integration test is used to make sure multiple pieces of the application work together, multiple functions, etc.


- What is the role of web application framework, like Flask?

  Web application frameworks are essentially shortcuts, or tools that make it much easier to communicate with a server.


- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

  Typically you would use a route URL to create a page with the parameters as the main subject of the page, while a query param is better for additional, and sometimes optional, information to improve the page for the user.


- How do you collect data from a URL placeholder parameter using Flask?

  @app.route('url/``<param>``), def func(param): blah blah blah


- How do you collect data from the query string using Flask?

  data = request.form``['some_form']``


- How do you collect data from the body of the request using Flask?

  You would pass in variables when rendering the template, which would look something like:

  return render_template('some.html', data=data)
  Then in the html file you would use {{data}}


- What is a cookie and what kinds of things are they commonly used for?

  A cookie is a very small storage that uses a key/value pair, usually to enhance a user's experience on a website. 


- What is the session object in Flask?

  The session is like a big cookie, it remembers what it is told and will pass the info to the browser everytime it is visited, until you clear cache.


- What does Flask's `jsonify()` do?

  `jsonify()` can be used to properly convert JSON type data and return it.
