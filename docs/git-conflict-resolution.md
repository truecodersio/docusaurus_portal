---
title: "Conflict Resolution"
slug: "/git-conflict-resolution"
---

Lecture Video

<video width="100%" height="auto" controls>
  <source src="https://vimeo.com/499770628/308e129ad5" type="video/mp4" />
</video>

---

# Lecture

## Why:

We teach conflict resolution in git because sometimes merging won’t be so simple. This is especially true when we start collaborating with others, whether in the community or in the workplace. Knowing how to resolve merge conflicts and utilizing the full power of git will give you a great advantage in the workplace and will allow your workflow to achieve new heights.

## What:

### Merge Conflict:

A conflict occurs when there are two changes in the same line or set of lines in two different commits. It’s important to note that git doesn’t know how to code in C#. Git doesn’t know what to do when you have two edits of the same line, so git will mark the conflict and allow the user to decide which edit to pick or what changes to make.

In the situation below, there are two branches: a "bugfix" branch with a few commits coming off the "master" branch.

![alt_text](assets/lectures/git/git-merge-conflict-resolution1.png)

In this case, merging "bugfix" back into "master" is not much of an issue. That's because the state of "master" has not changed since "bugfix" was created. Git will merge this by moving the "master" position to the latest position of "bugfix". This merge is called a "**fast-forward**" since the possibility of a conflict cannot exist.

In the example below, however, "master" has been updated several times since "bugfix" was branched out. The changes from "bugfix" and "master" need to be combined when a merge is executed on these two branches.

![alt_text](assets/lectures/git/git-merge-conflict-resolution2.png)

For this sort of merge, a "merge commit" will be created and the "master" position will be updated to the newly created merge commit.

![alt_text](assets/lectures/git/git-merge-conflict-resolution3.png)

### Resolve Merge Conflicts:

1.  **Abort** => stop the process

    `git merge --abort`

2.  **Resolve the conflict manually** => go through the code and making edits

    `git diff --color-words master..branch1 filename.txt`

    --OR--

    `git show --color-words`

    Take out the git markers and choose what changes we want.

    `git status`

    `git add filename.txt`

    `git status`

    `git commit`

    DONE

    BONUS:

    `git log --graph --all --online --decorate`

![alt_text](assets/lectures/git/git-merge-conflict-resolution4.png)

3.  **Merge Tool:**

    `git help mergetool`

    Example tool: [http://kdiff3.sourceforge.net/](http://kdiff3.sourceforge.net/)

Git Documentation:

[https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)

[https://backlog.com/git-tutorial/using-branches/git-switch-branches/](https://backlog.com/git-tutorial/using-branches/git-switch-branches/)

## How:

Usually, a merge conflict can arise when the master has been updated since you created your new branch (based on master). Maybe someone edited the same lines you were intending to edit without your knowledge. You don’t have to throw all of your work away! We can simply resolve the conflict points and get your work into the master branch!

We’ll show this merge conflict from this git repository: [Github - mvdoyle/MergeConflictExercise](https://github.com/mvdoyle/MergeConflictExercise)

### Steps to Resolve the conflict manually:

1. Step 1

   Look at master branch

   `git checkout newBranch`

   Inspect the newBranch

   `git checkout master` ← switch back to master

   `git merge newBranch`

   Resolve the merge conflict ←- choose which changes you to keep,

   - Remove >>>>>>> and ==========

2. Step 2

   After we have taken out the git markers and choose what changes we want:

   `git status`

   `git add .`

   `git status`

   `git commit -m “ ”`

   DONE

3. BONUS: Not necessary

   `git log --graph --all --online --decorate`

   `git diff --color-words master..branch1 filename.txt`

   --OR--

   `git show --color-words`

![alt_text](assets/lectures/git/git-merge-conflict-resolution5.png)

---

## Exercise:

[Windows Exercise Walkthrough Documentation](https://docs.google.com/document/d/1iCUfFSmt_LLxBy-tPSkyppMM6riS_jII6RnXRDvEo_Y/edit?usp=sharing)

[Mac Exercise Walkthrough Documentation](https://docs.google.com/document/d/11nLtAnIXGT-x7J6LykXZ_GSD9cmdatGi7oSE9TcZS_I/edit?usp=sharing)

Video to help you with the exercise:

Funny Version: [https://youtu.be/r-Q7uTqN0s4](https://youtu.be/r-Q7uTqN0s4)

Normal Version:[https://vimeo.com/501606991/b571c8525b](https://vimeo.com/501606991/b571c8525b)

1. Fork and Clone this repository: [Github - mvdoyle/MergeConflictExercise](https://github.com/mvdoyle/MergeConflictExercise)

   1. Git checkout newBranch : to see the differences between _newBranch_ and master branch.
   2. Switch back to the master branch
   3. Merge the newBranch branch into master branch and fix the merge conflict

---

## Quiz:

[Take the Git Branching and Merging Quiz](https://forms.gle/6zxhpgpVRi9uZU979)
