// PAGE LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);

    }, 1000);

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// CLOSE MOBILE MENU

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// COUNTER ANIMATION

const counters = document.querySelectorAll(".stat h3");

let counterStarted = false;

function startCounters() {

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 80;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent = Math.floor(current) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});


// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ff3b30";
        }

    });

});