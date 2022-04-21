function isEqual(a1, a2) {
    return a1 == a2
}
function isBigger(a1, a2) {
    return a1 > a2
}
function a1() {
    for (; ;) {
        var a1 = +prompt("Введите первое число"),
            a2 = +prompt("Введите второе число")
        if (isEqual(a1, a2)) {
            alert("Числа равны")
            break;
        }
        if (isBigger(a1, a2)) {
            alert("Первое число больше")
            break;
        }
        if (isBigger(a2, a1)) {
            alert("Второе число больше")
            break;
        }
        if (isNaN(a1)) {
            alert("Первый ввод не число")
            break;
        }
        if (isNaN(a2)) {
            alert("Второй ввод не число")
            break;
        }
    }
}
function a2() {
    var floor = +prompt("Этажность (1-25)"),
        entrance = +prompt("Число подъездов (1-10)"),
        flat1 = +prompt("Количество квартир на лестничной площадке (1-20)"),
        flat2 = +prompt("Номер квартиры"),
        entrance2 = Math.ceil(flat2 / (floor * flat1))
    if (isBigger(entrance2, entrance)) {
        alert("Нет такой квартиры")
    } else {
        alert("Номер подъезда: " + entrance2)
    }
}
function a3(a1, a2) {
    if (a1 % 2 == 0 && a2 % 2 == 0) {
        return a1 * a2
    }
    else if (a1 % 2 == 1 && a2 % 2 == 1) {
        return a1 + a2
    }
    else {
        if (a1 % 2 == 1) {
            return a1
        } else {
            return a2
        }
    }
}
function a4() {
    var x1 = +prompt("X первой точки"),
        y1 = +prompt("Y первой точки"),
        x2 = +prompt("X второй точки"),
        y2 = +prompt("Y второй точки"),
        x3 = +prompt("X третьей точки"),
        y3 = +prompt("Y третьей точки"),
        x4 = +prompt("X четвёртой точки"),
        y4 = +prompt("Y четвёртой точки")
    if (Math.abs(x2 - x1) != Math.abs(x3 - x4) && Math.abs(y2 - y1) != Math.abs(y4 - y3) || Math.abs(x1 + x3) != Math.abs(x2 + x4) && Math.abs(y1 + y3) != Math.abs(y2 + y4)) {
        alert("Это не прямоугольник")
    } else {
        alert("Это прямоугольник")
    }
}
function getSequence(start = 0, step = 1) {
    return function () {
        return start += step;
    }
}