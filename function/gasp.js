// Jumbotron im
gsap.from('.jumbotron img', {
    duration: 0.8,
    scale: 1.5,
    ease: "back.out(1)",
    opacity: 0,
});

// Jumbotron Nama
gsap.from('.display-4', {
    duration: 1,
    opacity: 0,
});

// Jumbotron Lead
gsap.registerPlugin('TextPlugin');
gsap.to(".lead", {
    duration: 3,
    delay: 0.2,
    text: "Welding Technique Student | SMKN 1 Kota Bekasi",
});