## Git
### Branch
> The default branch name in Git is master (main in recent years).

> As you start making commits, you're given a master branch that points to the last commit you made. <br/>
> Every time you commit, the master branch pointer moves forward automatically.

---

### New Branch
> To create new branch. <br/>
> $ `git branch <new_branch>` <br/>
> If you type in a existed branch name in <new_branch>, git will notify you with fatal, already exists.

---

### Switch Branch
> To switch to other branch. <br/>
> $ `git checkout <branch_name>` <br/>
> If you type in a non-existed branch name in <branch_name>, git will error and said did not match any files.

---

### Switch to New Branch
> This is a combinated command for the above two. <br/>
> $ `git checkout -b <branch_name>` <br/>
> It will create a new branch and checkout to this new branch.

---

### Merge Branches
> The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

> Additional feature will merge into the current branch, if you want to merge new branch to the main branch, you have to first checkout to the main branch first.

> $ `git checkout main` <br/>
> git merge <branch_name>

---

### Merge Conflicts
> When you have difference changes in the same file, then it will occur merge conflict. And git will generate markers `<<<<<<<`, `=======`, `>>>>>>>` to indicate which parts is conflicted.

> `<<<<<<<`: the content in the current branch (main branch). <br/>
> `=======`: the divider line between current branch and feature branch. <br/>
> `>>>>>>>`: the content in the feature branch (new branch). 

---

### Remove files
> To remove files in your git managed directory, there are mainly two approaches.

> First approach: <br/>
> 1. delete the files manually
> 2. use `git status` to check, it should have a changes not staged for commit with is a deleted change.
> 3. use `git add` to add the changes of deleted files
> 4. $ `git commit -m "message"`

> Second approach: <br/>
> 1. delete the files with git command
> 2. $ `git rm <file_name>`
> 3. then it will automatically staged the deleted file waiting for the commit
> 4. $ `git commit -m "message"`

---

### Delete commit
> Or jump back to the previous commites. <br/>
> $ `git reset --hard HEAD~1`
---

### Delete Branch
> To delete a branch. <br/>
> git branch -D <branch_name> <br/>
> Make sure you're not currently on the delete branch.

---

### Revert Changes
#### Unstaged changes (not yet $ `git add`)
> To revert the content that not yet commit: <br/>
> $ `git checkout -- <file_name>` <br/>
> or
> $ `git checkout -- .` // for all the file that changes but not yet commit.

#### Staged changes (already $ `git add`)
> To revert the changes that staged for commit <br/>
> $ `git reset <file_name>` / $ `git reset` for all the files. <br/>
> $ `git checkout -- <file_name>` / $ `git checkout -- .` for all the files.
---
