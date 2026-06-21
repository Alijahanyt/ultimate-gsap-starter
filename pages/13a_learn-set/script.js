import gsap from "gsap";

gsap.set('.gsap0box', {
    opacity: 0,
    scale: 1.5,
    y: -100,

})

gsap.to('gsap-box', {
    scale: 1,
    y: 0,
    duration: 0.6,
    opacity: 1,
    ease: 'expo.out',
})