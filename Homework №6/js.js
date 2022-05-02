var arr = [{ name: 'Vasya', age: 24 }, { name: 'Petya', age: 12 }, { name: 'Fedya', age: 6 }, { name: 'Ann', age: 18 }, { name: 'Nastya', age: 40 }];
arr.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    }
    if (a.age < b.age) {
        return -1
    }
    return 0
})
/////////////
arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];
function filterFalse(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arr[i] = 0
        }
        if (isNaN(arr[i])) {
            arr[i] = 0
        }
        if (arr[i] === undefined) {
            arr[i] = 0
        }
        if (arr[i] === false) {
            arr[i] = 0
        }
        if (arr[i] === null) {
            arr[i] = 0
        }
        if (arr[i] === 0) {
            arr.splice(i, 1)
            i--
        }
    }
}
filterFalse(arr)
/////////
function find(arr, value) {
    var array = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            array.push(value)
        }
    }
    return array
}
/////////
function createMatrix(row, col) {
    var array = [], arr = []
    for (let i = 0; i < col; i++) {
        for (let i = 0; i < row; i++) {
            var random = Math.ceil(Math.random() * 100)
            arr.push(random)
        }
        array.push(arr)
        arr = []
    }
    return array
}