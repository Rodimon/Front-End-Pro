var action, result = 0, quantity,
    operands = []
function question1() {
    action = prompt("+ - / *")
    switch (action) {
        case "+":
            break;
        case "-":
            break;
        case "/":
            break;
        case "*":
            break;
        default:
            question1()
    }
};
function question2() {
    quantity = +prompt("Сколько операндов вы хотите использовать?")
    if (quantity < 1 || isNaN(quantity)) {
        question2()
    }
}
function question3() {
    for (var i = 0; i < quantity; i++) {
        operands.push(+prompt("Операнд №" + (i + 1)))
        while (isNaN(operands[i])) {
            operands.pop()
            operands.push(+prompt("Операнд №" + (i + 1)))
        }
        if (i == 0) {
            result = operands[i]
        } else {
            switch (action) {
                case "+":
                    result += operands[i]
                    break;
                case "-":
                    result -= operands[i]
                    break;
                case "/":
                    result /= operands[i]
                    break;
                case "*":
                    result *= operands[i]
                    break;
            }
        }
    }
}
question1();
question2();
question3();
alert(result)
