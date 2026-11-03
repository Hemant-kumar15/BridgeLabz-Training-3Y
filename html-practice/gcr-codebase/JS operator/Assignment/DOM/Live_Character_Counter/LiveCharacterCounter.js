let text=document.getElementById("text"), count=document.getElementById("count");
text.addEventListener("input",function(){
 let left=100-text.value.length; count.textContent=left+" characters left";
 count.style.color=left===0?"red":left<=20?"orange":"green";
});
text.addEventListener("beforeinput",function(e){if(text.value.length>=100&&e.data)e.preventDefault();});
document.getElementById("reset").onclick=function(){text.value="";count.textContent="100 characters left";count.style.color="green";};