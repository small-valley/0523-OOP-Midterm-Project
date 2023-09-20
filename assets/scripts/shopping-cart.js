export class ShoppingCart {
    constructor() {
        this.items = [];
        this._total = 0;
    }

    get total() {
        return this._total;
    }

    set total(price) {
        this._total += price;
    }

    addToCart(product) {
        this.items.push(product);
        this.total = product.price;
        this.render(true);
    }

    render(isUpdate = false) {
        if (isUpdate) {
            $("h2#total").text(`Total: $${this.total}`);
        } else {
            $("section.cart").append(`<h2 id="total">Total: $${this.total}</h2>
            <button>Order Now!</button>`);
        }
    }
}
