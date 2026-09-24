/* Rysuje koncentryczne półokręgi, których środkiem jest kropka w logo „MA.”.
   Pozycja kropki jest mierzona w przeglądarce, więc okręgi zawsze trafiają w nią dokładnie. */
function drawArcs(boxSel, dotSel, opt) {
  var MM = 96 / 25.4;
  var box = document.querySelector(boxSel);
  var dot = document.querySelector(dotSel);
  if (!box || !dot) return;
  var svg = box.querySelector("svg.arcs");
  var NS = "http://www.w3.org/2000/svg";

  function draw() {
    var b = box.getBoundingClientRect();
    var d = dot.getBoundingClientRect();
    var cx = d.left + d.width / 2 - b.left;
    var cy = d.top + d.height / 2 - b.top;
    svg.innerHTML = "";
    for (var i = 0; i < opt.count; i++) {
      var c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", cx);
      c.setAttribute("cy", cy);
      c.setAttribute("r", (opt.first + i * opt.step) * MM);
      if (opt.width) c.setAttribute("stroke-width", opt.width);
      svg.appendChild(c);
    }
  }

  draw();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  window.addEventListener("beforeprint", draw);
}
