const baseImages = [
  "img/mario/bow.png",
  "img/mario/msmouz.png",
  "img/mario/vivian.png"
];

// Random index
const index = Math.floor(Math.random() * baseImages.length);

// Picture reference
const img = document.getElementById("marioImage");

// Initiale picture
img.src = baseImages[index];

// Hover-events
img.onmouseover = () => img.src = baseImages[index].replace(".png", "_anim.png");
img.onmouseout  = () => img.src = baseImages[index];