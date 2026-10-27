function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both objects use the same getDetails method from Car.prototype.
console.log(car1.getDetails === car2.getDetails);
