---
title: "HTML Forms and Tables"
slug: "/html-forms-and-tables"
---

## Why

Every element has a default display value depending on the type of element you are using.

Currently, there are two types of display values: **block** and **inline** and it is extremely important to know when and how to use both of these elements.

Two other elements that we’re going to look at will be `<form>` and `<table>`. Knowing how to build ‘submit forms’ and ‘tables’ in HTML is crucial for building any worthwhile website!

## What

First, let's make sure we know block vs. inline.

### Block-level Elements

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The `<div>` element is a block level element

```html
<!DOCTYPE html>
<html>
  <body>
    <div style="border: 1px solid black">Hello World</div>
    <div>
      The DIV element is a block element, and will always start on a new line
      and take up the full width available (stretches out to the left and right
      as far as it can).
    </div>
  </body>
</html>
```

### Inline Element

An inline element does not start on a new line and it only takes up as much width as necessary

The `<span>` element is an inline element

```html
<!DOCTYPE html>
<html>
  <body>
    <p>
      This is an inline span
      <span style="border: 1px solid black">Hello World</span> element inside a
      paragraph.
    </p>
  </body>
</html>
```

### HTML Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

#### The `<form>` Element

The way we create an HTML form is by using the HTML `<form>` element:

```html
<form>
  <label for="fname">First Name</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="fname">Last Name</label><br />
  <input type="text" id="lname" name="lname" /><br />
  <input type="submit" value="Submit" />
</form>
```

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

#### The `<input>` Element

An `<input>` element can be displayed in many ways, depending on the type attribute.

Here are some examples:

| Type                      | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| `<input type="text">`     | Displays a single-line text input field                          |
| `<input type="radio">`    | Displays a radio button (for selecting one of many choices)      |
| `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
| `<input type="submit">`   | Displays a submit button (for submitting the form)               |
| `<input type="button">`   | Displays a clickable button                                      |

##### Text Fields

The input type “text” defines a single line input where a user can enter string values to be submitted, things like a First Name and Last Name

For example:

```html
<form>
  <label for="fname">First Name</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="fname">Last Name</label><br />
  <input type="text" id="lname" name="lname" /><br />
</form>
```

### HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

The `<table>` tag defines an HTML table.

Each table row is defined with a `<tr>` tag. Each table header is defined with a `<th>` tag. Each table data/cell is defined with a `<td>` tag.

By default, the text in `<th>` elements are bold and centered.

By default, the text in `<td>` elements are regular and left-aligned.

Here's an example:

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>18</td>
  </tr>
</table>
```

## How

Let’s take a look at combining these elements into a functional webpage!

We’ll start by creating a file in VS Code named index.html

And then populate it with your basic HTML template:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Practice with Forms</title>
  </head>
  <body></body>
</html>
```

In our body, we want to create a `<div>`, and inside the div we’ll start our form

```html
<div>
  <form></form>
</div>
```

We can then create our labels for First Name and Last Name and give them input fields. At the end of the form, put a submit button.

```html
<label for="fname">First Name</label><br />
<input type="text" id="fname" name="fname" /><br />
<label for="fname">Last Name</label><br />
<input type="text" id="lname" name="lname" /><br />
<input type="submit" value="Submit" />
```

HTML also gives us the ability to implement Browser validation with the `required` attribute:

```html
<input type="text" id="fname" name="fname" required /><br />
```

When we try to submit the form with a missing value, we get an error. This will prevent a user from submitting a form without a required value.

Now lets see how we can add structure and consistency to our form by nesting it in an HTML table!

We will be using the following code for this example, copy and paste into your editor:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Practice With Forms</title>
  </head>
  <body style="margin: 0px; padding-top: 15px;">
    <div style="text-align: center;">
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" required /><br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" required /><br />
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </body>
</html>
```

First thing we want to do is wrap our form in a `<table>` tag

```html
<table>
  <form>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" required /><br />
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" required /><br />
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" required /><br /><br />
    <input type="submit" value="Submit" />
  </form>
</table>
```

Next, were going to want to wrap each of our labels inputs in their own table rows , with the label separated from the input via a table data tag:

```html
<table>
  <form>
    <tr>
      <td>
        <label for="fname">First name:</label>
      </td>
      <td><input type="text" id="fname" name="fname" required /><br /></td>
    </tr>
    <tr>
      <td>
        <label for="lname">Last name:</label>
      </td>
      <td><input type="text" id="lname" name="lname" required /><br /></td>
    </tr>
    <tr>
      <td>
        <label for="email">Email Address</label>
      </td>
      <td>
        <input type="email" id="email" name="email" required /><br /><br />
      </td>
    </tr>
    <tr>
      <td>
        <input type="submit" value="Submit" />
      </td>
    </tr>
  </form>
</table>
```

Great! Now our form is neatly aligned within a table. Above, we combined a `table` element to structure a `form` element. Keep in mind that you do not have to follow this example with all of your forms. You can easily use other elements along with CSS styling to render a form a certain way.

## Takeaways

1. HTML Forms are used for collecting user input through text, number, date, email, or textarea fields
2. HTML Tables are used for formatting and displaying tabular data
3. You can combine form and table elements, or any other HTML elements to suit your needs
