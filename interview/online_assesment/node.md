# Express.js Interview Questions

## Long-Answer Questions

1. Explain how Express.js simplifies building REST APIs compared to vanilla Node.js. Describe the role of middleware in this process.
2. What is the purpose of express.json() middleware, and how does it enable parsing of request bodies in Express?
3. Describe the differences between req.params, req.query, and req.body in Express. Provide a use case for each.
4. How would you design a RESTful API for a resource like 'users'? Explain the HTTP methods and endpoints you would use.
5. What are HTTP status codes, and why are they important in a REST API? Provide examples for 200, 201, 404, and 204 in the context of user management.
6. Explain the difference between a PUT and a PATCH request in a REST API. When would you use each for updating a user resource?
7. How does JSON Web Token (JWT) authentication work in an Express API? Describe the process of generating and verifying a token.
8. What is the role of the next() function in Express middleware? Provide an example of a custom middleware that uses next().
9. Describe how role-based authorization can be implemented in an Express API. What information would you store in a JWT to support this?
10. What are the benefits of using express.Router() to modularize routes? Explain how you would structure a project with separate route files.
11. How would you implement pagination in a GET endpoint? Describe the query parameters and logic involved.
12. Explain how query-based filtering and sorting work in an Express API. Provide an example of filtering users by role and sorting by name.
13. What is rate limiting, and why is it important for an Express API? Describe how you would implement it without external libraries.
14. How does bcrypt ensure secure password hashing? Explain the steps involved in hashing and verifying a password in a registration flow.
15. What is input validation in an Express API, and why is it critical? Name two libraries or techniques for validating request data.
16. Describe the structure and purpose of an error-handling middleware in Express. How does it differ from regular middleware?
17. Explain the concept of a RESTful CRUD API for a 'products' resource. List the endpoints, HTTP methods, and their purposes.
18. How would you secure an Express API against common vulnerabilities like SQL injection, XSS, and CSRF?
19. What are environment variables, and how do you use them in an Express application to calendar sensitive data like JWT secrets?
20. Describe the process of protecting a route with JWT authentication middleware. What happens if the token is invalid or missing?
21. How would you refactor an Express application to improve modularity and maintainability? Discuss the role of controllers and routers.
22. Explain the challenges of handling asynchronous code in Express routes. How do you ensure errors in async functions are caught properly?
23. What are the trade-offs of using an in-memory array versus a database for storing users in an Express API?
24. How would you scale an Express API to handle high traffic? Discuss strategies like load balancing, caching, and clustering.
25. Describe best practices for documenting an Express REST API. What tools or formats (e.g., Swagger, OpenAPI) would you use?

## Coding Questions

1. Write an Express server with a GET / route that responds with 'Server is running'. Include express.json() middleware.
2. Create a GET /users endpoint that returns a hardcoded array of user objects, each with id, name, and email fields.
3. Implement a POST /users endpoint that adds a new user to an in-memory array. Parse the request body and return the created user with a 201 status.
4. Write a GET /users/:id endpoint that returns a user by ID from an in-memory array. Return a 404 status if the user is not found.
5. Create a PUT /users/:id endpoint that fully updates a user object in an in-memory array. Return 404 if the user doesn't exist and 200 on success.
6. Implement a PATCH /users/:id endpoint that partially updates a user's fields (e.g., name or email) in an in-memory array. Return 404 if the user is not found.
7. Write a DELETE /users/:id endpoint that removes a user from an in-memory array. Return a 204 status on success or 404 if the user doesn't exist.
8. Create a POST /login endpoint that generates a JWT for valid credentials (e.g., hardcoded username: admin, password: secret). Use an environment variable for the JWT secret.
9. Write a middleware function that verifies a JWT from the Authorization header and protects a GET /protected route. Return 401 if the token is invalid.
10. Implement a role-based authorization middleware that restricts a GET /admin route to users with an admin role in their JWT. Return 403 if unauthorized.
11. Create a full CRUD API for a products resource with endpoints: GET /products, POST /products, PUT /products/:id, and DELETE /products/:id. Use an in-memory array.
12. Refactor the user routes (GET /users, POST /users) into a separate userRoutes.js file using express.Router(). Import and use it in the main app.
13. Add pagination to a GET /users endpoint that supports page and limit query parameters (e.g., /users?page=2&limit=10). Return paginated results from an in-memory array.
14. Implement a GET /users endpoint that supports filtering by role (e.g., /users?role=admin) and sorting by name (e.g., /users?sortBy=name).
15. Write a custom rate-limiting middleware that limits each IP to 100 requests per hour. Store request counts in an in-memory object.
16. Create a POST /register endpoint that validates name, email, and password (min 6 characters), hashes the password with bcrypt, and stores the user in an in-memory array.
17. Implement an error-handling middleware that catches all errors in an Express app and returns a JSON response with a status code and message.
18. Write a GET /products/:id endpoint that retrieves a product by ID from an in-memory array. Return 404 if the product is not found.
19. Create a POST /products endpoint that adds a new product to an in-memory array. Validate that name and price are present in the request body.
20. Implement a middleware that logs the HTTP method, URL, and timestamp for every request in an Express app.
21. Write a PATCH /products/:id endpoint that partially updates a product's fields (e.g., name or price) in an in-memory array. Return 404 if the product is not found.
22. Create a POST /users endpoint that checks for duplicate emails in an in-memory array before adding a new user. Return a 400 status if the email exists.
23. Implement a GET /users endpoint that supports searching by name (e.g., /users?name=john) using case-insensitive partial matching.
24. Write a middleware that validates the presence of required fields (name, email) in a POST /users request body. Return 400 if validation fails.
25. Create a DELETE /products/:id endpoint that removes a product from an in-memory array. Return 204 on success or 404 if the product doesn't exist.
