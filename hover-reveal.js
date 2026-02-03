const body = document.querySelector("body");
const imageArea = document.querySelector(".background-image");
const circle = document.getElementById("circle");

imageArea.addEventListener("mousemove", (event) => {
  circle.setAttribute("r", 250);
  circle.setAttribute("cx", event.offsetX);
  circle.setAttribute("cy", event.offsetY);
});

imageArea.addEventListener("mouseleave", (event) => {
  circle.setAttribute("r", 0);
  circle.setAttribute("cx", imageArea.offsetWidth - 500);
  circle.setAttribute("cy", imageArea.offsetHeight - 500);
});
