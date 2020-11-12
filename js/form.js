let logIn = document.getElementById("logIn"),
registration = document.getElementById("register"),
indicator = document.getElementById("indicator");



function logForm() {
    registration.style.transform = "translateX(400px)";
    logIn.style.transform = "translateX(400px)";
    indicator.style.transform = "translateX(0px)"
}
function regForm() {
    registration.style.transform = "translateX(0px)";
    logIn.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)"
} 