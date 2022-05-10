function makePassword(password) {
    return function (str) {
        return (str === password);
    };
}
//////////
function shuffle() {
    var already_used = [];
    return function () {
        if (already_used.length == 100) {
            already_used = []
        }
        var num = Math.floor(Math.random() * 100 + 1);
        while (already_used.includes(num)) {
            num = Math.floor(Math.random() * 100 + 1);
        }
        already_used.push(num);
        return num
    }
}
///////