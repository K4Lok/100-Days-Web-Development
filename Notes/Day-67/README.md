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
