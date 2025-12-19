const clickBtn = document.getElementById("clickBtn");
const colorText = document.getElementById("color");
const simple = document.getElementById("simple")
const hexback = document.getElementById("hex")

let simpleAndHex = 1

const simpleBttnClicked = () => {
    simpleAndHex = 0
}
const hexBttnClicked = () => {
    simpleAndHex = 1
}
const simpleColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const colorGenerator = () => {
    if (simpleAndHex === 1) {
        hexColorGenerator()
    } else {
        simpleColorGenerator()
    }
}

const simpleColorGenerator = () => {
    const randomColor = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }   
    const color = randomColor(simpleColors)
    colorChange(color)
}

const hexColorGenerator = () => {
    let result = '#'
    for (let i = 0; i < 6; i++) {
        result += hex[Math.floor(Math.random() * hex.length)];
    }
    colorChange(result)
}

const colorChange = (color) => {
    document.body.style.backgroundColor = color
    colorText.textContent = color
}


clickBtn.addEventListener("click", colorGenerator);
simple.addEventListener("click", simpleBttnClicked)
hexback.addEventListener("click", hexBttnClicked)