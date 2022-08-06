## Online Shop
> After the AJAX Request for updating the quantity of item in cart, we should also update the DOM to show to instant changes. Then a Order MVC for managing the orders.

# Update the DOM
> When the item's quantity is changed, the navigation badge and the total price should be changed too.
```js
// scripts/cart-item-management.js

const updateBtnElements = document.querySelectorAll('.btn-update');

async function updateCartItem(event) {
    event.preventDefault();

    const updateBtnElement = event.target;
    const productId = updateBtnElement.dataset.productId;
    const csrfToken = updateBtnElement.dataset.csrf;
    const quantity = updateBtnElement.parentElement.firstElementChild.value;

    const response = await fetch('/cart/items', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId: productId,
            quantity: quantity,
            _csrf: csrfToken
        })
    });

    if(!response.ok) {
        alert('Something went wrong!');
        return;
    }

    const resData = await response.json();

    const badgeElement = document.querySelector('.badge');
    const itemTotalPriceElement = updateBtnElement.parentElement.parentElement.querySelector('.total-item-price');
    const cartTotalPriceElement = document.querySelector('#cart-total-price span');

    if(resData.updatedCartData.updatedItemPrice == 0) {
        itemTotalPriceElement.parentElement.parentElement.parentElement.remove();
    }
    
    badgeElement.textContent = resData.updatedCartData.newTotalQuantity;
    itemTotalPriceElement.textContent = resData.updatedCartData.updatedItemPrice;
    cartTotalPriceElement.textContent = resData.updatedCartData.newTotalPrice.toFixed(2);
}

for(const updateBtnElement of updateBtnElements) {
    updateBtnElement.addEventListener('click', updateCartItem);
}
```

