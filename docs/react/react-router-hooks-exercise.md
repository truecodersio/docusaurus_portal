---
title: "Exercise: React Router Hooks"
slug: "/react-router-hooks-exercise"
description: React Router Hooks Exercise with Steps
keywords: [javascript, react.js, react hooks, react router]
---

## Objective

Your objective is to continue from the React Routing Exercise to create an individual page view for each film. Additional goals will be to display film stats based on the current filter applied to our list of films.

## Getting Started

This is part 6 of TrueCoders' React Exercise Series.

You'll be in the same react repository that you worked in for **part 5**.

## Steps

React Series Part 5 has two parts with multiple exercises each.

- [Part 1](#part-1): Setting up a Single Film page
  - [Exercise 1: Restructure Project Files](#exercise-1-creating-singlefilm-page)
  - [Exercise 2: getFilm](#exercise-2-getfilm)
  - [Exercise 3: Calling getFilm in useEffect](#exercise-3-calling-getfilm-in-useeffect)
  - [Exercise 4: Links to Single Films](#exercise-4-links-to-single-films)
  - [Exercise 5: A Route for SingleFilmPage](#exercise-5-a-route-for-singlefilmpage)
- [Part 2](#part-2): Displaying Director Stats per Films Filter
  - [Exercise 1: Create getFilmStats](#exercise-1-create-getfilmstats)
  - [Exercise 2: Display Film Stats](#exercise-2-display-film-stats)

## Part 1

### Exercise 1: Creating SingleFilm Page

Start off by creating the component for our film page.

1. Create a new file in `pages/` called `singlefilm.page.jsx`
2. Create a functional component called `SingleFilmPage` in `singlefilm.page.jsx`
   - make sure to export it (I tend to forget unless I do it early on)
3. Import `useState` from the `react` package
4. Import `useParams` from the `react-router-dom` package
5. Declare a piece of state, `item` and `setItem`, that will be destructured from the return of `useState({})`
6. Call `useParams`
   - Destructure `id` from the return object
7. Add the following to the return statement

```jsx
<div>
  <div>
    <img src={`${item.image}`} alt={`${item.title} Poster`} />
  </div>
  <div>
    <h1>{item.title}</h1>
    <p>
      Directed by {item.director}. Produced by {item.producer}.
    </p>
    <p>
      The film was released in <strong>{item.release_date}</strong> and garnered
      a <strong>{item.rt_score}</strong> aggregate score on{" "}
      <a
        href="https://www.rottentomatoes.com/"
        target="_blank"
        rel="noreferrer"
      >
        Rotten Tomatoes
      </a>
      .
    </p>
    <h2>Description</h2>
    <p>{item.description}</p>
  </div>
</div>
```

Feel free to change anything about this return statement from content to style. We'll use this to display information about a single film.

### Exercise 2: getFilm

Similar to our `getFilms` function in `films.page.jsx`, create a function to get a single Studio Ghibli film.

1. In `SingleFilmPage`, create a function called `getFilm`
2. The function should call the `fetch` function with the following url parameter: [https://ghibliapi.herokuapp.com/films/${id}](https://ghibliapi.herokuapp.com/films/${id})
   - `id` in this case will need to be _interpolated_ since we'll be getting that value dynamically from the route params
3. Call the `then` method on the returned promise
   - the first `then` call should receive a callback function that **returns the result parsed to json**
4. Make another `then` call on the returned promise
   - the second `then` call should receive a callback function that uses `setItem` to **set `item` equal to the result**
5. Lastly add a `catch` method call that should receive a callback function that will handle an error if one occurs

### Exercise 3: Calling getFilm in useEffect

Call `getFilm` when the component mounts.

1. Import `useEffect` from the `react` package
2. Call `useEffect` with
   - a callback function passed in that calls `getFilm`
   - an empty dependency array passed in

### Exercise 4: Links to Single Films

Add links to a single page view.

1. In `pages/films.page.jsx`, import `Link` from `react-router-dom`
2. Update the `li`'s rendered by `list.map(...)` to include a `Link`
   - wrap the `item.title` in a `Link` that has a `path` set to `film/${film.id}`
   - make sure the path is interpolated to include the film's `id` as a **url parameter**

### Exercise 5: A Route for SingleFilmPage

Lastly, set up a route for `SingleFilmPage`.

1. In `pages/index.js`, import `SingleFilmPage` and export it with `HomePage` and `FilmsPage`
2. In `App.jsx`, add `SingleFilmPage` to the destructured imports from `pages/`
3. Add a `Route` within `Routes` that renders `SingleFilmPage` for `"film/:id"` paths

## Part 2

### Exercise 1: Create `getFilmStats`

The goal of `getFilmStats` is to receive `list` (array) parameter, and return a object that contains the following:

- `avg_score` as a number, being the average `rt_score` of the list of films
- `acc_score` as a number, being the sum `rt_score` of the list of films
- `total` as a number, being the amount of films in the list
- `latest` as a number, being the latest release year for a film in the list

For example:

```txt
Input:
list - [
        { title: "Castle in the Sky", release_date: "1986", rt_score: "95" },
        { title: "My Neighbor Totoro", release_date: "1988", rt_score: "93" }
      ]

Output:
{
   acc_score: 188,
   avg_score: 94,
   total: 2,
   latest: 1988
}
```

1. Implement `getFilmStats`

### Exercise 2: Display Film Stats

Create several elements for displaying average film score, latest film and total films for the filtered list of films.

1. In `films.page.jsx`, import `getFilmStats` from `film.helpers.js`
2. Call `getFilmStats` before the return statement and pass `list` as a parameter
   - destructure `avg_score`, `total` and `latest` from the result
3. Add the following code to the return statement between the `form` and `ul`

```jsx
<div>
  <div>
    <span># Of Films</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film</span>
    <span>{latest}</span>
  </div>
</div>
```

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

- [React #6: React Router Hooks Exercise Video](https://vimeo.com/743625815) on Vimeo
- [React #6: React Router Hooks Exercise Repo](https://github.com/Bryantellius/react-exercise/tree/react-router-hooks-exercise) on Github
