---
title: "Exercise: Node Reddit Calls"
slug: "/node-reddit-exercise"
---

Exercise Repo: [Node Lab](https://github.com/Bryantellius/nodejs-lab)

## PART 1

- Create a NodeJS project using npm init.
- Create a folder in your project called server.
- Create a JavaScript file in the server folder named server.js.
- In server.js Import (require) path and fs.
- Create an array consisting of at least 5 chirp objects.
- Write the array to a file in the root of the project called chirps.json.
- Add code to server.js that reads the file and outputs the chirps to the console

## PART 2

- Install isomorphic-fetch from npm and save it to your package.json file.
- Create a JavaScript file in the root of your project called reddit.js.
- Use isomorphic-fetch to retrieve articles from [https://reddit.com/r/programmingHumor.json](https://reddit.com/r/programmingHumor.json).
  - Feel free to use any api to fetch information from\*
- Extract from each article **title**, **url**, and **author**
- Push each extracted article to an array.
- Write the array to a file in the root of your project called popular-articles.json.

## ADVANCED

- Create a JavaScript file named popular-downloader.js.
- Create a directory in the root of your project named downloads.
- Using isomorphic-fetch, pull articles from [https://reddit.com/r/programmingHumor.json](https://reddit.com/r/popular.json).
- If the article is a .jpg, .gif, or a .png (hint: check the url): Use isomorphic-fetch to download the media.
- Write each download to a file (named the id of the article) in the downloads directory.
