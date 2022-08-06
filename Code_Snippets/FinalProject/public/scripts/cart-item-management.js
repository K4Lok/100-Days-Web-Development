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

}

for(const updateBtnElement of updateBtnElements) {
    updateBtnElement.addEventListener('click', updateCartItem);
}