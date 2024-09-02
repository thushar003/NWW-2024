let darkmode = localStorage.getItem('darkmode');
const darkmodeSwitch = document.getElementById('darkmode-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

darkmodeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});
