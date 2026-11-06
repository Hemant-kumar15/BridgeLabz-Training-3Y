class FitnessAnalytics {
 constructor(workouts) {
  if(!workouts || workouts.length===0) throw new Error("Workout data is empty.");
  this.workouts=workouts;
 }
 getActiveUsers() { return this.workouts.filter(w=>w.steps>7000); }
 getAverageCalories() {
  let total=this.workouts.reduce((sum,w)=>sum+w.calories,0);
  return total/this.workouts.length;
 }
 getUserSummary() {
  return this.workouts.map(w=>w.user+" walked "+w.steps+" steps and burned "+w.calories+" calories.");
 }
}
let workoutData=[
 {user:"A",steps:8000,calories:300},
 {user:"B",steps:12000,calories:500},
 {user:"C",steps:4000,calories:200}
];
try {
 let fitness=new FitnessAnalytics(workoutData);
 console.log("Active users:",fitness.getActiveUsers());
 console.log("Average calories:",fitness.getAverageCalories());
 console.log("Summary:",fitness.getUserSummary());
} catch(error) { console.log("Error:",error.message); }