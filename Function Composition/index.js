function compose(functions) {
    return function (x) {
        var reservedFns = functions.reverse();
        for (var _i = 0, reservedFns_1 = reservedFns; _i < reservedFns_1.length; _i++) {
            var fn = reservedFns_1[_i];
            x = fn(x);
        }
        return x;
    };
}
