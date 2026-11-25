document.addEventListener("DOMContentLoaded", function () {
    let day = document.getElementById("day");
    let box = document.getElementById("timetable");

    function loadTimetable() {
        fetch("http://localhost:3005/timetable?day=" + encodeURIComponent(day.value))
            .then(function (response) { if (!response.ok) throw new Error(); return response.json(); })
            .then(function (classes) {
                box.innerHTML = "";
                if (classes.length === 0) { box.textContent = "No classes today."; return; }
                classes.forEach(function (item) {
                    let row = document.createElement("div");
                    row.className = "classRow";
                    let title = document.createElement("h3");
                    title.textContent = item.subject;
                    let faculty = document.createElement("p");
                    faculty.textContent = "Faculty: " + item.faculty;
                    let time = document.createElement("p");
                    time.textContent = "Time: " + item.time;
                    row.append(title, faculty, time);
                    box.appendChild(row);
                });
            })
            .catch(function () { box.textContent = "Could not load timetable."; });
    }
    day.addEventListener("change", loadTimetable);
    loadTimetable();
});