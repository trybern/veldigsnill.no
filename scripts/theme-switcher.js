const themeToggle = document.querySelector("#theme-toggle");
const bodyElement = document.querySelector("body");

// Sjekk tidligere besøk og sett theme
const storedTheme = localStorage.getItem("fargeprofil") || "light";
setTheme(storedTheme);

function setTheme(theme) {
    bodyElement.setAttribute("data-theme", theme);
    localStorage.setItem("fargeprofil", theme);
}

// Lysbryter for å skifte tema
themeToggle.addEventListener("click", switchTheme);

function switchTheme() {
    let currentTheme = bodyElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    console.log("Theme switched to " + newTheme);
}