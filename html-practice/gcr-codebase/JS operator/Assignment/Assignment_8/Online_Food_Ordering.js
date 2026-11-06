let menu=[{name:"Pizza",price:200},{name:"Burger",price:100},{name:"Pasta",price:150}];
function calculateBill(orderItems) {
 let prices=orderItems.map(name=>{
  let item=menu.find(food=>food.name===name);
  if(!item) throw new Error(name+" is not available.");
  return item.price;
 });
 return prices.reduce((total,price)=>total+price,0);
}
try { console.log("Total bill: Rs.",calculateBill(["Pizza","Burger"])); }
catch(error) { console.log("Order error:",error.message); }
try { console.log("Total bill: Rs.",calculateBill(["Pizza","Sandwich"])); }
catch(error) { console.log("Order error:",error.message); }