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

---
