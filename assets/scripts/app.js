import { Product } from "./product.js";
import { ProductList } from "./product-list.js";
import { ShoppingCart } from "./shopping-cart.js";

const product = new Product(1, "A", 100, "Product A", "");
product.detail();

$(async () => {
    await new ProductList().render();
    new ShoppingCart([product]).render();
});
