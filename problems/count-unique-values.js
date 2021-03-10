const solution = (arr) => {
    if (arr.length < 2) return arr.length;

    let res = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            res++;
        }
    }
    return res;
};

console.log(solution([1, 2, 2, 3, 3, 4, 5, 6, 6, 7]));
console.log(solution([1, 2]));
console.log(solution([1, 2, 2, 2, 2, 2, 2, 3]));
console.log(solution([1, 2, 2, 2, 2, 2, 2, 3, 3, 99]));
console.log(solution([1]));
console.log(solution([]));
