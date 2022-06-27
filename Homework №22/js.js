const buttons = document.querySelectorAll("button"),
    winner = document.querySelector(".winner"),
    fight = document.querySelector(".fight")
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
buttons.forEach(el => {
    el.addEventListener("click", function () {
        let num = random(1, 4),
            You = 0,
            Enemy = 0
        if (num == 1) Enemy = "Камень"
        if (num == 2) Enemy = "Ножницы"
        if (num == 3) Enemy = "Бумага"
        if (el.id == 1) You = "Камень"
        if (el.id == 2) You = "Ножницы"
        if (el.id == 3) You = "Бумага"
        fight.innerHTML = `${You} vs ${Enemy}`
        if (num - el.id == 1 || num - el.id == -2) {
            winner.innerHTML = "Вы выиграли"
        }
        if (num - el.id == -1 || num - el.id == 2) {
            winner.innerHTML = "Оппонент выиграл"
        }
        if (num - el.id == 0) {
            winner.innerHTML = "Ничья"
        } console.log(num)
    })

})