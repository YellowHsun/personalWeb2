// light and dark mode

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("uil-sun");
    dayNight.querySelector("i").classList.toggle("uil-moon");
    document.body.classList.toggle("dark");
})


window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("uil-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("uil-moon");
    }
})

// menu show

const navToggle = document.querySelector(".nav-toggler");
const navMenu = document.getElementById("nav-menu");
const navClose = document.querySelector(".nav-close");
const navLink = document.querySelectorAll(".nav-link")

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

function closeMenu(){
    navMenu.classList.remove('show-menu');
}

if(navClose){
    navClose.addEventListener('click', closeMenu);
}

navLink.forEach(n => n.addEventListener('click', closeMenu));
