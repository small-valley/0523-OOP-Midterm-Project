export class Product {
    constructor(id, title, price, description, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
    detail() {
        console.log(`ID: ${this.id}
        Title: ${this.title}
        Price: ${this.price}
        Description: ${this.description}
        Image: ${this.image}`);
    }
}
