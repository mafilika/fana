/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#040910";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(5,11,20,0.95)";
        navbar.style.boxShadow = "none";

    }

});


/* ========================= */
/* SMOOTH REVEAL ANIMATION */
/* ========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .about-card, .contact-box"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("active-reveal");

        }

    });

}

revealOnScroll();


/* ========================= */
/* HERO TEXT ANIMATION */
/* ========================= */

const heroTitle = document.querySelector(".hero h1");

window.addEventListener("load", () => {

    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(40px)";

    setTimeout(() => {

        heroTitle.style.transition = "1.2s ease";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0px)";

    }, 300);

});


/* ========================= */
/* BUTTON HOVER GLOW EFFECT */
/* ========================= */

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow = "0 0 25px rgba(242,182,0,0.6)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});


/* ========================= */
/* ACTIVE REVEAL STYLE */
/* ========================= */

const style = document.createElement("style");

style.innerHTML = `
    
    .service-card,
    .project-card,
    .about-card,
    .contact-box{
        opacity:0;
        transform:translateY(60px);
        transition:1s ease;
    }

    .active-reveal{
        opacity:1;
        transform:translateY(0);
    }

`;

document.head.appendChild(style);
