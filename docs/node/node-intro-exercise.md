---
title: "Exercise: Node Intro"
slug: "/node-intro-exercise"
---

## Getting Started

1. Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd repo_name to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

## Steps

1. Let’s use Node to write “Hello, World!” to a web page. Reference the Intro to Node.js notes, and place the following code snippets in the correct place
   1. `http.createServer()`
   2. `function(request, response) {}`
   3. `response.writeHead()`
   4. `response.end()`
   5. `listen()`
   6. `function(){console.log("Server listening...")}`
2. With the code in place, change the port from 8080 to 3000
3. In your cmd prompt / terminal, navigate to the project directory
4. Once in the correct directory, run the following command: `node app.js`
5. Open your browser, and navigate to

---

[Exercise Walkthrough Documentation](https://docs.google.com/document/d/1E_j2MQdwhWgzVX0-UCu8ciz8PxdtlnZUhO72yLKGvyE/edit?usp=sharing)
