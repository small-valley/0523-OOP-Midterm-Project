import { App } from "./app.js";

export class ProductItem {
    constructor(product) {
        this.product = product;
    }
    addToCart() {
        App.addProductToCart(this.product);
    }
    render() {
        return `<li class="product-item">
            <div>
                <img
                    src="${this.product.image}"
                    alt="${this.product.title}"
                />
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>$${this.product.price.toFixed(2)}</h3>
                    <p>${this.product.description}</p>
                    <button id="product-item-${
                        this.product.id
                    }">Add to Cart</button>
                </div>
            </div>
        </li>`;
    }
}
