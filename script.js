gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2.5,
    smoothTouch: 0.1,
    effects: true
}); 

const tl = gsap.timeline();

tl.to(".page1", {
    background: "#0044aa",
    color: "#ffffff",
    delay: 1,
    duration: 1
}, 'a')

.to("#bgVideo", {
    delay: 1,
    top: "0%",
    clipPath: "inset(0% 0% 0% 0%"
}, 'a') 

.to(".one .left h1, .one .left p",{
    duration: 1,
    delay: 1,
    top: "0",
    left: "0"
}, 'a')

.to("a",{
    color: "#ffffff",
    delay: 1,
}, 'a')

.from("#lastText, .two .left",{
    delay: 1,
    top: 400,
    opacity: 0,
    duration: 1
},'a')

.to(".one .right, .two .right",{
    delay: 1.2,
    duration: 1,
    left: "0%",
    opacity: 1,
}, 'a')