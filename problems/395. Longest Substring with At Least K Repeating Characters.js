var longestSubstring = function(s, k) {
    const maxUnique = new Set(s).size;
    let res = 0;
    for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
        let map = {};
        let start = 0;
        let end = 0;
        let unique = 0;
        let count = 0;
        while (end < s.length) {
            if (unique <= curUnique) {
                const char = s[end];
                map[char] = map[char] || 0;
                if (map[char] === 0) unique++;
                map[char]++;
                if (map[char] === k) count++;
                end++;
            } else {
                const char = s[start];
                map[char] = map[char] || 0;
                if (map[char] === k) count--;
                map[char]--;
                if (map[char] === 0) unique--;
                start++;
            }
            if (unique === curUnique && unique === count) {
                res = Math.max(end - start, res)
            }
        }
    }
    
    return res;
};

console.log(longestSubstring('aaabb', 3));
  