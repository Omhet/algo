// Not ready
const solution = (arr, k) => {
    if (arr.length === 0) return 0;

    let res = arr.length;
    let sum = arr[0];
    for (let start = 0, end = 0; start < arr.length; ) {
        if (sum === k) {
            res = Math.min(res, end + 1 - start);
            sum -= arr[start];
            start++;
            if (end < arr.length - 1) end++;
            sum += arr[end];
        } else if (sum > k) {
            res = Math.min(res, end + 1 - start);
            sum -= arr[start];
            start++;
        } else {
            if (end < arr.length - 1) end++;
            sum += arr[end];
        }
    }
    return res;
};

console.log(solution([2, 3, 1, 2, 4, 3], 7));
