const colorInput = document.getElementById("colorInput");
const fontSizeInput = document.getElementById("fontSizeInput");
const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const titlesContainer = document.getElementById("titlesContainer");

generateBtn.addEventListener("click", () => {
    const color = colorInput.value;
    const fontSize = fontSizeInput.value;
    const text = textInput.value;

    if(!text)
    {
        alert("Please enter some text!");
        return;
    }

    const h1 = document.createElement("h1");
    h1.textContent=text;
    h1.style.color=color;
    h1.style.fontSize=fontSize;
    titlesContainer.appendChild(h1);
})