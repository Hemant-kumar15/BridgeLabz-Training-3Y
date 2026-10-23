class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

class EmployeeManager {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    showEmployees() {
        for (let employee of this.employees) {
            console.log(employee.id, employee.name, employee.salary);
        }
    }

    findEmployee(id) {
        for (let employee of this.employees) {
            if (employee.id === id) {
                return employee;
            }
        }
        return null;
    }
}

let manager = new EmployeeManager();
manager.addEmployee(new Employee(1, "Hemant", 25000));
manager.addEmployee(new Employee(2, "Rahul", 30000));
manager.showEmployees();
console.log(manager.findEmployee(1));