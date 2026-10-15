// Q6 Event-Based Counter Simulation
let count = 0;
function increment() {
    count++;
    console.log("Count:", count);
}
function decrement() {
    count--;
    console.log("Count:", count);
}
function showCount() {
    function display() {
        console.log("Current count from nested function:", count);
    }
    display();
}
increment();
increment();
decrement();
showCount();
