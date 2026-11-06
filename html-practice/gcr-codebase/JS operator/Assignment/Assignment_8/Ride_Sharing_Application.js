class User {
 constructor(name,rating) { this.name=name; this.rating=rating; }
}
class Driver extends User {
 constructor(name,rating,vehicle) { super(name,rating); this.vehicle=vehicle; }
}
class Trip {
 constructor(fromLocation,toLocation,distance) {
  this.fromLocation=fromLocation; this.toLocation=toLocation; this.distance=distance;
 }
 calculateFare() {
  if(this.distance===undefined || this.distance===null || this.distance<0)
   throw new Error("Please enter a valid trip distance.");
  return this.distance*12;
 }
}
let driver=new Driver("Amit",4.8,"Swift");
console.log("Driver:",driver.name,"Vehicle:",driver.vehicle);
try { let trip=new Trip("Mathura","Agra",60); console.log("Fare: Rs.",trip.calculateFare()); }
catch(error) { console.log(error.message); }
try { let trip=new Trip("Mathura","Agra",-10); console.log("Fare: Rs.",trip.calculateFare()); }
catch(error) { console.log("Trip error:",error.message); }