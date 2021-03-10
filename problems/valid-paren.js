/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = new Set(['(', '[', '{']);
    const close = new Map([[')', '('], [']', '['], ['}', '{']]);
    
    const stack = [];
    for (const ch of s) {
        const isOpen = open.has(ch);
        const isClose = close.has(ch);
        
        if (isOpen) {
            stack.push(ch);
        } else if (isClose) {
            if (stack.length === 0) {
                return false;
            }
            const openBr = stack.pop();
            if (close.get(ch) !== openBr) {
                return false;
            }
        }
    }
    
    return stack.length > 0 ? false : true;
};