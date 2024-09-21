// Function to generate a random Hex color
function getRandomHexColor() {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById("colorButton");
const colorDisplay = document.getElementById("colorDisplay");
button.addEventListener("click", function() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
});
