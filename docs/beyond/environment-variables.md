---
title: "Environment Variables"
slug: "/environment-variables"
---

## Why

When we use sensitive information (such as API keys, database configuration and variables, etc) in our projects, we want to protect that information from outside eyes. We definitely do not want to push up sensitive information to GitHub, even though we will utilize remote repositories for storing copies of our projects.

We can use “environment variables” to pass sensitive information throughout our project, without exposing their values. It also allows us to easily update configuration variables in one place.

## What

An environment variable is a variable whose value is set outside the program, through functionality built into the operating system. An environment variable is made up of name/value pairs, and any number may be created and available for reference throughout your project.

```txt
PORT=3000
API_KEY=1234KLXSAGHJ41345
SECRET=SparrowJack
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_SCHEMA=bestbuy
```

## How

We specify environment variables in a ‘.env’ file. During application initialization, the environment variables are loaded into process.env. From there, we can access the variables with ‘process.env.VARIABLE_NAME’.

Before we get started, we’ll use an npm package, `dotenv`, in our projects. Install that now.

Now, create a subfolder in your “src/server” folder named `config`, and add a new file, `index.ts`, that will be our default export.

Now inside our “src/index.ts” file, import `dotenv`. Next, we’ll add a conditional that checks if a .env file exists in our project, and throws an error if such a file doesn’t exist.

```js
const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Can't load .env!");
}
```

Then export your needed configuration variables:

```js
module.exports = {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT, 10),
  auth: {
    secret: process.env.SECRET,
  },
};
```

Now we can import our `config` file in any server file where we will use these values.

For example, we could use the variables defined in our .env file and exported through our config/index.ts to create our mysql connection:

```js
const mysql = require("mysql");
const config = require("../../config");

const connection = mysql.createPool(config.mysql);

// rest of db/models/index.js file ...
```

Make sure to add `.env` to your `.gitignore` file so that you don’t push secret information to Github.

When you host your application for production, you’ll need to set the same environment variable names with their production values through the hosting service, and you’ll be all set!

## Takeaways

1. Environment variables are variables with values that are set outside the program, through functionality built into the operating system
2. Environment variables are made up of **name/value** pairs
3. Always include your `.env` file in the `.gitignore` file if it contains secret values
