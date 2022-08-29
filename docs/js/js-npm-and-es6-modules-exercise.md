---
title: "Exercise: NPM and ES6 Modules"
slug: "js-npm-yarn-webpack-exercise"
description: "JavaScript ES6 Modules Exercise with steps"
keywords: [javascript, es6, esm, modules, npm]
---

## Objective

Your objective is to create an application where users can submit car details (make, model, and year) within a form, and see their cars displayed in a "wishlist" on the DOM. Users should be able to click an item in their wishlist and see the specific details within a card element on the DOM. Lastly, users should be able to remove a car from their wishlist, with the DOM updated accordingly.

## Getting Started

Fork and Close the Exercise Repo to get started: [JavaScript ES6 Modules](https://github.com/Bryantellius/es6_modules)

## Steps

The JavaScript ES6 Modules exercise has multiple steps:

- [Exercise 1: Project Setup](#exercise-1-project-setup)
- [Exercise 2: Use the Fetch API](#exercise-2-use-the-fetch-api)
- [Exercise 3: Consume the API](#exercise-3-consume-the-api)
- [Exercise 4: Update the DOM](#exercise-4-update-the-dom)

### Exercise 1: Project Setup

- Create a new folder called `dist/`
- Create an `index.html` file in your `dist/` folder
- Add a script tag in your `index.html` and set the src to `main.js`
  - `main.js` is the default name for the bundled and minified file produced by webpack
- Create an `index.js` file in your `src/` folder

The contents of your `index.html` can resemble the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ES6 Modules</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <main class="container">
      <section class="container">
        <form id="submitForm">
          <div class="form-group">
            <label for="makeInput">Make:</label>
            <input type="text" id="makeInput" class="form-control" />
          </div>
          <div class="form-group">
            <label for="modelInput">Model:</label>
            <input type="text" id="modelInput" class="form-control" />
          </div>
          <div class="form-group">
            <label for="yearInput">Year:</label>
            <input
              type="number"
              max="2021"
              min="1900"
              id="yearInput"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <button id="submitBtn" class="btn btn-primary">Add</button>
          </div>
        </form>
      </section>
      <hr />
      <section class="container">
        <div class="row">
          <div id="wishListContainer" class="col-md-6">
            <h3 id="wishlist-title">Wish List</h3>
            <ul></ul>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div id="car-card" class="card-body">
                <h3 id="carDisplay">Vehicle</h3>
                <p id="car-make"></p>
                <p id="car-model"></p>
                <p id="car-year"></p>
                <button class="btn btn-warning removeBtn" disabled>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <script src="main.js"></script>
  </body>
</html>
```

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
