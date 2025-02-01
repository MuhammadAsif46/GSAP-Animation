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