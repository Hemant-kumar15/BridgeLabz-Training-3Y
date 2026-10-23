function bookTickets() {
    let price = Number(document.getElementById("movie").value);
    let tickets = Number(document.getElementById("tickets").value);

    if (tickets < 1) {
        document.getElementById("result").textContent = "Enter a valid number of tickets.";
        return;
    }

    let total = price * tickets;
    document.getElementById("result").textContent = "Total amount: Rs. " + total;
}