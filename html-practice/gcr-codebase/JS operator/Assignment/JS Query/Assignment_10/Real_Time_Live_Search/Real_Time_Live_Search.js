$(document).ready(function () {
    $("#loading").hide();

    function showProducts(products) {
        $("#results").empty();
        if (products.length === 0) {
            $("#results").text("No products found");
            return;
        }
        products.forEach(function (product) {
            $("#results").append('<div class="product"><img src="' + product.image + '" alt="' + product.name + '"><div><h3>' + product.name + '</h3><p>Price: ₹' + product.price + '</p></div></div>');
        });
    }

    $.get("http://localhost:3001/products", showProducts);

    $("#search").keyup(function () {
        $("#loading").show();
        $.ajax({
            url: "http://localhost:3001/products?q=" + encodeURIComponent($(this).val()),
            type: "GET",
            success: showProducts,
            error: function () { $("#results").text("Could not load products."); },
            complete: function () { $("#loading").hide(); }
        });
    });
});