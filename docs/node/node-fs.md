---
title: "Node FS Module"
slug: "/node-fs"
---

## Why

The built-in Node.js file system module helps us store, access, and manage data on our operating system. Commonly used features of the fs module include `fs.readFile` to read data from a file, `fs.writeFile` to write data to a file and replace the file if it already exists, `fs.watchFile` to get notified of changes, and `fs.appendFile` to append data to a file. The fs core module is available in every Node.js project without having to install it.

## What

### Node.js as a File Server

The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the `require()` method:

```js
const fs = require("fs");
```

Common use for the File System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

### Read Files

The `fs.readFile()` method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder as Node.js):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Node File System</title>
  </head>
  <body>
    <h1>Node FS Module!</h1>
    <p>Here, I am practicing node fs module.</p>
  </body>
</html>
```

We can Create a Node.js file that reads the HTML file, and returns the content:

```js
http
  .createServer(function (req, res) {
    // Uses the readFile method from the fs module
    fs.readFile("index.html", function (err, data) {
      if (err) {
        return console.log(err);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(3000, function () {
    console.log("Server listening on port 3000...");
  });
```

Start your server, and go to [http://localhost:3000](http://localhost:3000) to see the result!

### Create Files

The File System module has methods for creating new files:

- `fs.appendFile()`
- `fs.writeFile()`

**Let’s see them in action!!**

The `fs.appendFile()` method appends specified content to a file. It will only create a file if the file does not already exist:

```js
const fs = require("fs");

let to_dos = "Clean the house";

fs.appendFile("todo.txt", to_dos, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully appended to file.");
});
```

The `fs.writeFile()` method creates a new file with the specified content. Whether the file already exists or not, a new file will be created:

```js
const fs = require("fs");

let contacts = [
  {
    fname: "Ben",
    lname: "Bryant",
    email: "ben@email.com",
    phone: "123-456-7890",
  },
];

fs.writeFile("todo.txt", JSON.stringify(contacts), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully wrote file.");
});
```

### Delete Files

You can use the `fs.unlink()` method to delete a specified file:

```js
const fs = require("fs");

fs.unlink("open.txt", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully deleted file.");
});
```

### Rename Files

You can use the `fs.rename()` method to rename a specified file. The first argument is the specified file, and the second is the updated name for the file:

```js
const fs = require("fs");

fs.rename("HelloWorld.txt", "message.txt", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully renamed file.");
});
```

### Working with Folders

The File System module has methods for creating, accessing, reading, and deleting folders:

- `fs.mkdir()`
- `fs.readdir()`
- `fs.rename()`
- `fs.rmdir()`

`fs.mkdir()` creates a new folder, whether it exists or not. We can combine `fs.existsSync()` to add logic to only create the folder if it does not already exist.

```js
const fs = require("fs");

let foundFolder = fs.existsSync("source");

if (foundFolder) {
  console.log("Folder already exists!");
} else {
  fs.mkdir("source", (err) => {
    if (err) {
      return console.log(err);
    }
    
    console.log("Successfully created folder.");
  });
}
```

`fs.readdir()` reads the content of a folder and returns the relative path for the files and subfolders within:

```js
const fs = require("fs");

fs.readdir("src", (err, files) => {
  if (err) {
    return console.log(err);
  }
  
  console.log(files.join("\n"));
  console.log("Successfully read folder.");
});
```

Renaming a folder is similar to renaming a file:

```js
const fs = require("fs");

fs.rename("./source", "./src", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully renamed folder.");
});
```

Lastly, we can remove a folder or directory with `fs.rmdir()`

```js
const fs = require("fs");

fs.rmdir("src", { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully removed folder.");
});
```

Notice that we specified `{ recursive: true }`. If you have content in a folder or subfolder you are trying to delete, `rmdir` will throw an error, unless you include the recursive removal option.

> NOTE: This method (including recursive as an option) will soon be deprecated. You can either use an npm module (i.e. `fs-extra`, and it’s `.remove()` method \*recommended), or use the following example after node version 14.14.0^

```js
const fs = require("fs");

fs.rm("src", { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
  
  console.log("Successfully removed folder.");
});
```

### Path Module

So far, we’ve been using file names directly. We can use the path module to access paths to our files. Here are a few useful methods:

- `path.join()` - joins two parameters into a path
- `path.dirname()` - returns the folder path
- `path.basename()` - returns the last file/folder of the path
- `path.extname()` - returns the file extension
- `path.parse()` - returns an object with root, dir, base, name and ext

```js
const path = require("path");

path.join(__dirname, "/source/test.txt");
path.dirname("/source/test.txt");
path.basename("/source/test.txt");
path.extname("/source/test.txt");
path.parse("/source/test.txt");
```

To visualize the differences, the results of the code above would resemble:

| Method   | Output                                                                        |
| -------- | ----------------------------------------------------------------------------- |
| join     | C:\Users\brbry\repos\node_fs\source\test.txt                                  |
| dirname  | /source                                                                       |
| basename | test.txt                                                                      |
| extname  | .txt                                                                          |
| parse    | `{ root: "/", dir: "/source/", base: "test.txt", ext: ".txt", name: "test" }` |

## How

So let's use the file system and path modules to get the path of a certain file, and read its contents

First , we need to require the fs and path modules:

```js
const fs = require("fs");
const path = require("path");
```

Next, we’ll use the path module to store the correct file path in variable ‘dataPath’:

```js
const dataPath = path.join(__dirname, "./contacts.json");
```

Then, we need to call the asynchronous version of the readFile() function:

```js
fs.readFile(dataPath, "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
```

> NOTE: Node.js is single threaded, if you are using node to build the backend for your application, you might have hundreds or even thousands of clients connected to that backend, and if you keep that single thread busy, you won't be able to serve many clients. That is why we use asynchronous methods as much as possible.

Now with the above code, run node app.js

```sh
node app.js
```

Since we have node installed, we can use the ‘node’ command to run our app.js file. Above, the file is run, and my contacts.json file contents are printed to the console.

## Takeaways

1. The `fs` module let's us utilize file system I/O operations
2. The `fs` module can be used with the `http` module to create a file server
3. The `path` module helps parse file paths
