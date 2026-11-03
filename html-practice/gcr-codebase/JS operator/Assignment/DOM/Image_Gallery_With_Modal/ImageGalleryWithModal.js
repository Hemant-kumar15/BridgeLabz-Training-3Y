let modal=document.getElementById("modal"), big=document.getElementById("big");
gallery.addEventListener("click",function(e){if(e.target.tagName==="IMG"){big.src=e.target.src;modal.style.display="flex";}});
modal.addEventListener("click",function(){modal.style.display="none";});
big.addEventListener("click",function(e){e.stopPropagation();});