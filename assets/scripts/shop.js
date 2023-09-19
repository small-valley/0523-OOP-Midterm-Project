import { Product } from "./product.js";
import { ProductList } from "./product-list.js";
import { ShoppingCart } from "./shopping-cart.js";

const product = new Product(1, "A", 100, "Product A", "");

export class Shop {
    constructor() {}
    async render() {
        $("body").append(`<div id="app">
            <section class="cart"></section>
            <ul class="product-list" id="prod-list"></ul>
        </div>`);
        await new ProductList().render();
        new ShoppingCart([product]).render();
    }
}
