---
title: "State and Props"
slug: "react-state-props"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/truecodersio/review/510881329/013d63a934" type="video/mp4" />
</video>

Lecture Video 2

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/truecodersio/review/510881453/982a3e65a5" type="video/mp4" />
</video>

# Lecture

## Why

There is just a little bit more you have to understand to write your first React application. If you’ve done the previous lesson, you should now have a great foundation for the next concepts that you will learn. Make sure you pay attention to this lesson because it covers one of the most important concepts to get you started with React.

## What

### Props

So far, you’ve learned a lot about components and how to structure your application component-based. But how do we pass values or even functionality between those components? Yes, you guessed it right, the answer is props.

Below, there are two components, `MyComponent` and `App`. As you can see, `MyComponent` is a child component of `App`, which passes down a property called title. In this specific example, the title is set to “React”. In `MyComponent`, we can access the title (React) that has been passed down with the syntax this.props.title. The curly brackets around it are always needed when you write JavaScript in React. _IMPORTANT_: Make sure you pass props to the constructor of the child component (`MyComponent`) as well as the `super()` method, otherwise you will not be able to access this.props.title in `MyComponent`.

In MyComponent:

```
import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default MyComponent;
```

In App.js:

```
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MyComponent title="React" />
            </div>
        )
    }
}

export default App;
```

Now you might be wondering how props work with functions. Believe it or not, they work the same way!

In MyComponent:

```
import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.props.onButtonClicked}>Click Me!</button>
            </div>
        )
    }
}

export default MyComponent;
```

In App.js:

```
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
    constructor(props) {
        super(props)

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
        )
    }
}

export default App;
```

There is a little bit more going on here, but in the end, it works exactly as in the example before. First, there is the MyComponent, which is essentially the same. The only thing we added is the { this.props.onButtonClicked } as an onClick event to the component. You should already be familiar with this syntax. Now to the `App` component.

First, we defined the function onClickBtn above the render method. After that, we passed this function down to our MyComponent as a property, which we named onButtonClicked (Of course, you could also name it onClickBtn, and then use the function in MyComponent.js by the name of onClickBtn, but we wanted to emphasize that you can rename the functions when passing them around as props). We do that the same way we passed the title value previously. Now the only thing we have to do is bind the method to this; we do that in the constructor method at the top of our component but below the super() call. The reason we have to bind this keyword when passing a function to another component is that it needs to stay in the same context. So remember, you have to bind this for all functions in all class components when passing them to other components.

As you can see when you are passing many properties or functions to a component, it can get quite exhausting to always refer to them with this.props.someProperty. Destructuring to the rescue! We can alternatively write the above as follows:

In MyComponent:

```
import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, onButtonClicked } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <button onClick={onButtonClicked}>Click Me!</button>
            </div>
        )
    }
}

export default MyComponent;
```

Here, we are destructuring `title` and `onButtonClicked` from `this.props`, which lets us refer to them with just their names. Make sure to destructure within the render method when using class components. In functional components (more on those later!), you would destructure outside of the return statement.

### State:

Another very important concept in React is “state”. In short, all values that can change over time are handled through state.

The following example shows how to define state in React:

In App.js:

```
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
    constructor(props) {
        super(props)

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
        )
    }
}

export default App;
```

In the above component, we declared a piece of state. You always declare state in the constructor of a class component. Keep in mind that this will work differently when we cover functional components later. The `setState` method we call sets the state to a new value. In React, state is immutable. This means you should never change state directly because it can lead to unexpected behavior or bugs. What exactly does that mean? Never do something like this: `this.state.count = 3`, instead always use the `setState` method React provides built-in to modify the state. Keep this in mind, it can save you a lot of debugging when you are getting started with React.

Further, it’s important to note that with class-based components, class methods such as our `countUp()` method need to be bound in our constructor (using `bind`), so they know what context to operate in. This is a result of how this works in JavaScript.

As you have also seen in the render method, we access the current state through `this.state.count`. This syntax should look familiar to you by now because it is the same way we accessed props. And yes, you can also de-structure the state.

### State and props in functional components

As you have learned, React provides the ability to create functional components. They work a little bit differently than the class components we’ve discussed thus far. The concept of `props` works mostly the same, with the only difference being that you don’t pass `props` as an argument to the constructor, instead you pass it as an argument to the component itself. Another major difference between functional and class components concerning `props` is the way you call the `props`. You learned that in a class component, the `props` that have been passed down from the parent component will be called like so: `this.props.someFunction`, however in functional components, we don’t need to call this, so we access `props` like so: `props.someFunction`. That’s the main difference with props between class and functional components. Let me give you a quick example to emphasize this.

```
import React from "react";

const MyComponent = (props) => {
    return <div>{props.title}</div>
};

export default MyComponent;
```

```
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

Of course, we can also destructure from props here. By adding this line `const {title} = props` above the return statement in `MyComponent.js` we can just refer to the title using `{title}`.

For the state in functional components, it is a little bit different. Before the end of 2018, developers were not able to access state in functional components at all. Functional components were therefore just used for returning JSX logic. However, with the introduction of React Hooks, this has changed. Now we can set and access state in functional components, and for newer code, they are often preferred over class components. You will be exposed to both kinds of components on the job, requiring us to be very familiar with both. The way React hooks work is the topic of one of the following lectures, so don’t worry about it too much right now. We are setting you up to say “Hey! I remember that” when it’s introduced.

## How

Let’s practice!

In your first react project that we created previously, let’s start passing props and utilizing state!

Repo Link for Walkthrough: [React State and Props](https://github.com/Bryantellius/react_state_props_walkthrough/tree/answer)

## Exercise

Repo Link: React: [State and Props](https://github.com/Bryantellius/react_props_state)

### Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: `git clone <repo_name>` cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select `repo_name` to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the `README.md` file to complete exercises
- Open the `App.jsx` file to get started

### Steps

- In your `App.jsx`

1. Create a variable boxes and assign it an empty array
2. Create a variable numBoxes and assign it the number 24
3. Write a loop that iterates from 0 to numBoxes, and pushes a box object to boxes array during each iteration

```
{

    id: i,
    color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`

}
```

4. Assign boxes to the App state
5. Create a method `handleBoxClick` that takes an `HTMLChangeEvent (e)` as a param, and does the following:
   - Creates a variable newBoxes
   - Maps through the boxes state
   - If the box id is equal to the event target id value, then set the box's color value to `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
   - Sets the boxes state equal to `newBoxes`
6. Earlier we used a `getRandomColor` method. Create this method beneath `handleBoxClick`. It should:
   - Create a variable `rgb` that is assigned a random number between 1-255
   - Return `rgb`
   - This method is called during the creation of the boxes, and during the `onclick` event listener to randomize the box colors
7. Inside the render method, create a variable `renderBoxes` that maps through the boxes state, and returns a `<Box />` component for each box in the array
8. You should pass the following props to each Box component:
   - key = box.id
   - id = box.id
   - color = box.color
   - handleClick = this.handleBoxClick

- In your `Box.jsx`

1. Add an onClick attribute to the return div, and pass in the props.handleClick
2. Add an id attribute to the return div, and assign it the props.id
3. Add props.color as the span text content
4. Lastly, add a backgroundColor property to the inline-styling of the return div, and assign it prop.color

- Your finished product should display 24 squares on the DOM, all with random color values. Each square's background color should randomize when you click on it.

[Walkthrough Documentation Here](https://docs.google.com/document/u/1/d/17HLmyfNOZxOHntcGdtvW5jkdTz_rPWfdKs97mxO591k/edit)

Exercise Walkthrough Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/511323881/7a7e1c80bc" type="video/mp4" />
</video>

## Quiz:

[State and Props Quiz](https://docs.google.com/forms/d/e/1FAIpQLSfNdWxvfW7KRKq41xH9IGz6V4VJ65OqlBaSqOyMRTRIvJynfA/viewform)
