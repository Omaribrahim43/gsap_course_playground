import gsap from "gsap";

gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
});