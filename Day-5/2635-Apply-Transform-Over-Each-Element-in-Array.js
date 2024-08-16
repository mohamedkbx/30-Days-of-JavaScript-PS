/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {

    const transformArray=[];

    arr.forEach((element,index)=>{
        transformArray[index] = fn(element,index)
    })

    return transformArray;

};