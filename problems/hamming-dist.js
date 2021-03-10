/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let dist = 0;
    let n = 1;
    
    for (let i = 0; i < 31; i++) {
        const isOneX = x & n;
        const isOneY = y & n;
        if ((!isOneX && isOneY) || (isOneX && !isOneY)) {
            dist++;
        }
        n = n << 1;
    }
    
    return dist;
};