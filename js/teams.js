
ScrollReveal().reveal('.team-container .box', {
    origin: 'top',
    distance: '30px',
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1000,
    interval: 200,
    opacity: 0,
    scale: 1,
    easing: 'ease-in-out',
    reset: true, // replays the animation each time it's scrolled into view
    interval: 150,
});
ScrollReveal().reveal('.footer-container .footer-column', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    delay: 200,
    interval: 100,
});

ScrollReveal().reveal('.heading', { delay: 400, origin: 'left', distance: '-1000px' });
ScrollReveal().reveal('.heading', { delay: 400, origin: 'left', distance: '-1000px' });
ScrollReveal().reveal('.details img', { delay: 200, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.details h3', { delay: 400, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.details p', { delay: 600, origin: 'right', distance: '50px' });


document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        // When the section is in view, fade in; otherwise, fade out
        if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
            section.classList.add("fade-in");
            section.classList.remove("fade-out");
        } else {
            section.classList.add("fade-out");
            section.classList.remove("fade-in");
        }
    });
});
