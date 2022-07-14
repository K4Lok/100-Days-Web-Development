# AJAX
> It stands for Asynchronous JavaScript And XML.

It refers to the concept or practice of fetching data in a asynchronous way with Javascript (to request data from a web server).

## Why AJAX ?
In the past, if you do a get request for fetching data, it'll refresh the page. But what if we don't want to refresh our webpage meanwhile fetching new data and change or insert new content into the webpage.
Here's where AJAX comes to place, it fetches the data and without refreshing the page, and do all of it in the background.

### XML
> It stands for Extensible Markup Language. Like HTML, however HTML is standardize and XML is not. We can form our own customed XML as long as we follow the syntax.

### JSON
> It stands for JavaScript Object Notation, it's a standard text-based format for representing structured data based on JavaScript Object Syntax.

### Outdated XML
> Even thought XML is still lives today, but people nowadays prefer JSON than XML simply of how straight forward JSON is and both of it is machine readable.

---

## Implementing
> There're 2 built-in browser-side JavaScript Features to do the AJAX.

### XMLHttpRequest Object
> It's an ancient approach to fetch server data from the browser-side, and XML was the most popular data format at the time. But still, XMLHttpRequest supports JSON parsing since JSON is popular as well.

### fetch() function
> Fetch is a modern Promise-based AJAX request API as an alternative of the XMLHttpRequest. Fetch is much more cleaner and more concise syntax.

---
