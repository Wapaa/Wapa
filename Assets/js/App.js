window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#ffff',
        maxParticles: 130,
        connectParticles: false,
        responsive: [{
            breakpoint: 768,
            options: {
                maxParticles: 80
            }
        }, {
            breakpoint: 375,
            options: {
                maxParticles: 50
            }
        }]
    });
};


// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);