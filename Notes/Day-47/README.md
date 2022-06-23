## NodeJS
> NodeJS can be installed on any computer and hence be used to write and execute server-side JavaScript Code.

### LTS
> Long Term Support.

### Differece from JavaScript
> For JavaScript, you can interact with the DOM in the browser. 
That's not available with NodeJS since you run JS decoupled from any parsed HTML content there. 
But you therefore have access to the filesystem for example (something you don't have in the browser).

---

### Executing NodeJS File
```js
~ node <FileName.js>
```

---

### Build a NodeJS Server
> NodeJS has a built-in module called `HTTP` where it allows NodeJS to transfer data over the Hyper Text Transfer Protocol.
1. `require` the module we want to utilize:
```js
const http = require('http');
```
2. then it will return a object full of utility methods provided by NodeJS
3. create a server with the built-in method:
```js
// NodeJS will pass the req and res to the function whenever it received.
function handleRequest(request, response) { 
  response.statusCode = 200;
  response.end('<h1>Hello World!</h1>');
}
// this will ask NodeJS to setup a Server
// where Node will handle the requests and respond
const server = http.createServer(handleRequest);
```
4. listen to the port number with:
```js
// :3000 is a port that's no using by default
server.listen(3000);
```
5. go check out the site: `localhost:3000`

---

### Routing based on URL
```js
function handleRequest(request, response) {

    if(request.url === '/webPageA') {
        // response.statusCode = 200;
        response.end('<h1>' + 'This\' Webpage A'+ '</h1>');
    }
    else if(request.url === '/webPageB') {
        // response.statusCode = 200;
        response.end('<h1>' + 'This\' Webpage B'+ '</h1>');
    }
    else {
        response.statusCode = 200;
        response.end('<h1>Hello World!</h1>');
    }
}

const server = http.createServer(handleRequest);
```

---
