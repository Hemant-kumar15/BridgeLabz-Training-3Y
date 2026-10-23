let student = {
    name: "Hemant",
    course: "B.Tech CSE"
};

function updateObject() {
    let key = document.getElementById("key").value.trim();
    let value = document.getElementById("value").value.trim();

    if (key === "" || value === "") {
        alert("Enter both values.");
        return;
    }

    student[key] = value;
    document.getElementById("output").textContent = JSON.stringify(student);
}