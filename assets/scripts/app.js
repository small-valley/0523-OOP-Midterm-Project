import { Product } from "./product.js";
import { ProductItem } from "./product-item.js";

new Product(1, "A", 100, "Product A", "").detail();
const productItem = new ProductItem(new Product(2, "B", 200, "Product B", ""));

$(() => {
    $("ul#prod-list").append(productItem.render());
    $(`button#product-item-${productItem.product.id}`).click(() =>
        productItem.addToCart()
    );
});
