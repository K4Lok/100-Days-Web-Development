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
                cartItem.totalPrice = cartItem.totalPrice + product.price;
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

    updateItem(productId, newQuantity) {
        for(let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if(item.product.id === productId && newQuantity > 0) {
                const cartItem = {...item};
                const quantityChange = newQuantity - item.quantity;

                cartItem.quantity = newQuantity;
                cartItem.totalPrice = +newQuantity * item.product.price;
                this.items[i] = cartItem;

                this.totalQuantity += quantityChange;
                this.totalPrice += quantityChange * item.product.price;
                return {updatedItemPrice: cartItem.totalPrice};
            }
            else if(item.product.id === productId && newQuantity == 0) {
                this.items.splice(i, 1);
                
                this.totalQuantity -= item.quantity;
                this.totalPrice -= +item.totalPrice;
                return {updatedItemPrice: 0};
            }
        }
    }
}

module.exports = Cart;