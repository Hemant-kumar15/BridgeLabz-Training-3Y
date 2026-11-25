document.addEventListener("DOMContentLoaded", function () {
    let box = document.getElementById("employees");
    let message = document.getElementById("message");

    function loadEmployees() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3002/employees");
        xhr.onload = function () {
            if (xhr.status === 200) {
                box.innerHTML = "";
                JSON.parse(xhr.responseText).forEach(function (employee) {
                    let row = document.createElement("div");
                    row.className = "employee";
                    let name = document.createElement("span");
                    name.textContent = employee.name;
                    let button = document.createElement("button");
                    button.textContent = employee.status;
                    button.className = employee.status;
                    button.onclick = function () { updateStatus(employee, button); };
                    row.append(name, button);
                    box.appendChild(row);
                });
            } else message.textContent = "Could not load employees.";
        };
        xhr.onerror = function () { message.textContent = "Server connection failed."; };
        xhr.send();
    }

    function updateStatus(employee, button) {
        let oldStatus = employee.status;
        let newStatus = oldStatus === "active" ? "inactive" : "active";
        employee.status = newStatus;
        button.textContent = newStatus;
        button.className = newStatus;
        message.textContent = "";

        let xhr = new XMLHttpRequest();
        xhr.open("PATCH", "http://localhost:3002/employees/" + employee.id);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status < 200 || xhr.status >= 300) {
                employee.status = oldStatus;
                button.textContent = oldStatus;
                button.className = oldStatus;
                message.textContent = "Status update failed. Please try again.";
            }
        };
        xhr.onerror = function () {
            employee.status = oldStatus;
            button.textContent = oldStatus;
            button.className = oldStatus;
            message.textContent = "Connection failed. Status was not changed.";
        };
        xhr.send(JSON.stringify({status:newStatus}));
    }
    loadEmployees();
});