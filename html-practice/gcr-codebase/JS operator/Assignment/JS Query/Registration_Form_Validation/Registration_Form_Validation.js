$(document).ready(function () {
    let registeredEmails = ["test@example.com"];
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let valid = true;

        $("input").css("border", "1px solid #999");
        $("#message").text("");

        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(email) || registeredEmails.includes(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }
        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }
        if (valid) {
            registeredEmails.push(email);
            $("#message").css("color", "green").text("Registration successful!");
            $("#registerForm")[0].reset();
        } else {
            $("#message").css("color", "red").text("Please correct the highlighted fields.");
        }
    });
});