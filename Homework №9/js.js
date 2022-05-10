var timer = document.getElementById("timer"),
    alarms = document.getElementById("alarms"),
    date = new Date(),
    c = 0,
    timers = []
function time() {
    date = new Date()
    var hours = date.getHours(),
        minutes = date.getMinutes()
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    timer.innerHTML = hours + ":" + minutes
    if (timers.includes(timer.innerHTML)) {
        alert("Звонок")
        timers.splice(timers.indexOf(timer.innerHTML), 1)
        alarms.innerHTML = ""
        for (let i = 0; i < timers.length; i++) {
            alarms.innerHTML += timers[i] + "<br>"
        }

    }
    setTimeout(time, 1000)
}
time()
function setTimer() {
    var newtimer = document.getElementById("time").value
    if (c < 16 && !timers.includes(newtimer)) {
        alarms.innerHTML += newtimer + "<br>"
        timers.push(newtimer)
        c++
    }

}
