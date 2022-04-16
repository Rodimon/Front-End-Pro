function a1(min) {
    if (min <= 15) {
        return 1
    }
    else if (min < 31 && min > 15) {
        return 2
    }
    else if (min < 46 && min > 30) {
        return 3
    }
    else if (min > 45) {
        return 4
    }
}
function a2(a) {
    if (a === "1") {
        return (true)
    }
    else {
        return (false)
    }
}
function a3(test) {
    if (test != true) {
        return "Верно"
    }
    else {
        return "Неверно"
    }
}
function b3(test) {
    test = test != true ? "Верно" : "Неверно";
    return test
}
function a4(a) {
    if (a > 0 && a < 5) {
        return "Верно"
    }
    else {
        return "Неверно"
    }
}
function a5(num) {
    if (num == "1") {
        result = "Зима"
    }
    if (num == "2") {
        result = "Весна"
    }
    if (num == "3") {
        result = "Лето"
    }
    if (num == "4") {
        result = "Осень"
    }
    return result
}