const colorDisplay = document.getElementById('color-display');
const generateBtn = document.getElementById('generate-btn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
    // Optional: Display the color code
    // colorDisplay.textContent = randomColor;
});

// Set initial color on page load
window.addEventListener('load', () => {
    const initialColor = getRandomColor();
    colorDisplay.style.backgroundColor = initialColor;
});
