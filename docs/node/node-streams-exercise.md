---
title: "Exercise: Node Streams Module"
slug: "/node-streams-exercise"
---

## Objective

The objective is to become familiar with using streams in Node.js. You'll create a server that reads and pipes the contents of a file to the client via streams, and use a third party fetch api package to fetch and write contents from an api resource to a file.

## Steps

Exercise Repo: [Node Streams](https://github.com/Bryantellius/node_streams)

### Part 1

1. In VS Code, create and open a new folder named “node_streams”
2. Create a streams.js file
   1. Import or require the fs module
   2. Create a server
   3. Write a conditional statement that checks the request url for a “GET” request on a “/”
   4. If the method and url match the previous check (step c), use `createReadStream` to pipe the contents of an html file to the client
      - You can design the html file however you choose
   5. If the method and url are not “/” and “GET”, use the same method to pipe the contents of a 404 not found html page
3. You should send the appropriate status code and headers
4. Now run node app and test in postman or the browser

### Part 2

1. In a new file, fetch data from a source of your choosing (e.g. “[https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json)”)
2. Use the `createWriteStream` method to create a write stream using an empty json file in your project
3. Use the `write` method to populate the json file with the data from your fetch request

> HINT: You will need to use a third-party fetch api (isomorphic-fetch, node-fetch, Axios, etc) to achieve this in Node

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/18SSA732egjTEflBvzd7mTv6QIquXz4BS8KvOfg6T4wo/edit?usp=sharing)
