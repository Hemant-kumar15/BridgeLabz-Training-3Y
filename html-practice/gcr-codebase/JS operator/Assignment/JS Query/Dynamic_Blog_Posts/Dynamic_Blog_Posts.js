$(document).ready(function () {
    let number = 5;
    $("#addPost").click(function () {
        number++;
        $("#posts").append('<article class="post"><h3>New Blog Post ' + number + '</h3><p>This is a new post.</p></article>');
        checkPosts();
    });
    $("#featured").click(function () {
        $("#posts").prepend('<article class="post featured"><h3>Featured Post</h3><p>Welcome to our featured blog.</p></article>');
        checkPosts();
    });
    $("#removePost").click(function () { $("#posts .post").last().remove(); });
    $("#addTag").click(function () {
        // before() and after() place tags around the first post.
        $("#posts .post").first().before('<span class="tag">New</span>');
        $("#posts .post").first().after('<span class="tag">Popular</span>');
    });
    function checkPosts() {
        $(".post").each(function () {
            let text = $(this).text().toLowerCase();
            if (text.includes("javascript") || text.includes("security")) {
                $(this).css("border-left", "5px solid orange");
            }
        });
    }
    checkPosts();
});