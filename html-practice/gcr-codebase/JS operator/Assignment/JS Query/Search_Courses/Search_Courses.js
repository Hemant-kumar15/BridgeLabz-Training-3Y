$(document).ready(function () {
    $("#search").keyup(function () {
        let value = $(this).val().toLowerCase();
        let count = 0;
        $("#courseList li").each(function () {
            let matched = $(this).text().toLowerCase().includes(value);
            $(this).toggle(matched);
            if (matched) {
                count++;
                // Change the matched course text color.
                $(this).css("color", "blue");
            } else {
                $(this).css("color", "black");
            }
        });
        $("#count").text("Matched courses: " + count);
    });
    $("#clear").click(function () {
        $("#search").val("");
        $("#courseList li").show().css("color", "black");
        $("#count").text("Showing 5 courses");
    });
});