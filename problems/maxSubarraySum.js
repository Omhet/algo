const solution = (arr, k) => {
    if (arr.length === 0 || k > arr.length) return null;

    let res = -Infinity;
    let cur = 0;
    for (let first = 1 - k, last = 0; last < arr.length; first++, last++) {
        cur += arr[last];

        if (first < 0) continue;

        res = Math.max(cur, res);

        cur -= arr[first];
    }
    return res;
};

console.log(solution([2, 3], 3));
console.log(solution([1, 2, 3], 3));
console.log(solution([1, 2, 3], 2));
console.log(solution([1, 2, 3], 1));
console.log(solution([-1, 1, 2, 3, -2], 1));
console.log(solution([-1, 1, 2, 3, -2, 10], 2));
