---
title: "Flexbox and Grid"
slug: "/css-flexbox-and-grid"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/512728838/1f2b5d7393" type="video/mp4" />
</video>

---

# Lecture

## Why:

Today, not every user is viewing your web app with the same size screen. In fact, users will be viewing your web pages with MANY different devices that all have varying device-width and device-height. This means that you need to account for each possible view that a user has on your apps. Thus, you need to add responsiveness to your web pages.

## What/How:

### FlexBox

Flexbox is an extremely useful tool for responsive web design. Here’s how it works:

![alt_text](././assets/lectures/css/css-flexbox-and-grid1.png)

READING RESOURCE: _[Flexbox Cheat Sheets in 2021 by Joy Shaheb](https://dev.to/joyshaheb/flexbox-cheat-sheets-in-2021-css-2021-3edl)_

PRACTICE RESOURCE: [Flexbox Zombies, Learning Game](https://mastery.games/flexboxzombies/)

- **Justify-content**: determines items’ placement across the **main** axis

- **Align-items**: determines all items’ placement across the **cross** axis

- **Align-self**: determines an item’s placement across the **cross** axis

- **flex-grow** : grows an item based on width of the flex-container

- **flex-shrink** : shrinks an item based on width of the flex-container

- **flex-wrap** : determines how many items occupy a line (row)

```
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
```

The result:

![alt_text](./assets/lectures/css/css-flexbox-and-grid2.png)

Or on mobile:

![alt_text](./assets/lectures/css/css-flexbox-and-grid3.png)

> “This is where the fun begins”

### Grid

#### Columns and rows

Grids are two-dimensional, with columns and rows. Let’s look at how to create a grid with 4 columns and 4 rows. We’ll use the **grid-template-row** and **grid-template-column** properties.

```
.wrapper {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px 200px 200px 200px;
    border: 1px dashed black;
}
```

Above, we have 4 pixel values for the columns, and 4 pixel values for the rows.

The values dictate how wide we want our columns to be (200px) and how tall we’d want our rows to be (200px). Let’s look at the result:

![alt_text](./assets/lectures/css/css-flexbox-and-grid4.png)

We can position or resize the boxes selecting them and using the **grid-column-start**, **grid-column-end**, **grid-row-start** and **grid-row-end** properties:

```
#box1 {
    grid-row-start: 1;
    grid-row-end: 3;
}
#box2 {
    grid-row-start: 2;
    grid-row-end: 4;
}
#box3 {
    grid-row-start: 1;
    grid-row-end: 4;
}
#box4 {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
}
```

And now our grid looks like this:

![alt_text](./assets/lectures/css/css-flexbox-and-grid5.png)

Neat! But, we still haven’t reached a _responsive_ grid layout. Introducing the **fraction unit**. The fraction unit, **fr**, allows you to split the wrapper into as many fractions as you want.

Let’s change the column values from 200px to fr units:

```
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 200px 200px 200px;
    width: 500px;
    border: 1px dashed black;
}
```

**NOTE**: Fraction units are dependent on the the width of the grid\*

With **fr** units, the grid will work with the space that is provided, and always give you the columns or rows specified.

BUT, we have only learned to create a handy layout tool. Our grid still isn’t responsive.

Welcome to _functions_ in CSS. We can use the **repeat()** and **minmax()** functions to reach responsiveness.

**repeat(number of times, unit)** => so let’s refactor our CSS:

```
.wrapper {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(4, 200px);
    border: 1px dashed black;
}
```

**minmax(min value, max value)** => let’s put this _inside_ our **repeat()** function

```
.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(4, 200px);
    gap: 5px;
}
```

The **minmax(min, max)** function determines a size range greater than or equal to min and less than or equal to max.

Now our columns will always be at least 200px, but if there is more space, our grid will distribute the space equally to each of the columns, as the columns become 1 **fr** instead of 200px.

### Bootstrap

READING RESOURCE: [Bootstrap Docs](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

Bootstrap was created by developers at _Twitter_ in 2010. Now, it is one of the most popular front-end frameworks and open source projects in the world.

Bootstrap allows you to utilize it’s CSS and JS framework to “quickly design and customize responsive mobile-first sites.”

Using Bootstrap is easy. The fastest way to get started is by adding a stylesheet link in your `<head></head>` tag in your html:

![alt_text](./assets/lectures/css/css-flexbox-and-grid6.png)

**NOTE: **Notice the placement of link tags in my head tag. You must put the Bootstrap link _before_ your own external stylesheet.

With Bootstrap, you can add class names to your html elements to add Bootstrap’s styling. Try it out.

Is there anything other than Bootstrap? Many, to say the least.

Here’s a couple more to choose from:

READING RESOURCE: [Tailwind](https://tailwindcss.com/)

READING RESOURCE: [Materialize](https://materializecss.com/getting-started.html)

---

## Exercise: KenKen

[Exercise Repo Here](https://github.com/TannerDrayton/CSS-KenKen/tree/main)

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/17RYLvy9LhLQo1KeRzvfZQNRMOjtoR37EuS00KA-FNbE/edit?usp=sharing)

- KenKen is a popular spinoff(?) of Sudoku puzzles. Below is an example:

![alt_text](./assets/lectures/css/css-flexbox-and-grid6.png)

- Use a CSS Grid to recreate this KenKen puzzle.

- The KenKen puzzle should have responsive sizing

- BONUS: The user should be able to potentially “play” the puzzle.

### Finished?

- Practice Flexbox

- Check out [Flexbox Zombies](https://mastery.games/flexboxzombies/)

---

## Quiz

No Quiz!
