const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const user_signup = document.querySelector(".user-signup");
const email_signup= document.querySelector(".email-signup");
const password_signup= document.querySelector(".password-signup");
const email_signin= document.querySelector(".email-signin");
const password_signin= document.querySelector(".password-signin");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
