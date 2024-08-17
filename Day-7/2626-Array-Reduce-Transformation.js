/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let reducedArr = init
    nums.forEach((num) =>
        nums.length === 0 ? reducedArr
        :reducedArr = fn(reducedArr, num)
    
   )
    return reducedArr;
};