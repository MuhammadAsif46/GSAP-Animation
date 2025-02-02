// box animation here 

// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("#box2",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1,
// })

// gsap.from("#box2", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("#box3",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate: 360,
//     backgroundColor:"blue",
//     // borderRadius:50,
//     borderRadius:"50%",
// })


// text animation here

// gsap.to("h1",{
//     opacity:0,
//     duration:2,
//     delay:1
// })
// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     delay:1,
//     y:30,
//     // color:"blue"
//     stagger:1
//     // stagger:-1
// })


// repeated animation

// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//    // repeat:1, // run 2 times 1 time default
//     repeat:-1,  // -1 value run infinite   
//     yoyo:true   // yoyo to from 2 sides
// })

// withOut using time line issues then calculate delay and duration see this

// gsap.to("#box1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
// });
// gsap.to("#box2", {
//   x: 1200,
//   duration: 1.5,
//   delay: 2.5,
//   backgroundColor:"yellow"
// });
// gsap.to("#box3", {
//   x: 1200,
//   duration: 1.5,
//   delay: 4,
//   scale:0.5,
//   borderRadius: "50%"
// });

// using timeline one by one run animations

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 1200,
//   duration: 1.5,
//   backgroundColor:"yellow"

// });
// tl.to("#box3", {
//   x: 1200,
//   duration: 1.5,
// });

