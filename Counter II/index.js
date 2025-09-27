function createCounter(init) {
    var count = init;
    var increment = function () { return ++count; };
    var decrement = function () { return --count; };
    var reset = function () { return (count = init); };
    return {
        increment: increment,
        decrement: decrement,
        reset: reset,
    };
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
