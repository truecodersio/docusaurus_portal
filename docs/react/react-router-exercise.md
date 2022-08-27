---
title: "Exercise: React Router"
slug: "/react-router-exercise"
description: React Router Exercise with Steps
keywords: [javascript, react.js, react hooks, react router]
---

## Objective

Your objective is to add home and film routes to your react project. Additional goals will be to add filter functionality to the films page to filter by director.

## Getting Started

This is part 5 of TrueCoders' React Exercise Series.

We'll be in the same react repository that you worked in for **part 4**.

## Steps

React Series Part 5 has two parts with multiple exercises each.

- [Part 1](#part-1): Setting up React Router with two pages, Home and Films.
  - [Exercise 1: Restructure Project Files](#exercise-1-restructure-project-files)
  - [Exercise 2: Create a films page](#exercise-2-create-a-films-page)
  - [Exercise 3: Export Pages](#exercise-3-export-pages)
  - [Exercise 4: Setup React Router](#exercise-4-setup-react-router)
- [Part 2](#part-2): Adding filter functionality to the Films list for director, and showing films stats based on the filtered list of films
  - [Exercise 1: Setup Filter Elements](#exercise-1-setup-filter-elements)
  - [Exercise 2: Helper Functions for film directors](#exercise-2-helper-functions-for-film-directors)
  - [Exercise 3: filterFilmsByDirector](#exercise-3-filterfilmsbydirector)
  - [Exercise 4: getListOf](#exercise-4-getlistof)

## Part 1

This section covers setting up React Router with two pages, Home and Films.

### Exercise 1: Restructure Project Files

To clear space for React Router to be in `App.jsx`, move your existing code from there to a specific page component.

1. Create a new folder in `src/` called `pages/`
2. Within `pages/`, create a new file called `home.page.jsx`
3. Copy the contents from `App.jsx` into `home.page.jsx`
4. Change the component name from `App` to `HomePage`
5. Remove the `FilmsList` component from the `HomePage` return statement (it will be it's own page component later 😉)

Your `HomePage` component should resemble:

```jsx
import React, { useState } from "react";

export function HomePage() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["ready", "set", "GO"]);

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Learning React</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
```

### Exercise 2: Create a Films Page

Convert `FilmsList` to a page component.

1. Create a new file in `components/` called `film.page.jsx`
2. Copy the contents of `FilmsList` into `films.page.jsx`
3. Rename `FilmsList` to `FilmsPage`
4. Add to the return statement
   - wrap the `ul` in a `div`
   - add an `h1` element that says "Studio Ghibli Films"

Your `FilmsPage` should resemble:

```jsx
import React, { useState, useEffect } from "react";

export function HomePage() {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}
```

### Exercise 3: Export Pages

As a pattern, you may see `index.js` files used as single entry points for module exports. Although not required, that is what you will follow moving forward.

1. Create an `index.js` file in `pages/`
2. Import `HomePage` and `FilmsPage`
3. Export an object that contains both `HomePage` and `FilmsPage` by default

Your `index.js` file should resemble:

```jsx
import { HomePage } from "./home.page";
import { FilmsPage } from "./films.page";

export { HomePage, FilmsPage };
```

### Exercise 4: Setup React Router

Setup React Router in `App.jsx`.

1. Import `BrowserRouter`, `NavLink`, `Routes` and `Route` from `react-router-dom`
2. Import `HomePage` and `FilmsPage` from the `index.js` file in `pages/`
3. Clear the current contents of `App`
4. Add a return statement that:
   - returns `BrowserRouter`
   - with `Routes` rendered as a child of `BrowserRouter`
   - with two `Route` components
     - `HomePage` should be rendered for `"/"`
     - `FilmsPage` should be rendered for `"films"`
5. Add a `nav` inside the `BrowserRouter` above the `Routes`
   - with a `ul` of two `li`
   - each `li` should contain a `NavLink`
   - match one `NavLink`'s `to` prop to `"/"`, and give it text that displays "Home"
   - match the other `NavLink`'s `to` prop to `"films"`, and give it text that displays "Films"

## Part 2

This section covers adding filter functionality to the Films list by director.

### Exercise 1: Setup Filter Elements

Open `films.page.jsx`.

1. Declare another piece of state, `searchDirector` and `setSearchDirector`, that will be destructured from the return of `useState("")`
2. Add a `form` to the return statement beneath the existing `h1`
3. Add a `div` with class name `form-group` inside of the `form`
4. Add a `label` and `select` inside of the `div.form-group`
   - set the `select`'s `value` prop to the `searchDirector` state
   - set the `select`'s `onChange` prop to a function that calls `setSearchDirector` and updates `searchDirector` with the chose `option` value
   - add a single `option` to the `select` (for now) with the `value` set to `""` and text content displaying `"All"`

### Exercise 2: Helper Functions for Film Directors

Create some helper functions that can be used with the Studio Ghibli film data.

1. Create a new folder in `src/` called `helpers/`
2. Create a file in `helpers/` called `film.helpers.js`
3. In `film.helpers.js`, create and export a function called `filterFilmsByDirector`
4. In `film.helpers.js`, create and export a function called `getListOf`

### Exercise 3: `filterFilmsByDirector`

The goal of `filterFilmsByDirector`, as per the name, is to receive `list` (array) and `director` (string) parameters, and return a filtered list of films where only the films by a the specified director are included.

For example:

```txt
Input:
list - [
        { title: "Castle in the Sky", director: "Hayao Miyazaki" },
        { title: "Grave of the Fireflies", director: "Isao Takahata" },
        { title: "My Neighbor Totoro", director: "Hayao Miyazaki" }
      ]
prop - "Hayao Miyazaki"

Output:
[
  { title: "Castle in the Sky", director: "Hayao Miyazaki" },
  { title: "My Neighbor Totoro", director: "Hayao Miyazaki" }
]
```

1. Implement `filterFilmsByDirector`
2. Once done, import `filterFilmsByDirector` in `films.page.jsx`
3. Call `filterFilmsByDirector` before your return statement
   - pass in `list` (state) and `searchDirector` (state) as parameters
   - assign the result to a variable called `filmsByDirector`
4. In your return statement, change `list.map(...)` to `filmsByDirector.map(...)`

### Exercise 4: `getListOf`

The goal of `getListOf` is to receive `list` (array) and `prop` (string) parameters, and return a cumulative list of items including every _unique_ value that exists in the list at the specified property.

For example:

```txt
Input:
list - [
        { firstName: "Frodo", lastName: "Baggins" },
        { firstName: "Bilbo", lastName: "Baggins" },
        { firstName: "Sam" lastName: "Gamgee" }
      ]
prop - "lastName"

Output:
["Baggins", "Gamgee"]
```

1. Implement `getListOf`
2. Once done, import `getListOf` in `films.page.jsx`
3. Call `getListOf` before your return statement
   - pass in `list` (state) and `"director"` as parameters
   - assign the result to a variable called `directors`
4. In your return statement, within your `select` and below the `<option value="">All</option>`
   - use the `map` array method to return a new array of `option` elements, one per item in `directors`
   - the `value` prop and text content should both be set to the director

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

- [React #5: React Router Exercise Video](https://vimeo.com/743625699) on Vimeo
- [React #5: React Router Exercise Repo](https://github.com/Bryantellius/react-exercise/tree/react-router-exercise) on Github
