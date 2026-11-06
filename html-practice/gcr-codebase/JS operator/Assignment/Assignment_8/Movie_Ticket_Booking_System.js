class MovieTicket {
 constructor(movieName,seatNo,price) { this.movieName=movieName; this.seatNo=seatNo; this.price=price; }
}
MovieTicket.prototype.printTicket=function() {
 console.log("Movie:",this.movieName);
 console.log("Seat:",this.seatNo);
 console.log("Price: Rs.",this.price);
};
class OnlineTicket extends MovieTicket {
 constructor(movieName,seatNo,price,convenienceFee) {
  super(movieName,seatNo,price); this.convenienceFee=convenienceFee;
 }
 getTotalAmount() { return this.price+this.convenienceFee; }
}
let ticket=new OnlineTicket("3 Idiots","A12",250,30);
ticket.printTicket();
console.log("Convenience fee:",ticket.convenienceFee);
console.log("Total amount:",ticket.getTotalAmount());
// OnlineTicket gets printTicket() from MovieTicket through the prototype chain.