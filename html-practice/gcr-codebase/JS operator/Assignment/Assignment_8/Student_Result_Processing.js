class Student {
 constructor(name, marks) { this.name=name; this.marks=marks; }
 calculateAverage() {
  let average=this.marks.reduce((sum, mark)=>sum+mark,0)/this.marks.length;
  let grade=average>=80?"A":average>=60?"B":average>=40?"C":"F";
  return {average, grade};
 }
}
let students=[new Student("Hemant",[85,90,78]),new Student("Rahul",[65,70,62]),new Student("Aman",[32,45,38])];
students.forEach(s=>{let result=s.calculateAverage(); console.log(s.name,result.average,result.grade);});