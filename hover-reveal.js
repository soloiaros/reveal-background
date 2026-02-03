const body = document.querySelector("body");
const imageArea = document.querySelector(".background-image");
const circle = document.getElementById("circle");

imageArea.addEventListener("mousemove", (event) => {
  circle.setAttribute("cx", event.offsetX);
  circle.setAttribute("cy", event.offsetY);
});
