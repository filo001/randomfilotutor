// Really trash authentication
const form = document.querySelector("form")
const user = document.querySelector("#user")
const pass = document.querySelector("#password")
const errorMsg = document.querySelector(".errormessage")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(user.value)
    console.log(pass.value)
    if (checkLogin(user.value, pass.value)) {
        errorMsg.textContent = "Login Success!"
        errorMsg.style.cssText = "color: green"
        setTimeout(() => {
            window.location.replace("./templates/home.html")
        sessionStorage.setItem("auth", 1)
        sessionStorage.setItem("currentUser", user.value)
        }, 1000)
        
    }
    else {
        errorMsg.textContent = "Invalid username or password, please try again"
    }
})

if (sessionStorage.getItem("auth") == 1) {
    window.location.replace("./templates/home.html")
}

function checkLogin(uservalue, passvalue) {
    let count = 0
    studentLogins.forEach(element => {
        if (uservalue == element.name && passvalue == element.pass) {
            count = 1
        }
        });
    return count == 1;
}

// If you see this man what da hell you doin

studentLogins = [
    {
        name: "jay",
        pass: "250307"
    },
    {
        name: "admin",
        pass: "admin"
    },
    {
        name: "amelie",
        pass: "260607"
    },
    {
        name: "grade11admin",
        pass: "admin",
    }
]


