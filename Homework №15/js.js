var image = document.createElement("img"),
    image2 = document.createElement("img"),
    body = document.body,
    y = 0,
    x = 0,
    o = 0,
    y2 = 0,
    x2 = 0,
    arr = [],
    min = 0,
    sec = 0,
    p = document.createElement("p")
body.appendChild(p)
p.innerHTML = "00:00"
body.appendChild(image)
body.appendChild(image2)
image.src = "./img/1.png"
image2.src = "./img/2.png"
image2.style.width = "100px"
image2.style.height = "100px"
image2.style.top = "400px"
image2.style.left = "400px"
image.style.top = "500px"
image.style.left = "1000px"
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
body.addEventListener("mousemove", function (e) {
    x = e.clientX
    y = e.clientY
    if (x > window.innerWidth - image2.width + 50 || y > window.innerHeight - image2.height + 50) return
    if (o == 0)
        arr.push(x - 50, y - 50)
    var target = e.target.closest("div")
    if (target) {
        o++
    } else {
        o = 0
    }
    if (o == 0) {
        image2.style.top = y - 50 + "px"
        image2.style.left = x - 50 + "px"
    }
    setTimeout(function () {
        y2 = arr[1] - 50
        x2 = arr[0] - 50
        if (arr[1] > window.innerHeight - image.height || arr[0] > window.innerWidth - image.width) {
            arr[1] -= 100
            arr[0] -= 100
        }
        image.style.top = arr[1] + "px"
        image.style.left = arr[0] + "px"
        arr.shift()
        arr.shift()

    }, 2000)
    if (y >= y2 && y2 + image.height >= y && x >= x2 && x2 + image.height >= x || image.style.top == image2.style.top && image.style.left == image2.style.left) {
        document.querySelector(".end").style.visibility = "visible"
        image.style.visibility = "hidden"
        image2.style.visibility = "hidden"
        for (var i = 1; i < document.querySelectorAll("div").length; i++) {
            document.querySelectorAll("div")[i].style.visibility = "hidden"
        }
    }
})

setInterval(function () {
    if (document.querySelector(".end").style.visibility == "visible") return
    var div = body.appendChild(document.createElement("div")),
        width = getRandom(50, 150),
        height = getRandom(50, 150),
        top = getRandom(0, window.innerHeight - height),
        left = getRandom(0, window.innerWidth - width)
    div.style.width = width + "px"
    div.style.height = height + "px"
    div.style.top = top + "px"
    div.style.left = left + "px"
}, 5000)
setInterval(function () {
    if (document.querySelector(".end").style.visibility == "visible") return
    sec++
    if (sec == 60) {
        sec = 0
        min++
    }
    if (sec < 10) {
        p.innerHTM0L = min + ":" + "0" + sec
        if (min < 10) {
            p.innerHTML = "0" + min + ":" + "0" + sec
            return
        }
    } else {
        if (min < 10) {
            p.innerHTML = "0" + min + ":" + sec
            return
        }
        p.innerHTML = min + ":" + sec
    }
}, 1000)
