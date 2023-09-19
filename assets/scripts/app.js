import { Shop } from "./shop.js";
import { ShoppingCart } from "./shopping-cart.js";

export class App {
    static _shop;
    static _shoppingCart;
    static init() {
        $(async () => {
            App._shop = new Shop();
            App._shoppingCart = new ShoppingCart();
            await App._shop.render();
        });
    }
    static addProductToCart(product) {
        App._shoppingCart.addToCart(product);
    }
}
App.init();
