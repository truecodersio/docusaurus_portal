---
title: "Exercise: JS DOM"
slug: "js-dom-exercise"
---

## Steps

### Getting Started

Fork and clone [the exercise repository](https://github.com/Bryantellius/JS_DOM-Events) to your computer and complete all the TODO’s. Instructions are inside the files as comments.

### Exercise #1: SELECTING/MANIPULATING ELEMENTS

- Select Node #1 using the `getElementById()` method, and change the text to: “I used the getElementById(“node1”) method to access this”
- Select Node #2 using the `getElementsByClassName()` method, and change the text to: "I used the getElementByClassName("node2") method to access this"
- Select ALL the h3 tags using the `getElementsByTagName()` method, and change the text to: "I used the getElementByTagName("h3") method to access all of these"

### Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS

- Create a paragraph element using this `element.createElement()` and put this text inside "This node was created using the createElement() method"
- Append the created node to the parent node using the `element.appendChild()` method (Keep in mind that you’ll need to select the parent node first)
- Create a `<a>` element using this `element.createElement()` and put this text inside "I am a `<a>` tag"
- Insert the created `<a>` in the parent node, but before the `<p>` you just created using the `element.insertBefore()` method
- Add a link `href` to the `<a>` by selecting the `anchorElement.link` property

### Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS

- Replace the "Child Node" with a new `<p>` element that reads "New Child Node" using the `replaceChild()` method.
- Remove the "New Child Node" using the `remove()` method or `removeChild()` method.

### Exercise #4: ANIMATIONS

- Create an animation that makes the box inside the container move from left to right.
  - Start by Selecting the box inside the container, then incrementing it’s position gradually to create the effect of the box moving across the container.
- BONUS - Make the red box go all the way around the perimeter of the green box

> NOTE: Since you can complete this exercise using just CSS3 (and we encourage using CSS for animations as much as possible for modern development), you can complete this using JavaScript or CSS.

### Exercise #5: DOM EVENTS

- Write a function called `show` which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user”
- This div should be a 'modal' that covers the main content on the screen
- BONUS: The modal popup should be able to be closed. Refactor for this functionality

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/u/1/d/1dCV5H7Nf3_Fmf7ejtHaFuXdf1TVQ_xGR38lKVPIkyIE/edit)
