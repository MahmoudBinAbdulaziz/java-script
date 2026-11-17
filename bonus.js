// Bonus - Counter II (LeetCode 2665)
// Note: AI was used only to create this file with the problem title. The solution is my own work.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let res = init;
    let resObj = {
        increment: () => ++res,
        decrement: () => --res,
        reset: () => res = init
    }
    return resObj;

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */