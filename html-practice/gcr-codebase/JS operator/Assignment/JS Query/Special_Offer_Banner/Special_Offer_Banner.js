$(document).ready(function () {
    $("#hide").click(function () { $(".banner:first").hide(); });
    $("#show").click(function () { $(".banner").show(); });
    $("#up").click(function () { $(".banner").slideUp(); });
    $("#down").click(function () { $(".banner").slideDown(); });
    $("#fadeOut").click(function () { $(".banner").fadeOut(); });
    $("#fadeIn").click(function () { $(".banner").fadeIn(); });

    // Automatically show a different offer every five seconds.
    let current = 0;
    $(".banner").hide().first().show();
    setInterval(function () {
        let banners = $(".banner");
        banners.eq(current).fadeOut(500);
        current = (current + 1) % banners.length;
        banners.eq(current).fadeIn(500);
    }, 5000);
});