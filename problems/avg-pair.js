const solution = (arr, targetAvg) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;
      if (avg === targetAvg) return true;
      else if (avg > targetAvg) right--;
      else left++;
  }
  return false;
};

console.log(solution([1, 2, 3], 2.5));
console.log(solution([], 2.5));
