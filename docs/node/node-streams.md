---
title: "Node Streams Module"
slug: "/node-streams"
---

## Why

We’ve used streams, but you may not have a complete grasp of what they are. Let’s dive a little deeper into streams and how we use them.

Streams in Node.js allow you to improve your data handling capabilities with better **memory** and **time** efficiency.

Streams are memory efficient because you load and use small amounts of your data as it comes, rather than load all of the data in memory before using it.

Since you can use data when it arrives in chunks, it takes far less time to process the data. Without streams, you would request the data, and wait until all of the data arrived before beginning to process and use it.

## What

Streams are fundamental to Node.js, and we’ve actually been using them this whole time. Any time we have worked with network communications (server requests and responses) or file system operations (reading and writing files), we’ve used streams.

In computing, streams have been around a while. The concept of streams consists of the ability to process chunks, as opposed to the whole, of data while being memory and time efficient as mentioned above.

Node.js provides us with a **stream** core module to access streaming APIs in our applications. Something to keep in mind, all streams are instances of EventEmitters. Remember our Request ReadableStream and Response WritableStream being EventEmitters? Well that goes for several of our file system methods and operations as well.

### Four Types of Streams

- **Readable**: a stream you can pipe data from, but not pipe into.
- **Writable**: a stream you can pipe data into, but not pipe from
- **Duplex**: a stream you can both pipe data into and pipe data from
- **Transform**: similar to a Duplex, but the data output is transformed from its input

### `pipe()`

The `pipe()` method let’s us directly _send data from one source to another_. In the first case below, our first source is **readStream** where we use the file system to read the contents of the `popular-articles.json` file. Our second source that receives each chunk is our response body to the client. This is how the `pipe()` method works: `sourceOne.pipe(sourceTwo)`.

## How

### Readable Stream

When we used the Node.js file system module, we read and sent a file in response to a request on our server:

```js
fs.readFile(path.join(__dirname, "../articles/popular_articles.json"), (err, data) => {
    if (err) {
        return console.log(err)
    }

    res.write(data);
    res.end();
};
```

The `readFile()` method reads the specified file in full, then sends the contents to the client. This is fine for json, html, or other smaller, lightweight files. However, bigger files would take significantly longer to load and then send.

When can alternatively write the same functionality with streams:

```js
const readStream = fs.createReadStream(
  path.join(__dirname, "../articles/popular_articles.json")
);

readStream.pipe(res);
```

We can use the `createReadStream()` method to write, or pipe, chunks of data to the client as soon as each chunk is read.

### Writable Stream

Let’s say we use `writeFile()` to write a list of pokemon JSON objects to a new file:

```js
fs.writeFile(pokemonFile, JSON.stringify(pokemon), (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("pokemon.json written successfully!");
});
```

Above, we specify the path, data, and callback into our `writeFile()` method. The file is created and data written to the file in full. Once that process is complete, the callback is invoked.

We can alternatively use `createWriteStream()`:

```js
const writeStream = fs.createWriteStream(pokemonFile);

writeStream.write(JSON.stringify(data));
```

Writable streams have a `write()` method that takes in data (chunks) to be written to the specified path.

### Echo Example

Previously, we did an exercise that involved receiving a request body, url, and method, and echoing that information back to the client. It resembled:

```js
const http = require("http");

http
  .createServer((req, res) => {
    const { method, url } = req;
    const chunks = [];

    req
      .on("error", (err) => {
        console.error(err);
        req.writeHead(400, { "Content-Type": "text/html" });
        req.write("An error occurred on the server :(");
        req.end();
      })
      .on("data", (chunk) => chunks.push(chunk))
      .on("end", () => {
        const body = Buffer.concat(chunks).toString();

        res.on("error", (err) => {
          console.error(err);
          req.writeHead(500, { "Content-Type": "text/html" });
          req.write("An error occurred on the server :(");
          req.end();
        });

        const responseBody = { method, url, body };

        // Echoes responseBody back to the client
        // Included are the request method (GET, POST, PUT, DELETE, etc)
        // Requested URL, and request body

        req.writeHead(200, { "Content-Type": "application/json" });
        req.write(JSON.stringify(responseBody));
        req.end();
      });
  })
  .listen(3000, () => console.log("Server listening on port 3000..."));
```

Since our request and response are both streams (Readable and Writable respectively), we can use our new `pipe()` method to refactor our echo.

```js
const http = require("http");

http
  .createServer((req, res) => {
    const { method, url } = req;
    const chunks = [];

    req.on("error", (err) => {
      console.error(err);
      req.writeHead(400, { "Content-Type": "text/html" });
      req.write("An error occurred on the server :(");
      req.end();
    });

    res.on("error", (err) => {
      console.error(err);
      req.writeHead(500, { "Content-Type": "text/html" });
      req.write("An error occurred on the server :(");
      req.end();
    });

    req.pipe(res);
  })
  .listen(3000, () => console.log("Server listening on port 3000..."));
```

## Takeaways

1. Streams in Node.js allow you to improve your data handling capabilities with better **memory** and **time** efficiency
2. We can utilize read and write streams in most of our I/O operations
3. Read streams can use the `readSrc.pipe(writeSrc)` method to pipe (send) contents from a read stream to a write stream
