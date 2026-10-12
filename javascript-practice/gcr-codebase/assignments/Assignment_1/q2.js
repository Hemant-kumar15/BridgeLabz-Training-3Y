// Q2 Multi-Type Data Summary
let name = "Hemant";
let age = 21;
let isStudent = true;
let skills = ["Java", "JavaScript"];
let student = { name: "Hemant", age: 21 };
let address = null;
let result;

let data = [
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

console.table(data);
