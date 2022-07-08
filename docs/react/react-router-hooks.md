---
title: "React Router Hooks"
slug: "/react-router-hooks"
---

## Why

With React Router, we can create navigation to different webpages by adding routes, a Routes, and a BrowserRouter. React Router ships with a few hooks that let you access the state of the router and perform navigation from inside your components.

## What

There are four primary router hooks we can use:

- `useNavigate`
- `useLocation`
- `useParams`

We should recognize these four as React hooks by their naming conventions: **use**. Let’s dive into each one.

### `useNavigate`

The `useNavigate` hook allows you to navigate routes programmatically. You can use the returned function by passing in a route path (string), and optional options object.

Example use cases:

- `navigate(“/game”)` - navigates to the game route
- `navigate(“/game”, { replace: true, state: 10 })` - navigates to the game route, replaces the current route, and passes the value of 10 with the navigation
- `navigate(-1)` - navigates to the previous route (back)

### `useLocation`

The `useLocation` hook allows you to access the location object that represents the current URL.

Let’s take a look at the location object.

```js
{
  pathname: "/characters",
  search: "",
  hash: "",
  state: undefined
}
```

You can use the `useLocation` hook whenever you need to track pathname changes in your web application.

### `useParams`

The `useParams` hook allows you to access the key/value pairs of URL parameters. You can use this to access match.params of the current route inside your component.

First, let’s add a parameter to my route:

```jsx
<Route path="/characters/:name" element={<Home />} />
```

Let’s take a look at the params object if the url is ["http://localhost:3000/characters/kvothe"](http://localhost:3000/characters/kvothe):

```js
{
  name: "kvothe";
}
```

Now I can use the useParam hook to access `params.name`:

```jsx
const { name } = useParams();
```

## How

Let’s go through it step by step.

We need to make sure the `react-router-dom`module is installed:

```sh
npm install react-router-dom
```

Next we need to go to `App.jsx` and import our Browser router, and then wrap everything in our App component with the BrowserRouter component:

```jsx
import { BrowserRouter } from "react-router-dom";
```

```jsx
return <BrowserRouter></BrowserRouter>;
```

Next we need to register our Routes inside of the `Routes` component, which means to tell React which components to render based on the given routes, so in `App.jsx` add the `Routes` and `Route` components to the import statement:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

And we’ll add our router components in the return statement:

```jsx
return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Title />} />
      <Route path="codewars">
        <Route path=":username" element={<Codewars />} />
      </Route>
      <Route path="game" element={<CharacterList />} />
    </Routes>
  </BrowserRouter>
);
```

Now, let’s create our `Codewars` component.

Import `useParams`, `useState`, and `useEffect`.

```jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
```

We’ll create a functional component called `Codewars`, where we’ll use `useState` for user and isLoaded values. We’ll also create a variable called controller to assign a new `AbortController` instance. The component will return basic information about the codewars user that we store in state.

```jsx
const Codewars = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const controller = new AbortController();

  if (isLoaded) {
    return (
      <div className="codewars-container">
        <h2>{user.username}</h2>
        <p className="text-special">{user.name ? `(${user.name})` : null}</p>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};
```

Now let’s use the useEffect to call the Codewars API based on the ‘username’ url parameter that we can pull from the `useParams` hook.

```jsx
let { username } = useParams();

useEffect(() => {
  if (!isLoaded) {
    fetch("https://www.codewars.com/api/v1/users/" + username, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoaded(true);
      })
      .catch((err) => alert(err.message));
  } else {
    if (isLoaded) setIsLoaded(false);
  }
}, [username]);
```

Great! This Codewars component now will call a fetch request depending on the url parameter that is provided by the react router. If you think about it, we now have an indefinite amount of Codewars routes!

## Takeaways

1. React Router comes with its own hooks for accessing object values related to site navigation and page views
2. `useNavigate` is a hook for navigating programmically
3. `useParams` is a hook for accessing the url parameters
4. `useLocation` is a hook for accessing url location values such as _pathname, hash, query, and state_
