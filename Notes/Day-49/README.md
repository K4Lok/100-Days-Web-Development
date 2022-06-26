## Node.js
### `nodemon`
> nodemon is a tool that helps develop node.js based application by automatically restarting the node application when file changes in the directory is detected.
1. Install the tool
```shell
npm install nodemon
```
2. Setting up in the `package.json`
```json
"scripts": { 
  "script-name": "nodemon app.js"
}
```
3. Run the node.js application with nodemon
```console
npm run script-name
```
> Then the nodemon tool should be running in the terminal and will update the server once any of the file changes.
---
