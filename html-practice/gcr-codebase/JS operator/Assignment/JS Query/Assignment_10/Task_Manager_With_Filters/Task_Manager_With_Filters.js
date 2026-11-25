$(document).ready(function () {
    function loadTasks(filter) {
        let url = "http://localhost:3003/tasks";
        if (filter === "completed") url += "?completed=true";
        else if (filter !== "all") url += "?priority=" + filter;

        $.ajax({
            url: url,
            type: "GET",
            success: function (tasks) {
                $("#tasks").empty();
                if (tasks.length === 0) { $("#tasks").text("No tasks found."); return; }
                tasks.forEach(function (task) {
                    let checked = task.completed ? "checked" : "";
                    $("#tasks").append('<div class="task"><label><input type="checkbox" class="done" data-id="' + task.id + '" ' + checked + '> ' + task.title + '</label><span>' + task.priority + '</span></div>');
                });
            },
            error: function () { $("#message").text("Could not load tasks."); }
        });
    }

    loadTasks("all");
    $("#filter").change(function () { loadTasks($(this).val()); });

    // Save completed status with PATCH when the checkbox changes.
    $("#tasks").on("change", ".done", function () {
        let box = $(this);
        $.ajax({
            url: "http://localhost:3003/tasks/" + box.data("id"),
            type: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({completed:box.is(":checked")}),
            success: function () { loadTasks($("#filter").val()); },
            error: function () {
                box.prop("checked", !box.is(":checked"));
                $("#message").text("Task update failed.");
            }
        });
    });
});