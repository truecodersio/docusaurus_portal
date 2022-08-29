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
- [Exercise 2: Install Webpack](#exercise-2-install-webpack)
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

### Exercise 2: Install Webpack

Configure Webpack to bundle your project

1. Install webpack and webpack-cli
2. Open your `package.json` file, and make sure to add `"scripts": {"build": "webpack"}`
3. From the command line/terminal, run `npm run build` for webpack to bundle your project

> The `webpack.config.js` file is provided for you, but it would be a good idea to inspect the contents of that file to see the basic configuration that this project has in regards to webpack bundling.

### Exercise 3: Create a Car Class

1. Create a new file in your `src/` folder called `car.js`
2. Inside of `car.js`, create and export a `Car` class
3. Create a `constructor` for the `Car` class that:
   - takes in `id`, `make`, `model`, and `year` parameters
   - sets each parameter to a property on the instance
   - Example `this.id = id`

### Exercise 4: Create a Wishlist Class

1. Create a new file in your `src/` folder called `wishlist.js`
2. Inside of `car.js`, create and export a `WishList` class
3. Import `Car` from `car.js`
4. Create two properties on the `WishList` class:
   - `list` that is initialized as `[]`
   - `nextId` that is initialized as `0`
5. Create an `add` method that
   - Takes in `make`, `model`, and `year` parameters
   - Uses the `Car` constructor to create a car instance from `++this.nextId`, `make`, `model`, and `year` values
   - Adds the car instance to `this.list`
6. Create a `remove` method that:
   - Takes in `carId` as a parameter
   - Removes the car instance whose `id` matches `carId` from `this.list`

### Exercise 5: Select Elements and Add Event Listeners



## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

<!-- - [JavaScript ES6 Modules Exercise Video on Vimeo](https://vimeo.com/743632725) -->

- [JavaScript ES6 Modules Exercise Repo on Github](https://github.com/Bryantellius/es6_modules/tree/answer)
