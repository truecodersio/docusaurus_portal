---
title: "Exercise: JS ES6 Modules"
slug: "js-es6-modules-exercise"
---

## Objective

Create a car wishlist. Our users should be able to come to our web app to add or remove cars that they want on/from their Wish List.

> You do not have to use cars. You can pick any item you prefer.

## Steps

[Exercise Repo](https://github.com/Bryantellius/es6_modules)

### Part 1

1. We’re going to be using ES6 modules. So let’s take this time to configure Webpack to bundle our project
2. Initialize npm in your project to create a `package.json` file
3. Install webpack and webpack-cli
4. Add `node_modules/` to a `.gitignore`
5. Create a `dist/` and `src/` folder in the root directory of your project
6. Move your `index.html` file to the `dist/` folder
7. Move your `index.js` file to the `src/` folder
8. Open your `package.json` file, and make sure to add `“scripts”: {“build”: “webpack”}`
9. Make sure you change the js script in your `index.html` to `...src=”main.js”...`
10. From the command line/terminal, run `npm run build` for webpack to bundle your project

### Part 2

1. Create a `car.js` file, then do the following:
   1. Create a class called `Car`
   2. Add a constructor that takes a make, model, and year
   3. Create an `info()` function that displays the car’s info to the document
2. Create a `wishlist.js` file
   1. Create a class `WishList`
   2. At minimum, the `WishList` class should have a method for adding or removing cars from the `WishList`
   3. Our users should be able to view the cars in the `WishList` from the document, so either as a method on the `WishList` class, or a separate function in the `index.js` file, you should account for this functionality of displaying and updating the DOM
3. Inside of `index.js`
   1. Import our `Car` and `WishList` modules
   2. Create a new instance of our `WishList`
   3. Users should be able to interact with our web page (DOM) to add new `Car` instances to their Wish List
