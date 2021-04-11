---
title: "Lecture Format for Markdown"
slug: "adding-lectures"
---

## Getting Started

- Create a new markdown file under `docs/` with the title of the lecture
- Example:
  `node-intro.md`
- Also, open the `sidebars.js` file in the project root directory, and add the newly created markdown file to correct sidebar configuration object
- Example:

```
docs: [
    {
      type: "category",
      label: "Node",
      items: ["node-intro"],
    },
    ...
```

- Each object in the `docs` array will configure a sidebar navigation section
  - `type` should be `category`
  - `label` should be the topic (e.g. "Node", "C#", "Git")
  - `items` is where you will add the newly created markdown file _name_ (without file extension)
- Please note: There will only need to be on object with `type`, `category`, and `items` per topic. If the topic already exists, just add the newly created markdown file slug to the `items` array

### From Google Docs

- If you are converting an existing document from Google Docs to markdown, you may find the `Docs to Markdown` Google Docs Add-On helpful
- Walkthrough Images and Video to be added soon\*
- Using `Docs to Markdown`, paste the converted markdown to the lecture md file, and skim the document to fix any formating errors. Also, make sure that the document is formatted per the [Format Uniformity](#FormatUniformity) specs below

### From Scratch

- If you are writing a new lesson/exercise walkthrough, use the formatting preferences below and get started!
- Use this markdown [cheatsheet](https://www.markdownguide.org/cheat-sheet/) as a reference

## Markdown Heading

- Every markdown file must start with a heading section with `title` and `slug` values
- The `title` value will be displayed at the top of the page when each lecture is rendered
- The `slug` value will be displayed as the url endpoint for the lecture url path
- Ex:

```
---
title: "Lecture Title"
slug: "/url-slug"
---
```

## Format Uniformity

### Headings

- The h1 (#) on the page will be `# Lecture`
- The h2 (##)'s on the page will be `## Why`, `## What`, `## How`, `## Exercise`, and `## Quiz`
- All other subheadings will be h3 to h6 (### => ######), as makes semantic sense according to the content

### Code Snippets

- Code snippets can be either inline (\`\`) or block (\`\`\` \`\`\`)
- Preferebly, any code, file name, or terminal command be highlighted/included in either inline or block code snippets
- Examples
  - Inline
    `const code = "Some code example";`
  - Block
  ```
  const code = "Some code example";
  const code2 = "Another line in the same code example";
  ```
  - Files
    "Open your `src/App.jsx` file"
  - Terminal/git commands
    "Now use `git commit -m "Initial commit"` to save your staged changes"

### Videos

- All lecture videos are stored on [vimeo](https://vimeo.com/)
- When inserting lecture, exercise, or quiz review videos in markdown, please use the following formats:

Lecture Video

```
Lecture Video <number>

<video width="100%" height="auto" controls>
  <source src="<vimeo-sharable-link" type="video/mp4" />
</video>
```

Exercise Walkthrough Video

```
Exercise Walkthrough Video <number>

<video width="100%" height="auto" controls>
  <source src="<vimeo-sharable-link" type="video/mp4" />
</video>
```

Quiz Review Video

```
Quiz Review Video

<video width="100%" height="auto" controls>
  <source src="<vimeo-sharable-link" type="video/mp4" />
</video>
```

- Please note: There may or may not be more than one video to include. In the case where there are two videos to include, append the video number (e.g. Lecture Video 1, Lecture Video 2)

### Images

- All lecture images are stored at `assets/lectures/<topic>/<lecture-name><image-number>`
- Each topic will have it's own folder in the `assets/lectures/` directory. If a topic folder does not exist, create one, then add the new images to that folder for each lecture
- When using images in markdown, use the format from the following example:

```
![alt text](assets/lectures/git/git-intro1.png)
```

- In this example, the image with the name, `git-intro1.png`, will be displayed in the document
- Please note: All `Git` lecture images will be stored at `assets/lectures/git/`. The image name with image order number is important to differentiate images within topic folders.

### Horizontal Lines

- Add horizontal lines (`---`) between the following sections:
  - Lecture videos and `# Lecture` heading
  - `## How` section and `## Exercise` section
  - `## Exercise` section and `## Quiz` section

### Why, What, How Sections

- Format content with unordered lists, ordered lists, code snippets, subheadings, and images as needed

### Exercise Section

- Exercise sections should include all of the necessary instructions for completing the lecture exercise
- If there is a Github repository for the students to use, start with a link to that repo. Ex:

```
Repo Link: [React Routing](https://github.com/Bryantellius/react_routing)
```

- If there are any other resources needed, link them after the repo link
- Having steps as ordered lists vs unordered lists is currently preferential
- Add the Exercise Walkthrough Documentation (currently in google docs) after the exercise instructions. Ex:

```
[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1J3yBfPOQNLgN_HvJhoD0U3trlS9gG5dJTbYMnsGFtUY/edit?usp=sharing)
```

- Add the Exercise Walkthrough Video after the documentation links. Ex:

```
Exercise Walkthrough Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/513160454/6cc127ac7d" type="video/mp4" />
</video>
```

- Below is a full example:

```
## Exercise

Repo Link: [React Routing](https://github.com/Bryantellius/react_routing)

The API we will be using: [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)

### Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: `git clone <repo_name>` cd repo_name to navigate into your new repo directory
- Make sure to run npm install to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the `README.md` file to complete exercises
- Open the `App.jsx` file to get started

### Steps

- We will be using the Studio Ghibli API to make calls, and display data in our application, depending on our current url route.
- [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)
- We'll be fetching from the /films and /people endpoints for this exercise

1. Configure React Router in your application. Use the same structure as the walkthrough during the lecture. Just make sure that it works!

- Reminder `BrowserRouter` is the starting point:

<BrowserRouter>
    <Switch>
        <Route>
            <Component />
        </Route>
    </Switch>
</BrowserRouter>

2. Create a Navbar component. Import and then render the component in the App component (not inside the Switch)
3. Next, you should create three Links that point to a specific Route url. One for Home, another for Films, and a third for People
4. Start configuring your first route.

- Say, for `/films`. After navigating to [localhost:3000/films](localhost:3000/films), you should see Studio Ghibli's list of films.
- The data should only be loaded and displayed when you navigate to `/films`. You should use `componentDidMount()` and fetch to make this request.
- You will use ["https://ghibliapi.herokuapp.com/films"]("https://ghibliapi.herokuapp.com/films") for the api endpoint
- Construct a fetch request with .then and .catch. Remember to:
  - Fetch the data
  - If a response was resolved, parse the JSON object
  - Then set the response to the state of your Films component
  - In your render method, be sure to map through the films state and display the results to the browser

5. Configure your second route. Repeat the steps from the `/films` route, but for `/people`. Use ["https://ghibliapi.herokuapp.com/people"]("https://ghibliapi.herokuapp.com/people").

- At the end of these tasks, you should have at least three pages in your application, and you should be able to navigate to them simply by clicking a link.

## Bonus

- Create two more routes for /places and /vehicles.

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1J3yBfPOQNLgN_HvJhoD0U3trlS9gG5dJTbYMnsGFtUY/edit?usp=sharing)

Exercise Walkthrough Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/513160454/6cc127ac7d" type="video/mp4" />
</video>

---
```

- Please note: This exercise example section can be loosely followed for format and content. If there is no need for a `Getting Started` or `Bonus` section, omit them.

### Quiz Section

- Include the link to the Quiz in Google Forms as follows:

```

[<lecture-title> Quiz](google-form-link)

```

- If there is currently no quiz available, be sure to add `No Quiz!`
