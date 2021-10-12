// misc functions
function getId(element) {
  return element.getAttribute("data-id");
}

// tooltip events
function showTooltip(e) {
  let elem = e.target;
  elem.classList.add("show");
}
function hideTooltip(e) {
  let elem = e.target;
  elem.classList.remove("show");
}

// hover events
function setHoverAreaEvents() {
  // Circle Tool-Tips Hover
  let hoverArea = document.querySelectorAll(".hoverArea");
  hoverArea.forEach((elem) => {
    elem.addEventListener("mouseover", (e) => {
      showTooltip(e);
    });
    elem.addEventListener("mouseout", (e) => {
      hideTooltip(e);
    });
  });
}

//circle text for hover popup
function circularText(obj) {
  let classIndex = document.getElementsByClassName("circTxt")[obj.idx];
  let txt = classIndex.getAttribute("data-id").split("");
  let deg = obj.deg / txt.length;
  let origin = obj.origin;

  txt.forEach((ea) => {
    ea = `<p style='height:${obj.radius}px;
    position: absolute;
    transform:rotate(${origin}deg);
    transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

for (let i = 0; i < 3; i++) {
  circularText({
    idx: i,
    radius: 120,
    deg: 80,
    origin: -40,
  });
}

setHoverAreaEvents();
