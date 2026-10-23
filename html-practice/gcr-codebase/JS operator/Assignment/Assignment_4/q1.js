class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}

let p1 = new Product("Laptop", 40000, 2);
console.log("Product:", p1.name);
console.log("Total Price:", p1.getTotal());