---
title: "Exercise: React Hooks"
slug: "/react-hooks-exercise"
description: React Hooks Exercise with Steps
keywords: [javascript, react.js, react hooks]
---

## Objective

Your objective is to rewrite your `App` and `FilmsList` class components as functional components with hooks.

## Getting Started

This is part 4 of TrueCoders' React Exercise Series.

We'll be in the same react repository that you worked in for **part 3**.

## Steps

React Series Part 4 has multiple exercises

- [Exercise 1: FilmsList from Class to Function](#exercise-1-filmslist-from-class-to-function)
- [Exercise 2: State Hook in FilmsList](#exercise-2-state-hook-in-filmslist)
- [Exercise 3: Update getFilms](#exercise-3-update-getfilms)
- [Exercise 4: Effect Hook in FilmsList](#exercise-4-effect-hook-in-filmslist)
- [Exercise 5: App from Class to Function](#exercise-5-app-from-class-to-function)
- [Exercise 6: State Hook in App](#exercise-6-state-hook-in-app)
- [Exercise 7: Update onSubmit](#exercise-7-update-onsubmit)

### Exercise 1: FilmsList from Class to Function

1. Change the `FilmsList` from a class to a function
2. Remove the `render` method surround the `return <ul>...</ul>` statement
   - we'll still be using the returned JSX, so be sure to keep that
3. Specify `props` as the parameter to the `FilmsList` function

### Exercise 2: State Hook in FilmsList

1. Import and destructure `useState` from the `react` package
2. Remove the constructor
3. Add a declaration for `list` and `setList` that will be destructured from an array that is returned from calling `useState([])`
4. Update the return statement to map over `list` instead of `this.state.list`

### Exercise 3: Update getFilms

1. `getFilms` is currently a method. Add the `function` keyword to make it a function value within this component scope
2. Update the promise consumer that updates the list state
   - Change `this.setState()` to `setList`
   - Be sure to only pass in the `films` data, no longer `{ list: films }`

### Exercise 4: Effect Hook in FilmsList

1. Import and destructure `useEffect` from the `react` package
2. Remove the `componentDidMount` method
3. Call `useEffect`
   - first, pass in a callback function that will call `getFilms`
   - second, pass in an empty dependency array

### Exercise 5: App from Class to Function

1. Change the `App` from a class to a function
2. Remove the `render` method surround the `return ...` statement
   - we'll still be using the returned JSX, so be sure to keep that
3. Specify `props` as the parameter to the `App` function

### Exercise 6: State Hook in App

1. Import and destructure `useState` from the `react` package
2. Remove the constructor
3. Add a declaration for `list` and `setList` that will be destructured from an array that is returned from calling `useState(["ready", "set", "GO"])`
4. Add a declaration for `text` and `setText` that will be destructured from an array that is returned from calling `useState("")`
5. Update the return statement to map over `list` instead of `this.state.list`
6. Update the return statement's `input` value to be `text` instead of `this.state.text`
7. Update the return statement's `input` onChange to call `setText` instead of `this.setState`

### Exercise 7: Update onSubmit

1. `onSubmit` is currently a method. Add the `function` keyword to make it a function value within this component scope
2. Update the function to:
   - use `list` instead of `this.state.list`
   - use `text` instead of `this.state.text`
   - use `setList` instead of `this.setState`
3. Update the return statement's `form` onSubmit to be `onSubmit` instead of `this.onSubmit`
