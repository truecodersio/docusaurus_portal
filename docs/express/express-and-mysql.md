---
title: "Express and MySQL"
slug: "/express-and-mysql"
description: Express.js and Routing with MySQL DB Connection
keywords: [javascript, node.js, express.js, routing, server-side, mysql]
---

## Prerequisites

This will be a continuation of the Express Routing Lesson and Exercise.

We've worked with databases, tables, rows, and data fields in MySQL Workbench. We've worked with Express Routing and Node.js. Now it's time to make sql queries from our express application.

## How

In our existing express project folder, we already have **express** and **mysql** npm packages installed. If you don't have those packages listed in your `package.json` file or in your `node_modules/` folder, install them now.

As a reminder, our project structure resembles:

```txt
config/
mockdb/
node_modules/
routes/
    - index.js
    ...
.babelrc
.gitignore
EXPRESS-ROUTING.md
README.md
package-lock.json
package.json
server.js
```

> If you do not have the `.gitignore` file, create it and add `node_modules/` like we've done before.

### Setting Up a Database Connection

Now let's focus on our database query logic. Create a subfolder named `db`. Inside of `db`, create two new files: `index.js` and `utils.js`.

We need to create a connection between mysql and our app. Inside of your `db/index.js` file, resemble the following:

```js
import mysql from "mysql";
import config from "../config";

const connection = mysql.createPool(config.mysql);

export default connection;
```

This will create a pooled connection with our mysql bestbuy database. However, what is `config.mysql`? Good question. We need to define those values as environment variables.

> `config` exports several environment variables, including env variables needed to make a connection with a mysql database: username, password, database, host.

In your `.env` file, you should see:

```txt
PORT=5000
DB_HOST=<HOST>
DB_USER=<USER>
DB_PASS=<PASSWORD>
DB_SCHEMA=<DATABASE>
```

Change each of the values for `DB_HOST`, `DB_USER`, `DB_PASS`, and `DB_SCHEMA` to be your correct MySQL configuration values.

For example, it will be the following if you installed and setup MySQL according to the TrueCoders' Accounts and Downloads Document on Day 1:

```txt
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_SCHEMA=bestbuy
```

### Setting Up a Utility Function for Parameterized Queries

Next, we'll write a query utility function that we will be using to run parameterized queries against our database.

In `db/utils.js`, place the following code:

```js
import connection from "./index";

const query = (qryStr, values) => {
  return new Promise((resolve, reject) => {
    connection.query(qryStr, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default query;
```

This function takes in a SQL query as a string, and any values that will be used as parameters in the query. It returns a promise that either resolves with the result of a query, or rejects with an error if one occurs.

We'll use this utility function in our controllers.

### Creating Controllers that Query the Database

A **Controller** is "a software component that manages or directs the flow of data between two entities."

We will use our query utility function to create controllers that handles the flow of data between our users and the database. Our routes should not contain the specific logic of querying the database. Rather, our routes should use controllers to get the data they need to send a successful response.

Let's start with basic CRUD controllers for employees in our bestbuy database. Create a file named `employees.controller.js` in `controllers/`. Start with the following code:

```js
import query from "../db/utils";

const findAll = async () => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};

const findOne = async (id) => {
  return query("SELECT EmployeeID, FirstName, LastName, Title FROM employees", [
    id,
  ]);
};
```

Remember, our `query` function takes in a string query and array of values to be used in the database query statement. Here we are creating asynchronous functions that call our `query` function with specific queries and values, and return the resolved result from that Promise.

We can use a `?` as a wildcard for our values. Keep in mind that the order of our values inside of the values array parameter, are given to the query string in the order that the symbols appear in the query string.

Let's continue with writing queries for creating, updating and deleting table data.

```js
const addOne = async (employee) => {
  return await query("INSERT INTO employees SET ?", [employee]);
};

const updateOne = async (employee, id) => {
  return await query("UPDATE employees SET ? WHERE EmployeeID = ?", [
    employee,
    id,
  ]);
};

const removeOne = async (id) => {
  return await query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
};
```

Last but not least, we need to export these functions to be used in our `employeeRouter`.

```js
export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};
```

### Creating API Routes for Employee Data

Create a new file called `employees.routes.js` in `routes/`. We'll define CRUD routes that will use our controllers to access the database's employee data.

```js
import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await employees.findOne(id);
  } else {
    data = await employees.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let employeeDTO = req.body;
  let data = await employees.addOne(employeeDTO);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let employeeDTO = req.body;
  let data = await employees.updateOne(id, employeeDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await employees.removeOne(id);
  res.json(data);
});

export default router;
```

Here's a route for GET, POST, PUT, and DELETE requests that we will set up to match "/api/employees" paths. We imported `employees` from our employees controller that will contain all of the exported controller functions.

The GET request handler checks if the path contains an `id` URL parameter. If it does, it calls `db.getOne(id)` and sends the resulting single user object as the response. If it does not, it calls `db.getAll()` and sends the resulting list of user objects as the response.

The POST request handler uses the parsed request body as the parameter of `db.addOne(employeeDTO)` and sends the resulting object as the response.

The PUT request handler uses the `id` URL parameter and parsed request body as the parameters of `db.updateOne(id, employeeDTO)` and sends the resulting object as the response.

The DELETE request handler uses the `id` URL parameter as the parameter of `db.removeOne(id)` and sends the resulting object as the response.

Now, let's head back to the `routes/index.js` file. Here is where we will route incoming request to our employee routes.

```js
import employeeRouter from "./employees.route";

// ...

router.use("/products", productRouter);
```

### Testing Our Work

Let's see if it works! Navigate to "http://localhost:5000/api/employees" and you should see all of the bestbuy employees.

And navigate to "http://localhost:5000/api/employees/32768" and you should see Robert Ahlering's employee data.

Test the POST, PUT, and DELETE routes with Postman. If any errors occur, go back and check the code that you've written for the database connection, controllers, or routes.

## Takeaways

1. Using the `mysql` npm package, you can easily configure a database connection
2. Database queries are asynchronous
3. Parameterized queries prevent _SQL Injection_
