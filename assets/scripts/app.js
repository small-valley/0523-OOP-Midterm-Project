import { Shop } from "./shop.js";
import { ShoppingCart } from "./shopping-cart.js";

export class App {
    static _shop = new Shop();
    static _shoppingCart = new ShoppingCart();
    static init() {
        $(async () => {
            await App._shop.render();
        });
    }
    static addProductToCart(product) {
        App._shoppingCart.addToCart(product);
    }
}
App.init();
