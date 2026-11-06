function Product(name,price) { this.name=name; this.price=price; }
Product.prototype.applyDiscount=function(percent) { return this.price-(this.price*percent/100); };
let products=[new Product("Laptop",50000),new Product("Headphones",2000),new Product("Keyboard",1500)];
console.log(products[0].name,products[0].applyDiscount(10));
console.log(products[1].name,products[1].applyDiscount(15));
console.log(products[2].name,products[2].applyDiscount(5));
// The method hides the calculation, so we can apply discounts with one simple call.