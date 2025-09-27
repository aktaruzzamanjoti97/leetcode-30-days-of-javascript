function reduce(nums, fn, init) {
    var res = init;
    for (var i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
}
