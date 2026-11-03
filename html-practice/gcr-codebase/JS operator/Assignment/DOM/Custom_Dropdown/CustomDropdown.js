let dropdown=document.getElementById("dropdown"), toggle=document.getElementById("toggle"), options=document.getElementById("options");
toggle.addEventListener("click",function(e){e.stopPropagation();options.style.display=options.style.display==="block"?"none":"block";});
options.addEventListener("click",function(e){if(e.target.tagName==="P"){toggle.textContent=e.target.textContent;options.style.display="none";}});
document.addEventListener("click",function(e){if(!dropdown.contains(e.target))options.style.display="none";},true);