class Cart {
    constructor(items = [], totalQuantity = 0, totalPrice = 0) {
        this.items = items;
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
    }

    addItem(product) {
        const cartItem = {
            product: product,
            quantity: 1,
            totalPrice: product.price
        }

        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(item.product.id === product.id) {
                cartItem.quantity += item.quantity;
                cartItem.totalPrice = cartItem.totalPrice + product.totalPrice;
                this.items[i] = cartItem;

                this.totalQuantity++;
                this.totalPrice += product.price;
                return;
            }
        }

        this.totalQuantity++;
        this.totalPrice += product.price;
        this.items.push(cartItem);
    }
}

module.exports = Cart;