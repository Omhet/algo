/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let start = 1;
    let end = 10e6;
    while (start <= end) {
        const divisor = Math.floor((start + end) / 2);
        const sum = nums.reduce((acc, n) => acc + Math.ceil(n / divisor), 0);
        if (sum > threshold) {
            start = divisor + 1;
        } else {
            end = divisor - 1;
        }
    }
    return start;
};