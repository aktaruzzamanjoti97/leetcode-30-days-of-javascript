function map(arr, fn) {
    var result = [];
    for (var i in arr) {
        result.push(fn(arr[i], Number(i)));
    }
    return result;
}
