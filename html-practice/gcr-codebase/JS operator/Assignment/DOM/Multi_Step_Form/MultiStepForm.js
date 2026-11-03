let steps=document.querySelectorAll(".step"), current=0;
function showStep(){steps.forEach((s,i)=>s.style.display=i===current?"block":"none");back.style.display=current===0?"none":"inline";next.textContent=current===2?"Submit":"Next";}
next.onclick=function(){
 let field=steps[current].querySelector("input"), value=field.value.trim();
 if(!value){alert("Please enter "+field.id);return;}
 if(field.id==="email"&&!value.includes("@")){alert("Enter valid email");return;}
 if(field.id==="password"&&value.length<6){alert("Password must be 6 characters");return;}
 if(current<2){current++;showStep();}
 else{form.style.display="none";summary.textContent="Name: "+name.value+" | Email: "+email.value;}
};
back.onclick=function(){if(current>0){current--;showStep();}}; showStep();