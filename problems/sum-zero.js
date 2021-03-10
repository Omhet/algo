const solution = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};

console.log(solution([1, 2, 3]));
console.log(solution([-3, 1, 2, 3]));
console.log(solution([-3, 1, 2, 3, 4]));
console.log(solution([]));
console.log(solution([1]));
console.log(solution([-1, 0, 1, 2, 3, 4, 5]));
console.log(solution([-1, -2, -3, 1, 2, 5, 60]));
