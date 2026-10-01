// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ================= TYPING ANIMATION =================

const typingElement = document.getElementById("typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Programmer",
    "Cybersecurity Enthusiast",
    "Data Analysis Enthusiast"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();


// ================= FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {

        alert("Please enter a valid name.");
        event.preventDefault();
        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Please enter a valid email address.");
        event.preventDefault();
        return;

    }

    if (message.length < 10) {

        alert("Message should contain at least 10 characters.");
        event.preventDefault();
        return;

    }

});


// ================= SCROLL REVEAL =================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});