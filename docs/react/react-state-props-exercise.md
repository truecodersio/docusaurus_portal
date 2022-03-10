---
title: "Exercise: React State and Props"
slug: "react-state-props-exercise"
---

## Objective

Your objective is to create squares of different colors appear on the screen. When a square is clicked, it should update to a random color. State and props should be used to achieve this functionality.

## Getting Started

Repo Link: [React State and Props](https://github.com/Bryantellius/react_props_state)

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: `git clone <repo_name>` cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select `repo_name` to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the `README.md` file to complete exercises
- Open the `App.jsx` file to get started

## Steps

- In your `App.jsx`

1. Create a variable boxes and assign it an empty array
2. Create a variable numBoxes and assign it the number 24
3. Write a loop that iterates from 0 to numBoxes, and pushes a box object to boxes array during each iteration

   ```jsx
   {
       id: i,
       color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
   }
   ```

4. Assign boxes to the App state
5. Create a method `handleBoxClick` that takes an `HTMLChangeEvent (e)` as a param, and does the following:
   - Creates a variable newBoxes
   - Maps through the boxes state
   - If the box id is equal to the event target id value, then set the box's color value to `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
   - Sets the boxes state equal to `newBoxes`
6. Earlier we used a `getRandomColor` method. Create this method beneath `handleBoxClick`. It should:
   - Create a variable `rgb` that is assigned a random number between 1-255
   - Return `rgb`
   - This method is called during the creation of the boxes, and during the `onclick` event listener to randomize the box colors
7. Inside the render method, create a variable `renderBoxes` that maps through the boxes state, and returns a `<Box />` component for each box in the array
8. You should pass the following props to each Box component:
   - key = box.id
   - id = box.id
   - color = box.color
   - handleClick = this.handleBoxClick

- In your `Box.jsx`

1. Add an onClick attribute to the return div, and pass in the props.handleClick
2. Add an id attribute to the return div, and assign it the props.id
3. Add props.color as the span text content
4. Lastly, add a backgroundColor property to the inline-styling of the return div, and assign it prop.color

- Your finished product should display 24 squares on the DOM, all with random color values. Each square's background color should randomize when you click on it.

---

[Walkthrough Documentation Here](https://docs.google.com/document/u/1/d/17HLmyfNOZxOHntcGdtvW5jkdTz_rPWfdKs97mxO591k/edit)
