var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("Login");
var y = document.getElementById("register");


let signin_btn = document.querySelector(".signin_btn");
let login_btn =  document.querySelector(".login_btn");

signin_btn.addEventListener("click",()=>{
    x.style.display= "none";
    y.style.display= "block";
})
login_btn.addEventListener("click",()=>{
    y.style.display= "none";
    x.style.display= "block";
})
