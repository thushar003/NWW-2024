let darkMode = localStorage.getItem('darkmode');
const darkmodeSwitch = document.querySelector('#darkmode-switch');

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
}

if (darkMode === "active")
{
    enableDarkmode();
}

darkmodeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkmode");
    if (darkMode !== "active")
    {
        enableDarkmode();
    }
    else
    {
        disableDarkmode();
    }
});
