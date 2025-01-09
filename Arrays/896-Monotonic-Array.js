/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function (nums) {
    let first = nums[0];
    let last = nums[nums.length - 1];

    if (first === last) {
        // Check if all elements are the same
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] !== nums[i]) return false;
        }
    } else if (first < last) {
        // Check if array is monotone increasing
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] < nums[i]) return false;
        }
    } else {
        // Check if array is monotone decreasing
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] > nums[i]) return false;
        }
    }

    return true;
};


