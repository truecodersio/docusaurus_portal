---
title: "Exercise: NPM and ES6 Modules"
slug: "js-npm-yarn-webpack-exercise"
---

[Exercise Repo](https://github.com/Bryantellius/es6_modules)

## Objective

- Our users should be able to come to our web app to add or remove cars that they want on their Wish List.

## Part 1

- Create a new project for practicing ES6 modules
- Inside of your project
- Create an index.js file
- Create an index.html file
- In our index.html, add a script tag and set the src to be our index.js file

## Part 2

- We’re going to be using ES6 modules. So let’s take this time to configure Webpack to bundle our project
- Initialize npm in your project to create a package.json file
- Install webpack and webpack-cli
- Create a dist/ and src/ folder in the root directory of your project
- Move your index.html file to the dist/ folder
- Move your index.js file to the src/ folder
- Open your package.json file, and make sure to add `"scripts": {"build": "webpack"}`
- Make sure you change the js script in your index.html to ...src=”main.js”...
- From the command line/terminal, run “npm run build” for webpack to bundle your project

## Part 3

- Create a car.js file, then do the following:
  - Create a class called Car
  - Add a constructor that takes a make, model, and year
  - Create an info() function that displays the car’s info to the document
- Create a wishlist.js file
  - Create a class WishList
  - At minimum, the WishList class should have a method for adding or removing cars from the WishList
- Our users should be able to view the cars in the WishList from the document, so either as a method on the WishList class, or a separate function in the index.js file, you should account for this functionality of displaying and updating the DOM

- Inside of index.js
- Import our Car and WishList modules
- Create a new instance of our WishList
- Users should be able to interact with our web page (DOM) to add new Car instances to their Wish List
