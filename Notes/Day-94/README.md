# Deploy a Website
> Hosting the website so that we can connect to the website outside from the local machine. Before we host the website, there're some things to get prepared of.

## Static vs Dynamic Websites
> Static websites refer to website that do not rely on server-rendered templates, server-side code and database server, only pure HTML, CSS, and client-side JavaScript.
In contrast, Dynamic websites are contained Fontend & Backend, which includes server-side code, probably server-side templates, and databases involved.

## Hosting Database Server
> It would be tricky to do this on our own, many issues could have occurred when we are not configuring right. However, it wasn't easy to do right especially the data traffic can be varied when the website scale. Therefore, a better approach before we master on that, is to rely on others service (companies that serve database as the service).
It can be far more secured.

## Steps for Deployment Preparation
1. Test the website & code for deployment.
2. For JS and CSS, there might be some new features are not supported by all the browser.
3. Search Engine Optimization, metadata to help improve your rank in search engine.
4. Improve the performance and shrink frontend assets.

## Web Testing
> It can be a huge domain to focus on, normally in the industry, they will code the automatical testing script to test whether the changed code might initiate any error. Testing could focus on Functionality, Usability, Interface, Performance, Security, and more.

## Environment Variables
> We could struggled with the path and values for services that differ in development and production, to better switch from both of them, we can reply on environment variables to be dynamic based on the environment we are trying to implemnt.
### Node.js
> In node.js for example, we have the `process.env` for the environment variables, let say we have different port for local development and producation.
```js
// ...

// if the PORT env variable not defined, then PORT is 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
```

## Search Engine Optimization
> SEO is also a key to promote your website to other users, the search engine like Google will crawl metadata from your website to see if your content matches what the user wnats. If you have a great content and most importantly, a good SEO, then your website will be exposed to more users.

---
