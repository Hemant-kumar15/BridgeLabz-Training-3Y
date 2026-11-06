class Employee {
 constructor(name,department) { this.name=name; this.department=department; }
 work() { console.log(this.name+" is doing regular work."); }
}
class Manager extends Employee {
 work() { console.log(this.name+" is managing the "+this.department+" team."); }
}
let employee=new Employee("Rahul","IT");
let manager=new Manager("Hemant","Development");
employee.work();
manager.work();
// Both objects use work(), but the output depends on the object type.