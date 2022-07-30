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
```js
#mobile-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 1.2rem 4%;
    background-color: rgb(255, 249, 224);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
}

#mobile-menu {
    display: none;
}

#mobile-menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    background-color: transparent;
    margin-right: 5%;
}

#mobile-menu-btn span {
    width: 2.25rem;
    height: 0.2rem;
    background-color: var(--color-primary-900);
}

@media (min-width: 768px) {
    main {
        margin-top: 0;
    }

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
