### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?

              PostgreSQL is an app that allows you to create and connect to your own databases.

- What is the difference between SQL and PostgreSQL?

              SQL is a coding language used to interact with a database, while PostgreSQL is what the database runs on.




- In `psql`, how do you connect to a database?

              \c database_name





- What is the difference between `HAVING` and `WHERE`?

              `HAVING` is used to further filter a result when a `GROUP BY` statement is present, while `WHERE` can be used whenever to begin filtering results.






- What is the difference between an `INNER` and `OUTER` join?

          An INNER join will give you all overlapping data across 2 tables, while an OUTER join will return more than just overlapping data.






- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?

          A 'left' join combines all data from the left table (table being SELECTed from) with overlapping data from the 'right'. A right join does the opposite.






- What is an ORM? What do they do?

        ORM, or Object Relational Mapping, a technique used to organize tables to optimize relationships among tables.






- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?

        HTTP requests are live and don't require a page refresh, while server side requests do.






- What is CSRF? What is the purpose of the CSRF token?

        A CSRF is a token used to validate form data and prevent attacks from malicious form data.






- What is the purpose of `form.hidden_tag()`?


        form.hidden_tag() is used to hide certain form inputs such as the CSRF input which provides the CSRF token to prevent users from seeing the key.