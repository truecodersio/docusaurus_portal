---
title: "Exercise: Express Routing"
slug: "/express-routing-exercise"
description: Express Routing Exercise with Steps
keywords: [javascript, node.js, express.js, routing]
---

## Objective

Your objective is to create a server using Express.js with multiple CRUD endpoints for interacting with mock user data.

## Getting Started

Fork and clone the [node exercise repository](https://github.com/Bryantellius/node-exercise).

## Steps

- [Exercise 1: Direct Requests to Routes](#exercise-1-direct-requests-to-routes)
- [Exercise 2: Create User CRUD Routes](#exercise-2-create-user-crud-routes)
- [Exercise 3: Finish the GET Users Route](#exercise-3-finish-the-get-users-route)
- [Exercise 4: Finish the POST Users Route](#exercise-4-finish-the-post-users-route)
- [Exercise 5: Finish the PUT Users Route](#exercise-5-finish-the-put-users-route)
- [Exercise 6: Finish the DELETE Users Route](#exercise-6-finish-the-delete-users-route)
- [Exercise 7: Direct Requests to User Routes](#exercise-7-direct-requests-to-user-routes)

### Exercise 1: Direct Requests to Routes

In you `server.js` file:

1. Use a default import to import `router` from the `router/index.js` file
2. Use `app.use()` to handle all requests matching `"/api"` with `router`

### Exercise 2: Create User CRUD Routes

In `routes/`:

1. Create a new file named `users.route.js`
2. Import `express` from the express package
3. Import `db` from `mockdb/` (make sure to adjust the path relative to the current file)
   - `db` is a mock database service with CRUD methods to interact with the mock data
4. Create a variable named `router`, and assign the return value from `express.Router()` as its value
5. Create a `get` route that matches the path `/:id?`
6. Create a `post` route that matches the path `/`
7. Create a `put` route that matches the path `/:id`
8. Create a `delete` route that matches the path `/:id`
9. Export `router` as the default export

> We will direct paths already matching `"/api/users"` to these routes

### Exercise 3: Finish the GET Users Route

In the request handler for GET requests, set up the following:

1. Destructure `id` from `req.params`
   - `req.params` is an object that contains the parsed key/value pairs from the url parameters
2. Declare a variable named `data`
   - do not assign it a value
3. Create an `if/else` statement that checks if `id` is truthy
   - if it is, `data` should be the result of `await db.getOne(id)`
   - if it isn't, `data` should be the result of `await db.getAll()`
4. Send `data` as the _json_ response to the request

### Exercise 4: Finish the POST Users Route

In the request handler for POST requests, set up the following:

1. Declare a variable named `newUser` and assign it the value of `req.body`
   - `req.body` is an object that contains the parsed request body as JSON
2. Declare a variable named `data` and assign it the value of `await db.add(newUser)`
3. Send `data` as the _json_ response to the request

### Exercise 5: Finish the PUT Users Route

In the request handler for PUT requests, set up the following:

1. Destructure `id` from `req.params`
   - `req.params` is an object that contains the parsed key/value pairs from the url parameters
2. Declare a variable named `updatedUser` and assign it the value of `req.body`
   - `req.body` is an object that contains the parsed request body as JSON
3. Declare a variable named `data` and assign it the value of `await db.update(id, newUser)`
4. Send `data` as the _json_ response to the request

### Exercise 6: Finish the DELETE Users Route

In the request handler for DELETE requests, set up the following:

1. Destructure `id` from `req.params`
   - `req.params` is an object that contains the parsed key/value pairs from the url parameters
2. Declare a variable named `data` and assign it the value of `await db.remove(id)`
3. Send `data` as the _json_ response to the request

### Exercise 7: Direct Requests to User Routes

In `routes/index.js`:

1. Import the router as `userRouter` from `users.route.js`
2. Use `router.use()` to handle all requests matching `"/users"` with `userRouter`

Test your routes with the browser or postman. If there are any errors, go back to `users.route.js` and see if you can resolve the issues. Happy Hacking!

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

<!-- - [React #4: React Hooks Exercise Video](https://vimeo.com/743441262) on Vimeo -->

- [Express Routing Exercise Repo](https://github.com/Bryantellius/node-exercise/tree/http-express-server) on Github
