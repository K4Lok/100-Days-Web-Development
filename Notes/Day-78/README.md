# Final Project
> A Online Shop Website from scratch. Users are able to Signup/Login/Logout and order the product issued by the administrative user.

![Screenshot 2022-07-25 at 3 57 08 PM](https://user-images.githubusercontent.com/82365010/180807732-0d1a5b3b-cd5b-43d2-acb5-f8cdb34905c6.png)
> The Web Flow Diagram is generated with [octopus.do](https://octopus.do/).

---

## Initialize the Project
> Starting the node.js project with creating the package.json file first, then install the necessary package to speed up the development.
1. init with the option -y / --yes to skip the questionnaire altogether
```console
npm init -y
```
2. install express.js, option `--save` can be [omitted](https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install) after npm `5.0.0`.
```console
npm install express
```
3. install nodemon in the development dependency. (won't needed in the production)
```console
npm install --dev nodemon
```
4. add a script to start the project with nodemon
```js
// package.json
{
    //...
    "scripts": {
        "start": "nodemon app.js"
    }
    //...
}
```

---

## Project Structure
> Create the folders and files based on the directory tree.
```bash
├── app.js
├── config
│   └── session.js
├── controllers
├── data
│   └── database.js
├── middlewares
├── models
├── package.json
├── product-data
│   └── images
├── public
│   ├── scripts
│   └── styles
├── routes
├── util
└── views
    ├── admin
    │   ├── orders
    │   └── products
    ├── customer
    │   ├── auth
    │   ├── cart
    │   ├── orders
    │   └── products
    └── shared
```

---
