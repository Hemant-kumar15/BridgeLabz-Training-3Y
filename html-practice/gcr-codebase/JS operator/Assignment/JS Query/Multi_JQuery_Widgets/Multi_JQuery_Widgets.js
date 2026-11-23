// jQuery version 1 controls the carousel and active widget.
jq1(document).ready(function () {
    jq1(".slide").hide().first().show();
    let current = 0;
    setInterval(function () {
        let slides = jq1(".slide");
        slides.eq(current).fadeOut();
        current = (current + 1) % slides.length;
        slides.eq(current).fadeIn();
    }, 3000);
    jq1(".widget").click(function () {
        jq1(".widget").removeClass("activeWidget");
        jq1(this).addClass("activeWidget");
    });
});

// jQuery version 2 controls the popup and hover tooltip.
jq2(document).ready(function () {
    jq2("#modal").hide();
    jq2("#notify").click(function () { jq2("#modal").fadeIn(); });
    jq2("#close").click(function () { jq2("#modal").fadeOut(); });
    jq2(".widget").hover(
        function () {
            let info = jq2(this).attr("title");
            if (info) jq2(this).append('<small class="tooltip">' + info + '</small>');
        },
        function () { jq2(this).find(".tooltip").remove(); }
    );
});