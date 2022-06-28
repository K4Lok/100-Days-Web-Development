## EJS 404
### Showing a 404 Page
> If we're using the dynamic routes appoarch to display different items based on its unique ID, someone might enter into a wrong URL with invalid ID. So we need to display a 404 page to indicate the item doesn't exist in the first place.
1. To create a 404.ejs page
2. Do condition, when item doesn't exist, display 404.ejs
```js
app.get('/item/:id', function(req, res) {
  for(item of items) {
    if(item.id === id) {
      return res.render('item-detail', { item: item});
    }
  }
  // if item not exists in the items list, then return the 404 page.
  return res.render('404');
});
```

---

### More with 404 Page
> We want to keep our user in our website or our customed page when it occurs cannot get the route, properly when there happens a typo in URL.
#### Most common appoarch
> To create our customed middleware, middleware is some functionality that executes on multiple income requests or all.
```js
// handling the non matching request from the client
app.use(function(req, res) {
  return res.render('404);
});
```

---

## EJS 500
### Showing a 500 Page
> The HTTP status code 500 refer to server error where server encountered an unexpected condition that prevented it from fulfilling the request.
```js
// By using four parameter in the function, express recognizes this is the error handling function.
// And express executes this function whenever error occured.
app.use(function(error, req, res, next) {
  res.render('500');
});
```

---

### Status Code Tabel - Common
1. 200 - Success, request parsed successfully.
2. 404 - client-side error, the requested resource / URL was not found.
3. 401 - client-side error, the requesting client is not authorized to access the requested resource / URL.
4. 500 - server-side error, the request was valid but something went wrong on the server.

___

### Handling Status Code
> The approach we have before is missing something, the 404, 500 page will still return 200 status code, since the server get the request and return the 404, 500 pages as the response. The browser see it as a 200 status code. To make it right, we've to set the status code manually.
```js
app.use(function(req, res) {
  res.status(404);
  res.render('404');
  // or...
  res.status(404).render('404');
});

app.use(function(error, req, res, next) {
  res.status(500).render('500');
});
```
> Right now, the server will properly response the status code in different scenario.

---
