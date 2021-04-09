---
title: "Selection Statements"
slug: "/javascript-selection-statements"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/504984430/6429105714" type="video/mp4" />
</video>

---

# Lecture

##

Why:

With React Router, we can create navigation to different webpages by adding routes, a switch, and a BrowserRouter. If we have preReact Router ships with a few hooks that let you access the state of the router and perform navigation from inside your components.

##

What:

There are four primary router hooks we can use:

- useHistory
- useLocation
- useParams
- useRouteMatch

We should recognize these four as React hooks by their naming conventions: **use.** Let’s dive into each one.

### useHistory

The useHistory hook allows you to access the history instance. You can then use this information to navigate to previous pages.

Here’s a look at the history instance:

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image1.png "image_tooltip")

We can use several useful functions from the history instance.

- goBack() - navigates to the previous page
- goForward() - navigates to the page after the current in the history trace
- push(&lt;new_route>) - navigates to the passed in route endpoint

### useLocation

The useLocation hook allows you to access the location object that represents the current URL.

Let’s take a look at the location object.

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image2.png "image_tooltip")

You can use the useLocation hook whenever you need to track pathname changes in your web application.

### useParams

The useParams hook allows you to access the key/value pairs of URL parameters. You can use this to access match.params of the current route inside your component.

First, let’s add a parameter to my route:

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image3.png "image_tooltip")

Let’s take a look at the match object:

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image4.png "image_tooltip")

Now I can use the useParam hook to access match.name:

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image5.png "image_tooltip")

### useRouteMatch

The useRouteMatch hook allows you to access the params for a URL in the same way that a useParams would. The difference is that useRouteMatch gives you access to match data without actually rendering a route component.

We can either pass in a route string to be matched by the hook, or not pass any parameter, letting the hook return the match data for the current url:

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image6.png "image_tooltip")

Let’s take a look at match object from useRouteMatch:

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image7.png "image_tooltip")

Here, we can access the params object to use name, but we also have the path and matched url to use.

##

How:

Let’s go through it step by step.

We need to make sure the `react-router-dom`module is installed:

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image8.png "image_tooltip")

Next we need to go to App.jsx and import our Browser router, and then wrap everything in our App component with the BrowserRouter component:

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image9.png "image_tooltip")

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image10.png "image_tooltip")

Next we need to register our Routes inside of the Switch component, which means to tell React which components to render based on the given routes, so in App.js:

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image11.png "image_tooltip")

And we’ll add our router components in the return statement:

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image12.png "image_tooltip")

Now, let’s create our CharacterList and CharacterView components.

In my CharacterLIst.jsx

<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image13.png "image_tooltip")

Import the hooks you’ll need for this component (useState, useEffect, useHistory). I use my state hook to track both my list of characters and my filtered list of characters.

Create a fetch method that handles your Fetch API request, and sets the character list state to the data from the response.

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image14.png "image_tooltip")

Similar to our previous lesson on a basic filter by name, I’ve added a function to filter my list of characters depending on the name inputted by the user.

Then, I render my filtered list to the ReactDOM in my return statement for my CharacterList.jsx component.

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image15.png "image_tooltip")

Next, let’s fill out our CharacterView.jsx:

<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image16.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image16.png "image_tooltip")

Instead of calling the api to receive the list of all characters, I just want the data for the specific character based on the url params:

<p id="gdcalert17" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image17.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert18">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image17.png "image_tooltip")

You can use the useParams hook to use the match object, and apply the url param to the api call for a specific request.

<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image18.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image18.png "image_tooltip")

And to finish up, I display the name (and will add more information) about the specific character this page is detailing.

##

Exercise:

The API we will be using: **[Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)**

# React Routing Part 2

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone &lt;repo_name> cd repo_name to navigate into your new repo directory
- Make sure to run npm install to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the app.js file to get started

## Exercise

- We will be using the Studio Ghibli API to make calls, and display data in our application, depending on our current url route.
- [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)
- For each of the endpoints that you created earlier with routes to display the data:
  - Create new components for individually displaying each value of data in the lists you’ve displayed
  - Add new routes to display these components when a route url is matched, using the data id as params
- Create individual components for at least three datasets (e.g. people, places, vehicles, etc)
- You should be able to click on a film, character, etc from your list page that takes you to the view page for the item that was selected.

  ```

  ```

Click the gif to watch the exercise video

```




## Quiz:

Quiz to be assigned in Google Classroom
```
