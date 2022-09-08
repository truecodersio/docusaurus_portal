---
title: "Exercise: React UI Components and Styling"
slug: "/react-ui-components-and-styling-exercise"
description: React UI Components and Styling Exercise with Steps
keywords: [javascript, react.js, react hooks, react router]
---

## Objective

Your objective is to continue from the React Routing Exercise to create an individual page view for each film. Additional goals will be to display film stats based on the current filter applied to our list of films.

## Getting Started

This is part 7 of TrueCoders' React Exercise Series.

You'll be in the same react repository that you worked in for **part 6**.

## Steps

React Series Part 7 has two parts with multiple exercises each.

- [Exercise 1: Install Bootstrap](#exercise-1-install-bootstrap)
- [Exercise 2: Setup Global CSS](#exercise-2-setup-global-css)
- [Exercise 3: Create a Nav Component](#exercise-3-create-a-nav-component)
- [Exercise 4: Create a Main Layout](#exercise-4-create-a-main-layout)
- [Exercise 5: Create a Loader Component](#exercise-5-create-a-loader-component)

### Exercise 1: Install Bootstrap

1. Use npm to install [bootstrap](https://www.npmjs.com/package/bootstrap)

### Exercise 2: Setup Global CSS

1. Create a `global.css` file in your `src/` folder if you do not have one already
2. Place the following code within the file

   ```css
   @import url(../node_modules/bootstrap/dist/css/bootstrap.css);

   * {
     box-sizing: border-box;
   }

   html {
     font-size: 20px;
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
       "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
       "Helvetica Neue", sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }

   body {
     margin: 0;
   }

   .max-w-600 {
     width: 100%;
     max-width: 600px;
     margin-left: auto;
     margin-right: auto;
   }
   ```

3. Change the css file import in your `index.js` to `global.css`

> Feel free to change any of this css to make it your own. The most important statement is the `@import(...)` statement at the top of the file that will load Bootstrap's css class rulesets.

### Exercise 3: Create a Nav Component

1. Create a new folder called `layout/` in your existing `components/` folder
2. Create a new folder called `topnav/` in your new `layout/` folder
3. Create a new file called `topnav.component.jsx` in your new `topnav/` folder
4. 

### Exercise 4: Create a Main Layout

### Exercise 5: Create a Loader Component

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

<!-- - [React #7: React UI Components and Styling Exercise Video](https://vimeo.com/743625815) on Vimeo -->

- [React #7: React UI Components and Styling Exercise Repo](https://github.com/Bryantellius/react-exercise/tree/finished) on Github
