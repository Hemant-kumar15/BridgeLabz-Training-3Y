$(document).ready(function () {
    function showMessage(message) { $("#status").text(message).hide().fadeIn(); }
    function topicClick() { showMessage("Selected topic: " + $(this).text()); }

    // This event also works for topics added later.
    $("#topics").on("click", ".topic", topicClick);
    $("#subscribe").click(function () { showMessage("Notifications are enabled."); });
    $("#unsubscribe").click(function () { showMessage("Notifications are disabled."); });

    $("#addTopic").click(function () {
        let name = $("#newTopic").val().trim();
        if (name !== "") {
            $("<button>").addClass("topic").text(name).appendTo("#topics");
            $("#newTopic").val("");
            showMessage("New topic added.");
        }
    });
    $("#removeTopic").click(function () {
        let last = $("#topics .topic").last();
        // Remove the click handler before deleting this topic.
        last.off("click", topicClick).remove();
        showMessage("Last topic removed.");
    });
});