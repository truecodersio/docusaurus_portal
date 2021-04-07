---
title: "Divs, Forms, and Tables"
slug: "/html-divs-forms-and-tables"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/503235005/7503e450bf" type="video/mp4" />
</video>

---

# Lecture

## Why:

Every element has a default display value depending on the type of element you are using.

Currently, there are two types of display values: **block** and **inline** and it is extremely important to know when and how to use both of these elements.

Two other elements that we’re going to look at will be `<form>` and `<table>`. Knowing how to build ‘submit forms’ and ‘tables’ in HTML is crucial for building any worthwhile website!

## What:

### Block-level Elements

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The `<div>` element is a block level element

```
<!DOCTYPE html>
<html>
    <body>
        <div style="border: 1px solid black">Hello World</div>
        <div>The DIV element is a block element, and will always start on a new line and take up the full width available (stretches out to the left and right as far as it can).</div>
    </body>
</html>
```

### Inline Element

An inline element does not start on a new line and it only takes up as much width as necessary

The `<span>` element is an inline element

```
<!DOCTYPE html>
<html>
    <body>
        <p>This is an inline span <span style="border: 1px solid black">Hello World</span> element inside a paragraph.</p>
    </body>
</html>
```

### HTML Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

#### The `<form>` Element

The way we create an HTML form is by using the HTML `<form>` element:

```
<form>
    <label for="fname">First Name</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="fname">Last Name</label><br>
    <input type="text" id="lname" name="lname"><br>
    <input type="submit" value="Submit">
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

#### Text Fields

The input type “text” defines a single line input where a user can enter string values to be submitted, things like a First Name and Last Name

For example, to display this form:

![alt_text](./assets/lectures/html/html-divs-forms-and-tables1.png)

We would need this code:

```
<form>
    <label for="fname">First Name</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="fname">Last Name</label><br>
    <input type="text" id="lname" name="lname"><br>
</form>
```

### HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

The `<table>` tag defines an HTML table.

Each table row is defined with a `<tr>` tag. Each table header is defined with a `<th>` tag. Each table data/cell is defined with a `<td>` tag.

By default, the text in `<th>` elements are bold and centered.

By default, the text in `<td>` elements are regular and left-aligned.

For example, this code :

```
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

Would render this table :

![alt_text](./assets/lectures/html/html-intro2.png)

## How:

Let’s take a look at combining these elements into a functional webpage!

We’ll start by creating a file in VS Code named index.html

And then populate it with your basic HTML template:

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practice with Forms</title>
    </head>
    <body>

    </body>
</html>
```

In our body, we want to create a `<div>`, and inside the div we’ll start our form

```
<div>
    <form>

    </form>
</div>
```

We can then create our labels for First Name and Last Name and give them input fields. At the end of the form, put a submit button.

```
<label for="fname">First Name</label><br>
<input type="text" id="fname" name="fname"><br>
<label for="fname">Last Name</label><br>
<input type="text" id="lname" name="lname"><br>
<input type="submit" value="Submit">
```

HTML also gives us the ability to implement Browser validation with the required attribute:

`<input type="text" id="fname" name="fname" required><br>`

When we try to submit the form with a missing value, we get this error:

![alt_text](./assets/lectures/html/html-intro3.png)

Now lets see how we can add structure and consistency to our form by nesting it in an HTML table!

We will be using the following code for this example, copy and paste into your editor:

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practice With Forms</title>
    </head>
    <body style="margin: 0px; padding-top: 15px;">
        <div style="text-align: center;">
            <form>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" required><br>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" required><br>
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required><br><br>
                <input type="submit" value="Submit">
            </form>
        </div>
    </body>
</html>
```

First thing we want to do is wrap our form in a `<table>` tag

```
<table>
    <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" required><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" required><br>
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required><br><br>
        <input type="submit" value="Submit">
    </form>
</table>
```

Next, were going to want to wrap each of our labels inputs in their own table rows , with the label separated from the input via a table data tag:

```
<table>
    <form>
    <tr>
        <td>
            <label for="fname">First name:</label>
        </td>
        <td>
            <input type="text" id="fname" name="fname" required><br>
        </td>
    </tr>
    <tr>
        <td>
            <label for="lname">Last name:</label>
        </td>
        <td>
            <input type="text" id="lname" name="lname" required><br>
        </td>
    </tr>
    <tr>
        <td>
            <label for="email">Email Address</label>
        </td>
        <td>
            <input type="email" id="email" name="email" required><br><br>
        </td>
    </tr>
    <tr>
        <td>
            <input type="submit" value="Submit">
        </td>
    </tr>
    </form>
</table>
```

![alt_text](./assets/lectures/html/html-intro4.png)

We get a neatly aligned form!

---

## Exercise

### Forms

1.  In a blank HTML document, create your stubbed out HTLM doc.

2.  In the body of the document, create a `<div>` and then nest a `<form>` tag.

3.  Create a submit form with the following label and input types

    1. First Name - text

    2. Last Name - text

    3. Email Address - email

    4. Programming Experience - radio ( 3 radio options: beginner, intermediate, expert)

    5. Desired Career - text

    6. Submit

### Tables

4.  Below your form, create a table:

    1. Create a table row with 3 headers using the `<th>` tag, each header should be one of the following:

       1. First Name

       2. Last Name

       3. Email

    2. Create another table row and populate it with your information using the `<td>` tag.

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1o-QIxcpAnKBa1zDYDR6c5ea5JOPd2F2sLfDeMgdo_Zw/edit?usp=sharing)

---

## Quiz:

No Quiz!
