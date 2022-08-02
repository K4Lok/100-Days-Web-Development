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
