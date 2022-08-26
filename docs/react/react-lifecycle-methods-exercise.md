---
title: "Exercise: React Lifecycle Methods"
slug: "react-lifecycle-methods-exercise"
description: React Lifecycle Methods Exercise with Steps
keywords: [javascript, react.js]
---

## Objective

Your objective is to create a Films component that will fetch a list of films from the Studio Ghibli API, and display them to the screen as a rendered list.

## Getting Started

This is part 3 of TrueCoders' React Exercise Series.

We'll be in the same react repository that you worked in for **part 2**.

## Steps

React Series Part 3 has multiple exercises

- [Exercise 1: FilmsList Component](#exercise-1-filmslist-component)
- [Exercise 2: Films State](#exercise-2-films-state)
- [Exercise 3: Method to Get Films](#exercise-3-method-to-get-films)
- [Exercise 4: Fetch Films](#exercise-4-fetch-films)
- [Exercise 5: Render FilmsList Component](#exercise-5-render-filmslist-component)

### Exercise 1: FilmsList Component

Create a new class component.

1. Create a new file called `filmsList.jsx` in your `components/` folder
2. Import and destructure the `Component` from the `react` package
3. Add a class called `FilmsList` that renders an empty unordered list
4. You should have:

```jsx
class FilmsList {
  render() {
    return <ul></ul>;
  }
}
```

### Exercise 2: Films State

Create state to manage the list of Studio Ghibli films.

1. Create a constructor for the `FilmsList` class
2. Define a `list` property on `this.state` that is assigned an empty array

### Exercise 3: Method to Get Films

Create a method to retrieve the list of films.

1. Create a method called `getFilms` on the `FilmsList` class
2. The method should call the `fetch` function with the following url parameter: [https://ghibliapi.herokuapp.com/films](https://ghibliapi.herokuapp.com/films)
3. Call the `then` method on the returned promise
   - the first `then` call should receive a callback function that **returns the result parsed to json**
4. Make another `then` call on the returned promise
   - the second `then` call should receive a callback function that uses `this.setState()` to **set `this.state.list` equal to the result**
5. Lastly add a `catch` method call that should receive a callback function that will handle an error if one occurs

### Exercise 4: Fetch Films

Call `getFilms()` once the component mounts.

1. Create a `componentDidMount` method on the `FilmsList` class
2. Call `getFilms` within the method body

### Exercise 4: Render the Films List

Render the list to the DOM.

1. In the `render` method, update the content of the `ul` element to be a JSX expression that calls the `map` method on `this.state.list`
2. Pass a callback function to the `map` method that returns a `li` element for each film in `this.state.list`
3. Add the film's title as the text content of the `li`
4. Add a `key` prop to the `li` that is set to the film's `id`

Feel free to add more content from each film to the list item's inner html.

### Exercise 5: Render FilmsList Component

Render the `FilmsList` component in `App`.

1. Import the `FilmsList` component from `./components/FilmsList`
2. In the `render` method of the `App` class, render the `FilmsList` component below the`ul` from the previous lesson

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

- [React #3: React Lifecycle Methods Exercise Video](https://vimeo.com/742848950) on Vimeo
- [React #3: React Lifecycle Methods Exercise Repo](https://github.com/Bryantellius/react-exercise/tree/react-lifecycle-methods-exercise) on Github
