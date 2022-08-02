## Online Shop
> After finishing the form submitting for adding the product item, we can then styling how the item looks and also add the function for updaing the existing product items.

# Styling Prduct Item
Here we'll style the product item to match the theme of the website.
## Showcase
### Larger Screen

### RWD



---

# Manage Products
> To manage products, we need function to update the existing product and probably delete it if necessary.
## Update the Product
### Model
> Set up the function in Model for more clear structured.
```js
// models/Product.js

class Product {
  //...
  
  async update() {
    const productData = {
        name: this.name,
        summary: this.summary,
        price: this.price,
        description: this.description,
        image: this.image
    }

    if(!this.image) {
        delete productData.image;
    }

    const productId = new ObjectId(this.id);

    await db.getDb().collection('products').updateOne({_id: productId}, {$set: productData});
  }
}
```

### Controller
> Handle the form data for updating the details of products.
```js
// controllers/admin.controller.js

async function updateProduct(req, res, next) {
    const product = new Product({
        ...req.body,
        _id: req.params.id
    });

    if(req.file) {
        product.replaceImage(req.file.filename);
    }

    try {
        await product.update();
    }catch (error) {
        next(error);
        return;
    }

    res.redirect('/admin/products');
}
```

# Important Notes
> Since we need to pass the image as the encoded body of the POST request to the server, we need `multer`-the third party package to help recognize the body of the POST request, so remember to pass the multer middleware before extracting the form data.
```js
// routes/admin.routes.js

//...

router.post('/products/:id', imageUploadMiddleware, adminController.updateProduct);
```
## In the multer middleware
```js
const multer = require('multer');
const uuid = require('uuid').v4;

const upload = multer({
    storage: multer.diskStorage({
        destination: 'product-data/images',
        filename: function(req, file, callback) {
            callback(null, uuid() + '-' + file.originalname);
        }
    })
});

const configuredMulter = upload.single('image');

module.exports = configuredMulter;
```

---
