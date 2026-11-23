$(document).ready(function () {
    $(".contact").hide();
    $(".manager").click(function () { $(this).nextAll(".employee").addClass("highlight"); });
    $(".employee").hover(
        function () { $(this).find(".contact").show(); },
        function () { $(this).find(".contact").hide(); }
    );
    // children() selects the team inside the clicked department.
    $(".departmentName").click(function () {
        $(this).parent().children(".team").find(".member").css("background", "#d8f0ff");
    });
    $("#random").click(function () {
        $(".employee").removeClass("highlight");
        let list = $(".employee");
        let selected = Math.floor(Math.random() * list.length);
        list.eq(selected).addClass("highlight").siblings(".employee").addClass("highlight");
    });
    $("#collapse").click(function () { $(this).parent().find(".team").slideToggle(); });
});