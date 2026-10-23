document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.textContent = "Please enter username and password.";
    } else if (password.length < 6) {
        message.textContent = "Password must have at least 6 characters.";
    } else {
        message.textContent = "Login successful.";
    }
});