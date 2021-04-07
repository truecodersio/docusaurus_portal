---
title: "Selection Statements"
slug: "/javascript-selection-statements"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504984430/6429105714" type="video/mp4" />
</video>

---

# Lecture

## Why:

In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's HP is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is nighttime.

## What:

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use **if** to specify a block of code to be executed, if a specified condition is true
- Use **else** to specify a block of code to be executed, if the same condition is false
- Use **else if** to specify a new condition to test, if the first condition is false
- Use **switch** to specify many alternative blocks of code to be executed

Use the **if** statement to specify a block of JavaScript code to be executed if a condition is true.

```
if(condition) {
    // execute some code if the condition is true
}
```

Basic **if...else** syntax looks like the following:

```
if(condition) {
    // execute some code if the condition is true
} else {
    // execute different code if the condition is false
}
```

Here we've got:

1. The keyword **if** followed by some parentheses.
2. A condition to test, placed inside the parentheses (typically "is this value bigger than this other value?", or "does this value exist?"). The condition makes use of the [comparison operators](https://developer.mozilla.org/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators) we discussed in the last module and returns true or false.
3. A set of curly braces, inside which we have some code — this can be any code we like, and it only runs if the condition returns true.
4. The keyword else.
5. Another set of curly braces, inside which we have some more code — this can be any code we like, and it only runs if the condition is not true — or in other words, the condition is false.

This code is pretty human-readable — it is saying:

"if the condition returns true, run code A, else run code B"

_You should note that you don't have to include the else and the second curly brace block — the following is also perfectly legal code:_

```
if(condition) {
    // execute some code if the condition is true
}

// execute code after selection statement

```

However, you need to be careful here — in this case, the second block of code is not controlled by the conditional statement, so it always runs, regardless of whether the condition returns true or false. This is not necessarily a bad thing, but it might not be what you want — often you want to run one block of code or the other, not both.

Use the **else if** statement to specify a new condition if the first condition is false.

```
if(condition1) {
    // execute some code if the condition1 is true
} else if(condition2) {
    // execute differenct code if condition2 is true
} else {
    // execute code if both condition1 and condition2 are false
}
```

## How:

A common pattern you'll come across again and again when using selection statements is that any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement.

Therefore you can simply use a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined.) So for example:

```
let cheese = "Cheddar";

if(cheese) {
    console.log("Yay! Today your cheese is " + cheese);
} else {
    console.log("No cheese for you today.");
}
```

_run in console to see answer_

### Nesting if statements

It is perfectly OK (_the code will execute_) to put one if...else statement inside another one — to nest them.

For example:

```
if(forcast === "sunny") {
    if(temperature > 87) {
        console.log("It is " + temperature + " outside. HOT!.")
    } else {
        console.log("It is " + temperature + " outside. Nice and sunny!.")
    }
}
```

### Logical operators

If you want to test multiple conditions without writing nested if...else statements, [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) can help you. When used in conditions, the first two do the following:

- **&&** — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
- **||** — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

Using the logical AND, the previous example snippet can be rewritten to this:

```
if(forcast === "sunny" && temperature > 87) {
    console.log("It is " + temperature + " outside. HOT!.")
} else if(forcast === "sunny" && temperature <= 87) {
    console.log("It is " + temperature + " outside. Nice and sunny!.")
}
```

### Switch Statements

if...else statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators).

For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

In such a case, [switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) are your friend — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.

Syntax:

```
switch(condition) {
    case option1:
        // execute some code for option1
        break;
    case option2:
        // execute come code for option2
        break;
    default:
        // execute some code if no case is matched
}
```

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

```
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 1:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday"
        break;
    default:
        day = "Not a valid weekday";
}
```

When JavaScript reaches a **break** keyword, it breaks out of the switch block.

This will stop the execution inside the block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Sometimes you will want different switch cases to use the same code.

In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

_the **default **section doesn’t have to always be at the bottom also_

---

## Exercise:

Exercise Repo: [JavaScript Selection Statements](https://github.com/truecodersio/JavaScript_Selection_Statements)

### Exercise 1

1. Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable.
2. Use window.prompt() to ask the user to input a number, and store the result in a variable
3. Create an if-statement that if the guessed number is below the initial value, print out “too low”.
4. Create an else-if statement that if the number is higher than the initial value, print out “too high”.
5. Create an else statement that prints out “Congratulations!!!”.

### Exercise 2

1. Declare a variable named userInput2 (or whatever topic you’ll ask about) and set the value to window.prompt(“Whatever question you want to ask here”).
2. Inside of the parentheses, ask a question on whatever (appropriate) topic you’d like.
3. Create a switch-case statement with 5+ cases and a default case.
4. Log a response to the console depending on the value of userInput2.

[Exercise Walkthrough Documentation](https://docs.google.com/document/u/1/d/1DUrGSTy8XDMChQLx-RCWr2AfAQm4iVkkhGt-673G1bU/edit)

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/505435182/efcc5af38e" type="video/mp4" />
</video>

---

## Quiz:

JavaScript Operator Quiz and Video are coupled with the JavaScript Loops Quiz
