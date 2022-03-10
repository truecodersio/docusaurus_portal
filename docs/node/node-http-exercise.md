---
title: "Exercise: Node HTTP Module"
slug: "/node-http-exercise"
---

## Objective

The objective is to create a server that responds to requests on several routes. The home and about endpoints will respond with HTML and JSON respectively, while the echo endpoint will echo the request body back to the client as JSON.

## Steps

1. Create a project folder named ‘node_http’
2. Create a new file named ‘server.js’
3. Import the http module
4. Using the http module, call the createServer
5. Pass in a request handler callback function to the createServer method that receives `request` and `response` objects as parameters
6. Add an event listener to the request object that listens for the ‘data’ event to be emitted from the ReadStream
7. Store the chunks in an array
8. Add an event listener to the request object that listens for the ‘end’ event to be emitted from the ReadStream
9. Set a new variable ‘body’ equal to Buffer.concat(array).toString()
10. Write a conditional statement that assesses the request url, and responds appropriately:
    - ‘/’ - Wildcard. Respond with whatever information you wish
    - ‘/about’ - Respond with an object that has information about yourself
    - ‘/echo’ - Respond with an object that, a minimum, includes the request method, url and body.
11. Make sure to end your response with .end()
12. Set your server to listen on port 3000
13. Initiate the file using the node.js CLI
