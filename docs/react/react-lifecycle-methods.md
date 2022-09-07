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

1. Component is rendered to the ReactDOM (`render`)
2. Component is mounted on the DOM (`componentDidMount`)
3. Component is updated on the DOM (`componentDidUpdate`)
4. Component is removed from the DOM (`componentWillUnmount`)

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

Let’s walk through an example of using React Lifecycle Methods.

### Fetching Data in React Components

So let’s go to the `App.jsx` and implement the mounting phase:

Create a constructor, but don't forget to call the constructor of the parent class using `super()`. Define a property on the state object called `list` and assign it an empty array. Then, define a property called `controller` that will be assigned a new instance of an AbortController. Your constructor should resemble the following:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.controller = new AbortController();
  }
}
```

Then below our constructor we’ll add our first lifecycle hook, `componentDidMount()`, this method is called after our component is rendered to the DOM, and it's the perfect place to make fetch calls to get data from the server. Note that at the point the component is mounted, that means that it is now in the DOM, this is the place to make fetch calls and get data from the server!

```jsx
componentDidMount() {
    console.log("App - Mount");
    // to be implemented
}
```

Next, we’ll create a method called `getData()` that will be responsible for using the `fetch` api to request data from a server. We will call this method in the `componentDidMount`.

```jsx
getData() {
    fetch("https://ghibliapi.herokuapp.com/people", { signal: this.controller.signal })
    .then((res) => res.json())
    .then((list) => this.setState({ list }))
    .catch((err) => console.error(err))
}
```

```jsx
componentDidMount() {
    console.log("App - Mount");
    this.getData()
}
```

The `fetch` api is being used to get a list of people objects from an api resource that provides data about Studio Ghibli films. It will be passed on options object where we define a signal that is assigned the AbortController's signal. This will be used in the `componentWillUnmount` to cleanup any unresolved fetch requests.

Lastly, we’ll add our `componentWillUnmount()` lifecycle hook. This method is called after our component is removed from the DOM. We'll use this lifecycle method to cleanup and memory leaks in our app.

```jsx
componentWillUnmount() {
    console.log("App - Unmount");
    this.controller.abort()
}
```

At this point, our App component looks like this:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    console.log("App - Constructor");

    this.state = {
      list: [],
    };

    this.controller = new AbortController();
  }

  componentDidMount() {
    console.log("App - Mount");

    this.getData();
  }

  getData() {
    fetch("https://ghibliapi.herokuapp.com/people", {
      signal: this.controller.signal,
    })
      .then((res) => res.json())
      .then((list) => this.setState({ list }))
      .catch((err) => console.error(err));
  }

  componentWillUnmount() {
    console.log("App - Unmount");

    this.controller.abort();
  }

  render() {
    console.log("App - Render");
    // ...
  }
}
```

### Rendering Lists in React Components

A _rendered list_ in React is an array of JSX elements that can be returned to the ReactDOM.

Start by creating a new component called `List` in a new file named `list.jsx`. The new component will receive an array value from props, and render JSX elements for each array element. We'll expect to get the list of people that is handled by our `App` component.

```jsx
export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  }
}
```

Notice that we are calling `map` on the `props.list` array. Map will return a new array based on the values returned from the callback function. We are adding a `key` prop to the returned `li` elements. This prop is required in rendered lists by the ReactDOM. The `key` prop value should be a _unique_ value per list. In our case, we are using the `item.id` as the unique value.

Next, we'll render our `List` component in our `App` to render our list of Studio Ghibli characters.

In App.jsx:

```jsx
import List from "./list.jsx";

class App extends Component {
  // ...

  render() {
    return (
      <div>
        <h1>Studio Ghibli People</h1>
        <List list={this.state.list} />
      </div>
    );
  }
}
```

At this point, we should have a rendered list of Studio Ghibli characters in the form of list items in an unordered list.

## Takeaways

1. Components have an event lifecycle during their existence on dom
2. Components are _created_, _rendered_, _mounted_, _updated_, and _unmounted_
3. There are predefined methods that handle these lifecycle events inherited from the `React.Component` class
