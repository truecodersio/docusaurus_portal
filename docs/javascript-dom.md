---
title: "JavaScript DOM"
slug: "javascript-dom"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/507738803/cc3ff07589" type="video/mp4" />
</video>

# Lecture

## Why:

Do you know all those cool animations that you see around, that make you think to yourself, “Wow, I wish I could make something like that”? All of those animations are made by manipulating the DOM.

The DOM (Document Object Model) is a representation of your **HTML and XML** documents that are interpreted by your browser. It allows a language (in our case **JavaScript**) to manipulate the style and structure of our website. After the browser reads our **HTML** document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.

## What:

### Elements

The **DOM of an HTML document** can be represented as a nested set of boxes:

These nodes have certain relations to other nodes! For example, in our tree data structure (pictured below), if a node falls in a level below, yet directly correlated to the node above, then it’s known as a CHILD node. Where the node that those elements fall underneath, is the PARENT node. If two elements fall on the same level, then they’re known as SIBLING nodes.

![alt_text](assets/lectures/javascript/javascript-dom1.png "image_tooltip")

For the example above:

**HTML** is a child of the **DOCUMENT** node. **HTML** then has two children nodes **HEAD** and **BODY**. Those nodes then have child nodes **TITLE** belonging to **HEAD**, and **H1** / **A** belonging to **BODY**.

Nodes can have different relations when referred to at different times. For example, the **BODY** node is a child node in relation to the **HTML** node, yet it’s a parent in relation to the **H1** and **A** nodes!

The **DOM** represents our document as a **tree data structure** or as a hierarchy of elements.

HTML elements become interrelated **nodes** in the tree.

All those nodes in the tree have some kind of relations to each other.

Nodes can have **child** nodes, and nodes on the same tree level are called **sibling** nodes!

### The Document Object

In JavaScript there is a predefined **Document** object, which allows us to access all of the elements on the **DOM**.

Which makes the **Document** Object the owner/root of all the objects in our **DOM**.

To access something from the **DOM**, you’ll always start by accessing the **document** object, followed by whatever element you’re trying to access.

For example:

```
document.body.innerHTML = "Hello World";
```

Since **body** is an element of the **DOM**, we can grab it using the **document** object. Then we use the **innerHTML** property to change the content of the **body** element!

\*Note that changing the **innerHTML** of the **body** element will overwrite whatever you have in between your **body** tags.

### Selecting Elements

The `getElementsByClassName()` method returns an array of all child elements in the document with the same class name passed in as the parameter.

Below we have a variable named **headers** that contains the value of `document.getElementsByClassName(“header”)`.

Keeping in mind that `getElementsByClassName()` will return an array of all child elements that have the class name of **“header”**, we’ll need to reference the index of the element in the **headers** array that we want to change.

```
const headers = document.getElementsByClassName("header")
```

Similarly, the **getElementsByTagName() **method returns all of the elements of the specified tag name as an array. However, this array is what’s known as a **live array **meaning the contents of the array are updated with the contents of the **DOM tree** automatically.

The following example gets all paragraph elements of the page and changes their content:

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image5.png "image_tooltip")

The script above grabs all of the **p** elements in the DOM. Then loops through the array returned, and changes each element’s innerHTML to “We were found by our tag name!”.

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image6.png "image_tooltip")

    **Changing Attributes**


    You can also change the attributes of html elements.


    Just as we changed the text content of html elements by assigning **innerHTML **or **textContent **properties, we can assign new values to attributes.


    For example, you can change the **checked **attribute of an **input**:

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image7.png "image_tooltip")

    You can also change the **href **attribute of a link:

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image8.png "image_tooltip")

    **Creating Elements**


    You can create new DOM elements with the following methods:

- **createElement(tagname)** - the most common way of creating elements
- **createTextNode(text) **- used only for creating a node element
- **cloneNode() **- used for cloning an existing element

  We can use **createElement** below to create a new heading 1 element.

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image9.png "image_tooltip")

    Awesome! But our newly created elements will not show up on the DOM until we **append** then to the document. We can use the following methods to add elements to the DOM:

- **appendChild(element) **- appends a new element at the end of the DOM tree
- **insertBefore(elementBefore, element) **- inserts a new element before the specified element

  **Example:**

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image10.png "image_tooltip")

**Removing Elements**

You can remove an HTML element by selecting the parent of the element and using **removeChild**(element).

**For example:**

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image11.png "image_tooltip")

This removes the heading with id="heading" from the document.

**Replacing Elements**

To replace an HTML element, the element.**replaceChild**(newNode, oldNode) method is used.

**For example:**

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image12.png "image_tooltip")

<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image13.png "image_tooltip")

Animations

Now that we have the basics of DOM manipulation in our repertoire, we can start creating animations!

Let’s start simple. We’re going to dynamically manipulate the position of a box inside of another box.

This will go inside of your body tag:

&lt;div id="container">

        &lt;div id="box">&lt;/div>

    &lt;/div>

This will go inside of your css document:

#container {

    width: 250px;

    height: 250px;

    background: lightblue;

    position: relative;

}

#box {

    width: 75px;

    height: 75px;

    background: burlywood;

    position: absolute;

}

Our container element is represented by the bigger light blue square, while the box is the smaller burlywood square located in the top left corner of our container. The position of the container is set to [relative](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/#relative) which limits the scope of the absolutely positioned (burlywood) box inside the container. Allowing us to animate the box relative to its container.

Our goal will be to animate the box to move from the left side of the container to the right side.

For us to create an animation, we have to manipulate the properties of our box element in small intervals of time. For us to do that, we need to first define the time in which our box will move. We can use the setInterval(callBack(), time) method, which allows us to create a timer, and accepts a callback function to execute each time the specified time is reached. The one thing to keep in mind is that the time is going to be read in milliseconds, so 500ms is the equivalent of half a second. 1000ms is the equivalent of 1 second, and so on.

**For example:**

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image14.png "image_tooltip")

The example above utilizes the setInterval() method, and is accepting a callback function named move(Which we’ve yet to create), and is going to execute every half second. Next we need to define our move function.

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image15.png "image_tooltip")

Now if we look at this live in the browser, we might notice a tiny bug. The box starts moving, moving, moving….but never stops. We need the box to stop when it hits the edge of our container. Let’s introduce a condition that measures the box’s position and stops it when it hits the border. We need to keep in mind that the box itself is created from the top left corner of itself, to the bottom right corner of itself. This means that we can’t just simply check if it hit the border, because it will fall right outside of the container. We need to take the box’s width, and subtract it from the container’s width. Leaving us with 175 in this instance. Inside the condition body that’s checking the position of the box, we’ll introduce the clearInterval(var) method, which will stop the execution of our timer.

<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image16.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image16.png "image_tooltip")

When the left attribute of our box reaches 175, the timer will stop executing, therefore finishing our animation!

**The final code:**

<p id="gdcalert17" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image17.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert18">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image17.png "image_tooltip")

Handling Events

**Events**

Next let’s look at events. Event’s are things that happen when a certain action is taken or condition is met. The action that is performed when one of these actions or conditions is met is knows as the event handler. Check the list below for a list of common events.

- **onclick** - occurs when the user clicks on an element.

- **onload** - occurs when an object has loaded.

- **onunload** - occurs once a page has unloaded (for &lt;body>).

- **onchange** - occurs when the content of a form element, the selection, or the checked state have changed. (for &lt;input>, &lt;keygen>, &lt;select>, and &lt;textarea**>).**

- **onmouseover** - occurs when the pointer is moved onto an element, or onto one of its children.

- **onmouseout **- occurs when a user moves the mouse pointer off of an element or out of one of its children.

- **onmousedown **- occurs when the user presses a mouse button over an element.

- **onmouseup **- Occurs when a user releases a mouse button over an element.

- **onblur **- occurs when an element loses focus.

- **onfocus **- occurs when an element gets focus.

Let's display an alert popup when the user clicks a specified button:

<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image18.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image18.png "image_tooltip")

<p id="gdcalert19" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image19.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert20">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image19.png "image_tooltip")

<p id="gdcalert20" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image20.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert21">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image20.png "image_tooltip")

We can also assign event handlers to elements. First we assign an element to a variable using one of the selection methods. Then we use dot notation to specify an event (element.onclick) then assign a function to it.

**For example:**

<p id="gdcalert21" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image21.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert22">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image21.png "image_tooltip")

<p id="gdcalert22" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image22.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert23">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image22.png "image_tooltip")

**Events**

The **onload **event is triggered when the user loads the page to their browser. The opposite is true for the **onunload **event. These can be useful when performing actions after the page is loaded.

If you want something to execute after the whole page is loaded, use the window.onload event!

The **onchange **event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.

**For example:**

<p id="gdcalert23" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image23.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert24">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image23.png "image_tooltip")

<p id="gdcalert24" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image24.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert25">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image24.png "image_tooltip")

**Event Listeners**

We can use the addEventListener() method to attach multiple event handlers to one element.

We can also add multiple event handlers of the same type. For example, we can have two event handlers that execute onclick!

    element.**<span style="text-decoration:underline;">addEventListener</span>**(event, function, useCapture);

The first parameter in the addEventListener() method is the type of Event that’s being “listened” for. The Second parameter is the event handler/callback function that executes when the event is triggered.

**Example:**

<p id="gdcalert25" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image25.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert26">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image25.png "image_tooltip")

**<span style="text-decoration:underline;">Exercise</span>:**

Fork and clone this repository to your computer and complete all the TODO’s. Instructions are inside the files as comments.

Repo Link: [JavaScript DOM](https://github.com/Bryantellius/JS_DOM-Events)

```

Click the gif to watch the exercise video
```

# **[Exercise Walkthrough Documentation](https://docs.google.com/document/u/1/d/1dCV5H7Nf3_Fmf7ejtHaFuXdf1TVQ_xGR38lKVPIkyIE/edit)**

**<span style="text-decoration:underline;">Quiz</span>:**

**[JavaScript DOM Quiz](https://forms.gle/QbReiemx6WQk5j9U6)**

**[DOM Quiz Review](https://vimeo.com/508155340/764252bb72)**
