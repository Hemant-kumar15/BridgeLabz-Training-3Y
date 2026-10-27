function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        let delay = 1000 + Math.floor(Math.random() * 1000);

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(stepName + " failed");
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.log("Pipeline failed!");
        console.log(error);
    }
}

// await pauses this function until each Promise settles.
// The next step starts only after the previous step succeeds.
// If one step rejects, control moves to catch and later steps do not run.
runPipeline();
