/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var reset=init;
    return {
        increment :function(){
            return ++init;
        },
        reset: function(){
            return init =reset;
        },
        decrement: function(){
            return --init;
        },
        
    }

    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */