/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    const prev = countAndSay(n - 1);
    const matches = prev.match(/(.)\1*/g);
    return matches.map(match => match.length + match[0]).join('');
    
        
    // const prev = countAndSay(n - 1);
    // let res = '';
    // let count = 0;
    // for (let i = 0; i < prev.length; i++) {
    //     count++;
    //     if (prev[i + 1] !== prev[i]) {
    //         res += count + prev[i];
    //         count = 0;
    //     }
    // }
    // return res;
};