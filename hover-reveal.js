const body = document.querySelector("body");
const imageArea = document.querySelector(".background-image");
const clearArea = document.getElementById("circle");

imageArea.addEventListener("mousemove", (event) => {
  const filterElem = body.querySelector("#filter-elem");
  body.removeChild(filterElem);
  let newFilter = createFilterElement(event.offsetX, event.offsetY);
  body.appendChild(newFilter);
});

function createFilterElement(x, y) {
  const ns = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("id", "filter-elem");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");

  const circle = document.createElementNS(ns, "circle");
  circle.setAttribute("id", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", "200");
  circle.setAttribute("fill", "white");

  const filter = document.createElementNS(ns, "filter");
  filter.setAttribute("id", "filter1");

  const blur1 = document.createElementNS(ns, "feGaussianBlur");
  blur1.setAttribute("stdDeviation", "10");
  blur1.setAttribute("in", "SourceGraphic");
  blur1.setAttribute("result", "BLUR");

  const feImage = document.createElementNS(ns, "feImage");
  feImage.setAttribute("href", "#circle");
  feImage.setAttribute("result", "CIRCLE");

  const blur2 = document.createElementNS(ns, "feGaussianBlur");
  blur2.setAttribute("stdDeviation", "25");
  blur2.setAttribute("in", "CIRCLE");
  blur2.setAttribute("result", "CIRCLE-BLUR");

  const matrix = document.createElementNS(ns, "feColorMatrix");
  matrix.setAttribute("in", "CIRCLE-BLUR");
  matrix.setAttribute("result", "CIRCLE-ALPHA");

  const comp2 = document.createElementNS(ns, "feComposite");
  comp2.setAttribute("operator", "in");
  comp2.setAttribute("in", "SourceGraphic");
  comp2.setAttribute("in2", "CIRCLE-ALPHA");
  comp2.setAttribute("result", "CLEAR-PART");

  const merge = document.createElementNS(ns, "feMerge");
  const node1 = document.createElementNS(ns, "feMergeNode");
  node1.setAttribute("in", "BLUR");
  const node2 = document.createElementNS(ns, "feMergeNode");
  node2.setAttribute("in", "CLEAR-PART");

  merge.appendChild(node1);
  merge.appendChild(node2);

  filter.appendChild(blur1);
  filter.appendChild(feImage);
  filter.appendChild(blur2);
  filter.appendChild(matrix);
  filter.appendChild(comp2);
  filter.appendChild(merge);

  svg.appendChild(circle);
  svg.appendChild(filter);

  return svg;
}
