# GSAP (GreenSock Animation Platform) - Basics

GSAP is a powerful JavaScript library for creating high-performance animations for web applications. It allows you to animate HTML elements, SVGs, and even JavaScript objects with smooth transitions.

## 📌 How to Use GSAP via CDN

To use GSAP without installation, you can add the CDN link directly into your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GSAP Animation</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  </head>
  <body>
    <div
      id="box"
      style="width: 100px; height: 100px; background-color: red;"
    ></div>
    <script>
      gsap.to("#box", { x: 300, duration: 2 });
    </script>
  </body>
</html>
```

---

## 📌 Basic GSAP Syntax

GSAP provides different methods to animate elements:

```javascript
// gsap.to(target, { properties })
gsap.to(".box", { x: 200, duration: 1, opacity: 0.5 });

// gsap.from(target, { properties })
gsap.from(".box", { x: -200, duration: 1, opacity: 0 });

// gsap.fromTo(target, { fromProperties }, { toProperties })
gsap.fromTo(
  ".box",
  { x: -200, opacity: 0 },
  { x: 200, opacity: 1, duration: 1 }
);
```

---

## 📌 What is .to() and How Does It Work?

The **.to()** method in GSAP animates an element to a specified state from its current state.

```javascript
gsap.to(".box", { x: 300, opacity: 1, duration: 2 });

```
**Explanation:** The element moves to x: 300 and opacity: 1 over a duration of 2 seconds.

---

## 📌 What is .from() and How Does It Work?

The **.from()** method in GSAP animates an element from a specific state to its natural/default state.

```javascript
gsap.from(".box", { x: -300, opacity: 0, duration: 1.5 });

```
**Explanation:** The element starts from x: -300 and opacity: 0, and then smoothly transitions to its original position and full opacity.

---

## 📌 Basic GSAP Animation

### `gsap.to()`
Animates an element from its current state to the specified values.

```js
 gsap.to("#box1", {
   x: 1200,
   duration: 2,
   delay: 1,
 });
```
- `x: 1200` → Moves the element 1200 pixels along the x-axis.
- `duration: 2` → The animation will complete in 2 seconds.
- `delay: 1` → Starts the animation after a 1-second delay.

### `gsap.from()`
Animates an element from the specified values to its natural/default state.

```js
 gsap.from("#box2", {
   x: 1200,
   duration: 2,
   delay: 1,
 });
```
- The element starts at `x: 1200` and moves back to its default position.

### Transform Properties

```js
 gsap.to("#box3",{
     x:1200,
     duration:2,
     delay:1,
     rotate: 360,
     backgroundColor:"blue",
     borderRadius:"50%",
 })
```
- `rotate: 360` → Rotates the element 360 degrees.
- `backgroundColor: "blue"` → Changes the background color to blue.
- `borderRadius: "50%"` → Makes the element circular.

## 📌 Text Animation

### Opacity Animation

```js
 gsap.to("h1",{
     opacity:0,
     duration:2,
     delay:1
 })
```
- `opacity: 0` → Fades out the text.

```js
 gsap.from("h1",{
     opacity:0,
     duration:2,
     delay:1,
     y:30,
     stagger:1
 })
```
- `y: 30` → Moves the text 30 pixels down before transitioning to its normal position.
- `stagger: 1` → Delays each letter's animation by 1 second.

## 📌 Repeated Animation

```js
 gsap.to("#box",{
     x:1200,
     duration:2,
     delay:1,
     rotate:360,
     repeat:-1,
     yoyo:true   
 })
```
- `repeat: -1` → Runs the animation infinitely.
- `yoyo: true` → Moves the element back and forth, creating a ping-pong effect.

## 📌 Timeline Animation

### Without Timeline

```js
 gsap.to("#box1", { x: 1200, duration: 1.5, delay: 1 });
 gsap.to("#box2", { x: 1200, duration: 1.5, delay: 2.5, backgroundColor:"yellow" });
 gsap.to("#box3", { x: 1200, duration: 1.5, delay: 4, scale:0.5, borderRadius: "50%" });
```
- Each animation starts after calculating the delay manually.

### Using Timeline

```js
 var tl = gsap.timeline();

 tl.to("#box1", { x: 1200, duration: 1.5, delay: 1 });
 tl.to("#box2", { x: 1200, duration: 1.5, backgroundColor:"yellow" });
 tl.to("#box3", { x: 1200, duration: 1.5 });
```
- Timeline queues animations one after another without manually setting delays.

## 📌 Navbar Animation

```js
 var tl = gsap.timeline();

 tl.from("h1",{
   y:-20,
   opacity: 0,
   duration: 1,
   delay:0.5
 })
```
- `y: -20` → Moves the text 20 pixels upwards before transitioning to its default position.
- `opacity: 0` → Starts fully transparent and fades in.

```js
 tl.from("h3",{
   y:-20,
   opacity: 0,
   duration: 1,
   stagger:0.3
 })
```
- `stagger: 0.3` → Animates multiple `h3` elements with a 0.3-second gap between each.

```js
 tl.from("#heading",{
   y:20,
   opacity: 0,
   duration: 1,
   scale:0.2,
 })
```
- `scale: 0.2` → Starts the heading at 20% of its size and expands to full size.

## 📌 Conclusion
This README provides an explanation of various GSAP properties used in the animation examples. GSAP is a powerful library for creating smooth and complex animations efficiently.

