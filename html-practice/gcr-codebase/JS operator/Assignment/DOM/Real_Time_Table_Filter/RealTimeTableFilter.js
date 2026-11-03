let search=document.getElementById("search"), rows=document.querySelectorAll("#rows tr"), empty=document.getElementById("empty");
search.addEventListener("input",function(){
 let found=0, value=search.value.toLowerCase();
 rows.forEach(row=>{if(row.textContent.toLowerCase().includes(value)){row.style.display="";found++;}else row.style.display="none";});
 empty.style.display=found===0?"block":"none";
});