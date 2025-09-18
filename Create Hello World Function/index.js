var createHelloWorld = function () {
    return function () { return 'Hello World'; };
};
var f = createHelloWorld();
f(); // "Hello World"
