---
title: "React Router"
slug: "/react-router"
---

<!-- Lecture Video 1

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/512688952/cf667b10f7" type="video/mp4" />
</video>

Lecture Video 2

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/513159042/c08596be42" type="video/mp4" />
</video>

--- -->

## Why

**React Router** is a standard library for **routing in React**. It enables the navigation among views of various components in a **React** Application, allows changing the browser URL, and keeps the UI in sync with the URL

In this lecture we are going to learn a little bit about routing in React. Up until now we have only written one-page applications. Once your application has multiple pages, you need to set up a reliable routing system. This is to handle the component or page that should be rendered when navigating to a certain route. For this we are going to use a package called `react-router-dom`.

## What

There are three primary categories of components in React Router:

- routers, like `<BrowserRouter>` and `<HashRouter>`
- route matchers, like `<Route>` and `<Routes>`
- and navigation, like `<Link>`, `<NavLink>`, and `<Redirect>`

You can think of the navigation components as “route changers”.

All of the components that you use in a web application should be imported from `react-router-dom`.

### Routers

At the core of every React Router application should be a router component. React-router-dom provides two routers: `<BrowserRouter>` and `<HashRouter>`. The main difference between the two is the way they store the URL and communicate with your server.

- `<BrowserRouter>` Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well. The key is that your server should match the same URL destinations as your frontend.
- `<HashRouter>` Hash router stores the current location in the hash portion of the URL, and the hash is never sent to the server.

To use a router, just make sure it is rendered at the root of your element hierarchy.

### Route Matchers

We use Routes and Route to match routes. When a `<Routes>` is rendered, it searches through its children `<Route>` elements to find one whose path matches the current URL. When it finds one, it renders that `<Route>` and ignores all others. If no `<Route>` matches, the `<Routes>` renders nothing (null).

Note that `<Route path>` is satisfied when it matches any part of the URL from the beginning, not the whole thing. So a `<Route path="/">` will always match the URL. It is best practice to put this `<Route>` last in our `<Routes>`. We can also use `<Route exact path="/">` which forces an exact URL match.

Note: Although you can render `<Route>` elements outside of a `<Routes>`, it is not recommended unless you were to use the useRouteMatch hook instead.

### Navigating with Links

React Router provides a `<Link>` component to create links in your application. Wherever you render a `<Link>`, an anchor (`<a>`) will be rendered in your HTML document.

The `<NavLink>` is a special type of `<Link>` that can style itself as “active” when its prop matches the current location. You can conditionally render inline styling or classNames based on a function callback that accepts an `isActive` boolean parameter.

### Outlet

The `<Outlet>` can be used in parent route elements to render child route elements. As nested routes are rendered, the component elements are built based on the combined route paths.

## How

Let’s go through it step by step. Create a new react app and let’s begin!:

The first thing we need to do is install `react-router-dom`

```sh
npm install react-router-dom
```

Next we need to go to `App.jsx` and import our Browser router, and then wrap everything in our App component with the BrowserRouter component:

```jsx
import { BrowserRouter } from "react-routing-dom";
```

```jsx
return <BrowserRouter></BrowserRouter>;
```

Next we need to register our Routes inside of the Routes component, which means to tell React which components to render based on the given routes, so in `App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

and

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/users" element={<Users />} />
  </Routes>
</BrowserRouter>
```

Now, start the application to see it in the browser, use the url bar to test that the router is working!

### Link component

Next, we're going to go to our Navbar.jsx, and we want to import and use { Link } from our react router dom. The biggest thing that this will fix, this is more important in larger enterprise applications, is that each time we click a new page to go to, it wont reload the bundle.js every time. So in Navbar.jsx:

```jsx
import { Link } from "react-router-dom";
```

and

```jsx
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul>
</nav>
```

### Using `NavLink`

Let’s add specific styling to the link that is ‘active’, meaning we are on the page that the link is pointing to. We’ll pass a callback function to the className prop on each NavLink, and conditionally render a class name for active links.

See below:

```jsx
<nav>
  <ul>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : null)}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : null)}
        to="/users"
      >
        Users
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : null)}
        to="/admin"
      >
        Admin
      </NavLink>
    </li>
  </ul>
</nav>
```

## Takeaways

1. React allows you to create _single-page applications_. This means that we need to use React Router to create _routing_ to different page views possible
2. The `Routes` component works as a switch. When the url in the address bar changes, it will check it's child `Route` components to find a path match
3. `Link` or `NavLink` components are used for _routing navigation_
