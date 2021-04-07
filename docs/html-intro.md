---
title: "Intro"
slug: "/html-intro"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/517342331/4c1f184265" type="video/mp4" />
</video>

---

# Lecture

## Why:

HTML —which is short for **HyperText Markup Language**— is the official language of the World Wide Web and was first conceived in 1990. HTML was originally created to allow those who were not specialized in SGML (Standard Generalized Markup Language) to publish and exchange scientific and other technical documents. HTML especially facilitated this exchange by incorporating the ability to link documents electronically using hyperlinks. Hypertext documents are interconnected by hyperlinks, which are typically activated by a mouse click, keypress, or by touching the screen. The first publicly available description of HTML was a document called “HTML Tags”, first mentioned on the Internet by Tim Berners-Lee in late 1991. It describes 18 elements comprising the initial, relatively simple design of HTML.

## What:

So what is a markup language anyways? In computer text processing, a **markup language** is a system for annotating a document noticeably different from the text. When the document is processed for display, the markup language is not shown, and is only used to format the text. The following is an example of the classic “Hello World” program:

```
<!DOCTYPE html>

<html>
<head>
    <title>This is a title</title>
</head>
<body>
    <div>
        <h1>Hello World!</h1>
    </div>
</body>
</html>
```

The example above will display “Hello world!” on the webpage. The text “This is a title” is in the head element and therefore will not be shown.

![alt_text](./assets/lectures/html/html-intro1.png)

## How:

HTML documents are files that end with a .**_html_** or **_.htm _**extension. You can view them using any web browser (such as Google Chrome, Safari, or Mozilla Firefox). To open an HTML file double click on that file (with either a .html or .htm extension) and it will open up in your browser.

![alt_text](./assets/lectures/html/html-intro2.png)

The **Document Object Model** (**DOM**) is the data representation of the objects that comprise the structure and content of a document on the web.The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document.This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page. Each HTML page consists of a set of **tags** (also called **elements**), which you can refer to as the building blocks of web pages. They create a hierarchy that structures the content into sections, paragraphs, headings, and other content blocks. Most HTML elements have an opening and a closing that use the **_&lt;tag>&lt;/tag>_** syntax. HTML tags have two main types: **block-level** and **inline tags**.

- **Block-level elements** take up the full available space and always start a new line in the document. Headings &lt;h1>&lt;/h1> and paragraphs &lt;p>&lt;/p> are a great example of block tags.

- **Inline elements** only take up as much space as they need and don’t start a new line on the page. They usually serve to format the inner contents of block-level elements. Links and emphasized strings are good examples of inline tags.

### Block-Level Tags

The three block level tags every HTML document needs to contain are &lt;html> , &lt;head>, and &lt;body>.

1.  The `<html></html>` tag is the highest level element that encloses every HTML page.

2.  The `<head></head>` tag holds meta information such as the page’s title and charset.

3.  Finally, the `<body></body>` tag encloses all the content that appears on the page.

![alt_text](./assets/lectures/html/html-intro3.png)

4.  The Heading tags `<h1></h1>` are another common block-level tag and they range from `<h1></h1>` to `<h6></h6>`. The h1 tag is the largest and the h6 tag is the lowest.

![alt_text](./assets/lectures/html/html-intro4.png)

5.  The Paragraph tag `<p></p>` is used to enclose text

![alt_text](./assets/lectures/html/html-intro5.png)

6.  The Division tag `<div></div>` is a large container which usually contains several other HTML elements within it, even including other div tags (nesting elements within elements). \

![alt_text](./assets/lectures/html/html-intro6.png)

![alt_text](./assets/lectures/html/html-intro7.png)

### Inline Tags

Many inline tags are used to format text. For example, a `<strong></strong>` tag would render an element in **bold**, whereas `<em></em>` tags would show it in _italics_. Hyperlinks are also inline elements that require `<a></a>` tags and **href** attributes to indicate the link’s destination:

```
<div>
    <a href=”https://learn.truecoders.io/web/html">TrueCoders HTML</a>
</div>
```

html are inline elements too. You can add one using `<img>` without any closing tag. But you will also need to use the **src** attribute to specify the image path, for example:

`<img src=”/html/truecoders.jpg” alt=”TrueCoders example image”>`

For a comprehensive list of all HTML tags [visit https://www.w3schools.com/tags/](https://www.w3schools.com/tags/)

### HTML Attributes

HTML attributes are additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want. All HTML elements can have attributes and they are always specified in the start tag. Attributes usually come in name/value pairs like: **name=”value”**.

- The href Attribute => The `<a>` tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:
  `<a href=”[https://learn.truecoders.io/web/html/](https://learn.truecoders.io/web/html/)”>TrueCoders HTML</a>`

- The src Attribute => The `<img>` tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:
  `<img src=”/html.truecoders.jpg” alt=”TrueCoders example image”>`

- The title Attribute => The title attribute defines some extra information about an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element:

  `<p title="I'm a tooltip">This is a paragraph.</p>`

- The lang Attribute => You should always include the `<html>` tag, to declare the language of the web page.

This is meant to assist search engines and browsers. Example of english as the language:

```
<!DOCTYPE html>
<html lang=”en”>
    <body>

    </body>
</html>
```

For a comprehensive list of all HTML attributes for each element check out: [https://www.w3schools.com/tags/ref_attributes.asp](https://www.w3schools.com/tags/ref_attributes.asp)

---

## Exercise - Portfolio HTML

Objective

- Practice using HTML tags to structure a portfolio page with content about yourself.

- Steps

1.  Create an html file in a new repo folder

2.  Create a heading section with:

    - A heading containing your name

    - A picture of yourself

    - A brief description of yourself

3.  Create a list with ways to contact you

4.  Create a section about your work experience

5.  Create a section about your education (i.e, TrueCoders, anything else relevant)

6.  Create a section detailing anything extra

    - Add information you think is relevant here. For example (awards, certifications, recommendations)

7.  Give the document a relevant title

[Exercise WalkThrough Documentation](https://docs.google.com/document/u/1/d/1HY1YAyfyrpYn3BTiasmFKyOdWDV9_Ya4WVBmcC62OV0/edit)

Exercise Walkthrough Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/517342855/e44f1f28a6" type="video/mp4" />
</video>

---

## Quiz:

[Take the HTML Intro Quiz](https://forms.gle/3UAruc528AwstffP6)

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/524510479" type="video/mp4" />
</video>
