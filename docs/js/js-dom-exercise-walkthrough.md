---
title: "Exercise Walkthrough: JS DOM"
slug: "js-dom-exercise-walkthrough"
---

## Exercise #1: SELECTING/MANIPULATING ELEMENTS

- Select Node #1 using the `getElementById()` method, and change the text to: “I used the getElementById(“node1”) method to access this”

  ```js
  let node1 = document.getElementById("node1");
  node1.textContent =
    'I used the getElementById("node1") method to access this';
  ```

- Select Node #2 using the `getElementsByClassName()` method, and change the text to: "I used the getElementByClassName("node2") method to access this"

  ```js
  let node2 = document.getElementsByClassName("node2")[0];

  node2.textContent =
    'I used the getElementsByClassName("node2") method to access this';
  ```

- Select ALL the h3 tags using the `getElementsByTagName()` method, and change the text to: "I used the getElementByTagName("h3") method to access all of these"

  ```js
  let h3s = document.getElementsByTagName("h3");

  for (let h3 of h3s) {
    h3.textContent =
      'I used the getElementByTagName("h3") method to access all of these';
  }
  ```

## Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS

- Create a paragraph element using this `element.createElement()` and put this text inside "This node was created using the createElement() method"

  ```js
  let p = document.createElement("p");
  p.textContent = "This node was created using the createElement() method";
  ```

- Append the created node to the parent node using the `element.appendChild()` method (Keep in mind that you’ll need to select the parent node first)

  ```js
  let parent2 = document.querySelector("#parent");

  parent2.appendChild(p);
  ```

- Create a `<a>` element using this `element.createElement()` and put this text inside "I am a `<a>` tag"
- Add a link `href` to the `<a>` by selecting the `anchorElement.link` property

  ```js
  let link = document.createElement("a");
  link.textContent = "Google Search";
  link.href = "https://google.com";
  ```

- Insert the created `<a>` in the parent node, but before the `<p>` you just created using the `element.insertBefore()` method

  ```js
  parent2.insertBefore(link, p);
  ```

## Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS

- Replace the "Child Node" with a new `<p>` element that reads "New Child Node" using the `replaceChild()` method.

  ```js
  let child = document.createElement("p");
  child.textContent = "New Child Node";

  let parent3 = document.querySelector("#exercise-container3");
  let replaceChild = document.querySelector("#N1");

  parent3.replaceChild(child, replaceChild);
  ```

- Remove the "New Child Node" using the `remove()` method or `removeChild()` method.

  ```js
  setTimeout(() => {
    parent3.removeChild(child);
  }, 5000);
  ```

  > `setTimeout` is used here to create a delayed action. The `removeChild` method will be called after 5000 milliseconds (5 seconds) to allow you to see both replace and remove actions being performed on the same element. This is purely for demonstration.

## Exercise #4: ELEMENTS FROM AN ARRAY

Use the following array of values to generate a list on the DOM

```js
let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];
```

- Create an unordered list element

  ```js
  let ul = document.createElement("ul");
  ```

- Iterate over the array values, and create a list item element for each

  ```js
  for (let item of list) {
    // TODO: Append the new list items to the unordered list element
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }
  ```

- Append the unordered list to the `div#container` under exercise 4

  ```js
  let container4 = document.querySelector("#container");

  container4.appendChild(ul);
  ```

## Exercise #5: DOM EVENTS

This exercise has many sub-steps that will be broken down in more detail.

- Write a function called `show` which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

  1. Define a function called `show`
  2. Select the button that triggers a popup modal.
  3. Add an event listener to the button that calls an event handler function, `show`, on click

  ```js
  function show(event) {
    // will handle click event
  }

  let btn = document.querySelector("#btn");

  btn.addEventListener("click", show);
  ```

- This div should be a 'modal' that covers the main content on the screen

  1. Create a div for the modal container
  2. Create a div for the modal body
  3. Create a heading element for the modal title
  4. Create a paragraph element for the modal content
  5. Create a button element for a modal close button

     ```js
     // inside of the show function body
     let modalContainer = document.createElement("div");
     let modalBody = document.createElement("div");
     let title = document.createElement("h2");
     let content = document.createElement("p");
     let closeButton = document.createElement("button");
     ```

  6. Add text content to the modal title, content, and button

     ```js
     // inside of the show function body
     title.textContent = "Action Required";
     content.textContent = "You need to ...";
     closeButton.textContent = "Close";
     ```

  7. Add an id attribute to the modal container with a value of "modal"
  8. Add a class name attribute to the modal body with a value of "modal-card"

     ```js
     // inside of the show function body
     modalContainer.id = "modal";
     modalBody.classList.add("modal-card");
     ```

  9. Append modal title, content and close button to the modal body
  10. Append the modal body to the modal container
  11. Append the modal container to the document body

      ```js
      // inside of the show function body
      modalBody.append(title, content, closeButton);
      modalContainer.appendChild(modalBody);
      document.body.appendChild(modalContainer);
      ```

- BONUS: The modal popup should be able to be closed. Refactor for this functionality

  1. Create a function called `handleEsc`
  2. Check the `event.key` property to determine if the user pressed the "Escape" key
  3. Remove the modal from the DOM if they did press the "Escape" key

     ```js
     // outside of show function body
     function handleEsc(event) {
       if (event.key == "Escape") {
         document.body.removeChild(document.querySelector("#modal"));
       }
     }
     ```

  4. Add an event listener to the window for a "keyup" event that will call `handleEsc`

     ```js
     // inside of show function body
     window.addEventListener("keyup", handleEsc);
     ```

  5. Add an event listener to the modal container and close button that will remove the modal container and window keyup listener

     ```js
     // inside of show function body
     closeButton.addEventListener("click", (event) => {
       document.body.removeChild(modalContainer);
       window.removeEventListener("keyup", handleEsc);
     });

     modalContainer.addEventListener("click", (event) => {
       console.log(event);
       if (event.target == modalContainer) {
         document.body.removeChild(modalContainer);
         window.removeEventListener("keyup", handleEsc);
       }
     });
     ```

Altogether the exercise code should resemble:

```js
function handleEsc(event) {
  if (event.key == "Escape") {
    document.body.removeChild(document.querySelector("#modal"));
  }
}

function show(event) {
  window.addEventListener("keyup", handleEsc);

  let modalContainer = document.createElement("div");
  let modalBody = document.createElement("div");
  let title = document.createElement("h2");
  let content = document.createElement("p");
  let closeButton = document.createElement("button");

  title.textContent = "Action Required";
  content.textContent = "You need to ...";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", (event) => {
    document.body.removeChild(modalContainer);
    window.removeEventListener("keyup", handleEsc);
  });

  modalContainer.id = "modal";
  modalBody.classList.add("modal-card");

  modalContainer.addEventListener("click", (event) => {
    console.log(event);
    if (event.target == modalContainer) {
      document.body.removeChild(modalContainer);
      window.removeEventListener("keyup", handleEsc);
    }
  });

  modalBody.append(title, content, closeButton);
  modalContainer.appendChild(modalBody);
  document.body.appendChild(modalContainer);
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", show);
```

---

[Exercise Walkthrough Video Part 1](https://vimeo.com/721573178)
[Exercise Walkthrough Video Part 2](https://vimeo.com/721573412)
