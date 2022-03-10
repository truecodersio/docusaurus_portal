---
title: "Exercise: JS Error Handling"
slug: "js-error-handling-exercise"
---

## Objective

In this exercise, we will be practicing error handling in JavaScript by implementing **selective catching**, **strict mode** and `try/catch/finally` blocks.

## Steps

1. In a new project with at least an html and js file, include `"use strict";` on line 1 of your js file
2. Declare a variable for assigning user input called `userInput`
3. Create a class `InvalidNumberError` that extends the `Error` class
4. Define a function, `getUserInput()`, that starts with a `try/catch` block
5. Inside of the `try` block, assign `userInput` to the result of `prompt("Provide an even number ")`. Parse the user's response as an integer _before_ assigning to `userInput`
6. If the value of `userInput` is `NaN`, throw an error. Else, if the value of userInput is an odd number, throw an error as well with the appropriate message
7. If the value is even, alert a success or thank you message
8. In the `catch` block, alert a message that gives appropriate feedback to the user.
9. Have `getUserInput()` call itself to prompt the user again
10. Test your logic by initially calling `getUserInput()`

## Summary

Your program should prompt the user to enter an even number. If the number is even, it will alert a thank you message. If the number is not even, it will tell them, and prompt again and again until given an even number.
