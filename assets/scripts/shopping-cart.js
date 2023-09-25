export class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.fixedValue = 2;
    }

    get _total() {
        return this.total.toFixed(this.fixedValue);
    }

    set _total(price) {
        this.total += price;
    }

    addToCart(product) {
        this.items.push(product);
        this._total = product.price;
        this.render(true);
    }

    render(isUpdate = false) {
        if (isUpdate) {
            $("h1#total").text(`Total: $${this._total}`);
        } else {
            $("header.cart").append(`<h1 id="total">Total: $${this._total}</h1>
            <button>Order Now!</button>`);
        }
    }
}
