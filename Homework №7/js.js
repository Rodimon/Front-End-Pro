var array = [2, 3, 4, 5, 6, 7],
    result = 0,
    i = 0
function toSum(arr) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}
function toSum2(arr) {
    if (arr[i] !== undefined) {
        result += arr[i]
        i++
        toSum2(arr)
    }
    if (arr[i] === undefined) {
        return result
    }
}
////////////
function Sum(start, end, step) {
    var result = 0
    if (end < step) {
        return 0
    }
    for (let i = start; i <= end; i += step) {
        result += i
    }
    return result
}
i = 0
result = 0
function Sum2(start, end, step) {
    i = start
    if (result < end) {
        i += step
        result += i
        Sum2(i, end, step)
    } if (result >= end) {
        return result
        result = 0
        i = 0
    }
}
///////////