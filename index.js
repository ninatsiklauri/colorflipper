const changeBtn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");

const colorArr = ["#FFA500", "#FFFF00", "#808000", "#FF00FF", "#00FF00", "#C0C0C0"];

changeBtn.addEventListener("click", () => {
    let randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    main.style.backgroundColor = randomColor;
    color.textContent = randomColor
})
