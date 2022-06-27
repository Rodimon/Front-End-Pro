for (let i = 0; i < window.innerWidth / 100; i++) {
    let cell = document.createElement("div"),
        game = document.querySelector(".game")
    game.appendChild(cell)
    cell.className = "cell"
}
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const button = document.querySelector(".button"),
    fishka = document.querySelector(".fishka")
let number = 0
button.addEventListener("click", () => {
    let num = getRandom(1, 6),
        cubes = document.querySelectorAll(".cube")
    cubes.forEach(el => el.style.visibility = "hidden")
    cubes[num - 1].style.visibility = "visible"
    number += num
    fishka.style.left = 30 + number * 105 + "px"
})