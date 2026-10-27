async function getProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        let products = await response.json();

        for (let product of products) {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("--------------------");
        }
    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

getProducts();
