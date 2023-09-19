import { Product } from "./product.js";
import { ProductItem } from "./product-item.js";

export class ProductList {
    constructor() {
        this.products = [];
    }
    async fetchProducts() {
        try {
            return await $.ajax({
                url: "https://fakestoreapi.com/products",
                type: "GET",
                success: (data) => {
                    this.products = data;
                    return true;
                },
                error: (err) => {
                    console.log(err);
                    return false;
                },
            });
        } catch (err) {
            console.log("catch-error", err);
            return false;
        }
    }
    async render() {
        const result = await this.fetchProducts();
        if (result) {
            const ul = $("ul#prod-list");
            this.products.forEach((product) => {
                let productItem = new ProductItem(
                    new Product(
                        product.id,
                        product.title,
                        product.price,
                        product.description,
                        product.image
                    )
                );
                ul.append(productItem.render());
                $(`button#product-item-${productItem.product.id}`).click(() =>
                    productItem.addToCart()
                );
            });
        }
    }
}
