# Image Picker
> Implementing an Image Picker with `HTML`, handle the uploaded image and storage with `node/multer` and preview the selected image with `JavaScript`.

## Create an Image Picker
> The `<input>` element has an attribute `type="file"` to create an file picker, and we can select which file type we accept with attribute `accept="image/jpg"`
```html
<main id="new-user">
    <form action="/profiles" method="POST">
      <div class="form-control">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-control">
        <label for="image">User image</label>
        <input type="file" id="image" name="image" accept="image/jpg,image/png" required />
      </div>
      <button class="btn">Save User</button>
    </form>
</main>
```

### Form attribute - `enctype`
> This attribute specifies how the form-data shoule be encoded when submitting to the server, it only works when `method="POST"`.

By default, the value is `enctype="application/x-www-form-urlencoded"`, which will encode all characters before sent. However, if we want to upload a file through form, the value `enctype="multipart/form-data"` is necessary.
```html
<form action="" method="POST" enctype="multipart/form-data">
```
---
