$(document).ready(function () {
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();

        // First check whether this email is already present in the database.
        axios.get("http://localhost:3006/users?email=" + encodeURIComponent(email))
            .then(function (response) {
                if (response.data.length > 0) {
                    $("#message").css("color", "red").text("Email already registered.");
                } else {
                    return axios.post("http://localhost:3006/users", {name:name, email:email})
                        .then(function () {
                            $("#message").css("color", "green").text("Registration successful!");
                            $("#registerForm")[0].reset();
                        });
                }
            })
            .catch(function () {
                $("#message").css("color", "red").text("Could not register. Check the server.");
            });
    });
});