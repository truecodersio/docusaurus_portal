---
title: "Exercise: Express Routing"
slug: "/express-routing-exercise"
---

## Objective

The objective is to create a server using Express.js with multiple endpoints.

## Steps

1. Create a new project folder named “express_routing”
2. Initialize npm in the project
3. Npm install express and morgan
4. Create a server.js file
5. Import express, path, and morgan into server.js
6. Create at least 3 “GET” routes and use res.sendFile() to send 3 different html pages to the client, depending on the route requested
7. Account for server errors with a custom error handler

## BONUS

1. Fetch a list of pokemon from [https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json) and write the results to a .json file (only do this for set up)
2. Create 4 endpoints for GET (getting the list of all pokemon), POST (adding a pokemon to the file), PUT (updating an existing pokemon in the file, and DELETE (removing a pokemon from the file
   1. Your GET route should just read and return the list of pokemon from the json file
   2. Your POST request should receive a request body and write the new pokemon to the list in the json file
   3. Your PUT request should receive a request body and pokemon id to both select and update a pokemon in the list
   4. Your DELETE request should receive a pokemon id to remove a pokemon from the list
