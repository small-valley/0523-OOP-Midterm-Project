import { Product } from "./product.js";
import { ProductItem } from "./product-item.js";
import { ProductList } from "./product-list.js";

new Product(1, "A", 100, "Product A", "").detail();
const productItem = new ProductItem(new Product(2, "B", 200, "Product B", ""));

$(async () => {
    await new ProductList().render();
});
