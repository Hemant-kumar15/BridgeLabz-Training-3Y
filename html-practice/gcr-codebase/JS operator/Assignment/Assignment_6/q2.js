console.log("Start");

setTimeout(() => {
    console.log("Timeout task");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise task");
});

console.log("End");

// Synchronous code runs first.
// Promise callbacks are microtasks, so they run before setTimeout macrotasks.
