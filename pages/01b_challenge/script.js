import gsap from "gsap";

gsap.to(".card", {
    y: -25,
    repeat: -1,
    yoyo: true,
    boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)"
});