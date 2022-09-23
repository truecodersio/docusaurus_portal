---
title: "HTML Forms and Tables"
slug: "/html-forms-and-tables"
---

## Why

Websites can display all kinds of information, for all kinds of purposes. One type of data that can be displayed on a website is _tabular_ data. The easiest example of this would be to think of Microsoft Excel or Google Sheets. The information is presented in tables, with rows and columns. This is _tabular_ data. Another purpose for displaying data on a web page may be to _take input_ from users. Think about all those 15% off deals that are just an email submission away from while browsing internet shops. Both of these examples require new elements that we will introduce now: tables and forms.

## What

Let's take a closer look at tables and forms.

### HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

The `<table>` tag defines an HTML table.

The `<thead>` tag contains the table headers.
 
The `<tbody>` tag contains the table records/rows.

Each table row is defined with a `<tr>` tag. Each table header is defined with a `<th>` tag. Each table data/cell is defined with a `<td>` tag.

By default, the text in `<th>` elements are bold and centered.

By default, the text in `<td>` elements are regular and left-aligned.

Here's an example:

```html
<table>
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>
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
  <button type="submit">Submit</button>
</form>
```

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

#### The `<input>` Element

An `<input>` element can be displayed in many ways, depending on the `type` attribute.

Here are some examples:

| Type                      | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| `<input type="text">`     | Displays a single-line text input field                          |
| `<input type="email">`     | Displays a single-line email input field                          |
| `<input type="tel">`     | Displays a single-line telephone number input field                          |
| `<input type="color">`     | Displays a color picker field                          |
| `<input type="date">`     | Displays a date picker field represented by a calendar                          |
| `<input type="radio">`    | Displays a radio button (for selecting one of many choices)      |
| `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
| `<input type="submit">`   | Displays a submit button (for submitting the form)               |

## How

Let’s take a look at combining these elements into a functional webpage!

We’ll start by creating a file in VS Code named `index.html`

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
<label for="lname">Last Name</label><br />
<input type="text" id="lname" name="lname" /><br />
<label for="email">Email</label><br />
<input type="email" id="email" name="email" /><br />
<label for="optin">Optin to Receive Our Awesome Emails</label><br />
<input type="checkbox" id="optin" name="optin" /><br />
<button type="submit">Submit</button>
```

HTML also gives us the ability to implement Browser validation with the `required` attribute:

```html
<input type="text" id="fname" name="fname" required /><br />
```

When we try to submit the form with a missing value, we get an error. This will prevent a user from submitting a form without a required value.

Now let's add an HTML table to display a list of our form submissions!

We will adding to our previous form example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Practice With Forms</title>
  </head>
  <body>
    <div>
      <form>
        <label for="fname">First Name</label><br />
        <input type="text" id="fname" name="fname" required /><br />
        <label for="lname">Last Name</label><br />
        <input type="text" id="lname" name="lname" required /><br />
        <label for="email">Email</label><br />
        <input type="email" id="email" name="email" required /><br />
        <label for="optin">Optin to Receive Our Awesome Emails</label><br />
        <input type="checkbox" id="optin" name="optin" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </body>
</html>
```

First thing we want to do is add a `<table>` element above our `<form>`:

```html
<table>
  <!--   -->
</table>
```

Now we want to add columns to our table that will host first name, last name, email and optin data for each record in our table. Let's add a `<tr>` with `<th>`'s for each of those columns.

```html
<table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Receives Emails</th>
  </tr>
</table>
```

Next, we'll add a few `<tr>`'s with `<td>` elements to populate our table with records.

```html
<table>
 <thead>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Receives Emails</th>
  </tr>
 </thead>
 <tbody>
  <tr>
    <td>Frodo</td>
    <td>Baggins</td>
    <td>frodo@shire.com</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Thorin</td>
    <td>Oakenshield</td>
    <td>thorin@lonelymountain.com</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Samwise</td>
    <td>Gamgee</td>
    <td>sam@shire.com</td>
    <td>Yes</td>
  </tr>
 </tbody>
</table>
```

Great! Now we have a table and form on our webpage. Keep in mind that all of your tables and forms do not need to follow this example, but you can use this as a reference. You can easily use other elements along with CSS styling to render a table or form a certain way.

## Takeaways

1. HTML Forms are used for collecting user input through text, number, date, email, or textarea fields
2. HTML Tables are used for formatting and displaying tabular data
3. You can combine form and table elements, or any other HTML elements to suit your needs
