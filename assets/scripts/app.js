import { Shop } from "./shop.js";
import { ShoppingCart } from "./shopping-cart.js";

export class App {
    constructor() {
        this.shop = new Shop();
        this.shoppingCart = new ShoppingCart();
    }
    init() {
        $(async () => {
            await this.shop.render();
        });
    }
    addProductToCart(product) {
        this.shoppingCart.addToCart(product);
    }
}
new App().init();
