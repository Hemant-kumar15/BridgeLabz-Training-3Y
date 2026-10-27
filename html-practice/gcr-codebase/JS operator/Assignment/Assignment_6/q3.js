function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("Could not fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(error => {
        console.log("Error:", error);
    });
