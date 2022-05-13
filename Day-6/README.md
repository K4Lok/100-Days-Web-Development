## Network
#### Address: `127.0.0.1`
> 1. It's a special IP that's reserved to your local machine.
> 2. Also `localhost` is the domain name of this IP address linking to your own local development.
---

## HTML
### Lists
#### #`<ol>` Order List
> It's a list with number as the index of each item.

#### #`<ul>` Unorder List
> It's a list with bullet points on each item.

#### Common
> The `<ul>` and `<ol>` elements have a top and bottom margin of 16px (1em) and a padding-left of 40px (2.5em.) 
The list items (`<li>` elements) have no set defaults for spacing. 
([Link](https://www.google.com/search?q=html+ul+default+padding&oq=html+ul+default+padding&aqs=chrome.0.0i512j0i390l3.3083j0j7&sourceid=chrome&ie=UTF-8))

#### Differences
> Technically the list appears can be changed with CSS (list-style), but semantically, it has a intended content.

### Parents, Children
> HTML elements can be nested, which means elements can contain other elements. <br/>
> Therefore we named the elements outside as the Parents <br/>
> and the element inside as the children.

> For CSS rules apply on the parent element, it also apply on the children element.

---

## CSS
### Inheritance
> Selected container rules apply to descendants (children elements). <br/>
> In other words, when some elements nested into the container, the nested elements will inherit certain properties.

### Cascading Logic
> It's means multiple rules can be applied to the same element. <br/>
> If somewhere encounter conflicts properties, the lastest applied rules win.

### Specificity
> More specific selector's rule wins over less specific selector. (For more [details](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity))
---

## VSCode
#### Live Server Extersion
> Automatic live reload when you make changes to the webpage. ([Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) <br/>
> It's a local development web server.
---
