import { ProductList } from "./product-list.js";
import { ShoppingCart } from "./shopping-cart.js";

export class Shop {
    constructor() {}
    async render() {
        $("body").append(`<div id="app">
            <div id="header-container">
                <header class="cart"></header>
            </div>
            <ul class="product-list" id="prod-list"></ul>
        </div>`);
        await new ProductList().render();
        new ShoppingCart().render();
    }
}
