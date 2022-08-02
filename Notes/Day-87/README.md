## Online Shop
> The image upload in the form is a bit worst in terms of user experiences, it would be better if we can show the image preview so that it's more intuitive. After that, we'll implement the function of deleteing existing products with AJAX so that it that have to refresh to page to know whether the product is deleted.

# Image Preview
> To show the image when we picked an image.
```js
// product-form.ejs

<div id="image-upload-control">
  <p>
    <label for="image">Image</label>
    <input type="file" id="image" name="image" accept="image/png, image/jpg" <% if (imageRequired) { %>required <% } %>>
  </p>
  <img src="" alt="Image Preview">
</div>
```
```js
// scripts/image-preview.js

const imagePickerElement = document.querySelector('#image-upload-control input');
const imagePreviewElement = document.querySelector('#image-upload-control img');

function updateImagePreview() {
    const files = imagePickerElement.files;

    if(!files || files.length === 0) {
        imagePreviewElement.style.display = 'none';
        return;
    }

    const pickedFile = files[0];

    imagePreviewElement.src = URL.createObjectURL(pickedFile);
    imagePreviewElement.style.display = 'block';
}

imagePickerElement.addEventListener('change', updateImagePreview);
```

<img width="917" alt="Screenshot 2022-08-02 at 12 41 56 PM" src="https://user-images.githubusercontent.com/82365010/182366604-7dcc313f-d84f-46df-9440-2a2db796039d.png">

---

# Delete Product
> Here, we will display a button to toggle and a delete button will show up on the product. When we click the delele button, it delete it from the database and...

## Toggle to show Delete
> I don't want all the product items are attached with a delete button, it would be nasty. So I'm have a Delete button first and when the user pressed it, it shows a delete button on all the product card.

Basically, I created a absolute positioned button on the right top corner of every product card. but it's invisible until we toggle the delete product button. Therefore, we need some javascript to help doing so.


```js
// scripts/delete-product.js

const deleteProductToggleElement = document.getElementById('delete-product-toggle');
const deleteButtonElements = document.querySelectorAll('.btn-delete');

const productItemElements = document.querySelectorAll('.product-item');

function toggleDeleteProduct(event) {
    event.preventDefault();
    for(const deleteButtonElement of deleteButtonElements) {
        deleteButtonElement.classList.toggle('show');
    }
    for(const productItemElement of productItemElements) {
        productItemElement.classList.toggle('scale');
    }
}

deleteProductToggleElement.addEventListener('click', toggleDeleteProduct);
```

<p>
<img width="47%" alt="Screenshot 2022-08-02 at 1 46 22 PM" src="https://user-images.githubusercontent.com/82365010/182378082-7d043e92-e9c2-4fd6-a3a5-ccf22a5130c8.png">
<img width="47%" align="right" alt="Screenshot 2022-08-02 at 1 47 48 PM" src="https://user-images.githubusercontent.com/82365010/182378326-ab7a1c1c-ceba-4afe-a28a-5a2beacc4c88.png">
</p>

## Delete Function
> Deleting comprises of two operations right here, 1) Delete it from the database and 2) Remove the Product Item in the current user screen without refreshing it with AJAX.
### Delete Model
> First of all, we need a function to delete the product in database in the Product Model, then we utilize this function in the controller with passing the product id in the path parameters.
```js
// models/Product.js

class Product {
  //...
  
  async remove() {
    try {
        const productId = new ObjectId(this.id);
        await db.getDb().collection('products').deleteOne({_id: productId});
    } catch(error) {
        console.log(error);
        throw new Error('Not able to delete product!');
    }
  }
}
```
### Delete Controller
> Now we handle the delete request.
```js
// controllers/admin.controller.js

async function deleteProduct(req, res, next) {
  let product;

  try {
      product = new Product({...Product.findById(req.params.id), _id: req.params.id});
      await product.remove();
  } catch(error) {
      return next(error);
  }

  res.json({
      'message': 'delete sucessfully!'
  })
}
```

# Important Notes
> Since, we've implement the csrf token to protect from CSRF Attacks, therefore, for every requests, we need a csrf token to verify whether this request is valid or not. We need to pass the csrf token.
```js
// product-item.ejs

<button class="btn-delete" data-product-id="<%= product.id %>" data-csrf-token="<%= locals.csrfToken %>">X</button>
```

### Finish the delete function
> We send the delete request with JavaScript `fetch` with method `"DELETE"`.
```js
const deleteProductToggleElement = document.getElementById('delete-product-toggle');
const deleteButtonElements = document.querySelectorAll('.btn-delete');

const productItemElements = document.querySelectorAll('.product-item');

async function deleteProduct(event) {
    const buttonElement = event.target;
    const productId = buttonElement.dataset.productId;
    const csrfToken = buttonElement.dataset.csrfToken;

    const response = await fetch('/admin/products/' + productId + '?_csrf=' + csrfToken, {
        method: 'DELETE'
    });

    if(!response.ok) {
        alert('Not able to delete!');
        return;
    }

    buttonElement.parentElement.parentElement.parentElement.remove();
}

function toggleDeleteProduct(event) {
    event.preventDefault();
    deleteProductToggleElement.classList.toggle('pressed');
    for(const deleteButtonElement of deleteButtonElements) {
        deleteButtonElement.classList.toggle('show');
        deleteButtonElement.addEventListener('click', deleteProduct);
    }
    for(const productItemElement of productItemElements) {
        productItemElement.classList.toggle('scale');
    }
}

deleteProductToggleElement.addEventListener('click', toggleDeleteProduct);
```

---
