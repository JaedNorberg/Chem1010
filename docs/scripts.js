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

setHoverAreaEvents();
