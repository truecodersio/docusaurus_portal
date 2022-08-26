---
title: "Exercise: JS Promises"
slug: "js-promises-exercise"
description: "JavaScript Promises Exercise with Steps"
keywords: [javascript, promises, asynchronous programming]
---

## Objective

Your objective is to handle the result of a promise with promise consumers, and update the DOM based on resolution or rejection. The Promise will resolve with an array of hobbits that should be rendered on the DOM in the form of list items. If any errors occur, feedback should be displayed to the user on the DOM.

## Getting Started

Fork and Close the Exercise Repo to get started: [JavaScript Promises](https://github.com/Bryantellius/JavaScript_Promises)

## Steps

The JavaScript Promises exercise has multiple steps:

- [Exercise 1: Select the Needed DOM Elements](#exercise-1-select-the-needed-dom-elements)
- [Exercise 2: Handle the Promise](#exercise-2-handle-the-promise)
- [Exercise 3: Update the DOM](#exercise-3-update-the-dom)

### Exercise 1: Select the Needed DOM Elements

1. Select the paragraph with `id="error"` and assign it to a variable
2. Select the unordered list with `id="list"` and assign it to a variable

### Exercise 2: Handle the Promise

1. Call `getList`
2. From the result, call the `then` promise consumer method and pass in a callback function
   - The callback function should receive the resolved value as the parameter
   - Start out just logging the result to console to check if it is the value you expect
3. From the result of the `then` promise consumer method, chain a `catch` method consumer and pass in a callback function
   - The callback function should receive the resolved value as the parameter
   - Start out just logging the result to console to check if it is the value you expect

### Exercise 3: Update the DOM

1. Replace the `console.log` statement in the `then` method callback parameter to
   - iterate through the resolved list of hobbits
   - create a `li` for each hobbit, and append the `li` to the selected `ul` from the DOM
2. Replace the `console.log` statement in the `catch` method callback parameter to
   - display the resolved failure object's `message` property as the text content of the selected `p` from the DOM

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

- [JavaScript Promises Exercise Video on Vimeo](#)
- [JavaScript Promises Exercise Repo on Github](https://github.com/Bryantellius/JavaScript_Promises/tree/Answer)
