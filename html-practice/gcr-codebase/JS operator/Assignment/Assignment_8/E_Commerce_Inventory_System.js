let products=[
 {id:1,name:"Laptop",category:"Electronics",price:45000,stock:4},
 {id:2,name:"Mouse",category:"Electronics",price:500,stock:20},
 {id:3,name:"Shirt",category:"Clothing",price:800,stock:3},
 {id:4,name:"Jeans",category:"Clothing",price:1500,stock:8},
 {id:5,name:"Book",category:"Books",price:300,stock:2}
];
function getLowStockProducts() { return products.filter(p=>p.stock<5); }
function sortProductsByPrice() { return [...products].sort((a,b)=>a.price-b.price); }
function calculateTotalInventoryValue() {
 return products.reduce((total,p)=>total+p.price*p.stock,0);
}
function groupByCategory() {
 return products.reduce((groups,p)=>{
  if(!groups[p.category]) groups[p.category]=[];
  groups[p.category].push(p);
  return groups;
 },{});
}
console.log("Low stock:",getLowStockProducts());
console.log("Sorted by price:",sortProductsByPrice());
console.log("Inventory value:",calculateTotalInventoryValue());
console.log("Categories:",groupByCategory());