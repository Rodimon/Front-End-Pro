var field = ['a', 'b', 'c'],
    field2 = ['1', '2', '3'],
    last = document.querySelector(".last"),
    count = 1,
    button = document.querySelector("#restart")
function getId(argument) {
    return document.querySelector(argument).id
}
function Won(k, f) {
    if (document.querySelector("#p").innerHTML != "") {
        return
    }
    var c = 0,
        r = 0,
        d = 0
    for (var i = 0; i < field.length; i++) {
        if (getId(".a" + field2[i]) == getId(".b" + field2[i]) && getId(".a" + field2[i]) == getId(".c" + field2[i]) && getId(".a" + field2[i]) == k) {
            c = 3
        }
    }
    for (var i = 0; i < field.length; i++) {
        if (getId("." + field[i] + "1") == getId("." + field[i] + "2") && getId("." + field[i] + "1") == getId("." + field[i] + "3") && getId("." + field[i] + "1") == k) {
            r = 3
        }
    }
    if (getId(".a1") == getId(".b2") && getId(".a1") == getId(".c3") && getId(".a1") == k) {
        d = 3
    }
    if (getId(".a3") == getId(".b2") && getId(".a3") == getId(".c1") && getId(".a3") == k) {
        d = 3
    }
    if (c == 3 || r == 3 || d == 3) {
        document.querySelector("#p").innerHTML = f
        c = 0
        d = 0
        r = 0
    }
}
for (var y = 0; y < field.length; y++) {
    var div1 = document.createElement("div")
    div1.className = "d" + y
    last.appendChild(div1)
    for (var x = 0; x < field2.length; x++) {
        var div2 = document.createElement("div")
        div2.className = "div " + field[y] + field2[x]
        div1.appendChild(div2)
    }
}
document.addEventListener("click", function (e) {
    var target = e.target.closest(".div")
    if (!target) return;
    if (count % 2 == 0 && target.innerHTML == "") {
        target.innerHTML = "O"
        target.id = "O"
    }
    if (count % 2 != 0 && target.innerHTML == "") {
        target.innerHTML = "X"
        target.id = "X"
    }
    count++
    Won("X", "Первый игрок победил")
    Won("O", "Второй игрок победил")
})
button.addEventListener("click", function () {
    for (let i = 0; i < document.querySelectorAll(".div").length; i++) {
        var X = document.querySelectorAll(".div")[i]
        X.innerHTML = ""
        X.id = ""
        document.querySelector("#p").innerHTML = ""
    }
})