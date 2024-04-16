function openSection(element, btn){
    console.log("clicked")
    const allbtn = document.querySelectorAll(".sidebar button")
    const allcontent = document.querySelectorAll(".contents .section")
    const currentlyColl = document.querySelectorAll(".collapsible.active")
    try {
        console.log(currentlyColl)
        currentlyColl.forEach(element => {
            element.classList.toggle("active")
            element.nextElementSibling.style.maxHeight = null
        })
    }
    finally {
    allbtn.forEach(item => {
        item.style.cssText = "background: none;color: #7F7FD5;"
    })
    allcontent.forEach(item => {
        item.style.transform = "translateX(2500px)"
        // item.style.transform = "translateY(1500px)"
        if (item != element) {
            setTimeout(() => {
                const child = item.firstElementChild
                child.classList.add("inactive")
                const skillcheckitems = item.getElementsByClassName('skillcheck')[0]
                skillcheckitems.classList.add("inactive")
            }, 250)
            
            item.style.transitionDelay = "0s"
        }
        else {
            setTimeout(() => {
                const child = item.firstElementChild
                child.classList.remove("inactive")
                const skillcheckitems = item.getElementsByClassName('skillcheck')[0]
                skillcheckitems.classList.remove("inactive")
            }, 250)
            item.style.transitionDelay ="0.2s" 
        }
    })    
    element.style.transform = "translateX(0)";
    // element.style.transform = "translateY(0)";
    btn.className = "active"
    btn.style.cssText = "background: #7F7FD5; color: white;";
    }
}

function logOut(){
    sessionStorage.setItem("auth", 0)
    sessionStorage.setItem("currentUser", "none")
    window.location.reload()
}

function displayButton(sidebutton, dashbutton, subject) {
    sidebutton.classList.toggle("inactive")
    dashbutton.classList.toggle("active")
    currentState = localStorage.getItem(subject)
    if (currentState == "active") {
        localStorage.setItem(subject, "inactive")
    }
    else {
        localStorage.setItem(subject, "active")
    }    
}

function displayMemoryButton(sidebutton, dashbutton, subject) {
    if(localStorage.getItem(subject) == "active") {
        sidebutton.classList.toggle("inactive")
        dashbutton.classList.toggle("active")
    }
}

const mathdashbtn = document.querySelector("#mathdashbtn")
const physdashbtn = document.querySelector("#physdashbtn")
const chmdashbtn = document.querySelector("#chmdashbtn")
const g11mathdashbtn = document.querySelector("#g11mathdashbtn")

const dashboard = document.querySelector(".dashboard")
const help = document.querySelector(".help")
const mathsMethods = document.querySelector(".mathsMethods")
const physics = document.querySelector(".physics")
const chemistry = document.querySelector(".chemistry")
const g11math = document.querySelector(".g11math")

const sidebar = document.querySelector("#sidebarsubj")
const dashbtn = document.querySelector("#dashbtn")
const helpbtn = document.querySelector("#helpbtn")
const mathbtn = document.querySelector("#mathbtn")
const physbtn = document.querySelector("#physbtn")
const chmbtn = document.querySelector("#chmbtn")
const g11mathbtn = document.querySelector("#g11mathbtn")

openSection(dashboard, dashbtn)
displayMemoryButton(mathbtn, mathdashbtn, 'math')
displayMemoryButton(physbtn, physdashbtn, 'physics')
displayMemoryButton(chmbtn, chmdashbtn, 'chemistry')
displayMemoryButton(g11mathbtn, g11mathdashbtn, 'g11math')

// chemistry.remove()
// chmbtn.remove()


// const derivativeSlider = document.querySelector("#derivativeInput")
// const derivativeRating = document.querySelector("#derivativeRating")
// derivativeRating.textContent = derivativeSlider.value
// derivativeSlider.oninput = function() {
//     derivativeRating.textContent = derivativeSlider.value;
// }

const skillCheckSliders = document.querySelectorAll(".skillcheck input")
const skillCheckRating = document.querySelectorAll(".skillcheck span")

console.log(skillCheckRating)
console.log(skillCheckSliders)

for(i=0; i < (skillCheckRating.length); ++i) {
    const index = i
    try {
        skillCheckRating[index].textContent = localStorage.getItem(index)
        skillCheckSliders[index].value = localStorage.getItem(index)
        if (localStorage.getItem(index) == undefined) {
            skillCheckSliders[index].value = 0
        }
    }
    finally {
    skillCheckRating[index].textContent = skillCheckSliders[index].value
    skillCheckSliders[index].oninput = function() {
        skillCheckRating[index].textContent = skillCheckSliders[index].value
        saveValue = skillCheckSliders[index].value
        localStorage.setItem(index, saveValue)
    }
}}

var coll = document.getElementsByClassName("collapsible");
var x;

for (x = 0; x < coll.length; x++) {
  coll[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const personalizedAdvice = document.querySelector("#personalizedAdvice")
const welcomeUser = document.querySelectorAll("#welcomeUser")

userInfoList = [
    {
        user: "admin",
        name: "Admin",
        text: "You are the admin",
        grade: 12,
    },
    {
        user: "jay",
        name: "Jay",
        text: "Maths Methods:\n- You need to do more problems with log laws\n- You need to work on finding exact values with your trig functions, (specifically for Sin0, Cos0, Sin90, Cos90 etc.) ",
        grade: 12,
    },
    {
        user: "amelie",
        name: "Amelie",
        text: "Maths Methods:\n- Need to do more log law practice\n- Do Homework 2 and see which derivatives you struggle with", 
        grade: 12,
    },
    {
        user: "grade11admin",
        name: "Admin",
        text: "Grade 11 admin",
        grade: 11
    },
    {
        user: "richelle",
        name: "Richelle",
        text: "Maths Methods:\n- You gotta get comfortable getting questions wrong now\n- When you get stuck ask yourself what you didn't understand about the problem",
        grade: 12
    },
    {
        user: "sheina",
        name: "Sheina",
        text: "New Student",
        grade: 11
    }
    
]

let currentUser = userInfoList.find(user => user.user === sessionStorage.getItem("currentUser"));
personalizedAdvice.innerText = currentUser.text
welcomeUser.forEach(element => {
    element.textContent = currentUser.name
})

// const dashboardcontainer = document.querySelector("#dashboardcontainer")
// if(currentUser.user == "admin") {
//     for (i=0; i < 10 ; i++) {
//         dashboardcontainer.removeChild(dashboardcontainer.firstChild)
//     }
// } 
// Experiment with adding grade 11 section maybe

if (currentUser.grade == 11) {
    mathdashbtn.classList.toggle("inactive")
    physdashbtn.classList.toggle("inactive")
    chmdashbtn.classList.toggle("inactive")
    g11mathdashbtn.classList.toggle("inactive")
    mathbtn.classList.add("inactive")
    physbtn.classList.add("inactive")
    chmbtn.classList.add("inactive")
}

if (currentUser.grade == 12) {
    g11mathbtn.classList.add("inactive")
}
