let cart = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Shoes", price: 1200, quantity: 1 }
];

function getTotal(items) {
    let total = 0;

    for (let item of items) {
        total += item.price * item.quantity;
    }

    return total;
}

function applyCoupon(total, coupon) {
    if (coupon === "SAVE10") {
        return total - total * 0.10;
    } else if (coupon === "SAVE20") {
        return total - total * 0.20;
    }
    return total;
}

let total = getTotal(cart);
console.log("Cart Total:", total);
console.log("After Coupon:", applyCoupon(total, "SAVE10"));