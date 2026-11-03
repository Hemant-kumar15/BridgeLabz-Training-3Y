document.querySelectorAll("button[data-theme]").forEach(button=>{
 button.addEventListener("click",function(){
  let theme=button.getAttribute("data-theme");
  document.body.setAttribute("class",theme==="light"?"":theme);
  document.body.setAttribute("data-theme",theme);
 });
});