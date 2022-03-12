---
title: "Exercise: JS Fetch API"
slug: "js-fetch-api-exercise"
---

## Objective

Your objective is to display a gif to the DOM based on a user search. You will need to create a giphy account and call their developer api endpoint. Let's play around with API calls to Giphy!

## Steps

[Fork and Clone the Exercise Repo](https://github.com/Bryantellius/JavaScript_APIs)

1. Open your index.html
2. Beneath the p tag, but before the img tag, add a Label, input, and button.
   - Add an ID to your input element
   - Add an onclick attribute to the element that triggers your function.
3. Feel free to label and style
4. Open your app.js
5. Add an event listener to the button that listens for a click event, and does the following:
   - Selects the img element and assigns it to a variable
   - Selects the input element, grabs the value from the element, and assigns it to a variable
   - Then, write a fetch request to "[https://api.giphy.com/v1/gifs/translate?api_key=YOURAPIKEY&s=](https://api.giphy.com/v1/gifs/translate?api_key=YOURAPIKEY&s=)"
   - Chain another .then that takes the result and assigns the image URL of the response object to the image tag source
   - Add the .catch method that accepts a callback that console.log's the rejection (if any)
6. If you have added the event listener correctly, and correctly called the Giphy API, then you will be able:
   - Let the user input any keyword to the input box
   - Let the user press the button
   - And display a gif in the image tag depending on the API response for the keyword

---

[Exercise WalkThrough Here](https://docs.google.com/document/u/1/d/1N7nS0hDFAQyJMFpTXjUo_lWAwSxuzatH8x__jsxaT9c/edit)
