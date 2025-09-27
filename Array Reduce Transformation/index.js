function reduce(nums, fn, init) {
    var res = init;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        res = fn(res, n);
    }
    return res;
}
;
