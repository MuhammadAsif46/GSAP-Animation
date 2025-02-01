// box animation here 

gsap.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
});
// gsap.to("#box2",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1,
// })

gsap.from("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
});

gsap.to("#box3",{
    x:1200,
    duration:2,
    delay:1,
    rotate: 360,
    backgroundColor:"blue",
    // borderRadius:50,
    borderRadius:"50%",
})


// text animation here

// gsap.to("h1",{
//     opacity:0,
//     duration:2,
//     delay:1
// })
gsap.from("h1",{
    opacity:0,
    duration:2,
    delay:1,
    y:30,
    // color:"blue"
    stagger:1
    // stagger:-1
})