$(document).ready(function () {
    $(".details").hide();
    $(".product").click(function (event) {
        if (!$(event.target).hasClass("favorite")) {
            $(this).toggleClass("highlight");
            if ($(this).data("stock") === "no") alert("This product is out of stock.");
        }
    });
    $(".product").hover(
        function () { $(this).find(".details").slideDown(); },
        function () { $(this).find(".details").slideUp(); }
    );
    $(".favorite").click(function () {
        $(this).toggleClass("selected");
        $(this).text($(this).hasClass("selected") ? "♥ Favorite" : "♡ Favorite");
    });
});