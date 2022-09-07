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
        <MyComponent title="Hello World!" />
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
        <MyComponent title="Hello World!" onButtonClicked={this.onClickBtn} />
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
      <MyComponent title="Hello World!" />
    </div>
  );
};
```

Of course, we can also destructure from props here. By adding this line `const {title} = props` above the return statement in `MyComponent.js` we can just refer to the title using `{ title }`.

For the state in functional components, it is a little bit different. Before the end of 2018, developers were not able to access state in functional components at all. Functional components were therefore just used for returning JSX logic. However, with the introduction of React Hooks, this has changed. Now we can set and access state in functional components, and for newer code, they are often preferred over class components. You will be exposed to both kinds of components on the job, requiring us to be very familiar with both. The way React hooks work is the topic of one of the following lectures, so don’t worry about it too much right now. We are setting you up to say “Hey! I remember that” when it’s introduced.

### Controlled Inputs

In React, a common practice when dealing with `input`, `textarea`, and `select` form fields is to control the input values with component state. These are referred to as _Controlled Inputs_. The idea is to create a binding between a components state and the input's value. When the user updates the input's value, state should be updated. When state is updated, the DOM should be re-rendered and the current input value displayed to the user.

Here is an example:

```jsx
class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(event) =>
              this.setState({ email: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
        </div>
      </form>
    )
  }
}
```

### Rendered Lists

_Rendered Lists_ in React are great ways to render components from array items. Take the following list of names:

```js
const names = ["Frodo", "Merry", "Pippin", "Sam", "Bilbo"];
```

We very well might want to display these names as `li` elements on the DOM. We can easily do this with a rendered list.

```jsx
class Names extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      names: ["Frodo", "Merry", "Pippin", "Sam", "Bilbo"]
    }
  }
  
  render() {
    return (
      <ul>
        {this.state.names.map((name, idx) => <li key={idx}>{name}</li>)}
      </ul>
    )
  }
}
```

Notice what is placed inside of the `ul`. We call `map` on the names array, and return a new array where each name string is replaced with a `li` displaying the name. The `key` prop is important when using rendered lists. It should be a _unique value per element_, and is used by the ReactDOM to differentiate between items in a list. Although you can use the indices from an array, it is better to use `id` values if you have them on your data.

## How

Let’s practice by recreating a number guessing game in React.

We'll start with the `App.jsx` resembling the following:

```jsx
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Number Guessing Game</h1>
          <p></p>
          <form>
            <label htmlFor="guess">Enter a guess:</label>
            <input
              type="number"
              name="guess"
              id="guess"
            />
            <button type="submit">Submit</button>
          </form>
        </header>
      </div>
    )
  }
}
```

For our number guessing game, we will need to keep up with four values:

- the number to guess
- the guessed number from the user
- the feedback given to the user after each guess
- the user's score

We will define these values in the constructor of the `App` class.

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    
    this.correctNum = Math.round(Math.random() * (100 - 1) + 1); // random number between 1 and 100
    this.score = 100;

    this.state = {
      feedback: "",
      guess: "",
    };
   }

  // ...
}
```

`feedback` and `guess` are defined as state whereas `correctNum` and `score` are not. This is because we intend for the DOM to be updated each time the user changes their guess and we give them feedback. We will not need to update the DOM when either we generate the number to guess per game, or their score is changed, so those values are just defined as properties on the `App` instance.

Our game will progress as the user _submits_ guesses. We will control the guess input with state and use a `form` element to listen for `submit` events.

Let's define a method to handle `submit` events.

```jsx
handleGuess(event) {
  event.preventDefault();

  let feedback;

  if (this.state.guess < this.correctNum) {
    feedback = "Too low";
  } else if (this.state.guess > this.correctNum) {
    feedback = "Too high";
  } else {
    feedback = `Correct! You finished with a score of ${this.score}.`;
  }

  this.setState({ feedback });
  this.score--;
}
```

`handleGuess` will prevent the default form submission behavior, evaluate the user's guess against the correct number, and update the feedback state.

Now all that is left is to add `handleGuess` as the event handler for the `form`'s `onSubmit` prop, bind the `this` value for `handleGuess` to the `App` instance in the constructor, and control the guess input with `this.state.guess`.

In `render`:

```jsx
render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number Guessing Game</h1>
        <p>{this.state.feedback}</p>
        <form onSubmit={this.handleGuess}>
          <label htmlFor="guess">Enter a guess:</label>
          <input
            type="number"
            name="guess"
            id="guess"
            value={this.state.guess}
            onChange={(event) =>
              this.setState({ guess: Number(event.target.value) })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}
```

In `constructor`:

```jsx
constructor(props) {
  // ...

  this.handleGuess = this.handleGuess.bind(this);
}
```

Awesome! This React Number Guessing Game should be a simple, working version where the user can submit guesses and receive feedback whether their guess was above, below, or correct in relation to the generated number. 

## Takeaways

1. _Props_ is an object, containing key/value pairs, that is passed from parent to child component
2. _State_ is a property that, when updated, should trigger a re-render of a component on the virtual dom
3. _Object destructuring_ can be used to prevent repetitive code when referencing prop and state values
4. _Controlled Inputs_ are inputs whose `value` and `onChange` props are tied to state values
5. _Rendered Lists_ in React are arrays of JSX elements that can be rendered to the ReactDOM
