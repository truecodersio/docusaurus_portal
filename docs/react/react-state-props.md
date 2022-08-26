---
title: "React State and Props"
slug: "react-state-props"
description: React State and Props Lesson Material
keywords: [javascript, react.js, react state and props, react data flow]
---

## Why

There is just a little bit more you have to understand to write your first React application. If you’ve done the previous lesson, you should now have a great foundation for the next concepts that you will learn. Make sure you pay attention to this lesson because it covers one of the most important concepts to get you started with React.

## What

### Props

So far, you’ve learned a lot about components and how to structure your application component-based. But how do we pass values or even functionality between those components? Yes, you guessed it right, the answer is props.

Below, there are two components, `MyComponent` and `App`. As you can see, `MyComponent` is a child component of `App`, which passes down a property called title. In this specific example, the title is set to “React”. In `MyComponent`, we can access the title (React) that has been passed down with the syntax this.props.title. The curly brackets around it are always needed when you write JavaScript in React.

> NOTE: Make sure you pass props to the constructor of the child component (`MyComponent`) as well as the `super()` method, otherwise you will not be able to access this.props.title in `MyComponent`.

In MyComponent:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default MyComponent;
```

In App.js:

```jsx
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent title="React" />
      </div>
    );
  }
}

export default App;
```

Now you might be wondering how props work with functions. Believe it or not, they work the same way!

In MyComponent:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;
```

In App.js:

```jsx
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;
```

There is a little bit more going on here, but in the end, it works exactly as in the example before. First, there is the MyComponent, which is essentially the same. The only thing we added is the `{ this.props.onButtonClicked }` as an `onClick` event to the component. You should already be familiar with this syntax. Now to the `App` component.

First, we defined the function `onClickBtn` above the render method. After that, we passed this function down to our MyComponent as a property, which we named onButtonClicked (Of course, you could also name it `onClickBtn`, and then use the function in `MyComponent.js` by the name of `onClickBtn`, but we wanted to emphasize that you can rename the functions when passing them around as props). We do that the same way we passed the title value previously. Now the only thing we have to do is bind the method to this; we do that in the constructor method at the top of our component but below the `super()` call. The reason we have to bind this keyword when passing a function to another component is that it needs to stay in the same context. So remember, you have to bind this for all functions in all class components when passing them to other components.

As you can see when you are passing many properties or functions to a component, it can get quite exhausting to always refer to them with `this.props.someProperty`. Destructuring to the rescue! We can alternatively write the above as follows:

In MyComponent:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;
```

Here, we are destructuring `title` and `onButtonClicked` from `this.props`, which lets us refer to them with just their names. Make sure to destructure within the render method when using class components. In functional components (more on those later!), you would destructure outside of the return statement.

### State

Another very important concept in React is “state”. In short, all values that can change over time are handled through state.

The following example shows how to define state in React:

In App.js:

```jsx
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
```

In the above component, we declared a piece of state. You always declare state in the constructor of a class component. Keep in mind that this will work differently when we cover functional components later. The `setState` method we call sets the state to a new value. In React, state is immutable. This means you should never change state directly because it can lead to unexpected behavior or bugs. What exactly does that mean? Never do something like this: `this.state.count = 3`, instead always use the `setState` method React provides built-in to modify the state. Keep this in mind, it can save you a lot of debugging when you are getting started with React.

Further, it’s important to note that with class-based components, class methods such as our `countUp()` method need to be bound in our constructor (using `bind`), so they know what context to operate in. This is a result of how this works in JavaScript.

As you have also seen in the render method, we access the current state through `this.state.count`. This syntax should look familiar to you by now because it is the same way we accessed props. And yes, you can also de-structure the state.

### State and props in functional components

As you have learned, React provides the ability to create functional components. They work a little bit differently than the class components we’ve discussed thus far. The concept of `props` works mostly the same, with the only difference being that you don’t pass `props` as an argument to the constructor, instead you pass it as an argument to the component itself. Another major difference between functional and class components concerning `props` is the way you call the `props`. You learned that in a class component, the `props` that have been passed down from the parent component will be called like so: `this.props.someFunction`, however in functional components, we don’t need to call this, so we access `props` like so: `props.someFunction`. That’s the main difference with props between class and functional components. Let me give you a quick example to emphasize this.

```jsx
import React from "react";

const MyComponent = (props) => {
  return <div>{props.title}</div>;
};

export default MyComponent;
```

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent title="Hello World" />
    </div>
  );
};
```

Of course, we can also destructure from props here. By adding this line `const {title} = props` above the return statement in `MyComponent.js` we can just refer to the title using `{ title }`.

For the state in functional components, it is a little bit different. Before the end of 2018, developers were not able to access state in functional components at all. Functional components were therefore just used for returning JSX logic. However, with the introduction of React Hooks, this has changed. Now we can set and access state in functional components, and for newer code, they are often preferred over class components. You will be exposed to both kinds of components on the job, requiring us to be very familiar with both. The way React hooks work is the topic of one of the following lectures, so don’t worry about it too much right now. We are setting you up to say “Hey! I remember that” when it’s introduced.

## How

Let’s practice!

In your first react project that we created previously, let’s start passing props and utilizing state!

Head over to the exercise to get started.

## Takeaways

1. _Props_ is an object, containing key/value pairs, that is passed from parent to child component
2. _State_ is a property that, when updated, should trigger a re-render of a component on the virtual dom
3. _Object destructuring_ can be used to prevent repetitive code when referencing prop and state values
