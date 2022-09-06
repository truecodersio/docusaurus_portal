---
title: "JS Selection Statements"
slug: "/js-selection-statements"
---

## Why

In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's HP is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is nighttime.

## What

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is true
- Use `else` to specify a block of code to be executed, if the same condition is false
- Use `else if` to specify a new condition to test, if the first condition is false
- Use `switch` to specify many alternative blocks of code to be executed

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

```js
if (balance >= price) {
  proceedToPurchase();
}
```

Basic **if...else** syntax looks like the following:

```js
if (balance >= price) {
  proceedToPurchase();
} else {
  declineCard();
}
```

Here we've got:

1. The keyword `if` followed by some parentheses.
2. A condition to test, placed inside the parentheses (e.g. "is this value bigger than this other value?", or "does this value exist?"). The condition makes use of the [comparison operators](https://developer.mozilla.org/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators) we discussed in the last module and returns true or false.
3. A set of curly braces, inside which we have some code — this can be any code we like, and it only runs if the condition returns true.
4. The keyword `else`.
5. Another set of curly braces, inside which we have some more code — this can be any code we like, and it only runs if the condition is not true — or in other words, the condition is false.

This code is pretty human-readable — it is saying:

> "if the condition returns true, run code A, else run code B"

\*You should note that you don't have to include the else and the second curly brace block — the following is also perfectly legal code:

```js
if (balance >= price) {
  proceedToPurchase();
}

declineCard();
```

However, you need to be careful here — in this case, the second block of code is not controlled by the conditional statement, so it always runs, regardless of whether the condition returns true or false. This is not necessarily a bad thing, but it might not be what you want — often you want to run one block of code or the other, not both.

Use the `else if` statement to specify a new condition if the first condition is false.

```js
if (balance > price) {
  proceedToPurchase();
} else if (balance == price) {
  proceedWithWarning();
}
```

## How

A common pattern you'll come across again and again when using selection statements is that any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement.

Therefore, you can simply use a variable name on its own to test whether it is true, or even that it exists (that is, it is not `undefined`.) So for example:

```js
if (preferredName) {
  greetWithPreferredName();
} else {
  greet();
}
```

Selection statement conditionals are evaluated in a **boolean context**. Meaning that they boil expressions down to `true` or `false`. So remember your truthy/falsy values!

### Nesting if statements

It is perfectly OK (\*the code will execute) to put one if...else statement inside another one — to nest them.

For example:

```js
if (balance >= price) {
  if (balance == price) {
    displayWarning();
  }

  proceedToPurchase();
} else {
  declineCard();
}
```

### Logical operators

If you want to test multiple conditions without writing nested if...else statements, [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) can help you. When used in conditions, the first two do the following:

- `&&` — **AND**; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
- `||` — **OR**; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

Using logical AND:

```js
if (balance >= price && cardVerified) {
  proceedToPurchase();
} else {
  declineCard();
}
```

Using logical OR:

```js
if (balance < price || invalidCard) {
  declineCard();
}
```

### Switch Statements

`if...else` statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators).

For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

In such a case, [switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) are your friend — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.

Syntax:

```js
switch (urlExt) {
  case ".js":
    // handle js file
    break;
  case ".html":
    // handle html file
    break;
  case ".css":
    // handle css file
    break;
  default:
  // handle unknown file
}
```

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

When JavaScript reaches a `break` keyword, it breaks out of the switch block.

This will stop the execution inside the block.

It is not necessary to break the last case (`default`) in a switch block. The block breaks (ends) there anyway.

Sometimes you will want different switch cases to use the same code.

In this example case `".js"` and `".jsx"` share the same code block:

```js
switch (urlExt) {
  case ".js":
  case ".jsx":
    // handle js or jsx file
    break;
  case ".html":
    // handle html file
    break;
  case ".css":
    // handle css file
    break;
  default:
  // handle unknown file
}
```

> The `default` section doesn’t always have to be at the bottom, just remember that it's code block will always be executed

## Takeaways

1. Selection statements are for creating decisions in your program
2. `if` statements are followed by conditionals in `()`
3. `if/else` code blocks are wrapped in `{}`
