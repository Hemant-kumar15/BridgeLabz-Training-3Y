function design(callback) {
    setTimeout(() => {
        console.log("Design done");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build done");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Test done");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deploy done");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebrate!");
    }, 1000);
}

// Nested callbacks make the flow harder to read.
function runWithCallbacks() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function runWithAsyncAwait() {
    await waitOneSecond();
    console.log("Design done");
    await waitOneSecond();
    console.log("Build done");
    await waitOneSecond();
    console.log("Test done");
    await waitOneSecond();
    console.log("Deploy done");
    await waitOneSecond();
    console.log("Celebrate!");
}

// Run one version at a time to compare the output.
// runWithCallbacks();
runWithAsyncAwait();

// async/await keeps the steps in order and is easier to read.
