---
title: "Exercise: React Hooks"
slug: "/react-hooks-exercise"
---

## Objective

Your objective is to create an application based on the following parameters:

- Our application will be made of two components, App and Overview.
- Your application should render an input field and a submit button.
- With the submit button, you can add the content from your input to a “tasks array” that is managed in a state hook.
- Finally, for each task in the tasks array, an HTML list element should be rendered.

## Steps

Exercise Repo: [React Hooks](https://github.com/Bryantellius/react_hooks)

1. Create a components folder in your src directory and create a file for your component called Overview.js. Overview.js should just render our tasks, while App.js is going to handle the input field with the logic.

   ```txt
   src
       components/
           Overview.jsx
       App.css
       App.jsx
       index.js
   ```

2. With the intended functionality explained, it’s your turn to implement this React app (again). You can do it.
3. After you get the functionality working, style the app. Practice, practice, practice.

- REMEMBER: Use the JavaScript function map to map over your tasks array. You will need to provide a unique key to each item (read the warning, you’ll know it when you see it in the console!). And there is a difference between handling input fields in plain JavaScript and in React. Give a whirl and stretch yourself, but fear not, we will again provide an overview of our solution below.

## BONUS

- Add a feature to be able to check off completed tasks
- Add colors (or indicator of choice) for priority status

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/19fMFkWmm5Ob5VcSubAgJg-orsvkMdGYBRyputV8c_tg/edit?usp=sharing)
