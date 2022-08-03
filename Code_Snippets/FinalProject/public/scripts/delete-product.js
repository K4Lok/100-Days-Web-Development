const deleteProductToggleElement = document.getElementById('delete-product-toggle');
const deleteButtonElements = document.querySelectorAll('.btn-delete');

const productItemElements = document.querySelectorAll('.product-item');

async function deleteProduct(event) {
    const buttonElement = event.target;
    const productId = buttonElement.dataset.productId;
    const csrfToken = buttonElement.dataset.csrfToken;

    // const response = await fetch('/admin/products/' + productId + '?_csrf=' + csrfToken, {
    //     method: 'DELETE'
    // });

    // if(!response.ok) {
    //     alert('Not able to delete!');
    //     return;
    // }

    buttonElement.parentElement.parentElement.parentElement.remove();
}

function toggleDeleteProduct(event) {
    event.preventDefault();
    deleteProductToggleElement.classList.toggle('pressed');
    for(const deleteButtonElement of deleteButtonElements) {
        deleteButtonElement.classList.toggle('show');
        deleteButtonElement.addEventListener('click', deleteProduct);
    }
    for(const productItemElement of productItemElements) {
        productItemElement.classList.toggle('scale');
    }
}

deleteProductToggleElement.addEventListener('click', toggleDeleteProduct);