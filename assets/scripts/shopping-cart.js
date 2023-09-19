export class ShoppingCart {
    constructor(items) {
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((total, item) => {
            return total * item.price;
        }, 0);
    }
    render() {
        $("section.cart").append(`<h2>Total: $${this.getTotal()}</h2>
        <button>Order Now!</button>`);
    }
}
