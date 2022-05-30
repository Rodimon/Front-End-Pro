var step = 10;
document.addEventListener('keydown', function (e) {
    var tank = document.querySelector('.tank'),
        fire = document.querySelector(".fire"),
        wtank = tank.getBoundingClientRect().width,
        htank = tank.getBoundingClientRect().height,
        ltank = tank.getBoundingClientRect().left,
        ttank = tank.getBoundingClientRect().top
    if (e.code === "KeyD") {
        tank.style.transform = 'rotate(180deg)';
        fire.style.transform = 'rotate(90deg)'
        if (ltank >= window.innerWidth - wtank - step) {
            tank.style.left = window.innerWidth - wtank + 'px'
        }
        else {
            tank.style.left = ltank + step + 'px'
        }
        fire.style.left = wtank + 10 + ltank + "px"
        fire.style.top = 70 + ttank + "px"
    } else if (e.code === "KeyA") {
        tank.style.transform = 'rotate(0deg)';
        fire.style.transform = 'rotate(-90deg)'
        if (ltank < step) {
            tank.style.left = 0 + 'px'
        }
        else {
            tank.style.left = ltank - step + 'px'
        }
        fire.style.left = ltank - 110 + "px"
        fire.style.top = 73 + ttank + "px"
    } else if (e.code === "KeyS") {
        if (ttank >= window.innerHeight - htank - step) {
            tank.style.top = window.innerHeight - wtank - + 'px'
        }
        else {
            tank.style.top = ttank + step + 'px'
        }
        fire.style.top = 70 + ttank + "px"
    } else if (e.code === "KeyW") {
        if (ttank < step) {
            tank.style.top = 0 + 'px'
        }
        else {
            tank.style.top = ttank - step + 'px'
        }
        fire.style.top = 70 + ttank + "px"
    } else if (e.code === "Space") {
        fire.style.visibility = "visible"
        setTimeout(function () { fire.style.visibility = "hidden" }, 500)
    }
})