---
title: "Git Intro"
slug: "/git-intro"
---

## Why

We cover Git because it is a **Distributed Version Control System**. Distributed means there is no central server required, so work can be done “Offline” simultaneously with someone else also working offline. In the past, with traditional **Centralized Version Controls Systems**, two people editing a file was very difficult and sometimes whomever saved the file last would overwrite someone else's work.

[Git was created by Linus Torvalds in 2005 for development of the Linux kernel](https://www.linuxjournal.com/content/git-origin-story), with other kernel developers contributing to its initial development and is a [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software).

While we are using Git, we will be using the command prompt / terminal a lot. Here are a couple of great cheat sheets for Git and GitHub commands:

[Git Reference Sheet](https://files.fosswire.com/2007/08/fwunixref.pdf)

[GitHub Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## What

**Version Control** is a means for managing your source code

Version Control allows you to:

- Access previous versions of your code (History of content changes)
- Have multiple working copies of your code
- Backing up your code is now trivial
- Share your work with other people easily and facilitates collaborative changes to files

Version Control Systems are usually represented with a tree data structure

![alt_text](../assets/lectures/git/git-intro1.png)

### Git

A **[distributed version-control](https://en.wikipedia.org/wiki/Distributed_version_control) system (DVCS)** for tracking changes in [source code](https://en.wikipedia.org/wiki/Source_code) during [software development](https://en.wikipedia.org/wiki/Software_development). It is designed for coordinating work among [programmers](https://en.wikipedia.org/wiki/Programmer), but it can be used to track changes in any set of [files](https://en.wikipedia.org/wiki/Computer_file).

> Git != GitHub: (Git is not the same as GitHub)

So while **Git** is a tool to manage your source code history, **GitHub** is a hosting service for Git repositories

### Git and GitHub

> Git is the _tool_, GitHub is a _service_ for projects that use Git

GitHub is where our **Remote repository** will live. Our computer is where our Local repository will live. Once we have our project in a working state, we can push what’s in our Local repository to our Remote repository.

### Making Commits

The traditional software expression of "saving" is synonymous with the Git term "committing". A **commit** is the Git equivalent of a **"save"**.

The `git commit` command captures a snapshot of the project's currently staged changes.

![alt_text](../assets/lectures/git/git-intro2.png)

Each circle in the above diagram is a commit – a **snapshot** of the project

### Remote repositories

Versions of your project that are hosted on the Internet or network somewhere (like GitHub!).

Collaborating with others involves managing these remote repositories and **pushing** and **pulling** data to and from them when you need to share work.

With **Remote Repositories** we usually use these git commands:

- **git clone**:

  ```bash
  git clone  # puts a copy of the remote repository on our machine
  ```

- **git push**:

  ```bash
  git push  # after we worked on the local version of the repository, we can push those changes to the remote
  ```

- **git pull**:

  ```bash
  git pull  # pulls the latest version of the remote repository to our machine.
          # We use this after we have already cloned a copy of the remote repository to our local machine,
          # because someone else may have updated the remote in the meantime.
          # So we want to make sure we have the most up to date version.
  ```

### Staging with git add

The **git add** command adds a change in the working directory to the **staging area**. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit There are two ways to add a file(s) to the staging area:

- `git add <filename>` - add a specific file to the staging area
- `git add .` - add all modified files to the staging area. the period is what chooses all files

![alt_text](../assets/lectures/git/git-intro3.png)

#### Moreover on Staging

Stage lets you group related changes into highly focused snapshots before actually committing it to the project history. This means you can make all sorts of edits to unrelated files, then go back and split them up into logical commits by adding related changes to the stage and commit them piece-by-piece.

### Workflow

Developing a project revolves around the basic **edit/stage/commit** pattern.

- **Edit** - Do work (edit your files in the working directory and save)

- **Stage** - When you’re ready to save a copy of the current state of the project, you can stage all your changes with:

  ```bash
  git add .
  ```

- **Commit** - After you’re happy with the staged snapshot, you commit it to the project history with:

  ```bash
  git commit –m "a descriptive message"
  ```

- **Push** - In addition to git add and git commit, a third command `git push` is essential for a complete collaborative Git workflow. `git push` is utilized to **send the committed changes to remote repositories for collaboration**. This enables other team members to access a set of saved changes.

  ```bash
  git push -u origin main  # only for first push
  ```

  ```bash
  git push  # you can just git push after you setup the -u (upstream flag) on whatever branch you specified (main)
  ```

### Basic Terminal/Command Prompt Commands

#### Unix/Linux Commands

- `ls` - lists available directories for you to `cd` to
- `cd directoryName` - change current directory to the specified directory
- `touch fileName` - Create a file named fileName
- `pwd` - prints your current directory

#### Command Prompt(Windows) Commands

- `dir` - lists available directories for you to `cd` to
- `cd directoryName` - change current directory to the specified directory
- `echo example > fileName` - Creates a file named `fileName` and writes the string `example` inside
- `echo %cd%` - prints your current directory
- `code .` - opens an instance of VS Code at your current directory

### Basic Git Commands

|                                       Command                                       |                                                                                             Definition                                                                                              |                                                                                             Example                                                                                              |
| :---------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                    `cmd-shift-.`                                    |                                                                                   Show hidden files (MacOS Only)                                                                                    |
|                                     `git init`                                      |                                                                        initializes a new repository in the current directory                                                                        |
|                                    `git status`                                     | The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git |                                                                                           `git status`                                                                                           |
|                                `git add <fileName>`                                 |                                                                               stages a file so it is ready to commit                                                                                |                                                                                        `git add Algo.txt`                                                                                        |
|                                     `git add .`                                     |                                                                    stages all files in the directory so they are ready to commit                                                                    |                                                                                           `git add .`                                                                                            |
|                      `git commit -m "this is my first commit"`                      |                                                              commits the changes in the currently staged files and includes a message                                                               |                                                                             `git commit -m "a descriptive message"`                                                                              |
|                                     `git push`                                      |                                                         tells git that you're ready to push your local changes. Just tell git where to push                                                         |
|                       `git push <remote-name> <branch-name>`                        |                                                                      pushing the test branch to the remote repo named 'origin'                                                                      |                                                                                   `git push origin testBranch`                                                                                   |
|                              `git push -u origin main`                              |                                                   setting the upstream flag on the main branch, that way from now on, we can just use 'git push'                                                    |                                                                                    `git push -u origin main`                                                                                     |
|                             `git clone &lt;remote url>`                             |                                                                 copy a remote repository to your local machine. Very collaborative                                                                  |
| `git clone https://github.com/someFolder/some/File.git # "downloading" from github` |
|                                    `git branch`                                     |                                                                                lists the branches in the repository                                                                                 |
|                                 `git branch <name>`                                 |                                                                                        creates a new branch                                                                                         |                                                                                      `git branch myBranch`                                                                                       |
|                                `git checkout <name>`                                |                                                                                    switches to a specific branch                                                                                    |                                                                                     `git checkout myBranch`                                                                                      |
|                              `git checkout –b <name>`                               |                                                                 creates a new branch, and switches to that branch at the same time                                                                  |                                                                                 `git checkout -b myOtherBranch`                                                                                  |
|                                 `git merge <name>`                                  |                                                                          merges a specific branch into the current branch                                                                           | `git merge myBranch # When merging make sure you are on the branch you want the other code to merge into # If right now we are on the 'main' branch, we would be merging 'myBranch' into 'main'` |
|                                     `git pull`                                      |                                            downloads content from a remote repository and immediately update the local repository to match that content                                             |
|                                      `git log`                                      |                                                                                     display our commit history                                                                                      |
|                                     `git diff`                                      |                                                   enables you to compare changes in the working directory against a previously committed version                                                    |
|                `git config --global user.email "<you@example.com]>"`                |                                                                            configures an email address for your commits                                                                             |
|                     `git config --global user.name "Your Name"`                     |                                                                                 configures a name for your commits                                                                                  |

## Sources

[Git Handbook](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

[GitHub Cheat Sheet:](https://education.github.com/git-cheat-sheet-education.pdf)

[LearnEnough - Getting Started Documentation and Tutorial](https://www.learnenough.com/git-tutorial/getting_started)

## Takeaways

1. _Git_ is a tool for _version control_ management
2. _Github_ is a _service_ for hosting our code base and git history
3. The git workflow is _edit_, _add_, _commit with message_, and _push_
