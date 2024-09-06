let darkmode = localStorage.getItem("darkmode")
const darkmodeSwitch = document.getElementById("darkmode-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")         //AAAAAAAAAA
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

darkmodeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    if (darkmode !== "active")
    {
        enableDarkmode()
    }
    else
    {
        disableDarkmode()
    }
})
