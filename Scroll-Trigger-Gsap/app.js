// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration: 2,
//     rotate:360
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration: 2,
//     rotate:360
// })

// use scroll Trigger 1st way
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration: 2,
//     rotate:360,
//     scrollTrigger: "#page2 #box"
// })

// scrollTrigger use text

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller:"body",
        markers:true,
        start: "top 50%",
        scrub: true
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger: "#page2 h2",
        scroller:"body",
        markers:true,
        start: "top 50%",
        scrub: true
    }
})