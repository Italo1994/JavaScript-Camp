const container = document.getElementsByClassName("container")[0];
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("title");
const footer = document.getElementById("footer");
const darkModeClass = "dark-mode";

// container.addEventListener('change', changeElements);
button.addEventListener('click', changeMode);
button.addEventListener('mouseout', MouseEffects);

function changeMode() {
    changeClasses();
    changeText();
}

function MouseEffects() {
    button.classList.toggle("transition");
}

function changeText() {
    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";
    
    if(container.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";

        footer.style.color = "#FFF";
    } else {
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";

        footer.style.color = "#000";
        
    }
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    container.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
}