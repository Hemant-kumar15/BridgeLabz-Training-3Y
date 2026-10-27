class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

let student = new Student("Hemant", "CSE");
student.showName();
student.showBranch();

// This class version gives the same result as the prototype inheritance example.
