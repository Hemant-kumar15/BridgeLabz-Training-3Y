let form=document.getElementById("form"), fields=["name","email","password"];
function check(field){
 let input=document.getElementById(field), error=document.getElementById(field+"Error"), value=input.value.trim(), message="";
 if(!value)message="This field is required.";
 else if(field==="email"&&!value.includes("@"))message="Email must contain @.";
 else if(field==="password"&&value.length<6)message="Password must be at least 6 characters.";
 error.textContent=message; return message==="";
}
fields.forEach(field=>document.getElementById(field).addEventListener("input",function(){check(field);success.textContent="";}));
form.addEventListener("submit",function(e){
 e.preventDefault(); let valid=true; fields.forEach(field=>{if(!check(field))valid=false;});
 if(valid)success.textContent="Form Submitted Successfully";
});