# Vanilla SVG Spotlight Reveal

## Overview
This mini-project demonstrates a smooth, interactive "hover-to-reveal" spotlight effect built entirely without third-party libraries. By leveraging native SVG filters and minimal JavaScript for coordinate tracking, the application achieves a lightweight, highly performant visual effect. 

Initially, the page content is obscured by a blur. As the user moves their cursor across the screen, a precise, circular area dynamically reveals the content underneath.



## Features
* **Zero Dependencies:** Eliminates the need for heavy animation or canvas libraries (like GSAP or Three.js) for simple masking effects.
* **Native SVG Filters:** Utilizes SVG's built-in processing power for blurring and compositing.
* **Highly Performant:** Keeps DOM manipulation to an absolute minimum by utilizing CSS custom properties (variables) to track mouse state.

## Technologies Used
* **HTML5:** Semantic structure and inline SVG definitions.
* **CSS3:** Layout, transitions, and custom properties (`--x` and `--y`).
* **JavaScript (Vanilla):** A single, lightweight event listener to track `mousemove` coordinates and update the CSS variables.
* **SVG:** Specifically `<filter>` (like `feGaussianBlur`), `<mask>`, or `<clipPath>` depending on the exact implementation details.

## How It Works

1. **The Blur State:** An SVG filter (using `<feGaussianBlur>`) or a CSS `backdrop-filter` is applied to an overlay element covering the content.
2. **Mouse Tracking:** A vanilla JavaScript event listener tracks the `clientX` and `clientY` coordinates of the user's mouse.
3. **Dynamic Masking:** These coordinates are passed to the CSS or directly to the SVG mask/clip-path. The mask creates a fully transparent circle at the exact cursor location, creating a "window" through the blurred overlay to the clear content below.

## Browser Support
This effect relies on modern SVG filter and CSS custom property support, which is widely available in all major modern browsers (Chrome, Firefox, Safari, Edge).
<img width="1481" height="870" alt="Screenshot 2026-03-03 at 8 22 58 PM" src="https://github.com/user-attachments/assets/c6487210-798e-4ce1-b817-ef2af69591af" />

