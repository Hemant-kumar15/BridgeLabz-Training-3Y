let input=document.getElementById("item"), list=document.getElementById("list"), editing=null;
document.getElementById("add").onclick=function(){
 let name=input.value.trim(); if(!name)return;
 let li=document.createElement("li");
 li.innerHTML='<span></span><button data-action="edit">Edit</button><button data-action="delete">Delete</button>';
 li.querySelector("span").textContent=name; list.appendChild(li); input.value="";
};
function saveEdit(){
 if(!editing)return; let box=editing.querySelector("input");
 if(box){let span=document.createElement("span"); span.textContent=box.value.trim()||"Untitled"; box.replaceWith(span);}
 editing=null;
}
list.addEventListener("click",function(e){
 let li=e.target.closest("li"); if(!li)return;
 if(e.target.dataset.action==="delete"){li.remove(); if(editing===li)editing=null;}
 if(e.target.dataset.action==="edit"){
  saveEdit(); let span=li.querySelector("span"), box=document.createElement("input");
  box.value=span.textContent; span.replaceWith(box); editing=li; box.focus();
 }
});
document.addEventListener("click",function(e){if(editing&&!editing.contains(e.target))saveEdit();});