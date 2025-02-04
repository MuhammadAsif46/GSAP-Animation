## ScrollTrigger Animation

Without ScrollTrigger:
```js
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration: 2,
    rotate:360
})
```

- `scale:` 0 - Starts the element at 0 size and scales it up.

- `rotate:` 360 - Spins the element while it appears.

### Using ScrollTrigger:
```js
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration: 2,
    rotate:360,
    scrollTrigger: "#page2 #box"
})
```

`scrollTrigger` - Ensures animation starts when the element enters the viewport.

**ScrollTrigger with Text Animation**
```js
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
```

- `trigger` - Defines the element that activates the animation.
- `scroller` - Specifies the scrolling element (body in this case).
- `markers`: true - Displays debug markers for testing.
- `scrub`: true - Links animation progress to scroll position.

`Conclusion`

GSAP is a powerful tool for creating smooth and performant animations. With features like timeline, ScrollTrigger, and repeat/yoyo effects, it provides flexibility for complex animations. 🚀