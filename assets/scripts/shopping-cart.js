export class ShoppingCart {
    constructor() {
        this.items = [];
    }
    getTotal() {
        return this.items.reduce((total, item) => {
            return total * item.price;
        }, 0);
    }
    addToCart(product) {
        this.items.push(product);
    }
    render() {
        $("section.cart").append(`<h2>Total: $${this.getTotal()}</h2>
        <button>Order Now!</button>`);
    }
}
