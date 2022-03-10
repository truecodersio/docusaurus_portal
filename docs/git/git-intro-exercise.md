---
title: "Exercise: Git Intro"
slug: "/git/git-intro-exercise"
---

<!-- Lecture Video

<video width="100%" height="auto" controls  poster="">
  <source src="" type="video/mp4" />
</video>

--- -->

## Exercise 1

Go to katacoda.com and complete scenario 1:

- Go to [katacode's git section](https://www.katacoda.com/courses/git)
- Under Scenario 1 click Start Scenario
- Read all the instructions and complete all 5 steps

Topics covered in the tutorial:

- git init
- git status
- untracked files
- git add
- git commit -m “message”
- gitignore
- git diff
- git diff --staged
- git log

## Exercise 2

Work with git on a simple pizza delivery algorithm file that covers the steps involved with ordering a pizza, and show how cool git can be with backing up our work:

1. Open terminal / command prompt / git bash on your computer
2. Set your name and email in git

```sh
git config --global user.name "_Mona Lisa_"
git config --global user.email "_[email@example.com](mailto:email@example.com)_"
```

3. Set your default git branch to main (We’ll get into branching in the next lecture!)

```sh
git config --global init.defaultBranch main
```

4. Next we need to generate an SSH Key to authenticate our connection to GitHub.

5. Create a folder named repos on your computer (_this is where we will save all of our projects throughout the course_)

```sh
mkdir repos
```

6. cd into your repos folder

```sh
cd repos
```

7. Inside of your repos folder, create a folder named PizzaAlgo

```sh
mkdir PizzaAlgo
```

8. cd into that folder with terminal / command prompt

```sh
cd PizzaAlgo
```

9. Initialize that folder as a git repository

```sh
git init
```

10. Using the Visual Studio Code application, create a new file named Algo inside of your PizzaAlgo folder and save it.

![alt_text](../assets/lectures/git/git-intro6.png "image_tooltip")

11. Now we will add instructions for ordering pizza in this file

![alt_text](../assets/lectures/git/git-intro7.png "image_tooltip")

12. Use git to commit your changes as you add steps to the file

```sh
git add .
git commit -m “added order step”
```

13. Once your commits are ready, go to github and create a new EMPTY repository named PizzaAlgo

Use the ‘new’ button on github:

![alt_text](../assets/lectures/git/git-intro8.png "image_tooltip")

Your repository should look like this

![alt_text](../assets/lectures/git/git-intro9.png "image_tooltip")

You will see a page that looks like this once created:

![alt_text](../assets/lectures/git/git-intro10.png "image_tooltip")

Make sure SSH is enabled and NOT HTTPS

14. Go back to terminal/command prompt, paste the text you copied from github and hit enter
15. Your github repository should now contain the Algorithm you worked on from your computer

---

[Windows Exercise Walkthrough Documentation](https://docs.google.com/document/d/1KtSjsFNv_XmiY9rvSN93BzmCUmlIlwgcfTVeRMLOyHw/edit?usp=sharing)

[Mac Exercise Walkthrough Documentation](https://docs.google.com/document/d/1aoUouylRs9ZeRDrRq96pdtpAZNKFfWRSUzbkFrBxhIg/edit?usp=sharing)
