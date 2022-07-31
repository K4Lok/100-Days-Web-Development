## Online Shop
> We can now prepare the admin routes and views for managing the products and orders. Basically, create the views and routes for submitting the forms data so that we can add products info to the database.

# Admin Routes
> In admin routes, we have two pages

1) Manage Products: CRUD the products in database.
2) Manage Orders: manage the orders made by the client (normal user).

## Manage Products
> This page should show all the available products in the database and have a function to add new product.

We will do the Fetching and items styling later on.

## Add New Product
> I've created a form for submitting the product information, but not yet create the connection and model for the table yet.

<img width="600" alt="Screenshot 2022-07-31 at 11 56 43 AM" src="https://user-images.githubusercontent.com/82365010/182023081-f953871a-efc6-4522-bd4d-194a521efdaa.png">

## Uploading Images
> In order to upload images via HTTP POST request, we need to set the encrypt type to `multipart/form-data`
```html
<form action="admin/new-product" method="POST" enctype="multipart/form-data">
```
## Important Notes here
> For the csrf Token we generate for each request for preventing CSRF attack, the package `csurf` doesn't support the hidden input for passing the token under the `multipart/form-data` encrypt type. So, we need a plan B from `csurf`, passing the token directly at the url.
```js
<form action="/admin/new-product?_csrf=<%= locals.csrfToken %>" method="POST" enctype="multipart/form-data">
```

---

# Product Model
> It helps interacting with the database under the blueprint of Product. We need a function for fetching all the products and a function for storing new product so far.
## Define the Model
```js
// models/Product.js

class Product {
  constructor(productData) {
    this.name = productData.name;
    this.summary = productData.summary;
    this.price = productData.price;
    this.description = productData.description;
    this.image = productData.image; // name of the image with extension
    this.imagePath = `product-data/images/${productData.image}`; // real path of the image
    this.imageUrl = `/products/assets/images/${productData.iamge}`; // path for the client-side
    if(productData._id) { // have the id if we pass the product from database to constructor
      this.id = productData._id.toString();
    }
  }
  
  static async findAll() {
    const products = await db.getDb().collection('products').find().toString();
    
    return products.map(function(product) {
      return new Product(product);
    });
  }
  
  async save() {
    const productData = {
        name: this.name,
        summary: this.summary,
        price: this.price,
        description: this.description,
        image: this.image
    };
    await db.getDb().collection('products').insertOne(productData);
  }
}
```
