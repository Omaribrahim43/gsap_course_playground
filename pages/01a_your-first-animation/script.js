gsap.to(".circle, #square, .triangle", {
    opacity: 1,
    scale: 1.1,
    duration: 1,
    onComplete: () =>
    {
        gsap.to(".circle", {
            y: -20,
            repeat: -1,
            yoyo: true,
        });
        gsap.to("#square", {
            y: -20,
            repeat: -1,
            yoyo: true,
            delay: 0.2
        });
        gsap.to(".triangle", {
            y: -20,
            repeat: -1,
            yoyo: true,
            delay: 0.4
        });
    }
});