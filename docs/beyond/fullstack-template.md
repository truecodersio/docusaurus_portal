---
title: "Using a Fullstack Template"
slug: "/fullstack-template"
---

## Why

In many real world applications, there are different pieces that work together to make up a project in entirety: user-facing components, server routes, business logic, data access, authentication, etc. Much of this can be combined to create a **full stack application**.

## What

[Basic MERN Template](https://github.com/Bryantellius/basic-mern-template) is a template repository that we will use will combine the different languages and tools we’ve used in the class so far. We’ll include HTML, CSS, JavaScript, React, Node.js, and Express.js. We’ll also introduce npm packages for logging, database integration, and http handling.

## How

### Getting Started

To get started, go to [Basic MERN Template on Github](https://github.com/Bryantellius/basic-mern-template), and select the "Use this template" option from the overview page.

Once you create a repository on your account from this template, clone the project.

Now that you have a copy of this project locally, follow the instructions for frontend and backend setup:

- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)

### Overall Project Structure

The project is seperated into `server/` and `client/` code bases within the `src/` folder.

Within `server/`, you will find a few folders for database connection and utils (`db/`), controllers for business logic (`controllers/`), functions for express middlewars (`middlewares/`), server routes (`routes/`), and configuration (`config/`).

Within `client/`, you will find the `App.jsx` to start, along with other folders for frontend organization.

Read [Frontend Project Structure](#frontend-project-structure) and [Backend Project Structure](#backend-project-structure) for more details on the respective `client/` and `server/` organization.

### Frontend Setup

Steps:

1. Open your terminal to `src/client`
2. Run `npm install`
3. Start the development server with `npm start`
4. View your app at [http://localhost:3000](http://localhost:3000)
5. Read through the [project structure](#project-structure) below to get a better understanding about where and how to go about developing your frontend.
6. Happy Hacking!

### Frontend Project Structure

```txt
.
└── src
    └── components
    └── hooks
    └── images
    └── pages
    └── styles
    └── pages
    App.jsx
    helpers.js
    index.js
```

1. `/src`: This directory will contain all of the code that makes up the frontend component (user facing) of your full stack application. `src` is a convention for "_source code_".
2. `/src/components`: All components used to construct pages.
3. `/src/helpers.js`: Helper functions used across components within your project.
4. `/src/hooks`: Custom React hooks.
5. `/src/images`: Static images that can be imported to components; will be bundled at build time.
6. `/src/pages`: React components used for full page views.
7. `/src/styles`: Organization for css files (styles).

### Backend Setup

Steps:

1. Open your terminal to `src/server`
2. Run `npm install`
3. Start the development server with `npm start`
4. Your express server will be running at [http://localhost:8080](http://localhost:8080)
5. Read through the [project structure](#project-structure) below to get a better understanding about where and how to go about developing your backend.
6. Happy Hacking!

### Backend Project Structure

```txt
.
└── src
    └── config
    └── controllers
    └── db
    └── middlewares
    └── routes
    .babelrc
    server.js
```

1. `/src`: This directory will contain all of the code that makes up the backend component (server) of your full stack application. `src` is a convention for "_source code_".
2. `/src/config`: Responsible for using `dotenv` to load and export your **environment variables**.
3. `/src/controllers`: Controller functions used for handling business/data logic.
4. `/src/db`: Responsible for creating a database connection and exporting database utility functions.
5. `/src/middlewares`: Contains middleware functions used within your express application.
6. `/src/routes`: Contains your top level and sub level routes with Express Router.
7. `.babelrc`: Configures babel plugins for transpiling ESM to CommonJS.
8. `server.js`: Contains your main express server instance and binds the server to a specified port.

### Backend Environment Variables

There is a `.env.template` file that models the `.env` file and variables you will need to create to start.

Create a `.env` file based on the template file, and provide the appropriate values for the preset variables.

## Conclusion

In this document we showed you how to use the [Basic MERN Template](https://github.com/Bryantellius/basic-mern-template), and laid out the project structure of both the `client/` and `server/` code bases for full stack applications that you can now create. Happy Hacking!
