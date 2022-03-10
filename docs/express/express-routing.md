---
title: "Express Routing"
slug: "/express-routing"
---

## Why

[Express](https://expressjs.com/) enables us to build our applications with a minimal interface. It provides us the tools that are required to build our application, without needing to worry about low level protocols, processes, etc.

We can use ExpressJS’s web application framework to build simple API for websites, web apps and servers. A significant benefit for using Express is it’s flexibility. Frameworks such as Rails and Django have an opinionated way of building applications, while Express has no "best way" to do something. It is very flexible and pluggable. There are many modules available on npm that we can directly use alongside Express.

## What

Express is considered a minimal and flexible Node.js web application framework. It comes with easy to use features for web and mobile applications. Express was developed by TJ Holowaychuk and is maintained by the Node.js foundation and numerous open source contributors.

With access to HTTP methods and middleware, Express is a great tool for creating APIs fairly quickly, without disconnecting us from the Node.js features we previously learned.

## How

### Creating a Simple Express Application and API Endpoint

First, we’ll need to create a new project folder and initialize npm (create our `package.json` file).

```sh
npm init
```

Now let’s install Express.js

```sh
npm install express --save
```

In our index.js file, we need to import express. Then, we can create an express application by calling the express function that we import from the express module:

```js
const express = require("express");

const app = express();
```

Now let’s say that we want to send a response to the client when they request from our main API endpoint “/”. We can easily set up a GET request handler with the following:

```js
app.get("/", (req, res) => {
  try {
    res.status(200);
    res.send("Hello World!");
  } catch (error) {
    res.status(500);
    res.send("A server error occurred while handling your request.");
  }
});
```

Lastly, we need to set our server to listen for requests at a specified port. Let’s do that now:

```js
app.listen(3000, () => console.log("Server listening on port 3000..."));
```

Now when we start our server with `node index.js`, we will create our express application that listens for requests on port 3000.

> NOTE: At this point, if the client sends a request to an endpoint that we haven’t specified (i.e. anything other than “/” in our example, the server will respond with “404 not found”).

### Routing

With Express, we can use HTTP utility methods to determine how our application responds to an HTTP request.

Above, we created an instance of express and named it ‘app’. Then we used the HTTP utility method ‘get’ to specify a route and request handler function to be executed per request.

Common request types are:

- GET
- POST
- PUT
- DELETE

```js
app.get("/", (req, res) => {
  // ...
});

app.post("/blog", (req, res) => {
  // ...
});

app.put("/blog", (req, res) => {
  // ...
});

app.delete("/blog", (req, res) => {
  // ...
});
```

#### Response Methods

There are several response methods we can utilize in our request handler callback function.

- `res.download()` - prompts a file to be downloaded
- `res.end()` - ends the response process, usually without any data
- `res.json()` - sends a json response
- `res.redirect()` - redirects a request to a new path, default status code 302
- `res.send()` - sends a response of various types, automatically sets “Content-Type”
- `res.sendFile()` - sends a response as an octet stream, param must be an absolute path
- `res.sendStatus()` - sends a response status code

Example:

For this to work, I’ve imported express and path modules.

```js
const dataPath = path.join(__dirname, "./index.html");

const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200);
    res.sendFile(dataPath);
  } catch (error) {
    res.status(500);
    res.send("A server error occurred while handling your request.");
  }
});

app.listen(3000, () => console.log("Server listening on port 3000..."));
```

I created a variable ‘dataPath’ that holds the absolute path for my index.html file. Then, I used the express module to create an instance for my express app.

Next, I used the GET http method and specified the route and callback function for a request to this endpoint. Inside the callback function, I use a try/catch block to either send a success code along with my index.html file to the client, or server failure code with a json error if the request failed.

### Using Middlewares

Middleware functions allow us to use functions that have access to the request object, the response object, and the next function. The **next function** is a function that executes the middleware functions and continues execution until the request-response cycle has ended.

How we can use middleware functions:

- Execute code
- Change the request and the response objects.
- End the request-response
- Call the next middleware in the stack with `next()`

Let’s look at an example.

Middleware functions follow this syntax:

```js
function middleware(req, res, next) {
  // Execute some code
}
```

We can pass the request object, response object, and next callback function as parameters. Look familiar? It should. We’ve used middleware functions with our http utility methods (GET, POST, PUT, and DELETE).

Before, we used a middleware function to end the request-response cycle:

```js
app.get("/", (req, res) => {
  try {
    res.status(200);
    res.send("Hello World!");
  } catch (error) {
    res.status(500);
    res.send("A server error occurred while handling your request.");
  }
});
```

Now let’s use the `next()` parameter to use another middleware function that logs request information to the console for each request to our router.

```js
const requestInfo = (req, res, next) => {
  console.log(req._parsedUrl.pathname, new Date().toLocaleTimeString());
  next();
};
```

Here we have a `requestInfo()` middleware function that logs the pathname and time of the request. The important part is invoking `next()` to continue to the `next` middleware function until our request-response cycle is complete.

We’ll use our `requestInfo()` middleware before our GET http method.

```js
app.use(requestInfo);

app.get("/", (req, res) => {
  try {
    res.status(200);
    res.send("Hello World!");
  } catch (error) {
    res.status(500);
    res.send("A server error occurred while handling your request.");
  }
});
```

Now, each time a request is made to any of our routes, we can see basic information in the console.

```sh
node index.js

Server listening on port 3000...

/ 12:09:11
```

Cool! We can use this information to monitor calls to our API routes.

Let me introduce you to a useful npm http logger called morgan:

```sh
npm i morgan --save-dev
```

```js
app.use(morgan("dev"));

app.get("/", (req, res) => {
  try {
    res.status(200);
    res.send("Hello World!");
  } catch (error) {
    res.status(500);
    res.send("A server error occurred while handling your request.");
  }
});
```

Let’s check the console now:

```sh
node index.js

Server listening on port 3000...

GET / 200 8.216ms
```

For Morgan’s “dev” option, it logs the http method, url endpoint, response status code, and time for response.

### Handling Request Bodies

Now let’s look at how to receive, parse and use request body data with express. First, we’ll have to add the `express.json()` middleware above our routes. This middleware will look for incoming requests with json bodies, and parse them for our use.

Add `app.use(express.json())` above your route endpoints:

```js
app.use(express.json());

app.get("/", (req, res) => {
  // ...
});
```

Then all we have to do is create our POST endpoint.

```js
app.post("/contact", (req, res) => {
  try {
    let { body } = req;
    res.status(200).json(body);
  } catch (error) {
    res.status(500).json({ error: "An error occurred on the server." });
  }
});
```

Above, we created a POST request endpoint for “/contact”. In our request handler, we destructure the `body` from the request object, and echo the body back to the client. Wicked easy!

### Handling Request Params

There are many scenarios where we can utilize the url parameters sent with a request. You can access the url parameters through `req.params`. Let’s take a look at the following PUT route:

```js
app.post("/users/:id", (req, res) => {
  try {
    let { id } = req.params;
    res.status(200).json({ id, msg: `User ${id} updated in database.` });
  } catch (error) {
    res.status(500).json({ error: "An error occurred on the server." });
  }
});
```

Here, we’ve created a PUT request on “/users/:id”. We can destructure the url parameter id from `req`.params to use either in our database queries or on our server.

### Error Handling

It is common to use try/catch blocks as we have to catch and account for errors on the server. We also can create a custom error handler middleware to write and send responses to the client when an error is raised. We can pass the **error** caught in the catch block to `next(error)`, then handle the error with our own middleware.

```js
app.get("/", (req, res, next) => {
  try {
    throw new Error("Test");
  } catch (error) {
    next(error);
  }
});
```

Right above the `app.listen()` method, add the following:

```js
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ errors: { err: err.message } });
});
```

Now we have all of our server errors funnelling to our custom error handler middleware.

## Takeaway

1. Express.js is a routing framework for Node Servers
2. Middlewares are handlers that receive the `IncomingRequest` and `ServerResponse` objects as parameters, and a `next()` function to pass the request/response objects to the next middleware.
3. Express.js adds helpful methods to the request and response objects for parsing request bodies, query parameters, search parameters, sending json bodies, files, or text.
