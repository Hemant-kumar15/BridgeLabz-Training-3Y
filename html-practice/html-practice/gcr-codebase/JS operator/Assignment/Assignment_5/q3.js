let user = {
    name: "Hemant",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Arrow functions do not have their own this.
// Use a normal function to get this from the object.
user.showName = function() {
    console.log(this.name);
};

user.showName();
