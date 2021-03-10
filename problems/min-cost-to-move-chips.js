/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    // let odds = 0;
    // let evens = 0;
    // for (let i = 0; i < position.length; i++) {
    //     if (position[i] % 2 === 0) {
    //         evens++;
    //     } else {
    //         odds++;
    //     }
    // }
    // return Math.min(evens, odds)
    
    const odds = position.reduce((acc, el) => acc += el % 2 === 0 ? 1 : 0, 0);
    return Math.min(odds, position.length - odds);
};