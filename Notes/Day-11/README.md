# Git 
## Installation
> Since I'm using MacOS, I'm going to use homebrew to install git.

> $ `brew install git`
### Version
> Check if the installation is success, <br/>
> $ `git --version`

---

## Basic
#### Working Directory
> Current project folder you are actively working on, the code version you interact at the moment.
#### Repository
> All tracked files and folders, git just store the first files, then later on only save the changes to the file, 
with comparing the current state with the latest state.

---

## Initialize
> It means creating a new git project.

> Initialize a new git project: <br/>
> $ `git init` <br/>
> The current directory you enter with the command will be see as the root directory of this git project.

---

## Status
> $ `git status`

> 1. To check if the project is now managed by git
> 2. To displays the state of the working directory and the staging area

## Add
### Adding untracked or updated file to git
> $ `git add <filename>`
### Shortcut for adding fiels
> $ `git add .`

> $ `git add *`
### Differences between dot and asterisk
> For more [details](https://stackoverflow.com/questions/26042390/git-add-asterisk-vs-git-add-period).
---

## Commit
> To create a code snapshot to store difference version of codes. <br/>
> $ `git commit -m "<commit message>"`

---

## Identity
> Imagine working with other developers on a git repository, it's important to have an identity for others to know who make these changes.
#### Check the global current name and email of your computer
> $ `git config --global --edit` <br/>
> It's default a vim editor.
#### Add the name and email directly with git command
> $ `git config --global user.name "<name>" <br/>
> $ `git config --global user.email "<email>" <br/>
#### To check if changes succeed
> $ `git config --global user.name`
> $ `git config --global user.email`

---

## Log
> To see the changes of your git repository. <br/>
> $ `git log`



