---
title: "Exercise: NPM and ES6 Modules"
slug: "js-npm-yarn-webpack-exercise"
description: "JavaScript ES6 Modules Exercise with steps"
keywords: [javascript, es6, esm, modules, npm]
---

## Objective

Your objective is to create an application where users can submit car details (make, model, and year) within a form, and see their cars displayed in a "wishlist" on the DOM. Users should be able to click an item in their wishlist and see the specific details within a card element on the DOM. Lastly, users should be able to remove a car from their wishlist, with the DOM updated accordingly.

## Getting Started

Fork and Clone the Exercise Repo to get started: [JavaScript ES6 Modules](https://github.com/Bryantellius/es6_modules)

## Steps

The JavaScript ES6 Modules exercise has multiple steps:

- [Exercise 1: Project Setup](#exercise-1-project-setup)
- [Exercise 2: Install Webpack](#exercise-2-install-webpack)
- [Exercise 3: Create a Car Class](#exercise-3-create-a-car-class)
- [Exercise 4: Create a WishList Class](#exercise-4-create-a-wishlist-class)
- [Exercise 5: Import WishList and Select Elements](#exercise-5-import-wishlist-and-select-elements)
- [Exercise 6: Create showCardDetails](#exercise-6-create-showcardetails)
- [Exercise 7: Create updateDOMList](#exercise-7-create-updatedomlist)
- [Exercise 8: Create addCar](#exercise-8-create-addcar)
- [Exercise 9: Create removeCar](#exercise-9-create-removecar)

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
2. Inside of `wishlist.js`, create and export a `WishList` class
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

### Exercise 5: Import WishList and Select Elements

Open up `index.js` and complete the wishlist functionality with the DOM manipulation.

1. Import `WishList` from `wishlist.js`
2. Select the form
3. Select the input for car make
4. Select the input for car model
5. Select the input for car year
6. Select the paragraph element for car make
7. Select the paragraph element for car model
8. Select the paragraph element for car year
9. Select the remove button
10. Select the wishlist unordered list element
11. Call the `WishList` constructor to create an instance from the `WishList` class

> For selecting elements, these instructions are for the html template code from [exercise 1](#exercise-1-project-setup). If you used different html elements, make sure you are selecting the correct elements.

### Exercise 6: Create `showCarDetails`

Create a function called `showCarDetails` that will update the details card with the details from the selected car. It should:

1. Take in a `car` parameter
2. Reset the content of the make display to `car.make`
3. Reset the content of the model display to `car.model`
4. Reset the content of the year display to `car.year`
5. Enable the remove button
6. Call `setAttribute("data-carId", car.id)` on the remove button
   - This will set a custom `data-` attribute on the DOM element that corresponds with the selected element

### Exercise 7: Create `updateDOMList`

Create a function called `updateDOMList` that will update the ul with the latest cars in `wishlist`. It should:

1. Clear the contents of the `ul`
2. Iterate over each car in `wishlist.list`
3. For each car, it should create a `li` that displays the car's make and model
4. Add a click event listener to the `li` that passes in an inline callback function that
   - calls `showCarDetails` (which will be created later) and passes it the `car` object
   - Syntax example: `ele.addEventListener("click", () => func(obj))`
5. Append each `li` to the `ul`

### Exercise 8: Create `addCar`

Create a function called `addCar` that will add a car to `wishlist`. It should:

1. Take in an `event` parameter
2. Prevent the default for the submission event
3. Call `wishlist.add` with the values from the make, model and year inputs passed in as parameters
4. Call `updateDOMList`

### Exercise 9: Create `removeCar`

Create a function called `removeCar` that will remove a car from `wishlist`. It should:

1. Assign the return of `Number(removeBtn.getAttribute("data-carId"))` to a variable called `carId`
   - This will grab the value of a custom `data-` attribute that will correspond with the shown car in the details card
2. Call `wishlist.remove` with `carId` passed in as a parameter
3. Call `updateDOMList`
4. Reset the content of the make display to `""`
5. Reset the content of the model display to `""`
6. Reset the content of the year display to `""`
7. Disable the remove button

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

<!-- - [JavaScript ES6 Modules Exercise Video on Vimeo](https://vimeo.com/743632725) -->

- [JavaScript ES6 Modules Exercise Repo on Github](https://github.com/Bryantellius/es6_modules/tree/answer)
