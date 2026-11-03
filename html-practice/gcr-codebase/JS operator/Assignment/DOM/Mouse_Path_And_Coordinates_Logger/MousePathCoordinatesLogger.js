let box=document.getElementById("box"), position=document.getElementById("position");
box.addEventListener("mousemove",function(e){position.textContent="clientX: "+e.clientX+", clientY: "+e.clientY;});
box.addEventListener("dblclick",function(e){
 let dot=document.createElement("div"), rect=box.getBoundingClientRect(); dot.className="dot";
 dot.style.left=(e.clientX-rect.left)+"px"; dot.style.top=(e.clientY-rect.top)+"px"; box.appendChild(dot);
});