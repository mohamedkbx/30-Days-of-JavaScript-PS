/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    var counter = n
    return function () {
        return counter++

    };

};

let counter = createCounter(20);
counter();


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */