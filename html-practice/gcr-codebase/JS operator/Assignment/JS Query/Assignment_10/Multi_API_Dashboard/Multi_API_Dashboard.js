document.addEventListener("DOMContentLoaded", function () {
    
    Promise.all([
        fetch("http://localhost:3004/users"),
        fetch("http://localhost:3004/orders"),
        fetch("http://localhost:3004/products")
    ])
    .then(function (responses) {
        if (responses.some(function (response) { return !response.ok; })) throw new Error();
        return Promise.all(responses.map(function (response) { return response.json(); }));
    })
    .then(function (data) {
        document.getElementById("users").textContent = data[0].length;
        document.getElementById("orders").textContent = data[1].length;
        document.getElementById("products").textContent = data[2].length;
        document.querySelectorAll(".card p").forEach(function (item) { item.classList.remove("skeleton"); });
    })
    .catch(function () {
        document.getElementById("warning").textContent = "Some data could not be loaded.";
        document.querySelectorAll(".card p").forEach(function (item) {
            item.textContent = "Not available";
            item.classList.remove("skeleton");
        });
    });
});
