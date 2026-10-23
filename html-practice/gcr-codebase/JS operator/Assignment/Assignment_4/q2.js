document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = Number(document.getElementById("age").value);
    let message = document.getElementById("message");

    if (name === "" || email === "" || age <= 0) {
        message.textContent = "Please fill all fields correctly.";
    } else if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Enter a valid email.";
    } else {
        message.textContent = "Student details submitted successfully.";
    }
});