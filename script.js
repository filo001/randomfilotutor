// Really trash authentication
const form = document.querySelector("form")
const user = document.querySelector("#user")
const pass = document.querySelector("#password")
const errorMsg = document.querySelector(".errormessage")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(user.value)
    console.log(pass.value)
    if (user.value == 'ADMIN' && pass.value == 'ADMIN') {
        errorMsg.textContent = "Login Success!"
        errorMsg.style.cssText = "color: green"
        setTimeout(() => {
            window.location.replace("./templates/home.html")
        sessionStorage.setItem("auth", 1)
        }, 1000)
        
    }
    else {
        errorMsg.textContent = "Invalid username or password, please try again"
    }
})