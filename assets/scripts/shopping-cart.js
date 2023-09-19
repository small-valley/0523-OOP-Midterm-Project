export class ShoppingCart {
    constructor() {
        this.items = [];
    }
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price;
        }, 0);
    }
    addToCart(product) {
        this.items.push(product);
        this.render(true);
    }
    render(isUpdate = false) {
        if (isUpdate) {
            $("h2#total").text(`Total: $${this.getTotal()}`);
        } else {
            $("section.cart")
                .append(`<h2 id="total">Total: $${this.getTotal()}</h2>
            <button>Order Now!</button>`);
        }
    }
}
