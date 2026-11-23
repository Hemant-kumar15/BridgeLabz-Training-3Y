$(document).ready(function () {
    $(".answer").hide();
    // Open or close the answer for the selected question.
    $(".question").click(function () { $(this).next(".answer").slideToggle(); });
    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );
    $(".question").dblclick(function () { $(".answer").slideUp(); });
    $(".answer input").focus(function () { $(this).closest(".faq").find(".question").css("background", "#fff0a8"); });
    $(".answer input").blur(function () { $(this).closest(".faq").find(".question").css("background", ""); });
});