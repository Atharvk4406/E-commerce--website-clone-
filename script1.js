const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const loginInfo = document.querySelector('.info-text.login');
const registerInfo = document.querySelector('.info-text.register');

registerLink.onclick = (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    loginInfo.style.display = "none";
    registerForm.style.display = "flex";
    registerInfo.style.display = "flex";
};

loginLink.onclick = (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    registerInfo.style.display = "none";
    loginForm.style.display = "flex";
    loginInfo.style.display = "flex";
};


// ----------------------------
// ADDITIONAL CODE FOR REDIRECT
// ----------------------------
document.getElementById("signUpForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    window.location.href = "index1.html";  // redirect after Login
});

document.getElementById("signInForm").addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "index1.html";  // redirect after Sign Up
});