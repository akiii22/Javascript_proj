const conatinerEl = document.querySelector(".container");
for (let index = 0; index < 50; index++) {
  const colorCreateEl = document.createElement("div");
  colorCreateEl.classList.add("color-container");
  conatinerEl.appendChild(colorCreateEl)
}

const colorContainerEls = document.querySelectorAll(".color-container")


function generatedColors(){
  colorContainerEls.forEach((colorContainerEl) => {
   const newColorCode = randomColor();
   colorContainerEl.style.backgroundColor = "#" + newColorCode;
   colorContainerEl.textContent = "#" + newColorCode
  });
}
generatedColors();

function randomColor() {
  const chars = "0123456789abcdef";
  const colorLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorLength; index++) {
    const randomNumbers = Math.floor(Math.random()* chars.length);
    colorCode += chars.substring(randomNumbers, randomNumbers + 1);
  }
  return colorCode
}