function checkAuth() {
    const auth = sessionStorage.getItem("auth")
    if(auth == 1) {
        return
    }
    else {
        window.location.replace("../index.html")
        console.log("invalid user")
    }
}

checkAuth()
