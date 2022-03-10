---
title: "Creating Your Own Fullstack Template"
slug: "/fullstack-template"
---

## Why

We will be combining many tools in our projects, and with many tools comes much configuration. It helps us to know how each tool works and collaborates with other tools. As you can imagine, the bigger our projects grow, the more configuration is required, or at least the more intent on scalability is required at the beginning. So, we’ll create a starter template for jump starting projects with the configuration already taken care of.

## What

The template we will create will combine the different languages and tools we’ve used in the class so far. We’ll include HTML, CSS, JavaScript, React, Node.js, and Express.js. We’ll also introduce npm packages for authentication, database integration, and http handling.

## How

Create a new folder on your local system called ‘starter_template’ (or other preferable, relevant name).

```sh
mkdir template
```

Now cd into your new folder and initialize npm, and complete the following questions

```sh
{
    "name": "starter_template",
    "version": "1.0.0",
    "description": "Starter template with JS, Node, Express, React",
    "main": "dist/server.js",
    "script": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Ben Bryant",
    "license": "ISC"
}
```

Now let’s install two devDependencies: npm-run-all and nodemon

```sh
npm install npm-run-all nodemon --save-dev
```

In brief:

- **npm-run-all** - enables us to run multiple npm scripts with a single command
- **nodemon** - enables project refresh without any extra configuration
- **@babel/preset-react** - plugin for compiling react jsx

We’ll be using Webpack to bundle and minify our code. Now install the following webpack packages:

- **Webpack**
- **Webpack-cli**
- **Webpack-node-externals**

```sh
npm install webpack webpack-cli webpack-node-externals --save
```

Our package.json should resemble:

```json
{
  "name": "starter_template",
  "version": "1.0.0",
  "description": "Starter template with JS, Node, Express, React",
  "main": "dist/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ben Bryant",
  "license": "ISC",
  "dependencies": {
    "webpack": "^5.37.0",
    "webpack-cli": "^4.7.0",
    "webpack-node-externals": "^3.0.0"
  },
  "devDependencies": {
    "@babel/preset-react": "^7.13.13",
    "nodemon": "^2.0.7",
    "npm-run-all": "^4.1.5"
  }
}
```

Now, create a webpack.config.js file in the root directory, and import the following modules:

```js
const path = require("path");
const nodeExternals = require("webpack-node-externals");
```

We will create two different configurations: server and client. The serverConfig object will resemble the following:

```js
const serverConfig = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/server/server.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  output: {
    filename: "server.js",
    path: resolve(__dirname, "dist"),
  },
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};
```

When we worked with Webpack before, we only needed to bundle the frontend code. Now we are specifying that Webpack bundle and minify our frontend and backend code.

The clientConfig should resemble:

```js
const clientConfig = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/client/index.jsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  output: {
    filename: "app.js",
    path: resolve(__dirname, "public/js"),
  },
};
```

We are specifying that Webpack ‘resolve’ and bundle any .js, .jsx, .css, or .scss file in our client side code.

Lastly, let’s export our config objects:

```js
module.exports = [serverConfig, clientConfig];
```

Next, we’ll need to add a babel configuration file for transpiling our client code. Create a file called babel.config.js and add the following:

```js
module.exports = {
  presets: [["@babel/preset-react", { targets: { node: "current" } }]],
};
```

Add a ‘src’ folder and ‘public’ folder to the root of your project. Inside of your ‘src’ folder, create two subfolders: ‘client’ and ‘server’. Here is where we will write our frontend (client) or backend (server) code.

So our project structure should resemble the following:

```txt
node_modules
public
src
    client
    server
.gitignore
package-lock.json
package.json
babel.config.js
webpack.config.js
```

Now back inside of our package.json file, we’ll install the rest of our dependencies:

- React
- react-dom
- React-router
- React-router-dom
- Css-loader
- Sass-loader
- sass
- Style-loader
- Express
- Bootstrap (if you want, again, you can use Tailwind, etc)

Lastly, we need to add our own scripts in the package.json.

- `"watch:build": "npx webpack -w"`
- `"watch:server": "nodemon dist/server.js"`
- `"dev": "npm-run-all --parallel watch:*"`
- `"start": "node dist/server.js"`

Your package.json should now resemble:

```json
{
  "name": "fullstack_starter",
  "version": "1.0.0",
  "description": "Basic, unopinionated Full Stack template for MERN",
  "main": "dist/server.js",
  "scripts": {
    "watch:build": "npx webpack -w",
    "watch:server": "nodemon dist/server.js",
    "dev": "npm-run-all --parallel watch:*",
    "build": "webpack",
    "start": "node dist/server.js"
  },
  "keywords": [
    "mern",
    "node",
    "react",
    "mysql",
    "javascript",
    "full stack",
    "scss"
  ],
  "author": "Ben Bryant",
  "license": "ISC",
  "dependencies": {
    "babel-loader": "^8.2.2",
    "bootstrap": "^5.0.1",
    "css-loader": "^5.2.4",
    "dotenv": "^9.0.2",
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "mysql": "^2.18.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "sass": "^1.32.13",
    "sass-loader": "^11.1.1",
    "style-loader": "^2.0.0",
    "webpack": "^5.37.0",
    "webpack-cli": "^4.7.0",
    "webpack-node-externals": "^3.0.0"
  },
  "devDependencies": {
    "@babel/preset-react": "^7.13.13",
    "nodemon": "^2.0.7",
    "npm-run-all": "^4.1.5"
  }
}
```

Almost done! Now we just need to create a few more files.

First, create a ‘server.js’ file inside of your ‘src/server’ subfolder, and have it resemble the following:

```js
import express from "express";
import morgan from "morgan";
import apiRouter from "./routes";
import config from "./config";

const app = express();

// parses incoming request body as json if header indicates application/json
app.use(express.json());
// logs incoming request information to the dev console
app.use(morgan("dev"));
// directs incoming static asset requests to the public folder
app.use(express.static("public"));

app.use("/api", apiRouter);

// sends the react app index.html
app.use((req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/index.html"));
  } catch (error) {
    next(error);
  }
});

// generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    name: err.name || "Unknown error",
    msg: err.message || "An error occurred on the server.",
  });
});

app.listen(config.port || 3000, () =>
  console.log(`Server listening on port ${config.port}...`)
);
```

Create a new subfolder within ‘src/server’ called ‘routes’. Add a file ‘index.ts’ that resembles the following:

```js
import express from "express";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

export default router;
```

Now let’s head to the `src/client` folder. Add an `index.jsx` file. Input the following:

```js
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./scss/App";

render(<App />, document.getElementById("root"));
```

And let’s add an `App.jsx` file that will be the starter file rendered by react on our frontend.

```js
import React from "react";

const App = () => {
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.text())
      .then((message) => setMessage(message))
      .catch((err) => alert("Failed to fetch test"));
  }, []);

  return (
    <main className="container">
      <div>
        <h1>{message}</h1>
      </div>
    </main>
  );
};

export default App;
```

Nice! But no place for styling? Let’s fix that. Add a new folder ‘scss’ inside of your ‘src/client’ subfolder.

Add an `App.scss` file inside of your new folder. Have it resemble the following:

```scss
@import "../../../node_modules/bootstrap/scss/bootstrap.scss";

// Anything after this will be custom styling!
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
```

Remember our `public` folder? Let’s create an `index.html` and write the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/js/app.js"></script>
  </body>
</html>
```

With our webpack configuration, our bundled `app.js` file will be generated in our public folder with this `index.html` file.

> NOTE: You may need to add a `js` folder in your `public` folder prior to the first bundle to avoid an error

Now your file structure should look like this:

```txt
node_modules
public
    index.html
    js
src
    client
        App.jsx
        index.jsx
        scss
            App.scss
    server
        server.js
        routes
            index.js
.gitignore
package-lock.json
package.json
babel.config.js
webpack.config.js
```

Now, open up your terminal inside of your project folder and type the command ‘npm run dev’.

You’ll see some action in your terminal. Webpack will bundle and minify your files, and start your express/node server. It will also serve your react frontend to the client with the bundled and minified files. Nodemon refreshes the server each time a file is updated, giving you an enjoyable development experience.

You’ll be able to jump start your React/Node/Express projects with your new template!
