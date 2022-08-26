---
title: "React Lifecycle Methods"
slug: "react-lifecycle-methods"
description: React Lifecycle methods Lesson Material
keywords: [javascript, react.js]
---

## Why

Lifecycle methods are special methods built-in to React, used to operate on components throughout their duration in the DOM. For example, when the component mounts, renders, updates, or unmounts. You already know the most important lifecycle method, the render method. Soon you will know a few more, with a good understanding of when to use them and what tasks should be done within them.

One important thing to notice is that lifecycle methods can only be used in class components. In functional components we have other options. But more on that in the next lesson. Let’s begin.

## What

As stated in the introduction, a component’s lifecycle is the sequence of stages an instance of a component goes through in the DOM (or virtual DOM in React’s case). Let me give you a quick example:

1. Creation of the component (`componentDidMount`)
2. Render of the component (`render`)
3. (Optional) Update of the component (`componentDidUpdate`)
4. Death of the component (`componentWillUnmount`)

A component can be in different states of its “life”, and in React we can use those states to handle certain tasks.

### Render

We are already familiar with the `render` method in React, each class component needs to contain a `render` method, and it is fairly simple to understand. The `render` method contains all the logic your component should display on the screen. It might also contain a null value, if you don’t want to show anything.

### ComponentDidMount

As the name already suggests, this method is run when the component is mounted, meaning when it is inserted in the DOM tree.

Common tasks that are done in this method are:

- Connect to web APIs or JavaScript frameworks.
- Set Timers using setTimeout or setInterval.
- Add event listeners.

### ComponentDidUpdate

This method is not called for the initial render, but any other time when the component updates. This method is a great place to work and operate on the DOM when the component has updated. For example you could do network requests. Just make sure to compare it to the current props.

### ComponentWillUnmount

This is the last lifecycle method, which will be called when the component is removed from the DOM tree. Usually you would do cleanup tasks in this method. This often includes cleaning up what you added in the componentDidMount method.

A few examples are:

- Remove event listeners
- Cancelling network requests
- Other cleanup routines

## How

Let’s walk through React Lifecycle Methods.

### Mounting Phase

So let’s go to the `App.js` and implement the mounting phase:

Create a constructor, but don't forget to call the constructor of the parent class using `super()`:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    console.log("App - Constructor");
  }
}
```

Then below our constructor we’ll add our first lifecycle hook, `componentDidMount()`, this method is called after our component is rendered to the DOM, and it's the perfect place to make fetch calls to get data from the server. Note that at the point the component is mounted, that means that it is now in the DOM, this is the place to make fetch calls and get data from the server!

```jsx
componentDidMount() {
    console.log("App - Mount");
}
```

Next, we’ll add our `componentDidUpdate()` lifecycle hook. This method is called after our component state is updated. It takes in a parameter that represents the previous state.

```jsx
componentDidUpdate(prevState) {
    console.log("App - Update (prevState)", prevState);
}
```

Lastly, we’ll add our `componentWillUnmount()` lifecycle hook. This method is called after our component is removed from the DOM.

```jsx
componentWillUnmount() {
    console.log("App - Unmount");
}
```

At this point, our App component looks like this:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mount");
  }

  componentDidUpdate(prevState) {
    console.log("App - Update (prevState)", prevState);
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  render() {
    console.log("App - Render");
    // ...
  }
}
```

Save then look at our inspector console.

Now lets add a console.log to each of the `App.js` children components in the render() method. This will show us the actual process of the code before it actually gets mounted to the DOM:

In `navbar.jsx`:

```jsx
class NavBar extends Component {
    constructor(props) {
        super(props)

        console.log("Navbar - Constructor");
    };

    render() {
        console.log("Navbar - Rendered");
        ...
    }
}
```

Check the console in the inspector window now.

First, our App constructor gets called. Then the App component is rendered. Next, each of the App component’s children will have their constructor called, and components rendered to the DOM. Lastly, the App component is mounted to the DOM.

## Takeaways

1. Components have an event lifecycle during their existence on dom
2. Components are _created_, _rendered_, _mounted_, _updated_, and _unmounted_
3. There are predefined methods that handle these lifecycle events inherited from the `React.Component` class
