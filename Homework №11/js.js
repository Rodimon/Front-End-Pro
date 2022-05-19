function a1() {
    var zzz = document.querySelectorAll(".zzz")
    for (let i = 0; i < zzz.length; i++) {
        zzz[i].innerHTML = i + 1
    }
}
function a2() {
    var www = document.body.children
    for (let i = 0; i < www.length; i++) {
        if (www[i].textContent.includes("www")) {
            www[i].style.color = "blue"
        }
    }
}
function a3() {
    var ul = document.createElement("ul"),
        zzz = document.querySelectorAll(".zzz")
    document.body.appendChild(ul)
    for (let i = 0; i < 3; i++) {
        var li = document.createElement("li")
        ul.appendChild(li)
        li.innerHTML = zzz[i].textContent
    }
}