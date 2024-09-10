const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let darkmode = localStorage.getItem("darkmode")
const darkmodeSwitch = document.getElementById("darkmode-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

darkmodeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
