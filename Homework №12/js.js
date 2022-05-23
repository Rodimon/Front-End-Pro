var ships = ["a1", "a3", "a4", "b6", "c2", "c6", "d2", "e2", "f6", "f7", "f8", "h1", "h2", "h3", "h4"];
field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    field2 = ['1', '2', '3', '4', '5', '6', '7', '8'],
    body = document.body
for (var y = 0; y < field.length + 1; y++) {
    var div1 = document.createElement("div")
    body.appendChild(div1)
    for (let x = 0; x < field2.length + 1; x++) {
        var div2 = document.createElement("div")
        div2.className = "div2 " + field[y] + field2[x]
        div1.appendChild(div2)
        if (field[x] == undefined) {
            div2.className = "div3"
            var p = document.createElement("p")
            div2.appendChild(p)
            p.innerHTML = field[y]
            if (field2[y] == undefined && field[x] == undefined) {
                p.id = "context"
                p.innerHTML = ""
            }
        }
        if (field2[y] == undefined) {
            div2.className = "div3"
            var p = document.createElement("p")
            div2.appendChild(p)
            p.innerHTML = field2[x]
            if (field2[y] == undefined && field[x] == undefined) {
                p.id = "context"
                p.innerHTML = ""
            }
        }

    }
}
document.addEventListener("click", function (e) {
    var target = e.target.closest(".div2")
    if (!target) return;
    document.querySelector("#context").innerHTML = "Мимо"
    if (target.style.background == "black") {
        document.querySelector("#context").innerHTML = "Занято"
    }
    target.style.cssText = "background: black"
    for (let i = 0; i < ships.length; i++) {
        if (target.className == "div2 " + ships[i]) {
            target.style.cssText = "background: red"
            document.querySelector("#context").innerHTML = "Ранил"
        }
    }
})