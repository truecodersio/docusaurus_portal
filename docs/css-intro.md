---
title: "CSS Intro"
slug: "/css-intro"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/510955954/8fe66e4b92" type="video/mp4" />
</video>

---

# Lecture

## Why:

So why use CSS? CSS helps you to keep the informational content of a document separate from the details of how to display it. The details of how to display the document are known as its style. You keep the style separate from the content so that you can **avoid duplication**, **make maintenance easier**, and **use the same content with different styles for different purposes**.

Your web site might have thousands of pages that look similar. Using CSS, you store the style information in common files that all the pages share. When a user displays a web page, the user’s browser loads the style information along with the content of the page. When a user prints a web page, you might provide different style information that makes the printed page easier to read.

In general, you use HTML to describe the content of the document, not its style, you use CSS to specify its style, not its content. There are exceptions to this rule, of course, and HTML also provides some ways to specify style. For example, in HTML you can use a `<b>` tag to make text bold, and you can specify the background color of a page in its `<body>` tag. When you use CSS, you normally avoid using these HTML style features so that all your document’s style information is in one place.

## What:

CSS stands for **C**ascading **S**tyle **S**heets. **Cascading** refers to the way CSS applies one style on top of another. **Style Sheets** control the look and feel of web documents. **CSS** and **HTML** work hand in hand. HTML sorts out the page structure. CSS defines how HTML elements are displayed. There are 3 types of CSS: inline css, internal css, and external css.

### Inline CSS

Using an inline style is one of the ways to insert a style sheet. With an inline style, a unique style is applied to a single element. In order to use an inline style, add the **style attribute** to the **relevant tag**.The example below shows how to create a paragraph with a gray background and white text:

`<p style="color: white; background-color: gray;"></p>`

### Embedded/Internal CSS

Internal styles are defined within the `<style>` element, inside the **head** section of an HTML page.

```
<head>
    <style>
        p {
            color: white;
            background-color: gray;
        }
    </style>
</head>
```

### External CSS

With this method, all styling rules are contained in a single text file, which is saved with the **.css** extension. This CSS file is then referenced in the HTML using the `<link>` tag. The `<link>` element goes inside the head section. Here is an example:

```
<head>
    <link rel="stylesheet" href="app.css">
</head>
```

**We will be using External CSS from now on because it is best practice.**

## How:

### CSS Syntax

To create custom CSS for our HTML we must follow the rules for CSS syntax.

![alt_text](./assets/lectures/css/css-intro1.png)

The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

```
p {
    color: red;
    text-align: center;
}
```

**p** is a selector in CSS (it points to the HTML element you want to style: `<p>`).

**color** is a property, and red is the property value.

**text-align** is a property, and center is the property value.

### CSS Selectors

CSS selectors are used to “find” (or select) the HTML elements you want to style. We can divide CSS selector into 5 categories:

- Simple selectors (select elements based on name, id, class)

- [Combinator selectors](https://www.w3schools.com/css/css_combinators.asp) select elements based on a specific relationship between them

- [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) select elements based on a certain state

- [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp) select and style a part of an element

- [Attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) select elements based on an attribute or attribute value to keep things simple, we will only go over the simple selectors

### CSS Element Selector

The element selector selects HTML elements based on the element name. In the example below all `<p>` elements on the page will be center-aligned, with a red text color:

```
p {
    color: red;
    text-align: center;
}
```

### CSS ID Selector

The id selector uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select **one** unique element. To select an element with a specific id, write a hash (#) character, followed by the id of the element. The CSS rule below will be applied to the HTML element with **id=”para1”**:

```
#para1 {
    color: red;
    text-align: center;
}
```

### CSS Class Selector

The Class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name.

In the example below, all HTML elements with **class=”center”** will be red and center-aligned:

```
.center {
    color: red;
    text-align: center;
}
```

### CSS Universal Selector

The universal selector (\*) selects all HTML elements on the page. The CSS rule below will affect every HTML element on the page:

```
* {
    color: blue;
    text-align: center;
}
```

### CSS Grouping Selector

The grouping selector selects all the HTML elements with the same style definitions. The following CSS code has elements which all have the same style definitions.

```
h1 {
    color: red;
    text-align: center;
}
h2 {
    color: red;
    text-align: center;
}
p {
    color: red;
    text-align: center;
}
```

In this example it is better to group the selectors to minimize the code. To group selectors, separate each selector with a comma.

```
h1, h2, p {
    color: red;
    text-align: center;
}
```

---

## Exercise:

1. Open your portfolio in VS Code.

- Open your git bash if you’re on windows, or the terminal if you’re on Mac, and ‘cd’ into your repos folder.

- Once inside of your repos folder, ‘cd’ into your portfolio project folder.

- Once inside of your portfolio folder, type code . to open VS Code at your current location in the terminal or git bash.

2. Now click on the page icon (As seen below), and give your css file a name followed by .css -> For example “style.css” -> and press enter.

3. Go into the head of your HTML page and add a link tag to attach your external stylesheet.

`<link rel="stylesheet" href="style.css">`

4. Have fun. Try to style the page using a least one tag selector, class selector, and id selector.

5. Think about what you want your portfolio to look like, and ask or attempt to recreate the design.

---

## Quiz:

[CSS Intro Quiz](https://forms.gle/SUGwAQfQuhxjNRo87)
