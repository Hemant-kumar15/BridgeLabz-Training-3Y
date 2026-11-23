$(document).ready(function () {
    // Show a greeting according to the current time.
    let hour = new Date().getHours();
    let greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
    $("#greeting").text(greeting + ", Hemant!");

    $("#greeting").click(function () { alert("Welcome to our website!"); });

    $("#change").click(function () {
        let quotes = ["Keep learning!", "Believe in yourself!", "Every day is a new chance!"];
        $("#greeting").text(quotes[Math.floor(Math.random() * quotes.length)]);
    });

    $("#toggle").click(function () { $("#welcome").toggle(); });
});