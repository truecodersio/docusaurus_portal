---
title: "Exercise: Git Branching and Merging"
slug: "/git-branching-and-merging-exercise"
---

## Exercise 1: Interactive Tutorial

[Katacode's Git Section](https://www.katacoda.com/courses/git) \*complete scenario 6

Topics covered in the tutorial:

- git checkout
- branching
- merging
- deleting branches

## Exercise 2 Objective

1. Switch to the test branch and complete additional steps to your algorithm - for example, what if they send you the wrong order?
2. Commit your additional work and push the test branch to GitHub
3. Finally, we’ll switch to our local main branch and merge in the changes from the test branch to the main branch

### Steps for Exercise 2

Using the PizzaAlgo repo from earlier... In the Command prompt / Terminal:

1. Create a new branch named test - `git branch test`
2. `git status` - to see if I have any changes yet
3. Switch to test branch: `git checkout test`
4. Do some work on test branch and save → add a step 1a for example
5. `git status` - and see that I have modified Algo file in the test branch
6. `git add .` - add those changes to the staging areas for test branch
7. `git commit -m "reworded a step"` - committed those changes to test branch
8. `git push origin test` - pushed test branch to the remote repository (GitHub)
9. `git checkout main` - switch to main branch
10. `git merge test` - merge the changes in test branch to the main branch

---

[Windows Exercise Walkthrough Documentation](https://docs.google.com/document/d/1ksajxQHGGR1-j52NGpfe-fvEccuipRWG3pFaE4T4kaE/edit?usp=sharing)

[Mac Exercise Walkthrough Documentation](https://docs.google.com/document/d/1Om6x0YGMh0-gZMvNanR_EWM6T5pH0V6xdj-iJ78W09E/edit?usp=sharing)
