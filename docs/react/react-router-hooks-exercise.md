---
title: "Exercise: React Router Hooks"
slug: "/react-router-hooks-exercise"
---

The API we will be using: [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)

This will be a continuation from the React Routing Exercise.

## Objective

Your objective is to continue from the React Routing Exercise to create an individual page view for each data object from the lists previously used in the routing exercise. For example, each Studio Ghibli film should have it's own page view.

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- You will be using the same _React Routing_ repository as the previous lesson.
- Open the `App.jsx` file to get started

## Steps

1. We will be using the Studio Ghibli API to make calls, and display data in our application, depending on our current url route.
2. [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)
3. For each of the endpoints that you created earlier with routes to display the data:
   - Create new components for individually displaying each value of data in the lists you’ve displayed
   - Add new routes to display these components when a route url is matched, using the data id as params
4. Create individual components for at least three datasets (e.g. people, places, vehicles, etc)
5. You should be able to click on a film, character, etc from your list page that takes you to the view page for the item that was selected.
