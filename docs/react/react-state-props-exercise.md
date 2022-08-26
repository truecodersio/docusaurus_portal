---
title: "Exercise: React State and Props"
slug: "react-state-props-exercise"
description: React State and Props Exercise with Steps
keywords: [javascript, react.js, react state and props, react data flow]
---

## Objective

Your objective is to create a todo list that can be viewed by the user, and a form where the user can add new items to the todo list stored in state.

## Getting Started

This is part 2 of TrueCoders' React Exercise Series.

We'll be in the same react repository that you worked in for **part 1**.

## Steps

React Series Part 2 has multiple exercises

- [Exercise 1: Project Structure](#exercise-1-project-structure)
- [Exercise 2: Managing State](#exercise-2-managing-state)
- [Exercise 3: Rendered Lists](#exercise-3-rendering-lists)
- [Exercise 4: Controlled Inputs](#exercise-4-controlled-inputs)
- [Exercise 5: Updating State](#exercise-5-updating-state)

### Exercise 1: Project Structure

1. Create a new folder within `src/` called `components/`
2. Change your `App.js` to `App.jsx`. This will enable more VSCode emmet abbreviations for the file.
3. Change the contents of your `App.jsx` to be a class with a render method that returns `<div><h1>Hello World</h1></div>`

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
```

### Exercise 2: Managing State

Manage a todo list and controlled input with state.

1. Create a constructor for the `App` class
2. In the body of the constructor, assign an object to a property called `state`
3. On the state object, add two properties:
   - `list`
   - `text`
4. Assign `list` as the following array: `["ready", "set", "GO"]`
5. Assign `text` as an empty string

### Exercise 3: Rendering Lists

A **rendered list** in React is an array of JSX that we return to the ReactDOM. Render the state list as a React rendered list.

1. Update the return statement of the `render` method to have an `ul` underneath the `h1`.
2. As a child of the `ul`, call `this.state.list.map` within a JSX expression
3. The callback function passed into the map method **should return a `li` element**
4. For each string in `this.state.list` that you map over, use the string value as the text content of the returned `li`
5. Lastly, add a `key` prop to the returned `li` that is set to the value of the **element's index in `this.state.list`**

### Exercise 4: Controlled Inputs

A **controlled input** in React is an input where it's `value` attribute is set to a state value, and when the value of the input changes, the component state changes. Create a controlled input so that `this.state.text` is bound to the input.

1. Update the return statement of the `render` method to have an `input` above the `ul`.
2. Add a `value` prop to the `input` that is set to `this.state.text`
3. Add an `onChange` prop to the `input` that is set to a function that will:
   - Receive the HTMLChangeEvent as a parameter
   - Call `this.setState()` to update `this.state.text` to `e.target.value` (the value that is in the input)

### Exercise 5: Updating State

Add functionality to add a new item to the todo list.

1. Wrap the `input` element in a `form` element
2. Add a `button` element below the `input` element at the bottom of the `form` element
   - Add a `type` attribute of "submit"
   - Add text content of "Add"
3. Create a method named `onSubmit` on the `App` class that will:
   - Receive the HTMLSubmitEvent as a parameter
   - Call the `preventDefault()` method on the parameter event
   - Call `this.setState()` to update the `this.state.list` value to a new array contains all of the previous list items and the current `this.state.text`
4. Add an `onSubmit` prop to the `form` element that is set to the method `this.onSubmit`
5. In the constructor, bind `this` to the `this.onSubmit` method
   - `this.onSubmit = this.onSubmit.bind(this);`

At this point, you should be able to type a new task in the input element, click add, and see the new list item displayed in the unordered list on the screen!
