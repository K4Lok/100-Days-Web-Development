const addToCartButtonElement = document.querySelector('#add-to-cart');
const cartBadgeElement = document.querySelector('#nav-middle .badge');

async function addToCart(event) {
    const productId = event.target.dataset.productId;
    const csrfToken = event.target.dataset.csrf;

    let response;

    try {
        response = await fetch('/cart/items', {
            method: 'POST',
            body: JSON.stringify({
                productId: productId,
                _csrf: csrfToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch(error) {
        alert('Something went wrong!');
        console.log(error);
        return;
    }

    if(!response.ok) {
        alert('Something went wrong!');
        return;
    }
    
    const repsonseData = await response.json();

    const newTotalQuantity = repsonseData.newTotalItems;
    cartBadgeElement.textContent = newTotalQuantity;
}

addToCartButtonElement.addEventListener('click', addToCart);