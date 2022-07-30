## Online Shop
> We've finished the authentication mechanism and the navigation styling, we can now focus on building a responsive website that can also works on a mobile device.

# Responsive Website
> Based on differece sizing of the device, adjust the website content so that it fit the device and provide a better user experience.

## Create the mobile side bar
```js
<header>
  <section id="main-header">
    //...
  </section>
  <section id="mobile-header">
          <div><a id="logo" href="/">Wegan.</a></div>
          <button id="mobile-menu-btn">
              <span></span>
              <span></span>
              <span></span>
          </button>
  </section>
</header>
<aside id="mobile-menu">
    <%- include('nav-items-mobile') %>
</aside>
```
## Media Query
> Change the CSS property depends on the device's screen size. We are building a mobile first approach, so query for screen size larger than normal phone size for the changes.
```css
#mobile-header {
  /* ... */
}

#mobile-menu {
  /* ... */
}

#mobile-menu-btn {
  /* ... */
}

#mobile-menu-btn span {
  /* ... */
}

@media (min-width: 768px) {
    #main-header {
        display: grid;
    }

    #mobile-header {
        display: none;
    }
    
    #mobile-menu {
        display: none;
    }
    
    #mobile-menu-btn {
        display: none;
    }
}
```

---

## Trigger the menu via JavaScript
> For manipulating the HTML DOM element, we need to utilize javascript to do so.
1. Get the elemnts by ID
2. Add the click event listener for the menu button
3. With a function toggling the class
```js
// public/scripts/mobile.js

const mobileMenuElement = document.getElementById('mobile-menu');
const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle('open');
  // when class contain 'open', remove it,
  // when class don't have 'open', add it.
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);
```

## Showcase

<p align="center">
<img width="47%" alt="Screenshot 2022-07-30 at 3 39 08 PM" src="https://user-images.githubusercontent.com/82365010/181919303-470c022d-4664-4f06-a983-563dfc32f2bd.png">

<img width="47%" align="right" alt="Screenshot 2022-07-30 at 3 38 59 PM" src="https://user-images.githubusercontent.com/82365010/181919307-f13f75c8-17e1-4355-8d0e-3e4522a1de74.png">
</p>

---
