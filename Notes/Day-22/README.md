## CSS
### font-size
#### `%`
> The percentage unit for text size is relative to the parent font-size.

#### `em`
> `em` is just like `%` <br/>.
> Differences between `%` and `em` [here](https://stackoverflow.com/questions/132685/font-size-in-css-or-em).

#### `rem`
> It's size based on the root font-size, won't be affected by the font-size of the parent container.

---

### non font-size context
#### `%`
> Will always relative to the parent element

#### `em` and `rem`
> Are always related to the font-size

---

### Desktop First
> Design desktop website in the first instance. <br/>
> More more spaces leads to feature-rich website.

### Mobile First
> Intended to design mobile website in the first place. <br/>
> Limited space leads to functional approach, core content first.

---

### Media Queries
> We want to know the information aboyt the media type (the device user is using).

#### For Desktop First
> Which is building the website based on the desktop size at the first place.
```css
@media (max-width: 600px) {
  /* styles */
}
```

#### For Mobile First
> Which is building the website based on the mobile size at the first place.
```css
@media (min-width: 1000px) {
  /* styles */
}
```

#### Range
> Can also based on a range of device size.
```css
@media (min-width: 600px) and (max-width: 768px) {
  /* styles */
}
```

### Common breakpoints used for Media Queries
1. `320px-480px`: Mobile devices
2. `481px-768px`: Ipads, Tablets
3. `769px-1024px`: Small screens, laptops
4. `1025px-1200px`: Desktops, large screens
5. `1201px` or more: TV, Extra large screens

---
